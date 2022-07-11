import { Form } from './Form'

export function Background() {
  return (
    <div className="h-screen w-screen grid grid-cols-4 bg-zinc-100 ">
      <Form />

    <video autoPlay='true' loop='true' muted='true' className='w-screen h-screen col-span-3 bg-black'>

      <source src="./src/movie/zedGift.mp4"   />
    </video>
    </div>
  )
}
