import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { supabase } from "./lib/supabaseClient";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn(user, account, profile, session) {
      try {
        // console.log("user in sign in", user.user);
        const { id, email, name, image } = user.user;
        const { data: userExists, error: userExistsError } = await supabase
          .from("users")
          .select("*")
          .eq("email", email);
        if (userExists.length === 0) {
          const { data, error } = await supabase.from("users").insert({
            email: email,
            name: name,
            image: image,
          });
          if (error) {
            throw error;
          }
          return true;
        } else {
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        try {
          // console.log("user in jwt", user);
          const { data, error } = await supabase
            .from("users")
            .select("id")
            .eq("email", user.email)
            .single();
          // console.log("data in session", data);
          if (error) {
            throw error;
          }
          token.id = data.id;
        } catch (error) {
          console.log(error);
        }
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
