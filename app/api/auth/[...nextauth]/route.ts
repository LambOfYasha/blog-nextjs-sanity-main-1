import NextAuth from "next-auth"
import authOptions from "../../../../lib/auth" // Your auth configuration

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }