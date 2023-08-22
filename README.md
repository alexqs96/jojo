# Jojos
## Se uso Google Sheets como base de datos, se exporto los datos en un archivo CSV y se parseo a JSON usando papaparse para su uso en la app.

## Desarrollado con

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Microsoft Excel](https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white)

## .env 
```
SHEETS_SEASONS=
SHEETS_EPISODES=
SHEETS_MANGA=
SHEETS_MANGAS=
```

## Google Sheet Fields
### Seasons:
| season | name | episodes | slug |
|--- | --- | ---| ---|

### Episodes:
| episode | link | season |
|--- | --- | ---|

### Manga:
| part | name | slug |
|--- | --- | ---|

### Mangas:
| part | link | slug | title | year | lang | size | color | info |
|--- | --- | ---| ---| ---| ---| ---| ---| ---|


## Iniciar Proyecto

```sh
cd jojo
npm i
npm run dev
```