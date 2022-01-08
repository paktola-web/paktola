import React, { MouseEventHandler, useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";

import { supabase } from "../../src/utils/SupabaseClient";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>();
  const [link, setLink] = useState<User | null>();

  const handleLogOut: MouseEventHandler = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/signin");
    }
  };

  const createStripeAccount = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/stripeFlow",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const body = await response.json();
    console.log("body", body);
    window.location.href = body.url;
    saveProfile();
  };

  useEffect(() => {
    const getProfile = () => {
      const profile = supabase.auth.user();

      if (profile) {
        setUser(profile);
      } else {
        router.push("/signin");
      }
    };

    getProfile();
  }, []);

  if (!user) {
    // Currently loading asynchronously User Supabase Information
    return null;
  }

  const saveProfile = async () => {
    console.log("link", link);
    try {
      const { data, error } = await supabase.from("profiles").insert([
        {
          id: user.id,
          email: user.user_metadata.email,
          avatar_url: user.user_metadata.avatar_url,
        },
      ]);
      console.log(data, error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-2xl font-semibold text-white">
          *****Welcome, USER OBJECT...{user.id}
        </h1>
        <button
          className="mt-6 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
          onClick={createStripeAccount}
        >
          Connect to Stripe
        </button>

        <button
          className="mt-6 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const {google} = require('googleapis');
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_REDIRECT_URL
  );

  // generate a url that asks permissions for blogger and google calendar scopes
  const scopes = [
    "https://www.googleapis.com/auth/blogger",
    "https://www.googleapis.com/auth/calendar",
  ];

  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "online",

    // if you only need one scope you can pass it as a string
    scope: scopes,
  });
  console.log("url", url);
  return {
    props: { url }, // will be passed to the page component as props
  }
}



export default Dashboard;
