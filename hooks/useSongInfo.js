// Library
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

// Hooks
import useSpotify from './useSpotify'

//Atoms
import { currentTrackIdState } from '../atoms/songAtom'

function useSongInfo() {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [songInfo, setSongInfo] = useState(null)
  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: { Authorization: `Bearer ${spotifyApi.getAccessToken()}` },
          }
        ).then((res) => res.json())
        setSongInfo(trackInfo)
      } else {
        await fetch(`	https://api.spotify.com/v1/me/player/recently-played`, {
          headers: { Authorization: `Bearer ${spotifyApi.getAccessToken()}` },
        })
          .then((res) => res.json())
          .then((res) => {
            const mostRecentlyPlayed = res['items'][0]['track']
            setSongInfo(mostRecentlyPlayed)
          })
      }
    }
    fetchSongInfo()
  }, [currentTrackId, spotifyApi])

  return songInfo
}

export default useSongInfo
