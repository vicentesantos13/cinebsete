"use client";
import { useEntities } from "@/context/Context";
import { useGenres } from "@/utils/queries";

export const CategoryFilter = () => {
  const teste = useGenres();

  const { setGenreId, setMovie } = useEntities();


  return (
    <select
      className="bg-gray1F aspect-[22/5] max-h-16 w-11/12 sm:w-1/5 rounded-md text-gray7F text-lg m-auto sm:m-0 "
      placeholder="Selecione o gênero"
      onChange={(e) => {setGenreId(parseInt(e.target.value));setMovie('')}}
    >
      <option selected disabled>Selecione o gênero</option>
      <option value={0}>Todos</option>
      {teste.data &&
        teste.data.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
    </select>
  );
};
