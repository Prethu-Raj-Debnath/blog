import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/src/index"; // your drizzle instance

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    appName: "Next JS Blog",
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BASE_URL,
    emailAndPassword:{
        enabled:true,
        requireEmailVerification:false,
        minPasswordLength:6,
        maxPasswordLength:128,
        autoSignIn:false
    },
    session:{
        expiresIn: 60*50*24*7,
        updateAge:60*60*24,
        cookieCache:{
            enabled:true,
            maxage:60*5
        },
        disableSessionRefresh:true,
        
    },
    advanced:{
        useSecureCookies: process.env.NODE_ENV==='production',
        defaultCookieAttributes:{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production'
        }
    }
});