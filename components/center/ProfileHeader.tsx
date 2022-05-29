import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const ProfileHeader = () => {
  const { data: session } = useSession()
  return (
    <div className="flex cursor-pointer items-center space-x-3 rounded-full bg-white p-1 pr-2 opacity-90 transition duration-300 hover:opacity-80">
      <img
        className="h-10 w-10 rounded-full"
        src={session?.user?.image || ''}
        alt="Profile Photo"
      />
      <h2>{session?.user?.name || ''}</h2>
      <ChevronDownIcon className="h-5 w-5" />
    </div>
  )
}

export default ProfileHeader
