// Types
import { PlaylistsProps } from '../../interfaces/sidebar/playlists'

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  return (
    <div className="overflow-y-scroll scrollbar-hide">
      <div className="space-y-4">
        {playlists.map((playlist) => (
          <p key={playlist.id} className="cursor-pointer hover:text-white">
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Playlists
