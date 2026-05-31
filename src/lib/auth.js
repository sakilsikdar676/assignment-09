import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("DriveFleet");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  
  emailAndPassword: { 
    enabled: true, 
  },
  
  // ১. সোশ্যাল প্রোভাইডার শুধু মাত্র থার্ড-পার্টি লগইন হ্যান্ডেল করবে
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },

  // ২. সেশন কনফিগারেশন এখন মেইন অবজেক্টের অধীনে (আলাদা)
  session: { 
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 60 * 60 * 24 * 30
    }
  },

  // ৩. প্লাগইনস এখন মেইন অবজেক্টের অধীনে (আলাদা)
  plugins: [
    jwt()
  ]
});