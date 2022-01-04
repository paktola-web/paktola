/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://nojsmjwkbcjqbhxxifix.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDAzODY1NSwiZXhwIjoxOTU1NjE0NjU1fQ.tSO4eAgT-NccwnRdPhq8hngMKFee8xrt85bHx3fZ_qc",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_live_51Hat3lCVMq9HG80Z5pnWMIihWt8LZHWrrw0lOAo0i8i5hjU5uvsK9NZ16cyOUqaXMhIcsWuoBVXRpaEfydpFrmpO00E9D2iVQA",
    STRIPE_SECRET_KEY:
      "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",
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
    NEXT_PUBLIC_STRIPE_OAUTH_CLIENT_ID: "ca_IO6W8VnnXXZt0tdMlTRRK770KpybHnOz",

    NEXT_PUBLIC_BASE_URL_PROD: "https://paktola.com",
    NEXT_PUBLIC_STRIPE_OAUTH_CLIENT_ID_PROD:
      "ca_IO6WU7jJmz9buxzNNgiv5UaDJFmye0zY",

    GOOGLE_CLIENT_ID:
      "67952903173-jq75or298f2bvsuq04n1if2iso6d2lr2.apps.googleusercontent.com",
    GOOGLE_API_KEY: "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",
    GOOGLE_REDIRECT_URL: "http://localhost:3000/api/oauth2callback",
  },
};
