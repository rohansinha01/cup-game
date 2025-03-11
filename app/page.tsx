/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from "react"

const topNumbers: number[] = [1,2,3,4]
const bottomNumbers: number[] = [1,2,3,4]

export default function Home() {
  const [topNumber, setTopNumber] = useState(topNumbers)

  return (
    <>
      <div className="grid h-48 place-content-center text-7xl ">
        {topNumber}  
      </div>
      <div className="grid h-48 place-content-center text-7xl">
        {bottomNumbers}
      </div>
      
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={() => setTopNumber(topNumber.map(num => num + 1))} className="grid place-self-center text-7xl bg-blue-500 hover:bg-blue-700 p-4 rounded-2xl" >
        Add To Top Row
      </button>
      <div>{[topNumbers]}{topNumber}</div>
    </>
  );
}