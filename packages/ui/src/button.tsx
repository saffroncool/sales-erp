import React from 'react'

export function Button({ children, ...props }: any) {
  return (
    <button className="px-3 py-1 bg-blue-600 text-white rounded" {...props}>
      {children}
    </button>
  )
}
