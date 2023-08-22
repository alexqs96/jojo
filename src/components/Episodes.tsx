import { getSheets } from "@/lib/sheets"
import { EpisodesType } from "@/lib/types"
import { Children } from "react"

export default async function Episodes({season} : {season: string}){
  const res = await getSheets<EpisodesType>(process.env.SHEETS_EPISODES as string)

  const data = res? res.filter(e => e.season === season) : []

  return (
    <div className="flex flex-col reveal">
    {
      data.length?
      Children.toArray(
        data.map((e) => (
          <a
            className="hover:font-medium"
            href={(e.link).replace("com/v/", "com/e/")}
          >
            Episode {e.episode}
          </a>
        ))
      )
      :
      <p>Oops no se han cargado episodios todavia</p>
    }
    </div>
  )
}