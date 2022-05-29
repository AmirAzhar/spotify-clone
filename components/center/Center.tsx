import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import { shuffle } from 'lodash'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
]

const Center = () => {
  const { data: session } = useSession()
  const [color, setColor] = useState('from-indigo-500')
  useEffect(() => {
    setColor(shuffle(colors).pop() || 'from-indigo-500')
  }, [])

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex cursor-pointer items-center space-x-3 rounded-full bg-white p-1 pr-2 opacity-90 transition duration-300 hover:opacity-80">
          <img
            className="h-10 w-10 rounded-full"
            src={session?.user?.image || ''}
            alt="Profile Photo"
          />
          <h2>{session?.user?.name || ''}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
      ></section>
    </div>
  )
}

export default Center
