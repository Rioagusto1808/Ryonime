import Header from "@/app/components/Animelist/Header";
import Animelist from "@/app/components/Animelist";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/anime?q=${decodedKeyword}`
  // );
  // const searchAnime = await response.json();
const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
