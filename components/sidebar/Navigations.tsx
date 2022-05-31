// Library
import { signOut } from 'next-auth/react'

const Navigations = () => {
  return (
    <div>
      <h1 className="py-5 text-sm text-gray-500">Menu</h1>
      <div className="space-y-4">
        <button className="flex items-center space-x-2  transition duration-100 hover:text-white">
          <p className="text-xl">🏠</p>
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
          <p className="text-xl">🏛</p>
          <p>Your Library</p>
        </button>
        <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
          <p className="text-xl">❤</p>
          <p>Liked Songs</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
    </div>
  )
}

export default Navigations
