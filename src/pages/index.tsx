import { useSession } from 'next-auth/react'
import Head from 'next/head'

export default function Home() {
  const {data}:any = useSession()
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div> Hello { data && data.user.fullname }</div>
    </div>
  )
}
