'use client'

import { Suspense } from 'react'

interface PreviewSuspenseProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function PreviewSuspense({ children, fallback }: PreviewSuspenseProps) {
  return (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      {children}
    </Suspense>
  )
}
