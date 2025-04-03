import { signIn, signInWithGoogle } from "@/utils/firebase/services";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers:[
    Credentials({
      type:"credentials",
      name:"Credentials",
      credentials:{
        email:{label:"Email", type:"email"},
        password:{label:"Password", type:"password"}
      },
      async authorize(credentials: any) {
        const {email, password} = credentials as {
          email:string;
          password:string;
          fullname:string;
        }
        const user:any = await signIn({email});
        if (user){
          const passwordConfrim = await compare(password, user.password)
          if (!passwordConfrim){
            return null
          }
          return user
        }else{
          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || ''
    })
  ],
  callbacks:{
    async jwt({token, account, profile, user}:any){
      if(account?.provider === 'credentials'){
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      if (account?.provider === 'google'){
        const data = {
          fullname:user.name,
          email:user.email,
          image:user.image,
          type:"Google",
          role:"member"
        };

        await signInWithGoogle(data, (result:{
          status:boolean;
          message:string;
          data:{
            email:string;
            fullname:string;
            type:string;
            role:string;
            image:string;
          };
        })=>{
          if(result.status){
            token.email = result.data.email;
            token.fullname = result.data.fullname;
            token.image = result.data.image;
            token.type = result.data.type;
            token.role = result.data.role
          }
        })

      }
      return token
    },
    async session({session, token}:any) {
      if ("email" in token){
        session.user.email = token.email
      }
      if ("fullname" in token){
        session.user.fullname = token.fullname
      }
      if ("image" in token){
        session.user.image = token.image
      }
      if ("role" in token){
        session.user.role = token.role
      }
      return session
    }
  },
  pages:{
    signIn:'/auth/login'
  }
}

export default NextAuth(authOptions)
