import type { NextPage, GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'

const Login: NextPage = ({ providers }) => {
  return <div>test</div>
}

export default Login

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
