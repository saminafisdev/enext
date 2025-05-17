"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectRouteProps {
  children: React.ReactNode;
}

const ProtectRoute = ({ children }: ProtectRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      router.replace("/signIn");
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectRoute;
