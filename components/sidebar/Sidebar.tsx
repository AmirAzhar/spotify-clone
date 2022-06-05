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
import Header from './Header'

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
    <div className=" hidden h-screen flex-col border-r border-gray-900 p-5 text-xs text-gray-400 sm:max-w-[15rem] md:flex lg:max-w-[17rem] lg:text-sm">
      <Header />
      <Search />
      <Menu />
      <div className="flex items-center justify-between">
        <h1 className="py-5 text-sm text-gray-500">Playlists</h1>
        <button className="text-3xl hover:text-white">+</button>
      </div>
      <Playlists playlists={playlists} />
    </div>
  )
}

export default Sidebar
