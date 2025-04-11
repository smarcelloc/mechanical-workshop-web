import * as React from 'react'

import { Input, InputProps } from '@/components/overrides/input'

export default function Email({ ...props }: InputProps) {
  return (
    <Input
      type="email"
      placeholder="nome@exemplo.com"
      {...props} />
  )
}

