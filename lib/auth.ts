import {NextAuthOptions, User, getServerSession} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt'
import { db } from './db';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials"



export const authConfig: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
                 async authorize(credentials){
                    if(!credentials || !credentials.email || credentials.password)
                    return null

                    const dbUser = await db.user.findFirst({
                        where: {email: credentials.email}
                    })

                    const existingUser = await db.user.findUnique({
                        where: {email: credentials?.email}
                    })
                    if(!existingUser){
                        return null
                    }
                    const passwordMatch = await compare(credentials.password, existingUser.password)
                 }, 
            }),
            GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        
        })
    ],

    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
     debug: process.env.NODE_ENV === 'development',
        
}


