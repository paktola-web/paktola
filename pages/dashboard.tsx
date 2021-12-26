import React, { MouseEventHandler, useEffect, useState } from 'react';

import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

import { supabase } from '../src/utils/SupabaseClient';

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>();

  const handleLogOut: MouseEventHandler = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push('/signin');
    }
  };

  const createStripeAccount = async() => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/api/stripeFlow',
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const body = await response.json()
    window.location.href = body.url
  }

  useEffect(() => {
    const getProfile = () => {
      const profile = supabase.auth.user();

      if (profile) {
        setUser(profile);
      } else {
        router.push('/signin');
      }
    };

    getProfile();
  }, []);

  if (!user) {
    // Currently loading asynchronously User Supabase Information
    return null;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-2xl font-semibold text-white">
          *****Welcome, your email is {user.email}
          *****id is: {user.id}
          *****phone is {user.phone}
          *****phone: {user.phone}
          *****avatar: {user.user_metadata.avatar_url}
          *****email: {user.user_metadata.email}
          *****email verified: {user.user_metadata.email_verified}
          *****full name: {user.user_metadata.full_name}
          *****name: {user.user_metadata.name}
          *****picture: {user.user_metadata.picture}
          *****provider_id: {user.user_metadata.provider_id}
          *****sub: {user.user_metadata.sub}
        </h1>
        <button
          className="mt-6 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
          onClick={createStripeAccount}
        >
          Connect Stripe
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

export default Dashboard;
