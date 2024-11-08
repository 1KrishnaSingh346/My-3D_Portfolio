import { Html } from "@react-three/drei"

function Loader() {
  return (
    <Html>
        <div className='flex justify-center items-center'>
            <div className='w-20 h-20 border-2 border-opacity-60 border-blue-400 border-t-blue-800 rounded-full animate-spin' />
        </div>
    </Html>
  )
}

export default Loader