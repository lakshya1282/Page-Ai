import { readFile } from "node:fs/promises";
import path from "node:path";
import pagesData from "@/data/pages.json";
import { type PageData } from "@/components/PageCard";

type RawPageData = Omit<PageData, "prompt"> & {
  prompt?: string;
  promptPath?: string;
};

export async function loadPages(): Promise<PageData[]> {
  const entries = pagesData as RawPageData[];

  return Promise.all(
    entries.map(async (entry) => {
      const prompt =
        entry.promptPath != null
          ? await readFile(path.join(process.cwd(), entry.promptPath), "utf8")
          : (entry.prompt ?? "");

      if (entry.isPremium) {
        return {
          ...entry,
          prompt: "",
        };
      }

      return {
        ...entry,
        prompt,
      };
    }),
  );
}
