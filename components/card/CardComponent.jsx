import { ArrowRight, Calendar } from "iconsax-reactjs";
import Image from "next/image";
const CardComponent = ({gallery,date,location,details}) =>{
    return(
    <>
    <div className="col-span-1 ">
  <Image width={500} height={319} src={gallery} alt="travel" className="w-full h-[319px] rounded-[30px] object-cover"/>
  <div className="flex justify-between mt-[10px]">
    <h1 className="text-[#309898] text-[20px] font-[500]">{location}</h1>
    <div className="flex justify-between items-center gap-1">
    <Calendar size="18" color="#309898" variant="Linear"/>
    <h1 className="text-[#309898] text-[12px] font-[400]">{date}</h1>
    </div>
  </div>
  <div className="mt-[10px]">
    <p className="font-[400] text-[#183B4E] text-[16px]">{details}</p>
    <div className="flex justify-end items-center gap-2">
      <p className="text-[#CB0404] text-[14px] font-[400]">Read More</p>
      <ArrowRight size="20" color="#CB0404"/>
    </div>
  </div>
</div>
    </>
    )

}
export default CardComponent;