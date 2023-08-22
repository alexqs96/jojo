import ListMangas from "@/components/ListMangas";
import { Suspense } from "react";

export default function Mangas(){
  return (
    <>
    <Suspense fallback={<p>Cargando Mangas...</p>}>
      <ListMangas />
    </Suspense>
    </>
  )
}