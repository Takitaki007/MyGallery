import { LogoutCurve, User } from "iconsax-reactjs";

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
        >
        
        </div>
        <form className="flex items-center gap-5">
            <div>
            <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
                <User size="24" variant="Broken" color="#000000"/>
                Full Name
            </label>
            <input type="text" id="fullname" placeholder="Enter Your Full Name" className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"></input>
                        <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
                <User size="24" variant="Broken" color="#000000"/>
                Full Name
            </label>
            <input type="text" id="fullname" placeholder="Enter Your Full Name" className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"></input>
                </div>
                   <div>
            <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
                <User size="24" variant="Broken" color="#000000"/>
                Full Name
            </label>
            <input type="text" id="fullname" placeholder="Enter Your Full Name" className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"></input>
                        <label htmlFor="fullname" className="flex items-center gap-2 mt-5">
                <User size="24" variant="Broken" color="#000000"/>
                Full Name
            </label>
            <input type="text" id="fullname" placeholder="Enter Your Full Name" className="bg-gray-200 p-2 rounded-lg mt-2 w-[430px]"></input>
            
                </div>

        </form>
     <div className="col-span-12 mt-5 flex justify-end">
         <button type="submit" className="bg-gray-800 text-white font-bold rounded-lg p-2 w-[100px]">
        Edit
      </button>
     </div>

      </section>


    </main>
  );
}
