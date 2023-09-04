declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      COINAPI_KEY: string;
    }
  }
}
export {};
