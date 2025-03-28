import Link from "next/link";
import style from './Register.module.scss'
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const {push} = useRouter()
  const handleSubbmit = async (event:any) => {
    event.preventDefault()
    setError("")
    const data = {
      email : event.target.email.value,
      fullname : event.target.fullname.value,
      password : event.target.password.value,
    }
    setIsLoading(true)
    const result = await fetch("/api/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(data)
    })
    if(result.status === 200){
      event.target.reset()
      setIsLoading(false)
      push('/auth/login')
    } else {
      setIsLoading(false)
      setError(result.status === 400 ? "Email already exists":"")
    }
  }
   return (
    <div className={style.register}>
      <h1 className={style.register__title}>Register</h1>
      {error && <p className={style.register__error}>{error}</p>}
      <div className={style.register__form}>
        <form onSubmit={handleSubbmit}>
          <div className={style.register__form__item}>
            <label htmlFor="email" className={style.register__form__item__label}>Email :</label>
            <input type="email" placeholder="Email" name="email" id="email" className={style.register__form__item__input}/> 
          </div>
          <div className={style.register__form__item}>
            <label htmlFor="fullname" className={style.register__form__item__label}>Fullname :</label>
            <input type="text" placeholder="Fullname" name="fullname" id="fullname" className={style.register__form__item__input}/> 
          </div>
          <div className={style.register__form__item}>
            <label htmlFor="password" className={style.register__form__item__label}>Password :</label>
            <input type="password" placeholder="Password" name="password" id="password" className={style.register__form__item__input}/> 
          </div>
          <button className={style.register__form__item__button} type="submit" disabled={isLoading}>
            {isLoading ? "Loading...": "Register"}
          </button>
        </form>
      </div>
      <p className={style.register__link}>Have an Account?Sign in <Link href={'/auth/login'}>Here</Link></p>
    </div>
   )
}

export default RegisterView;