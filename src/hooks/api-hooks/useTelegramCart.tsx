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
		enabled: !!userId, // Запрос выполняется только если userId существует
		staleTime: 0

	})
}

// Хук для добавления товара в корзину
export const useAddItemToCart = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			userId,
			parfumeId,
			quantity,
		}: {
			userId: number
			parfumeId: number
			quantity?: number
		}) => cartApi.addItemToCart(userId, parfumeId, quantity),
		onSuccess: (_, variables) => {
			// Инвалидируем кэш корзины для обновления данных
			queryClient.invalidateQueries({
				queryKey: cartKeys.byUser(variables.userId),
			})
		},
	})
}

// Хук для обновления количества товара
export const useUpdateCartItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({
			userId,
			parfumeId,
			quantity,
		}: {
			userId: number
			parfumeId: number
			quantity: number
		}) => cartApi.updateCartItem(userId, parfumeId, quantity),
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({
				queryKey: cartKeys.byUser(variables.userId),
			})
		},
	})
}


export const useRemoveFromCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
		mutationFn: ({ userId, itemId }: { userId: number; itemId: number }) =>
			cartApi.removeItemFromCart(userId, itemId),
		onSuccess: (_, variables) => {
			// Инвалидируем кэш корзины для обновления данных
			queryClient.invalidateQueries({
				queryKey: cartKeys.byUser(variables.userId),
			})
		},
		onError: error => {
			console.error('Ошибка при удалении товара из корзины:', error)
			// Здесь можно добавить уведомление пользователю об ошибке
		},
	})
}
