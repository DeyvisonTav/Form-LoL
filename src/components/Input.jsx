export function Input({...rest}) {
  return (
    <div>
       <input 
       className="  px-3 justify-center items-center pb-5 w-72 flex-1 h-1 mb-5  rounded-md border border-gray-200
       bg-zinc-300 bg-opacity-40 text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500 pt-8 "
       {...rest}
      />
    </div>
  )
}