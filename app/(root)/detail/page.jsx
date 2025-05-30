import { Calendar2, Heart } from "iconsax-reactjs";
export default function DetailPage() {
  return (
    <>
      <main>
        <section className="px-23 grid grid-cols-2 p-5 gap-15">
          <div className=" w-full">
            <div className="flex items-center gap-2">
              <Heart size="28" color="#309898" variant="Bold" />
              <h1 className="font-semibold text-2xl text-teal-700">
                Switzerland
              </h1>
            </div>
            <h1 className="mt-5 text-justify">
              Zermatt, Switzerland <br />
              Nestled at the foot of the iconic Matterhorn, Zermatt is a
              stunning mountain resort town known for its world-class skiing,
              scenic hiking trails, and car-free charm. The town blends rustic
              Alpine architecture with luxurious chalets and hotels, offering
              breathtaking views year-round.
              <br />
              In winter, visitors flock to Zermatt for its vast ski terrain,
              including access to the Matterhorn Glacier Paradise, the highest
              cable car station in Europe. In summer, the area transforms into a
              paradise for hikers and climbers with routes like the Five Lakes
              Walk, showcasing crystal-clear alpine lakes and panoramic vistas.
              Zermatt is also a great destination for train lovers — the
              Gornergrat Railway offers an unforgettable journey to the
              Gornergrat summit, revealing a 360° view of 29 peaks over 4,000
              meters.
              <br />
              Whether you're enjoying traditional Swiss fondue in a cozy
              mountain hut or exploring the glaciers, Zermatt delivers a perfect
              blend of adventure, tranquility, and natural beauty. Zermatt: The
              Alpine Jewel Beneath the Matterhorn Zermatt is one of
              Switzerland’s most enchanting destinations, nestled deep within
              the Valais canton in the south of the country, near the Italian
              border. What makes this town truly extraordinary is its backdrop:
              the Matterhorn, one of the most recognizable mountains in the
              world with its dramatic, pyramid-shaped peak soaring 4,478 meters
              (14,692 ft) into the sky. The mountain dominates the skyline and
              adds a magical quality to everything around it.
              <br />
              Car-Free, Carefree Charm
              <br />
              Zermatt has a unique atmosphere thanks to its commitment to
              sustainability and preservation. The town center is completely
              car-free — only small electric taxis and horse-drawn carriages are
              allowed. This contributes to the town’s peaceful, clean-air
              environment and makes wandering its charming streets a delight.
              The cobbled lanes are lined with traditional wooden chalets,
              boutique shops, gourmet restaurants, and cozy cafés offering hot
              chocolate, raclette, and mulled wine in the winter.
              <br />
              Outdoor Adventures All Year Round
              <br />
              <ul className="list-disc ml-8">
                <li>
                  Winter in Zermatt is a haven for snow lovers. The ski area,
                  known as Matterhorn Ski Paradise, is one of the highest and
                  most extensive in Europe, with over 360 km of pistes and
                  connections to the Italian resort of Cervinia. Snow is
                  virtually guaranteed thanks to the nearby glacier. You can
                  even ski here in the summer.
                </li>
                <li>
                  Summer transforms the landscape into a lush green wonderland
                  perfect for hiking, biking, and climbing. Over 400 km of
                  marked trails snake through the mountains, forests, and
                  meadows. The Five Lakes Walk is especially popular for its
                  serene alpine lakes, some of which reflect the Matterhorn
                  perfectly on a calm day.
                </li>
              </ul>
              Iconic Experiences
              <ul className="list-disc ml-8">
                <li>
                  Gornergrat Railway: A highlight of any visit, this cogwheel
                  train climbs up to 3,089 meters (10,135 ft) for panoramic
                  views of the Matterhorn and more than 20 surrounding glaciers
                  and 29 peaks above 4,000 meters.
                </li>
                <li>
                  Matterhorn Glacier Paradise: Ride Europe’s highest cable car
                  to this awe-inspiring viewpoint. Inside, there's an ice palace
                  carved into the glacier and sweeping vistas that, on a clear
                  day, stretch across to France and Italy.
                </li>
                <li>
                  {" "}
                  Mountaineer’s Cemetery: A poignant and peaceful place honoring
                  those who lost their lives attempting to climb the Matterhorn.
                  It reflects the town’s deep connection to alpine exploration.
                </li>
              </ul>
            </h1>
          </div>
          <div
            className="-300 w-full bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('./images/detail_pic.png')",
            }}
          >

         <div className="absolute mt-25 ml-125 p-2 rounded-full bg-white shadow-2xs flex items-center gap-1">
          <Calendar2 size="20" color="#309898" variant="Broken"/>
              <h1 className="text-teal-600 font-bold">July 10, 2025</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
