import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";

import { env } from "@/env.mjs";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    type: "user" | "organisation";
    orgType?:
      | "OLDAGE_HOME"
      | "ANIMAL_CARE"
      | "ADOPTION_CENTER"
      | "SPECIAL_SCHOOLS";
    phone?: string;
    address?: string;
    coordinates?: [number, number];
    description?: string;
    documents?: string[];
  }
}

/**
 * Module augmentation for `next-auth/jtw` types. Allows us to add custom properties to the `jwt`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    type: "user" | "organisation";
    orgType?:
      | "OLDAGE_HOME"
      | "ANIMAL_CARE"
      | "ADOPTION_CENTER"
      | "SPECIAL_SCHOOLS";
    phone?: string;
    address?: string;
    coordinates?: [number, number];
    description?: string;
    documents?: string[];
  }
}

type userDataType = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type orgDataType = {
  id: string;
  name: string;
  email: string;
  password: string;
  type: "OLDAGE_HOME" | "ANIMAL_CARE" | "ADOPTION_CENTER" | "SPECIAL_SCHOOLS";
  phone: string;
  address: string;
  coordinates: [number, number];
  description: string;
  documents: string[];
};

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
        role: {
          label: "Role",
          type: "text",
          placeholder: "Role",
        },
        name: {
          label: "Name",
          type: "text",
          placeholder: "Name",
        },
        phone: {
          label: "Phone",
          type: "text",
          placeholder: "Phone",
        },
        address: {
          label: "Address",
          type: "text",
          placeholder: "Address",
        },
        coordinates: {
          label: "Coordinates",
          type: "text",
          placeholder: "Coordinates",
        },
        description: {
          label: "Description",
          type: "text",
          placeholder: "Description",
        },
        orgType: {
          label: "Organisation Type",
          type: "text",
          placeholder: "Organisation Type",
        },
        isLogin: {
          label: "Login",
          type: "text",
          placeholder: "Is Login",
        },
        documents: {
          label: "Documents",
          type: "text",
          placeholder: "Documents",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        if (credentials.isLogin === "true") {
          if (credentials.role === "user") {
            const res = await axios.get(
              `https://bright-pathways-backend.onrender.com/mongo/user/email/${credentials.email}`,
            );
            const user = res.data as userDataType;
            if (user.password === credentials.password) {
              return {
                ...user,
                type: "user",
              };
            }
          } else if (credentials.role === "organisation") {
            const res = await axios.get(
              `https://bright-pathways-backend.onrender.com/mongo/organisation/email/${credentials.email}`,
            );
            const user = res.data as orgDataType;
            if (user.password === credentials.password) {
              return {
                ...user,
                orgType: user.type,
                type: "organisation",
              };
            }
          }
        } else {
          if (credentials.role === "user") {
            const dataToSend = {
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
            };
            const res = await axios.post(
              `https://bright-pathways-backend.onrender.com/mongo/user`,
              dataToSend,
            );
            const user = res.data as userDataType;
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              type: "user",
            };
          } else if (credentials.role === "organisation") {
            const dataToSend = {
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
              phone: credentials.phone,
              address: credentials.address,
              coordinates: credentials.coordinates,
              description: credentials.description,
              type: credentials.orgType,
              documents: credentials.documents,
            };
            const res = await axios.post(
              `https://bright-pathways-backend.onrender.com/mongo/organisation`,
              dataToSend,
            );
            const user = res.data as orgDataType;
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              type: "organisation",
              orgType: user.type,
              phone: user.phone,
              address: user.address,
              coordinates: user.coordinates,
              description: user.description,
              documents: user.documents,
            };
          }
        }
        return null;
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 14 * 24 * 60 * 60,
  },
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          address: token.address,
          coordinates: token.coordinates,
          description: token.description,
          orgType: token.orgType,
          phone: token.phone,
          type: token.type,
          documents: token.documents,
        };
      }
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        const data = {
          id: user.id,
          name: user.name,
          email: user.email,
          address: user.address,
          coordinates: user.coordinates,
          description: user.description,
          orgType: user.orgType,
          phone: user.phone,
          type: user.type,
          documents: user.documents,
        };
        return Promise.resolve(data);
      } else {
        const data = {
          id: token.id,
          name: token.name,
          email: token.email,
          address: token.address,
          coordinates: token.coordinates,
          description: token.description,
          orgType: token.orgType,
          phone: token.phone,
          type: token.type,
          documents: token.documents,
        };
        return Promise.resolve(data);
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
