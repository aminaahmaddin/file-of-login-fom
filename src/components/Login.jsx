import { signInWithPopup, signOut } from "firebase/auth"
import { auth, loginWithGoogle } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'

function Login(){
  const [user, loading] = useAuthState(auth)
  async function handleLogin() {
    await signInWithPopup(auth, loginWithGoogle)
  }
  async function handleLogout() {
    await signOut(auth)
  }
    return (
      <>
        <h1>Login form</h1>
        <button onClick={handleLogin}>Login With Google</button>
        <button onClick={handleLogout}>Logout</button>
        {loading && <p>Loading...</p>}
        {user && (<>
          <h2>{user?.displayName}</h2>
          <img src={user?.photoURL} alt="profile-image" /></>)}

      </>
    )
  }

  export default Login
