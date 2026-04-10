import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const session = useSession()
  if (session?.data?.user) {
    return (
      <>
        Signed in as {session.data.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in</button>
    </>
  )
}