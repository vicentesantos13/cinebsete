import { useGenres } from "@/utils/queries"

export const CategoryFilter = ()=>{
     const teste = useGenres();
     
    return(
        <select className="bg-gray1F aspect-[22/5] max-h-16 w-11/12 sm:w-1/5 rounded-md text-gray7F text-lg m-auto sm:m-0 " placeholder="Selecione o gênero">
            <option>Selecione o gênero</option>
            {}
        </select>
    )
}