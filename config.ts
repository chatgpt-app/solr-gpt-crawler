import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://redis.io/docs/",
  match: "https://redis.io/docs/**",
  maxPagesToCrawl: 10000,
  outputFileName: "output.json",
  selector: `.prose.prose-slate.w-full`,
  waitForSelectorTimeout: 3000,
};
