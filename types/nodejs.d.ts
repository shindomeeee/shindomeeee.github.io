declare module NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    FACEBOOK_APP_ID: string;
    SELF_DOMAIN: string;
  }
}

declare var process: NodeJS.Process;
