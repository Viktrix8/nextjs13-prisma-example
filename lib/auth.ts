import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error(
    "GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be set in .env.local"
  );
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId,
      clientSecret,
    }),
  ],
};
