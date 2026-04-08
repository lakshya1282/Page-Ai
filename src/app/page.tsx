import { HomePage } from "@/components/HomePage";
import { loadPages } from "@/data/loadPages";

export default async function Home() {
  const pages = await loadPages();

  return <HomePage pages={pages} />;
}
