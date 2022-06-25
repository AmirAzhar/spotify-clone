// Library
import { SetterOrUpdater } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-node'

export function fetchCurrentSong(
  songInfo: any,
  spotifyApi: SpotifyWebApi,
  setCurrentTrackId: SetterOrUpdater<null>,
  setIsPlaying: SetterOrUpdater<boolean>
) {
  if (!songInfo) {
    spotifyApi.getMyCurrentPlayingTrack().then((data: any) => {
      setCurrentTrackId(data.body?.item?.id)
      spotifyApi.getMyCurrentPlaybackState().then((data: any) => {
        setIsPlaying(data.body?.is_playing)
      })
    })
  }
}
