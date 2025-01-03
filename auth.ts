import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from 'next-auth/providers/credentials';

// Although we're using the Credentials provider, it's generally recommended 
//   to use alternative providers such as OAuth or email providers. See the NextAuth.js docs for a full list of options.

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({})],
});