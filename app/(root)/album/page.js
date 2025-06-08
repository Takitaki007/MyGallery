import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Eye, Location, Trash } from "iconsax-reactjs";
import { Calendar } from "iconsax-reactjs";
import { NoteText } from "iconsax-reactjs";
import TableComponent from "./_components/TableComponent";
import { Button } from "@/components/ui/button";
import { Add } from "iconsax-reactjs";
import { Checkbox } from "@/components/ui/checkbox";
import { AppleIcon, Type } from "lucide-react";
import { Content } from "next/font/google";
import { insertUser } from "@/service/user.service";
import { revalidateTag } from "next/cache";
import { use } from "react";
const AlbumPage = async () => {
  //fetch all data 
  const res = await fetch("http://96.9.81.187:8085/api/v1/romantic-date?pageSize=5&sortBy=id&sortDirection=ASC",
    {
      cache:"no-store",
      next:{tags:['user']}
    }
  );
  console.log(res)
  // const data = await res.json();
  // console.log("data with payloard",data.payload);


const insertUser = async (userData) => {
  "use server";

  const res = await fetch("http://96.9.81.187:8085/api/v1/romantic-date", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W10sInN1YiI6InJlbmRlckBnbWFpbC5jb20iLCJpYXQiOjE3NDkyMzUzMzksImV4cCI6MTc0OTMyMTczOX0.xwnYpTAsyTdEHYVL5gPY9BoamgS8JZWCyf6Bh6RMiRrLBSgsC-lqLzjT4hR9cddJzXioj37H8FHgFx5EsWIavA" // Use correct token
    },
    body: JSON.stringify(userData),
  });
  const data = res.json();
  return data;
};

  // 2. Handle form submission
  async function InputHandler(userInput) {
    "use server";

    const newUser = {
      location: userInput.get("location"),
      date: userInput.get("date"),
      details: userInput.get("details"),
      gallery:
        "http://96.9.81.187:8085/api/v1/file/preview-file/38fa32e5-ee2b-4ed4-864a-fc7cba44bfdb.jpg", // use default or uploaded image
      status: userInput.get("status"),
    };

    console.log("Form submitted:", newUser);

    // call user service for inset new user
    const result = await insertUser(newUser);
    console.log("Server response:", result);

    //calling revaldate tage
    revalidateTag("user")
  }
  return (
    <>
      <section className="flex items-center justify-between py-5 px-24 gap-2">
        <div className="flex items-center gap-2">
          <Calendar size="32" color="#309898" variant="Broken" />
          <u>
            <h1 className="text-3xl font-semibold">
              <span className="text-[#309898]">My </span>{" "}
              <span className="text-[#E55050]">Dating</span>{" "}
              <span className="text-[#309898]">Schedule</span>{" "}
            </h1>
          </u>
        </div>
        <div>
          <div className="w-full text-center">
            <Dialog>
              <DialogTrigger className="bg-[#309898] flex items-center p-2 rounded-lg text-white">
                <Add size="24" color="#FFFFFF" variant="Broken" />
                New Memory
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-semibold text-lg text-center">
                    Create New Schedule
                  </DialogTitle>
                  <div className="w-full">
                    <form className="p-5" action={InputHandler}>
                      <label
                        className="flex items-center gap-2"
                        htmlFor="location"
                      >
                        <Location size="18" color="#94A3B8" variant="Broken" />{" "}
                        Location
                      </label>
                      <br></br>
                      <input
                        className="bg-[#F8FAFC] rounded-md p-2 w-full"
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter your desired places"
                      ></input>
                      <br></br>
                      <br></br>

                      <label className="flex items-center gap-2" htmlFor="date">
                        <Calendar size="18" color="#94A3B8" variant="Broken" />
                        Date
                      </label>
                      <br></br>
                      <input
                        name="date"
                        type="text"
                        className="bg-[#F8FAFC] rounded-md p-2 w-full"
                        id="date"
                        placeholder="please choose the date"
                      ></input>
                      <br></br>
                      <br></br>
                      <label className="flex items-center gap-2" htmlFor="date">
                        <Calendar size="18" color="#94A3B8" variant="Broken" />
                        Gallery
                      </label>
                      <br></br>
                      <input
                        name="file"
                        type="file"
                        className="bg-[#F8FAFC] rounded-md p-2 w-full"
                        id="file"
                        placeholder="please choose the date"
                      ></input>
                      <br></br>
                      <br></br>
                      <label
                        className="flex items-center gap-2"
                        htmlFor="details"
                      >
                        <NoteText size="18" color="#94A3B8" variant="Broken" />
                        Details
                      </label>
                      <br></br>
                      <textarea
                        name="details"
                        type="text"
                        id="details"
                        className="bg-[#F8FAFC] rounded-md p-2 w-full h-[150px]"
                        placeholder="type some details"
                      ></textarea>
                      <div className="px-5">
                        <button type="submit" className="bg-teal-500 w-full">
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <table className="w-full table-auto divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 tracking-wider">
              <Checkbox /> No
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
              Where we are going
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">
              Date
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">
              What we plan to do
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.payload?.map((table) => (
            <tr key={table.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Checkbox /> {table.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{table.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{table.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{table.details}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex text-xs leading-5 font-semibold rounded-full bg-white drop-shadow-lg text-yellow-500">
                  {table.status}
                  {/* padding */}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex justify-center items-center space-x-2">
                  <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#FF9F00] bg-[#FF9F0033] rounded-lg">
                    <Eye size="20" color="#FF8A65" variant="Broken" />
                    View
                  </button>
                  <button className="px-4 flex items-center gap-2 py-2 font-medium text-[#309898] bg-[#30989833] rounded-lg">
                    <Edit size="20" color="#309898" variant="Broken" />
                    Edit
                  </button>
                  <button className="px-4 gap-2 flex items-center py-2 font-medium text-[#CB0404] bg-[#CB040433] rounded-lg">
                    <Trash size="20" color="#CB0404" variant="Broken" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AlbumPage;
