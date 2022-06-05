// Library
import { getProviders } from 'next-auth/react'

// Type
import type { GetServerSideProps, NextPage } from 'next'

// Component
import Center from '../components/center/Center'
import Sidebar from '../components/sidebar/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
