// Library
import { useState, useEffect } from 'react'

// Helper
import colorRandomizer from './helpers/colorRandomizer'

// State
import { useRecoilValue } from 'recoil'
import { playlistIdState } from '../../atoms/playlistAtom'

const Center = () => {
  const playlistId = useRecoilValue(playlistIdState)
  const [color, setColor] = useState('from-indigo-500')
  useEffect(() => {
    setColor(colorRandomizer())
  }, [playlistId])

  return (
    <div className="flex-grow">
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
      ></section>
    </div>
  )
}

export default Center
