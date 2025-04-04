import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import HomeContent from "./home-content"

export default function Home() {
  return (
    <Suspense fallback={<div>Loading home page...</div>}>
      <ClientOnly>
        <HomeContent />
      </ClientOnly>
    </Suspense>
  )
}

