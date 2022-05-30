// Library
import { signOut } from 'next-auth/react'

const Navigations = () => {
  return (
    <div className="space-y-4">
      <button
        onClick={() => signOut()}
        className="flex items-center space-x-2  transition duration-100 hover:text-white"
      >
        <p className="text-xl">X</p>
        <p>Logout</p>
      </button>
      <button className="flex items-center space-x-2  transition duration-100 hover:text-white">
        <p className="text-xl">🏠</p>
        <p>Home</p>
      </button>
      <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
        <p className="text-xl">🔎</p>
        <p>Search</p>
      </button>
      <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
        <p className="text-xl">🏛</p>
        <p>Your Library</p>
      </button>
      <hr className="border-t-[0.1px] border-gray-900" />
      <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
        <p className="text-xl">➕</p>
        <p>Create Playlist</p>
      </button>
      <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
        <p className="text-xl">❤</p>
        <p>Liked Songs</p>
      </button>
      <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
        <p className="text-xl">🎙</p>
        <p>Your Episodes</p>
      </button>
      <hr className="border-t-[0.1px] border-gray-900" />
    </div>
  )
}

export default Navigations
