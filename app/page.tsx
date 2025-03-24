/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from "react"

const topRow: string[] = ["red","blue","green"]
const bottomRow: string[] = ["red","blue","green"]


export default function Home() {
 const checkNumbers = () => {
  if(topRow === bottomRow) {
  return <p>All set</p>
  
}
}

  return (
    <>
    <h1>{topRow.map((color, index) => <span key={index}>{color} </span>)}</h1>
    <h1>{bottomRow.map((color, index) => <span key={index}>{color} </span>)}</h1>
    {checkNumbers()}
    
    </>
  );
}