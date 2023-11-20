'use client'
import { Movie } from "@/types/Movie"
import Image from "next/image";


type MovieIndexType={
    item:Movie;
    index:number;
}
export const MovieFolder = ({item,index}:MovieIndexType)=>{

    const imageURL= 'https://image.tmdb.org/t/p/original'
    return(
        <div key={index} className="aspect-[62/100] w-11/12 bg-slate-500 m-auto mt-5">
            <Image src={`${imageURL}${item.poster_path}`} alt="" width={300} height={600} className="w-full aspect-[62/100]"/>
            <div>{item.title}</div>
            <div>{item.genre}</div>
        </div>
    )
}