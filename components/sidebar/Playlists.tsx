// Types
import { PlaylistsProps } from '../../interfaces/sidebar/playlists'

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="py-5 text-sm text-gray-500">Playlists</h1>
        <p className="text-3xl">+</p>
      </div>
      <div className="space-y-4">
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            className="cursor-pointer transition duration-100 hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Playlists
