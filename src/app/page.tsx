'use client'

import { Button } from "@/components/overrides/button"
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Button onClick={() => router.push('/auth/login')}>Login</Button>
    </div>
  )
}

