'use client'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'

export function useAppLoading(): boolean {
	const activeFetches = useIsFetching()
	const activeMutations = useIsMutating()
	return activeFetches + activeMutations > 0
}
