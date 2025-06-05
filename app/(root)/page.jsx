import { Gallery, Heart } from "iconsax-reactjs";
import CardComponent from "@/components/card/CardComponent";

export default async function Home() {
  const res = await fetch("http://96.9.81.187:8085/api/v1/romantic-date");
  // console.log(res)
  const data = await res.json();
  // console.log(data.payload);
  return (
    <>
      <div className="flex flex-col px-24 gap-12">
        <div className=" h-[500px] w-full grid grid-cols-12 gap-4">
          <section
            className="w-full rounded-2xl col-span-3 h-full bg-green-400"
            style={{
              backgroundImage: "url('/images/beach.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></section>
          <section className="w-full col-span-6  h-full grid grid-rows-2 gap-4">
            <div className="w-full h-full  grid grid-cols-2 gap-4">
              <div
                className="w-full h-full bg-green-100 rounded-2xl"
                style={{
                  backgroundImage: "url('/images/dog.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="w-full h-full rounded-2xl
              "
                style={{
                  backgroundImage: "url('/images/guitar.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div
              className="w-full h-full rounded-2xl "
              style={{
                backgroundImage: "url('/images/train.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </section>
          <section className="w-full col-span-3 h-full grid grid-cols-1 grid-rows-12 gap-4">
            <div
              className="row-span-7 w-full h-full rounded-2xl"
              style={{
                backgroundImage: "url('/images/reading.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="row-span-5 w-full h-full rounded-2xl"
              style={{
                backgroundImage: "url('/images/rest.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </section>
        </div>

        <div className="w-full flex items-center gap-4">
          <Heart size="32" color="#309898" variant="Bold" />
          <h1 className="text-[32px]">
            <span className="text-[#E55050] font-[500]">Romantic</span>{" "}
            <span className="text-[#309898] font-[500]">Memories</span>{" "}
          </h1>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
         {data.payload?.map((card)=>{
          return(
            <CardComponent key={card.id} gallery={card.gallery} location={card.location} date={card.date} details={card.details}/>
          )
         })}
        </main>
      </div>
    </>
  );
}
