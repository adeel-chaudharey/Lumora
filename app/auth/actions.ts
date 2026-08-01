"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

 const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  redirect("/auth/login");
}

const { data: customer } = await supabase
  .from("customers")
  .select("role")
  .eq("id", user.id)
  .single();

if (customer?.role === "admin") {
  redirect("/admin/dashboard");
}

redirect("/");
}
export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  if (data.user) {
    await supabase.from("customers").insert({
      id: data.user.id,
      email: data.user.email,
      full_name: "",
      role: "customer",
    });
  }

  redirect("/auth/login");
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/auth/login");
}