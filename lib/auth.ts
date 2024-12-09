import {NextAuthOptions} from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { db } from './db';
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
            issuer: process.env.AUTH0_ISSUER_BASE_URL,
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH0_SECRET,
    debug: process.env.NODE_ENV === 'development',
}

export default authOptions