declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COINAPI_KEY: string;
    }
  }
}
export {};
