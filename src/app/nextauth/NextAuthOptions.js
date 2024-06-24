import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (email === "imgeekabhi@gmail.com" && password === "123456") {
          return {
            id: 1,
            userName: "Abhishek Sharma",
            email: "imgeekabhi@gmail.com",
          };
        } else {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
