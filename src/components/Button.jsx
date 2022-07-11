export function Button() {
  return (
    <div className="flex space-x-1 mb-3 mt-3">
      <button className=" rounded-md flex justify-center items-center bg-blue-500 hover:bg-blue-600  py-[0.47rem] w-24 ">
        <img
          src="./src/img/facebook.svg"
          className="w-4 h-4 flex justify-center text-center items-center rounded-full 
         bg-white"
          alt="facebook"
        />
      </button>
      <button
        className=" rounded-md flex justify-center border-[2.5px] border-zinc-200 bg-white hover:bg-zinc-100 
        py-[0.47rem] w-24 "
      >
        <img
          src="./src/img/google.png"
          className=" w-4 h-4 flex justify-center text-center items-center rounded-full bg-white"
          alt="google"
        />
      </button>
      <button className=" rounded-md flex justify-center  bg-black  py-[0.47rem] w-24">
      <img
          src="./src/img/apple.png"
          className="w-5 h-5 flex justify-center text-center items-center  
            "
          alt="facebook"
        />
      </button>
    </div>
  )
}
