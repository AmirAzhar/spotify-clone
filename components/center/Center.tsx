// Library
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import SpotifyWebApi from 'spotify-web-api-node'

// Helper
import colorRandomizer from './helpers/colorRandomizer'

// Hook
import useSpotify from '../../hooks/useSpotify'

// State
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistIdState, playlistState } from '../../atoms/playlistAtom'

const Center = () => {
  const playlistId = useRecoilValue(playlistIdState)
  const [color, setColor] = useState('from-indigo-500')
  const spotifyApi: SpotifyWebApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlist, setPlaylist] = useRecoilState<any>(playlistState)

  useEffect(() => {
    setColor(colorRandomizer())
  }, [playlistId])

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => console.log('Oops! Something went wrong!', err))
  }, [spotifyApi, playlistId])

  return (
    <div className="flex-grow">
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
      ></section>
    </div>
  )
}

export default Center
