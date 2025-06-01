import { cartApi } from '@/lib/api/cart'
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
		staleTime: 1000 * 60 * 5, // 5 минут
		gcTime: 1000 * 60 * 10, // 10 минут (ранее cacheTime)
	})
}

// Хук для добавления товара в корзину
export const useAddToCart = () => {
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
		}) => cartApi.addToCart(userId, parfumeId, quantity),
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

// // Хук для удаления товара из корзины
// export const useRemoveFromCart = () => {
// 	const queryClient = useQueryClient()

// 	return useMutation({
// 		mutationFn: ({
// 			userId,
// 			parfumeId,
// 		}: {
// 			userId: number
// 			parfumeId: number
// 		}) => cartApi.removeFromCart(userId, parfumeId),
// 		onSuccess: (_, variables) => {
// 			queryClient.invalidateQueries({
// 				queryKey: cartKeys.byUser(variables.userId),
// 			})
// 		},
// 	})
// }
