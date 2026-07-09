import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos, error } = await supabase
    .from("todos")
    .select();

  console.log("Data:", todos);
  console.log("Error:", error);

  return (
    <main style={{ padding: "20px", color: "white" }}>
      <h1>Supabase Connection Test</h1>

      <h2>Data</h2>
      <pre>{JSON.stringify(todos, null, 2)}</pre>

      <h2>Error</h2>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </main>
  );
}