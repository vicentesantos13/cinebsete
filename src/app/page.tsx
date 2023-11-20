import { Header } from "@/components/Header";
import { MoviesArea } from "@/components/MoviesArea";
import { SearchArea } from "@/components/SearchArea";

export default function Home() {
  return (
    <main className="bg-gray14 min-h-screen">
      <Header />
      <SearchArea />
      <MoviesArea />
    </main>
  );
}
