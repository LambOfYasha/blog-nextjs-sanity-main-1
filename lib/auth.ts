import type { NextAuthOptions } from "next-auth";
import Auth0Provider from 'next-auth/providers/auth0';
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER
    })
  ],
  // Use JWT strategy instead of database
  session: {
    strategy: 'jwt'
  },
  // Add any additional configuration here
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;