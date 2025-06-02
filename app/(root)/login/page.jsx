import { Key, Message, Sms, User } from "iconsax-reactjs";

export default function LoginPage() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <section className="bg-white shadow-2xl  w-[800px] grid grid-cols-2 p-5 gap-5 rounded-2xl">
          <div className=" flex justify-center items-center p-5 h-[400px]">
            <form>
              <h1 className="font-bold text-center text-2xl">
                Welcome to MY<span className="text-red-400">GAL</span>LER
                <span className="text-orange-300">Y</span>
              </h1>
              <br></br>
              <div className="flex items-center gap-2">
                <Sms size="24" color="#94A3B8" variant="Broken" />
                <label htmlFor="email" className="text-gray-500 ">Email</label>
              </div>
            
              <input
                type="email"
                id="email"
                placeholder="input your email"
                className="bg-gray-200 rounded-md w-[300px] p-2"
              ></input>{" "}
              <br></br>
              <br></br>
              <div className="flex items-center gap-2">
                <Key size="24" color="#94A3B8" variant="Broken" />
              <label htmlFor="password" className="text-gray-500">Password</label>

                </div>
           
              <input
                type="password"
                id="password"
                placeholder="input your password"
                className="bg-gray-200 rounded-md w-full p-2"
              ></input>
              
              <button
                type="submit"
                className="bg-blue-500 cursor-pointer text-white w-full rounded-lg px-4 py-2 mt-8"
              >
                Login
              </button>
            <div className="border-1 mt-5 border-gray-500"></div>
            <p className="text-right	">dont'have account yet? <span className="text-blue-500 font-semibold">Sign Up</span></p>
            </form>
          </div>
          <div className="bg-green-300 bg-cover bg-no-repeat bg-center rounded-md" style={{
            backgroundImage:"url('./images/login.jpg')",
          }}></div>
        </section>
      </main>
    </>
  );
}
