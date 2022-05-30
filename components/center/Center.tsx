// Library
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

// Component
import ProfileHeader from './ProfileHeader'

// Helper
import colorRandomizer from './helpers/colorRandomizer'

const Center = () => {
  const [color, setColor] = useState('from-indigo-500')
  useEffect(() => {
    setColor(colorRandomizer())
  }, [])

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <ProfileHeader />
      </header>
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
      ></section>
    </div>
  )
}

export default Center
