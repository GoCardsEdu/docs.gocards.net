import { redirect } from "next/navigation";

export default function Home() {
  redirect("/docs/sync-export-import/sync-cards");
  return null;
}
