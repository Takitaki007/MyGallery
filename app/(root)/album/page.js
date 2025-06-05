import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Location } from "iconsax-reactjs";
import { Calendar } from "iconsax-reactjs";
import { NoteText } from "iconsax-reactjs";
import TableComponent from "./_components/TableComponent";
import { Button } from "@/components/ui/button";
import { Add } from "iconsax-reactjs";
const AlbumPage = () => {
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
                  <form className="p-5">
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
                      type="text"
                      className="bg-[#F8FAFC] rounded-md p-2 w-full"
                      id="date"
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
                      type="text"
                      id="details"
                      className="bg-[#F8FAFC] rounded-md p-2 w-full h-[150px]"
                      placeholder="type some details"
                    ></textarea>
                  </form>
                </div>
              </DialogHeader>
              <div className="px-5">
                
                  <Button className="bg-teal-500 w-full">Create</Button>
       
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
    <TableComponent />
    </>
  );
};
export default AlbumPage;

