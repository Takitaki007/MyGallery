const Favorite = () => {
  return (
    <>
      <section className="grid grid-cols-12 gap-10 p-5 px-25  bg-[#FCFCFC]  ">
        <div
          className="grid col-span-6 h-[450px] rounded-[30px] bg-blue-500"
          style={{
            backgroundImage: "url('/images/river.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="grid col-span-6 w-[700px] ">
          <h1 className="text-[28px] text-[#FF9F00]">
            Favorite Quote and Philosophy
          </h1>
          <h1 className="text-xl">
            “Stay curious, keep building, and never stop evolving.”
          </h1>
          <p className="text-justify">
            This isn’t just a quote I like—it's a personal mantra I live by.
            "Stay curious" reminds me that the world is an infinite classroom.
            There’s always something new to learn, always another perspective
            waiting to challenge you. Curiosity is what fuels innovation,
            empathy, and self-awareness. It keeps me humble and inspired.
            Whether I'm learning a new programming language or questioning
            long-held beliefs, curiosity is the compass that guides my growth.
            "Keep building" is a call to action. It reminds me to create—whether
            that’s building a product, shaping a habit, designing an experience,
            or nurturing a community. Creation is the ultimate form of
            contribution. Even when the results aren’t perfect, the act of
            building something meaningful—something that didn’t exist before—is
            always worthwhile. And finally, "never stop evolving" speaks to my
            belief that we’re all a work in progress. I don’t aim for
            perfection; I aim for progress. That means embracing failure, being
            open to feedback, and letting go of what no longer serves me. It
            means checking in with myself often and asking: “Is this still
            aligned with who I want to become?” I believe that life is both an
            artwork and a process. You don’t have to have it all figured out.
            You just have to be brave enough to keep exploring, keep adjusting,
            and keep showing up with an open heart and a clear mind. These words
            ground me when I feel lost, energize me when I feel stuck, and
            remind me that growth is a lifelong journey—not a destination.
          </p>
        </div>
      </section>
    </>
  );
};
export default Favorite;
