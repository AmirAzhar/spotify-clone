import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="text-small border-r border-gray-900 p-5 text-gray-500">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <p className="text-xl">🏠</p>
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <p className="text-xl">🔎</p>
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <p className="text-xl">🏛</p>
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <p className="text-xl">➕</p>
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <p className="text-xl">❤</p>
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <p className="text-xl">🎙</p>
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/* Playlists */}
      </div>
    </div>
  )
}

export default Sidebar
