// Library
import SpotifyWebApi from 'spotify-web-api-node'
import { useRecoilState } from 'recoil'

// Types
import { SongProps } from '../../interfaces/center/song'

// Hooks
import useSpotify from '../../hooks/useSpotify'

// Library
import { millisToMinutesAndSeconds } from '../../lib/time'

// Atoms
import { currentTrackIdState, isPlayingState } from '../../atoms/songAtom'

const Song: React.FC<SongProps> = ({ track, order }) => {
  const spotifyApi: SpotifyWebApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = () => {
    setCurrentTrackId(track.track.id)
    setIsPlaying(true)
    spotifyApi.play({
      uris: [track.track.uri],
    })
  }

  return (
    <div
      className="grid cursor-pointer grid-cols-2 rounded-lg py-4 px-5 text-gray-400 hover:bg-gray-900"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p className="w-36 truncate text-white lg:w-80">{track.track.name}</p>
          <p className="w-40 text-sm">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between text-sm  md:ml-0">
        <p className="hidden w-40 md:inline">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song
