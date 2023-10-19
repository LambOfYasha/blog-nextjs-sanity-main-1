import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials"
import { User } from "sanity"
import { NextAuthOptions } from "next-auth"

const prisma = new PrismaClient()
export const authConfig: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "ABStudios",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                if(!credentials || !credentials.email || !credentials.password)
                return null

                const dbUser = await prisma.user.findFirst({
                    where: {email: credentials.email},
                })


                if(dbUser && dbUser.password === credentials.password){
                    const{ password, createdAt, id, ...dbUserWithoutPassword } = dbUser
                    return dbUserWithoutPassword as User
                }

                return null
            },
        }),
        GoogleProvider(
        {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        
        }
    )],
}
