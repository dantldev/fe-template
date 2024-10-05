import { PropsWithChildren } from "react";

import { Navigation } from "@/components/Navigation";
import { config } from "@/config";

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div
      className="min-h-screen flex flex-col bg-background"
      style={{
        marginLeft: config.ui.sidebarWidth,
      }}
    >
      <Navigation />
      {props.children}
    </div>
  )
}