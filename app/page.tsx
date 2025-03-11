'use client'

import { useState } from "react"




export default function Home() {
  const [topNumber, setTopNumber] = useState(0)
  const topNumbers: number[] = []

    return (
      <>
     <button onClick={() => setTopNumber(topNumber + 1)}>Add Top Number</button>
     {topNumbers.push(topNumber)}
      </>
 )
}