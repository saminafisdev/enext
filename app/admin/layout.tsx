import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between w-screen">
          <div className="flex items-center">
            <NavigationMenuItem>
              <Link href="/docs" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Overview
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Orders
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Users
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Settings
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
          <div>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Hello, John1
                <br />
                Account and Orders
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
