export default function LoginPage() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <section className="bg-red-300  w-[800px] grid grid-cols-2 p-5 gap-5 rounded-2xl">
          <div className="bg-yellow-300 flex justify-center items-center p-5 h-[400px]">
            <form>
              <h1 className="font-bold">Welcome to MY<span className="text-red-400">GAL</span>LER
            <span className="text-orange-300">Y</span></h1><br></br>
              <label htmlFor="email">Email</label> <br></br>
              <input
                type="email"
                id="email"
                placeholder="input your email"
                className="bg-gray-200 rounded-md w-[300px]"
              ></input>{" "}
              <br></br>
              <br></br>
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                type="password"
                id="password"
                placeholder="input your password"
                className="bg-gray-200 rounded-md w-[300px]"
              ></input>
              <br></br>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 mt-3"
              >
                Login
              </button>
            </form>
          </div>
          <div className="bg-green-300">image here</div>
        </section>
      </main>
    </>
  );
}
