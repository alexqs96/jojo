import { getSheets } from "@/lib/sheets"
import { MangaType } from "@/lib/types"
import { Children } from "react"

export default async function ViewManga({part} : {part: string}){
  const res = await getSheets<MangaType>(process.env.SHEETS_MANGA as string)

  const data = res? res.find(e => e.slug === part) : null

  if (!data) {
    return <p>Oops este manga no esta disponible por el momento</p>
  }

  return (
    <div className="flex flex-col reveal">
    {
      Children.toArray(
      (data.link).split(",").map((e: string) => (
        <a className="wordbreak" href={e}>{e}</a>
      ))
      )
    }
    </div>
  )
}