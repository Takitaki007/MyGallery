'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarItem = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <>
      <div className="flex gap-x-10 mt-[10px]">
        <li className={`text-[20px] font-[500] ${pathname === "/" ? "text-red-500" : "text-[#183B4E]"} hover:text-[#309898] duration-100`}>
          <Link href="/">Romantic Dates</Link>
        </li>
        <li className={`text-[20px] font-[500] ${pathname=="/about" ? "text-red-500" : "text-[183B4E]" }  hover:text-[#309898] duration-100`}>
          <Link href="/about">About Author</Link>
        </li>
      </div>
    </>
  );
};
export default NavBarItem;
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const NavBarItem = () => {
//   const pathname = usePathname();

//   const navItems = [
//     { href: "/", label: "Romantic Dates" },
//     { href: "/about", label: "About Author" },
//   ];

//   return (
//     <ul className="flex gap-x-10 mt-[10px]">
//       {navItems.map((item) => {
//         const isActive = pathname === item.href;
//         return (
//           <li
//             key={item.href}
//             className={`text-[20px] font-[500] duration-100 ${
//               isActive
//                 ? "text-[#309898]"
//                 : "text-[#183B4E] hover:text-[#309898]"
//             }`}
//           >
//             <Link href={item.href}>{item.label}</Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default NavBarItem;
