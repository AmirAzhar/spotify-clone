// Types
import { PlaylistsProps } from '../../interfaces/sidebar/playlists'

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  return (
    <div className="space-y-4 pt-5">
      {playlists.map((playlist) => (
        <p
          key={playlist.id}
          className="cursor-pointer transition duration-100 hover:text-white"
        >
          {playlist.name}
        </p>
      ))}
    </div>
  )
}

export default Playlists
