import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="text-small p-5 text-gray-500">
      <button className="flex items-center space-x-2 hover:text-white">
        <HomeIcon className="h-8 w-8" />
        <p>Home</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <SearchIcon className="h-8 w-8" />
        <p>Search</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <LibraryIcon className="h-8 w-8" />
        <p>Your Library</p>
      </button>
    </div>
  )
}

export default Sidebar
