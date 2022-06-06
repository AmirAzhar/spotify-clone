// Library
import SpotifyWebApi from 'spotify-web-api-node'

// Types
import { SongProps } from '../../interfaces/center/song'

// Hooks
import useSpotify from '../../hooks/useSpotify'

const Song: React.FC<SongProps> = ({ track, order }) => {
  const spotifyApi: SpotifyWebApi = useSpotify()
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p>{track.track.name}</p>
          <p className="text-sm text-gray-400">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between text-sm text-gray-400 md:ml-0">
        <p className="hidden md:inline">{track.track.album.name}</p>
        <p>Duration</p>
      </div>
    </div>
  )
}

export default Song
