import { useSession } from 'next-auth/react'
const Header = () => {
  const { data: session } = useSession()
  return (
    <div className="flex justify-between pt-4 align-middle">
      <img src="/spotify.png" alt="image" className="w-32" />
      <img
        className="h-10 w-10 rounded-full"
        src={session?.user?.image || ''}
        alt="Profile Photo"
      />
    </div>
  )
}

export default Header
