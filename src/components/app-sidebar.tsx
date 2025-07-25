import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      items: [
        {
          title: "Messages",
          url: "/messages",
        },
        {
          title: "Insights",
          url: "/insights",
        },
        {
          title: "AI Chat",
          url: "/chat",
        },
         {
          title: "Analyzer",
          url: "/analyzer",
        },
        {
          title: "Chart Example",
          url: "/chart-example",
        },
         {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "Conversations",
          url: "/conversations",
        },
        {
          title: "Conversations Fixed",
          url: "/conversations-fixed",
        },
        {
          title: "Dashboard",
          url: "/dashboard",
        },
         {
          title: "Dashboard 2",
          url: "/dashboard2",
        },
        {
          title: "Messages Fixed",
          url: "/messages-fixed",
        },
        {
          title: "Relationship Dashboard",
          url: "/relationship-dashboard",
        },
        {
          title: "Timeline",
          url: "/timeline",
        },
        {
          title: "Timeline",
          url: "/timeline-dashboard",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Analyzer",
          url: "/analyzer",
        },
        {
          title: "Data Fetching",
          url: "/timeline",
          isActive: true,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
