import { useState } from "react";
import React from 'react'

function BgChanger() {
    const [color, setColor] = useState("rgb(225,225,225)");
  return (
    <div
    className="w-full h-screen duration-200"
    style={{ backgroundColor: color }}
  >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button className="bg-red-600 outline outline-zinc-400 px-2 py-1 rounded-xl" onClick={()=>setColor("rgb(220 38 38)")}>Red</button>
        <button className="bg-green-400 outline outline-zinc-400 px-2 py-1 rounded-xl" onClick={()=>setColor("rgb(163 230 53)")}>Green</button>
        <button className="bg-sky-500 outline outline-zinc-400 px-2 py-1 rounded-xl" onClick={()=>setColor("rgb(14 165 233)")}>Sky</button>
        <button className="bg-white outline outline-zinc-400 px-2 py-1 rounded-xl" onClick={()=>setColor("rgb(225 225 225)")}>White</button>
        <button className="bg-pink-400 outline outline-zinc-400 px-2 py-1 rounded-xl" onClick={()=>setColor("rgb(244 114 182)")}>Pink</button>
        <button className="bg-black outline outline-zinc-400 text-white px-2 py-1 rounded-xl" onClick={()=>setColor("rgb(0 0 0)")}>Black</button>
        <button className="bg-purple-500 outline outline-zinc-400 px-2 py-1 rounded-xl" onClick={()=>setColor("rgb(168 85 247)")}>Purple</button>
      </div>
    </div>
  </div>
  )
}

export default BgChanger
