import { Header } from "@/components/Header";
import { MoviesArea } from "@/components/MoviesArea";
import { SearchArea } from "@/components/SearchArea";
import { EntitiesProvider } from "@/context/ContextHeader";

export default function Home() {
  return (
    <main className="bg-gray14 min-h-screen">
      <EntitiesProvider>
        <Header />
        <SearchArea />
        <MoviesArea />
      </EntitiesProvider>
    </main>
  );
}
