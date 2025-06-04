import { LogoutCurve, Profile, Sms, Text, User } from "iconsax-reactjs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProfilePage() {
  return (
    <main>
      <section className="grid grid-cols-12  px-90">
        {/* Header */}

        <div className="col-span-12 bg-gray-300 flex items-center justify-between p-3 rounded-lg">
          <h1 className="font-semibold text-lg ">Personal Information</h1>
          <LogoutCurve size="24" variant="Broken" color="#94A3B8" />
        </div>

        {/* Profile Image Section */}
        <div
          className="col-span-12 mt-4 h-[100px] w-[100px] bg-green-300 bg-no-repeat bg-center bg-cover rounded-full"
          style={{
            backgroundImage: "url('/images/profile_page.jpg')",
          }}
        ></div>
        <form className="flex items-center gap-5">
          <div>
            <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
              <User size="24" variant="Broken" color="#000000" />
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter Your Full Name"
              className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"
            ></input>
            <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
              <Sms size="24" variant="Broken" color="#000000" />
              Email Address
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter Your Email"
              className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"
            ></input>
          </div>
          <div>
            <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
              <Profile ize="24" variant="Broken" color="#000000" />
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
              <Text size="24" variant="Broken" color="#000000" />
              Bio (Optional)
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter Your Full Name"
              className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"
            ></input>
          </div>
        </form>
        <div className="col-span-12 mt-5 flex justify-end">
          {/* <button type="submit" className="bg-gray-800 text-white font-bold rounded-lg p-2 w-[100px]">
        Edit
      </button> */}
          <Dialog>
            <DialogTrigger className="bg-gray-800 flex items-center w-[80px] justify-center p-2 rounded-lg text-white">
              Edit
            </DialogTrigger>

            <DialogContent className="max-w-5xl">
              {" "}
              {/* Optional: larger dialog */}
              <DialogHeader>
                <DialogTitle className="font-semibold text-lg text-center">
                  Edit Personal Information
                </DialogTitle>
              </DialogHeader>
              <section className="grid grid-cols-12 gap-4 px-4 py-2">
                {/* Header */}
                <div className="col-span-12 bg-gray-300 flex justify-center p-3 rounded-lg">
                  <h1 className="font-semibold text-lg">
                    Personal Information
                  </h1>
                 
                </div>

                {/* Profile Image Section */}
                <div
                  className="col-span-12 mt-4 h-[100px] w-[100px] bg-green-300 bg-no-repeat bg-center bg-cover rounded-full"
                  style={{ backgroundImage: "url('/images/profile_page.jpg')" }}
                ></div>

                {/* Form Section */}
                <form className="col-span-12 grid grid-cols-2 gap-5">
                  {/* Column 1 */}
                  <div>
                    <label
                      htmlFor="fullname"
                      className="flex items-center gap-2 mt-5"
                    >
                      <User size="24" variant="Broken" color="#000000" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="Enter Your Full Name"
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    />

                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 mt-5"
                    >
                      <Sms size="24" variant="Broken" color="#000000" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    />
                  </div>

                  {/* Column 2 */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="flex items-center gap-2 mt-5"
                    >
                      <Profile size="24" variant="Broken" color="#000000" />
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                    <label
                      htmlFor="bio"
                      className="flex items-center gap-2 mt-5"
                    >
                      <Text size="24" variant="Broken" color="#000000" />
                      Bio (Optional)
                    </label>
                    <input
                      type="text"
                      id="bio"
                      placeholder="Enter Your Bio"
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    />
                  </div>
                </form>

                {/* Submit Button */}
                <div className="col-span-12 mt-5 flex justify-end">
                  <DialogClose asChild>
                  <button
                    type="submit"
                    className="bg-teal-500 text-white font-bold rounded-lg p-2 w-[100px]"
                  >
                    Save
                  </button>
                  </DialogClose>
                </div>
              </section>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
}
