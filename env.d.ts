declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_API_URL: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
  }
}
