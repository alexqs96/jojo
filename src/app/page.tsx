import Seasons from "@/components/Seasons"
import { Suspense } from "react"

export default async function Home() {

  const data = await fetch("https://jojoapi.vercel.app/api/home").then(res => res.json())

  console.log(data?.message);
  

  return (
    <>
    <Suspense fallback={<p>Cargando Animes...</p>}>
      <Seasons />
    </Suspense>
    </>
  )
}
