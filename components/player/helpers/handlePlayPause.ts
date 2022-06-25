// Library
import { SetterOrUpdater } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-node'

export function handlePlayPause(
  spotifyApi: SpotifyWebApi,
  setIsPlaying: SetterOrUpdater<boolean>
) {
  spotifyApi.getMyCurrentPlaybackState().then((data: any) => {
    if (data.body?.is_playing) {
      spotifyApi.pause()
      setIsPlaying(false)
    } else {
      spotifyApi.play()
      setIsPlaying(true)
    }
  })
}
