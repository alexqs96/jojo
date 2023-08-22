import { getSheets } from "@/lib/sheets"
import { MangasType } from "@/lib/types";
import Link from "next/link";
import { Children } from "react"

export default async function ListMangas(){
  const data = await getSheets<MangasType>(process.env.SHEETS_MANGAS as string)

  if (!data) {
    return <p>Oops no hay mangas por el momento</p>
  }


  return (
    <div className="flex flex-col reveal">
    {
      Children.toArray(
        data.map((e) => (
          <Link
            className="hover:font-medium"
            href={"/mangas/"+e.slug}
          >
            {e.name}
          </Link>
        ))
      )
    }
    </div>
  )
}