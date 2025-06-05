'use client';
import { useState } from "react";
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
  // Main user data state
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    gender: "male",
    bio: "Frontend Developer",
  });

  // Temporary edit state inside dialog
  const [tempData, setTempData] = useState({ ...userData });

  // Save and update main form
  const handleSave = () => {
    setUserData({ ...tempData });
  };

  return (
    <main>
      <section className="grid grid-cols-12 px-90">
        {/* Header */}
        <div className="col-span-12 bg-gray-300 flex items-center justify-between p-3 rounded-lg">
          <h1 className="font-semibold text-lg">Personal Information</h1>
          <LogoutCurve size="24" variant="Broken" color="#94A3B8" />
        </div>

        {/* Profile Image */}
        <div
          className="col-span-12 mt-4 h-[100px] w-[100px] bg-green-300 bg-no-repeat bg-center bg-cover rounded-full"
          style={{ backgroundImage: "url('/images/profile_page.jpg')" }}
        ></div>

        {/* Display Info Form */}
        <form className="flex items-center gap-5 col-span-12">
          <div>
            <label className="flex items-center gap-2 mt-5">
              <User size="24" variant="Broken" color="#000000" />
              Full Name
            </label>
            <p className="bg-gray-100 p-2 rounded-lg mt-2 w-[430px]">
              {userData.fullName}
            </p>

            <label className="flex items-center gap-2 mt-5">
              <Sms size="24" variant="Broken" color="#000000" />
              Email Address
            </label>
            <p className="bg-gray-100 p-2 rounded-lg mt-2 w-[430px]">
              {userData.email}
            </p>
          </div>

          <div>
            <label className="flex items-center gap-2 mt-5">
              <Profile size="24" variant="Broken" color="#000000" />
              Gender
            </label>
            <p className="bg-gray-100 p-2 rounded-lg mt-2 w-[430px] capitalize">
              {userData.gender}
            </p>

            <label className="flex items-center gap-2 mt-5">
              <Text size="24" variant="Broken" color="#000000" />
              Bio (Optional)
            </label>
            <p className="bg-gray-100 p-2 rounded-lg mt-2 w-[430px]">
              {userData.bio}
            </p>
          </div>
        </form>

        {/* Edit Button & Dialog */}
        <div className="col-span-12 mt-5 flex justify-end">
          <Dialog>
            <DialogTrigger
              onClick={() => setTempData(userData)} // Reset to current data
              className="bg-gray-800 flex items-center w-[80px] justify-center p-2 rounded-lg text-white"
            >
              Edit
            </DialogTrigger>

            <DialogContent className="max-w-5xl">
              <DialogHeader>
                <DialogTitle className="font-semibold text-lg text-center">
                  Edit Personal Information
                </DialogTitle>
              </DialogHeader>

              <section className="grid grid-cols-12 gap-4 px-4 py-2">
                <div className="col-span-12 bg-gray-300 flex justify-center p-3 rounded-lg">
                  <h1 className="font-semibold text-lg">
                    Personal Information
                  </h1>
                </div>

                <div
                  className="col-span-12 mt-4 h-[100px] w-[100px] bg-green-300 bg-no-repeat bg-center bg-cover rounded-full"
                  style={{ backgroundImage: "url('/images/profile_page.jpg')" }}
                ></div>

                {/* Edit Form */}
                <form className="col-span-12 grid grid-cols-2 gap-5">
                  <div>
                    <label className="flex items-center gap-2 mt-5">
                      <User size="24" variant="Broken" color="#000000" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={tempData.fullName}
                      onChange={(e) =>
                        setTempData({ ...tempData, fullName: e.target.value })
                      }
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    />

                    <label className="flex items-center gap-2 mt-5">
                      <Sms size="24" variant="Broken" color="#000000" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={tempData.email}
                      onChange={(e) =>
                        setTempData({ ...tempData, email: e.target.value })
                      }
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 mt-5">
                      <Profile size="24" variant="Broken" color="#000000" />
                      Gender
                    </label>
                    <select
                      value={tempData.gender}
                      onChange={(e) =>
                        setTempData({ ...tempData, gender: e.target.value })
                      }
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                    <label className="flex items-center gap-2 mt-5">
                      <Text size="24" variant="Broken" color="#000000" />
                      Bio (Optional)
                    </label>
                    <input
                      type="text"
                      value={tempData.bio}
                      onChange={(e) =>
                        setTempData({ ...tempData, bio: e.target.value })
                      }
                      className="bg-gray-200 p-2 rounded-lg mt-2 w-full"
                    />
                  </div>
                </form>

                {/* Save Button */}
                <div className="col-span-12 mt-5 flex justify-end">
                  <DialogClose asChild>
                    <button
                      onClick={handleSave}
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
