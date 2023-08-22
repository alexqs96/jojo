import Papa from "papaparse";

export async function getSheets<T>(url: string): Promise<T[]> {
  try {
    const file = await fetch(url, { cache: "no-store" }).then(res => res.text())

    return new Promise<T[]>((resolve, reject) => {
      Papa.parse<T>(file, {
        header: true,
        dynamicTyping: true,
        complete: (result) => resolve(result.data),
        error: reject,
      });
    });
  } catch (error) {
    console.error("CSV Parsing error:", error);
    return [];
  }
}