import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css"

const Navbar = () =>{
  const {data}:any = useSession()
  // console.log(data)
  return (
    <div className={styles.navbar}>
      <div className="big">Ini Navbar</div>
      <div>
        {data && data.user.fullname }
        {data?(
          <button className={styles.button} onClick={()=>signOut()}>Logout</button>
        ) : (
          <button className={styles.button} onClick={()=>signIn()}>Sign In</button>
        )}
      </div>
    </div>
  )
}

export default Navbar;