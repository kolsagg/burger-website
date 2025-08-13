"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const handleTabsListClick = React.useCallback<NonNullable<React.ComponentProps<typeof TabsPrimitive.List>["onClick"]>>(
    (event) => {
      if (onClick) onClick(event)
      if (event.defaultPrevented) return

      const target = event.target as HTMLElement | null
      const clickedTab = target?.closest('[role="tab"]')
      if (!clickedTab) return

      if (typeof window === "undefined") return
      const isMobile = window.matchMedia("(max-width: 767px)").matches
      if (!isMobile) return

      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    [onClick]
  )
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground flex min-h-9 w-full items-center rounded-lg p-[3px] gap-1 overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      {...props}
      onClick={handleTabsListClick}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-8 md:flex-1 shrink-0 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
