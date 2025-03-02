import React, { createContext, useState } from "react";

interface CounterProps{
  counter:number;
  setCounter:(val:number)=>void;
  name:string[];
  setName:(name:string[])=>void;
}
interface CounterProviderProps{
  children:React.ReactNode;
}

export const CounterContext=createContext<CounterProps | undefined>(undefined)

export const CounterProvider:React.FC<CounterProviderProps>=({children})=>{
  const[counter,setCounter]=useState<number>(0)
  const[name,setName]=useState<string[]>([])
  return(
    <CounterContext.Provider value={{ counter:counter, setCounter, name, setName}}>
      {children}
    </CounterContext.Provider>
  )
}