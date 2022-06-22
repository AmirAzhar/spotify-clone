// Library
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-node'
import { useState } from 'react'

// Hooks
import useSpotify from '../../hooks/useSpotify'
import useSongInfo from '../../hooks/useSongInfo'

// Atoms
import { currentTrackIdState, isPlayingState } from '../../atoms/songAtom'

const Player = () => {
  const spotifyApi: SpotifyWebApi = useSpotify()
  const { data: session, status } = useSession()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)
  const songInfo: any = useSongInfo()

  return (
    <div>
      <div>
        <img
          className="hidden h-10 w-10 md:inline"
          src={songInfo?.album.images?.[0]?.url}
          alt=""
        />
      </div>
    </div>
  )
}

export default Player
