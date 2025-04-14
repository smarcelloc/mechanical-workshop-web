import { Input } from '@/components'

export default function InputEmail({ ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      type="email"
      placeholder="nome@exemplo.com"
      {...props} />
  )
}

