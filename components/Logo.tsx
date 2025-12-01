import React from 'react'
import {BrainCircuit} from "lucide-react"
const Logo = ({size = 4, isVertical= true}) => {
  return (
    <div className={`flex justify-center items-center gap-2 font-mono font-medium md:flex-row flex-col md:text-2xl tracking-tight ${isVertical ? "flex-row" : ""}`}>
         <BrainCircuit size={size} /> 
         AR-FITNESS
    </div>
  )
}

export default Logo