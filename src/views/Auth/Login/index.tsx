import Link from "next/link"
import { useRouter } from "next/router"
import style from "./Login.module.scss"

const LoginView = () =>{
  const { push } = useRouter()
  const handlerLogin = () => {
    push("/product")
  }
  return (
    <div className={style.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={()=>handlerLogin()}>Loginlah</button>
      <p style={{color:"red", border:"1px solid red", borderRadius:"10px"}}>
        Gak punya akun po? <Link href={'/auth/register'}>registrasi dong</Link>
      </p>
    </div>
    )
}

export default LoginView