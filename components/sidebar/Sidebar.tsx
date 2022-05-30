import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import useSpotify from '../../hooks/useSpotify'

const Sidebar = () => {
  const spotifyApi: SpotifyWebApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
        console.log(playlists)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="text-small h-screen overflow-y-scroll border-r border-gray-900 p-5 text-gray-500 scrollbar-hide">
      <div className="space-y-4">
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2  transition duration-100 hover:text-white"
        >
          <p className="text-xl">X</p>
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2  transition duration-100 hover:text-white">
          <p className="text-xl">🏠</p>
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
          <p className="text-xl">🔎</p>
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
          <p className="text-xl">🏛</p>
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
          <p className="text-xl">➕</p>
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
          <p className="text-xl">❤</p>
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 transition duration-100 hover:text-white">
          <p className="text-xl">🎙</p>
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/* Playlists */}
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

export default Sidebar
