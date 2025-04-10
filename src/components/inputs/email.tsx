import * as React from "react"

import { Input, InputProps } from "@/components/ui/input"

export default function Email({ ...props }: InputProps) {
  return (
    <Input
      type="email"
      placeholder="nome@exemplo.com"
      {...props} />
  )
}

