import SeasonDetail from "@/components/SeasonDetail"
import { Suspense } from "react"

export default function page({params}: {params: {season: string}}) {
  return (
    <>
    <Suspense fallback={<p>Cargando Temporada...</p>}>
      <SeasonDetail season={params.season} />
    </Suspense>
    </>
  )
}