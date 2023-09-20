declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      COINAPI_KEY: string;
      BACKEND_MAIL_ENDPOINT: string;
      MAPBOX_KEY: string;
      GEOAPIFY_KEY: string;
      GEOAPIFY_DEFAULT_PLACE_ID: string;
    }
  }
}
export {};
