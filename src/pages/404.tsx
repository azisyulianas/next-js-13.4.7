import style from "@/styles/404.module.scss"

const Custom404 = () => {
  return (
    <div className={style.error}>
      <img src="/not-found.svg" alt="404" className={style.error__image}/>
      <div>
        halamane gak ono cok
      </div>
    </div>
  )
}

export default Custom404