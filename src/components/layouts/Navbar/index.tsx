import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css"

const Navbar = () =>{
  const {data}:any = useSession()
  return (
    <div className={styles.navbar}>
      <div className="big">Ini Navbar</div>
      <div className={styles.profile}>
        {data && data.user.fullname }{" "}
        {data?.user?.image? 
          (<img src={data.user.image} alt={data.user.fullname} className={styles.avatar}/>)
          : ""
        }
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