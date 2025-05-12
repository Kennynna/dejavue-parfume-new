import { cn } from '@/lib/utils'
import React from 'react'

export const WhiteShadowEffect = ({className }: { className?: string }) => {
  return <div className={cn('white-circle-shadow ', className)}></div>
}
