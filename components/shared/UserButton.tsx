"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const UserButton = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching user login status
    const accessToken = localStorage.getItem("accessToken");
    const username = localStorage.getItem("userName");

    if (accessToken) {
      // Replace with actual API call to fetch user details
      setUser(username); // Replace "User" with the actual username
    } else {
      setUser(null);
    }
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white hover:bg-black hover:text-white">
            {user ? (
              `Hello, ${user}`
            ) : (
              <Link href="/auth/signIn">Hello, Sign In</Link>
            )}
          </NavigationMenuTrigger>
          {user && (
            <NavigationMenuContent>
              <NavigationMenuLink>Profile</NavigationMenuLink>
              <NavigationMenuLink>Logout</NavigationMenuLink>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default UserButton;
