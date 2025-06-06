import { Checkbox } from "@/components/ui/checkbox";
import { Eye } from "iconsax-reactjs";
import { Edit } from "iconsax-reactjs";
import { Trash } from "iconsax-reactjs";
const TableComponent = ({id,location,date,status,details}) => {
  return (
    <div>

    <table className="min-w-full divide-y ml-6 divide-gray-200">
      <tbody className="bg-yellow-100">
        <tr className="flex gap-40">
          <td className="py-4  whitespace-nowrap"><Checkbox /> {id}</td>
          <td className="py-4 whitespace-nowrap">{location}</td>
          <td className="py-4 whitespace-nowrap">{date}</td>
          <td className="py-4 whitespace-nowrap">{details}</td>
          <td className="py-4 whitespace-nowrap">
            <span className="  inline-flex text-xs leading-5 font-semibold rounded-full  bg-white drop-shadow-lg text-yellow-500">
              {status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#FF9F00] bg-[#FF9F0033] rounded-lg">
              <Eye size="20" color="#FF8A65" variant="Broken"/>
                View
              </button>
              <button className="px-4 flex items-center gap-2 py-2 font-medium text-[#309898] bg-[#30989833] rounded-lg">
               <Edit size="20" color="#309898" variant="Broken"/> Edit
              </button>
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#CB0404] bg-[#CB040433] rounded-lg">
              <Trash size="20" color="#CB0404" variant="Broken"/>  Delete
              </button>
            </div>
          </td>
        </tr>
            {/* <tr>
          <td className="px-6 py-4 whitespace-nowrap"><Checkbox /> 2</td>
          <td className="px-6 py-4 whitespace-nowrap">Cambodia</td>
          <td className="px-6 py-4 whitespace-nowrap">15 Jan, 2027</td>
          <td className="px-6 py-4 whitespace-nowrap">Visit the Eiffel Tower</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-white drop-shadow-lg text-blue-400">
              Completed
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#FF9F00] bg-[#FF9F0033] rounded-lg">
              <Eye size="20" color="#FF8A65" variant="Broken"/>
                View
              </button>
              <button className="px-4 flex items-center gap-2 py-2 font-medium text-[#309898] bg-[#30989833] rounded-lg">
               <Edit size="20" color="#309898" variant="Broken"/> Edit
              </button>
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#CB0404] bg-[#CB040433] rounded-lg">
              <Trash size="20" color="#CB0404" variant="Broken"/>  Delete
              </button>
            </div>
          </td>
        </tr>
            <tr>
          <td className="px-6 py-4 whitespace-nowrap"><Checkbox /> 3</td>
          <td className="px-6 py-4 whitespace-nowrap">India</td>
          <td className="px-6 py-4 whitespace-nowrap">15 Jan, 2027</td>
          <td className="px-6 py-4 whitespace-nowrap">Visit the Eiffel Tower</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-white drop-shadow-lg  text-red-500">
             pending
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#FF9F00] bg-[#FF9F0033] rounded-lg">
              <Eye size="20" color="#FF8A65" variant="Broken"/>
                View
              </button>
              <button className="px-4 flex items-center gap-2 py-2 font-medium text-[#309898] bg-[#30989833] rounded-lg">
               <Edit size="20" color="#309898" variant="Broken"/> Edit
              </button>
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#CB0404] bg-[#CB040433] rounded-lg">
              <Trash size="20" color="#CB0404" variant="Broken"/>  Delete
              </button>
            </div>
          </td>
        </tr>
           <tr>
          <td className="px-6 py-4 whitespace-nowrap"><Checkbox /> 3</td>
          <td className="px-6 py-4 whitespace-nowrap">India</td>
          <td className="px-6 py-4 whitespace-nowrap">15 Jan, 2027</td>
          <td className="px-6 py-4 whitespace-nowrap">Visit the Eiffel Tower</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-white drop-shadow-lg  text-red-500">
             pending
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#FF9F00] bg-[#FF9F0033] rounded-lg">
              <Eye size="20" color="#FF8A65" variant="Broken"/>
                View
              </button>
              <button className="px-4 flex items-center gap-2 py-2 font-medium text-[#309898] bg-[#30989833] rounded-lg">
               <Edit size="20" color="#309898" variant="Broken"/> Edit
              </button>
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#CB0404] bg-[#CB040433] rounded-lg">
              <Trash size="20" color="#CB0404" variant="Broken"/>  Delete
              </button>
            </div>
          </td>
        </tr>
                   <tr>
          <td className="px-6 py-4 whitespace-nowrap"><Checkbox /> 3</td>
          <td className="px-6 py-4 whitespace-nowrap">India</td>
          <td className="px-6 py-4 whitespace-nowrap">15 Jan, 2027</td>
          <td className="px-6 py-4 whitespace-nowrap">Visit the Eiffel Tower</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-white drop-shadow-lg  text-red-500">
             pending
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#FF9F00] bg-[#FF9F0033] rounded-lg">
              <Eye size="20" color="#FF8A65" variant="Broken"/>
                View
              </button>
              <button className="px-4 flex items-center gap-2 py-2 font-medium text-[#309898] bg-[#30989833] rounded-lg">
               <Edit size="20" color="#309898" variant="Broken"/> Edit
              </button>
              <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#CB0404] bg-[#CB040433] rounded-lg">
              <Trash size="20" color="#CB0404" variant="Broken"/>  Delete
              </button>
            </div>
          </td>
        </tr> */}
      </tbody>
    </table>
    </div>

  );
};

export default TableComponent;
