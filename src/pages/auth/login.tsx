import LoginView from "@/views/Auth/Login"

const LoginPage = () => {
  return (
    <>
      <LoginView />
    </>
    // <div className={style.login}>
    //   <h1>Login Page</h1>
    //   <button onClick={()=>handlerLogin()}>Loginlah</button>
    //   <p>
    //     Gak punya akun po? <Link href={'/auth/register'}>registrasi dong</Link>
    //   </p>
    // </div>
  )
}

export default LoginPage