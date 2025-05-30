import Image from "next/image";
import NavBarItem from "../NavbarItems";
const NavBarComponent = () => {
  return (
    <>
      <nav className="px-24">
        <ul className="flex justify-between">
          <li className="text-[32px] font-bold">
            MY<span className="text-red-400">GAL</span>LER
            <span className="text-orange-300">Y</span>
          </li>
          {/* <div className="flex gap-x-10 mt-[10px]">
            <li className="text-[20px] font-[500] text-[#183B4E] hover:text-[#309898] duration-100">
            <Link href="/">
             
              Romantic Dates
                     </Link>
            </li>
                  <li className="text-[20px] font-[500]  hover:text-[#309898] duration-100">
            <Link href="/about">
              About Author
                   </Link>
            </li>
       
      
          </div> */}
          <NavBarItem/>
          <li className=" flex mt-[-10px] text-[20px]  rounded-[20px] bg-gray-200">
            <div className="p-2">
              <Image
                width={50}
                height={50}
                src="/images/profile.png"
                alt="Profile"
                className="rounded-full w-[50px] h-[50px] object-fill"
              />
            </div>
            <div className="px-2 mt-2">
              <h1 className="text-[14px] text-[#309898] font-[500]">
                Jame Sbone
              </h1>
              <h1 className="text-[14px] font-[400]">
                Everybody has their own turn.
              </h1>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBarComponent;
