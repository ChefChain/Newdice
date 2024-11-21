"use client";
import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { AuthUserProvider } from "@/context/AuthUserContext";
import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

  const isAuthRoute = pathname.includes("/auth");

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="dark">
        <div className="dark:bg-background dark:text-bodydark">
          <AuthUserProvider>
            {isAuthRoute ? (
              <>{children}</>
            ) : (
              <DefaultLayout>{loading ? <Loader /> : children}</DefaultLayout>
            )}
          </AuthUserProvider>
        </div>
      </body>
    </html>
  );
}
