import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TestingPage = () => {
  return (
    <>
      <div className="w-full text-center">
        <Dialog>
          <DialogTrigger className="bg-red-300">Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-semibold text-lg text-center">
                Create New Schedule
              </DialogTitle>
              <div className="w-full">
                <form className="p-5">
                  <label htmlFor="location">Location</label>
                  <br></br>
                  <input className="bg-[#F8FAFC] rounded-md p-2 w-full" type="text" id="location" placeholder="Enter your desired places"></input>
                  <br></br><br></br>
                  <label htmlFor="date">Date</label>
                  <br></br>
                  <input type="text" className="bg-[#F8FAFC] rounded-md p-2 w-full" id="date" placeholder="please choose the date"></input>
                  <br></br><br></br>
                  <label htmlFor="details">Details</label>
                  <br></br>
                 <textarea type="text" id="details" className="bg-[#F8FAFC] rounded-md p-2 w-full h-[150px]" placeholder="type some details"></textarea>
                </form>
              </div>
            </DialogHeader>
            <div className="p-5">
          <Button className="bg-teal-500 w-full">Create</Button>

            </div>

          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
export default TestingPage;
