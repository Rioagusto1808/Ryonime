import Animelist from "./components/Animelist";
import Header from "./components/Animelist/Header";
import { getAnimeResponse } from "./libs/api-libs";
const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();
  const topAnime = await getAnimeResponse("top/anime", "limit=8")


  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populers"
          linkTitle="Lihat Semua"
        />
        <Animelist api={topAnime} />
      </section>

      {/* Anime Terbaru */}
      <section>
        <Header
          title="Paling Baru"
          linkHref="/palingbaru"
          linkTitle="Ikuti Sekarang"
        />
        <Animelist api={topAnime} />
      </section>
    </>
  );
};
export default Page;
