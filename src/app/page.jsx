import Animelist from "./components/Animelist";
import Header from "./components/Animelist/Header";
import { getAnimeResponse, getNestedAnimeResponse, reProduce } from "@/libs/api-libs";
const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    recommendedAnime = reProduce(recommendedAnime, 8)

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
          title="Rekomendasi"
          linkHref="/palingbaru"
          linkTitle="Ikuti Sekarang"
        />
        <Animelist api={recommendedAnime} />
      </section>
    </>
  );
};
export default Page;
