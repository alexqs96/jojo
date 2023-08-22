import ViewManga from "@/components/ViewManga";
import { Suspense } from "react";

export default function Manga({params}: {params: {part: string}}){
  return (
    <>
    <Suspense fallback={<p>Cargando...</p>}>
      <ViewManga part={params.part} />
    </Suspense>
    </>
  )
}