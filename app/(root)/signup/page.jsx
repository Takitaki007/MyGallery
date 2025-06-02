import { Key, Sms, User } from "iconsax-reactjs";
export default function SignupPage(){
    return(
        <>
        <main className="flex justify-center items-center h-screen">
               <section className="bg-white shadow-2xl  w-[900px] grid grid-cols-2 p-15 gap-5 rounded-3xl">
                      <div className=" flex justify-center items-center p-5 h-[400px]">
                        <form>
                          <h1 className="font-bold text-center mt-25 text-2xl">
                            Sign Up to MY<span className="text-red-400">GAL</span>LER
                            <span className="text-orange-300">Y</span>
                          </h1>
                          <br></br>
                          <div className="flex items-center gap-2">
                            <User size="24" color="#94A3B8" variant="Broken" />
                            <label htmlFor="fullname" className="text-gray-500 ">Full Name</label>
                          </div>
                        
                          <input
                            type="text"
                            id="fullname"
                            placeholder="please type your full name"
                            className="bg-gray-200 rounded-md w-[300px] p-2"
                          ></input>{" "}
                          <br></br>
                          <br></br>
                          <div className="flex items-center gap-2">
                            <Sms size="24" color="#94A3B8" variant="Broken" />
                          <label htmlFor="email" className="text-gray-500">Email</label>
            
                            </div>
                       
                          <input
                            type="email"
                            id="email"
                            placeholder="please type your email"
                            className="bg-gray-200 rounded-md w-full p-2"
                          ></input><br></br><br></br>
                           <div className="flex items-center gap-2">
                            <Key size="24" color="#94A3B8" variant="Broken" />
                          <label htmlFor="password" className="text-gray-500">Password</label>
            
                            </div>
                       
                          <input
                            type="password"
                            id="password"
                            placeholder="please type your password"
                            className="bg-gray-200 rounded-md w-full p-2"
                          ></input><br></br><br></br>
                           <div className="flex items-center gap-2">
                            <Key size="24" color="#94A3B8" variant="Broken" />
                          <label htmlFor="cfpassword" className="text-gray-500">Confirm Password</label>
            
                            </div>
                       
                          <input
                            type="password"
                            id="cfpassword"
                            placeholder="please type your password"
                            className="bg-gray-200 rounded-md w-full p-2"
                          ></input><br></br>
                          
                          <button
                            type="submit"
                            className="bg-teal-700 cursor-pointer font-semibold text-white w-full rounded-lg px-4 py-2 mt-8"
                          >
                            Sign Up
                          </button>
                        <div className="border-1 mt-5 border-gray-500"></div>
                        <p className="text-right	">Already have an account? <span className="text-teal-700 font-semibold">Login</span></p>
                        </form>
                      </div>
                      <div className="bg-contain bg-no-repeat bg-center h-[500px] rounded-b-2xl" style={{
                        backgroundImage:"url('./images/login.jpg')",
                      }}></div>
                    </section>
        </main>
        </>
    )
}