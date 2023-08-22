import Seasons from "@/components/Seasons"
import { Suspense } from "react"

export default async function Home() {

  const data = await fetch("https://jojoapi.vercel.app/api/home").then(res => res.json())

  console.log(data?.message);
  

  return (
    <>
    <p>{data?.message}</p>
    <Suspense fallback={<p>Cargando Animes...</p>}>
      <Seasons />
    </Suspense>
    </>
  )
}
