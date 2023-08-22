import { getSheets } from "@/lib/sheets"
import { SeasonsType } from "@/lib/types"
import { Children } from "react"

export default async function Seasons(){
  const data = await getSheets<SeasonsType>(process.env.SHEETS_SEASONS as string)

  if (!data) {
    return <p>Oops no hay temporadas por el momento</p>
  }


  return (
    <div className="flex flex-col reveal">
    {
      Children.toArray(
        data.map((e) => (
          <a
            className="hover:font-medium"
            href={(e.slug).replace("com/v/", "com/e/")}
          >
            {e.name}: {e.episodes} episodios
          </a>
        ))
      )
    }
    </div>
  )
}