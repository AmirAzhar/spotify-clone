// Library
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'

// Hook
import useSpotify from '../../hooks/useSpotify'

// Component
import Menu from './Menu'
import Playlists from './Playlists'
import Search from './Search'

const Sidebar = () => {
  const spotifyApi: SpotifyWebApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="text-small h-screen overflow-y-scroll border-r border-gray-900 p-5 text-gray-400 scrollbar-hide">
      <Search />
      <Menu />
      <Playlists playlists={playlists} />
    </div>
  )
}

export default Sidebar
