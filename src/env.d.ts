/// <reference types="astro/client" />

interface ImportMetaEnv {
  ASTRO_SITE_URL: string;
  ASTRO_SITE_NAME: string;
}

interface ImportMeta {
  readonly env: Readonly<ImportMetaEnv>;
}
