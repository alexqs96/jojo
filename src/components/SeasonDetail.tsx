import { getSheets } from "@/lib/sheets";
import Image from "next/image";
import Episodes from "./Episodes";
import { Suspense } from "react";
import { SeasonsType } from "@/lib/types";

export default async function SeasonDetail({season}: {season: string}){

  const res = await getSheets<SeasonsType>(process.env.SHEETS_MANGA as string)

  const data = res? res.find(e => e.slug === season) : null

  if (!data) {
    return <p>Oops esta temporada no existe</p>
  }

  return(
    <div className="reveal">
    <Image
      className="object-contain"
      src={"/season/"+data.slug+".jpg"}
      width={200}
      height={400}
      alt="Portada"
      unoptimized
      priority
    />
    <Suspense fallback={<p>Cargando Episodios...</p>}>
      <Episodes season={season} />
    </Suspense>
    </div>
  )
}