declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      COINAPI_KEY: string;
      BACKEND_MAIL_ENDPOINT: string;
    }
  }
}
export {};
