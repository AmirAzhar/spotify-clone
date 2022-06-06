// Library
import { useRecoilValue } from 'recoil'

// Atoms
import { playlistState } from '../../atoms/playlistAtom'

// Component
import Song from './Song'

const Songs = () => {
  const playlist = useRecoilValue<any>(playlistState)
  return (
    <div className="flex-col space-y-1 px-8 pb-28 text-white">
      {playlist?.tracks.items.map((track: any, i: number) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  )
}

export default Songs
