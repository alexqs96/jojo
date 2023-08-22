import Seasons from "@/components/Seasons"
import { Suspense } from "react"

export default async function Home() {
  return (
    <>
    <Suspense fallback={<p>Cargando Animes...</p>}>
      <Seasons />
    </Suspense>
    </>
  )
}
