import Link from "next/link"

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        dah ada akunnya? <Link href={'/auth/login'}>loginlah</Link>
      </p>
    </div>
  )
}

export default RegisterPage