import { Outlet, useLocation } from "react-router";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
