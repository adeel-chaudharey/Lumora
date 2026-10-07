import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Lumora",
  description: "Lumora admin dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
