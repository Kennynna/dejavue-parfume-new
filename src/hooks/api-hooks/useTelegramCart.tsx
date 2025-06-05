import { cartApi } from '@/lib/api-features/cart'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// Ключи для кэширования
export const cartKeys = {
	all: ['cart'] as const,
	byUser: (userId: number) => [...cartKeys.all, userId] as const,
}

// Хук для получения корзины
export const useCart = (userId: number) => {
	return useQuery({
		queryKey: cartKeys.byUser(userId),
		queryFn: () => cartApi.getCart(userId),
		enabled: !!userId,
		staleTime: 0,
	})
}

// Хук для добавления товара в корзину
export const useAddItemToCart = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			userId,
			parfumeId,
			volumeId,
			quantity,
		}: {
			userId: number
			parfumeId: number
			volumeId: number
			quantity?: number
		}) => cartApi.addToCart({ userId, parfumeId, volumeId, quantity }),
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({
				queryKey: cartKeys.byUser(variables.userId),
			})
		},
	})
}

// Хук для увеличения количества
export const useIncrementQuantity = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			userId,
			parfumeId,
			volumeId,
		}: {
			userId: number
			parfumeId: number
			volumeId: number
		}) => cartApi.incrementQuantity(userId, parfumeId, volumeId),
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({
				queryKey: cartKeys.byUser(variables.userId),
			})
		},
	})
}

// Хук для уменьшения количества
export const useDecrementQuantity = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			userId,
			parfumeId,
			volumeId,
		}: {
			userId: number
			parfumeId: number
			volumeId: number
		}) => cartApi.decrementQuantity(userId, parfumeId, volumeId),
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({
				queryKey: cartKeys.byUser(variables.userId),
			})
		},
	})
}

// Хук для удаления товара из корзины
export const useRemoveFromCart = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			userId,
			itemId,
		}: {
			userId: number
			itemId: number
		}) => cartApi.removeFromCart(userId, itemId),
		onMutate: async ({ userId, itemId }) => {
			// Cancel any outgoing refetches
			await queryClient.cancelQueries({ queryKey: cartKeys.byUser(userId) })

			// Snapshot the previous value
			const previousCart = queryClient.getQueryData(cartKeys.byUser(userId))

			// Optimistically update the cart by removing the item
			queryClient.setQueryData(cartKeys.byUser(userId), (old: any) => ({
				...old,
				items: old.items.filter((item: any) => item.id !== itemId)
			}))

			// Return a context object with the snapshotted value
			return { previousCart }
		},

	})
}

// Хук для очистки корзины
export const useClearCart = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (userId: number) => cartApi.clearCart(userId),
		onSuccess: (_, userId) => {
			queryClient.invalidateQueries({
				queryKey: cartKeys.byUser(userId),
			})
		},
	})
}
