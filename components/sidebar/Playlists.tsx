// Types
import { PlaylistsProps } from '../../interfaces/sidebar/playlists'

// State
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../../atoms/playlistAtom'

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)
  return (
    <div className="scrollbar-thumb-rounded-full overflow-y-scroll scrollbar scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-400">
      <div className="space-y-4">
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            className="cursor-pointer hover:text-white"
            onClick={() => setPlaylistId(playlist.id)}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Playlists
