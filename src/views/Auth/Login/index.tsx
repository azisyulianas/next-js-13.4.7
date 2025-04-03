import Link from "next/link";
import style from './Login.module.scss'
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const {push, query} = useRouter();
  const callbackUrl:any = query.callbackUrl || '/';

  const handleSubbmit = async (event:any) => {
    event.preventDefault()
    setError("")
    setIsLoading(true)
    try {
      const res = await signIn("credentials",{
        redirect: false,
        email : event.target.email.value,
        password : event.target.password.value,
        callbackUrl
      })
      if(!res?.error){
        setIsLoading(false)
        push(callbackUrl)
      }else{
        setError("Email or Password Incorrect")
        setIsLoading(false)
      }
    } catch (error:any) {
      setError("Email or Password Incorrect")
      setIsLoading(false)
    }
  }

  return (
    <div className={style.login}>
      <h1 className={style.login__title}>Login</h1>
      {error && <p className={style.login__error}>{error}</p>}
      <div className={style.login__form}>
        <form onSubmit={handleSubbmit}>
          <div className={style.login__form__item}>
            <label htmlFor="email" className={style.login__form__item__label}>Email :</label>
            <input type="email" placeholder="Email" name="email" id="email" className={style.login__form__item__input}/> 
          </div>
          <div className={style.login__form__item}>
            <label htmlFor="password" className={style.login__form__item__label}>Password :</label>
            <input type="password" placeholder="Password" name="password" id="password" className={style.login__form__item__input}/> 
          </div>
          <button className={style.login__form__item__button} type="submit" disabled={isLoading}>
            {isLoading ? "Loading...": "Login"}
          </button>
          <button 
            onClick={()=>{
              setError("")
              setIsLoading(true)
              signIn("google",{
              callbackUrl,
              redirect:false})
          }
          } className={style.login__form__item__google}
            type="button">
              Sign in with Google
          </button>
        </form>
      </div>
      <p className={style.login__link}>Do not Have an Account?Register <Link href={'/auth/register'}>Here</Link></p>
    </div>
   )
}

export default LoginView;