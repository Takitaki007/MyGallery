const AboutAuthor = () => {
  return (
    <div>
      <section className="grid grid-cols-12 items-center bg-[#FCFCFC] gap-12 px-24">
        <div
          className="grid col-span-6 h-[450px] rounded-[30px]"
          style={{
            backgroundImage: "url('/images/cat.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="grid col-span-6 ">
          <h1 className="text-[28px] font-[500] text-[#309898]">Personal Background</h1>
          <p className="text-justify">My name is Monster, and I come from a background shaped by curiosity, creativity, and persistence. I was born in a space, a place that taught me the value of community, discipline, and growth through everyday experiences. Growing up, I was always the kind of person who asked "why" and "how." Whether it was taking apart an old radio to see how it worked, or sketching random ideas in a notebook, I was endlessly fascinated by how the world fit together.
My educational journey has been just as varied as my interests. I pursued [your educational field or degree], which gave me a strong foundation in critical thinking and problem-solving. However, learning never stopped at the classroom door for me. I constantly found myself exploring things outside the curriculum—tinkering with code, reading philosophy, dabbling in art, and absorbing knowledge from wherever I could find it. I believe that a well-rounded mind comes from being open to different disciplines and letting them intersect naturally.
Over the years, I’ve embraced challenges as growth opportunities. Whether I was moving to a new city, starting a new project, or stepping into a leadership role, I’ve always believed that getting uncomfortable is a prerequisite for becoming more capable. My personal values—authenticity, resilience, and a desire to contribute meaningfully—guide every step I take.
Even though I've learned to work independently, I genuinely enjoy collaboration. I find great joy in connecting with people who think differently, who inspire me to expand my understanding and see the world through different lenses. I see myself not just as a "specialist" in one area, but as someone who thrives in the spaces where different fields meet.
To me, success isn't just about personal achievement—it's about leaving something better than you found it. Whether that's building helpful tools, telling stories that matter, or simply being kind in moments that count, I aim to live with intention and leave a lasting impact.</p>
        </div>
      </section>
    </div>
  );
};
export default AboutAuthor;
