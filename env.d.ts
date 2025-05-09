/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_IS_DEV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css" {}
declare module "*.scss" {}
declare module "*.png" {}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.js" {
  const properties: Record<string, string | boolean>;
  export default properties;
}
