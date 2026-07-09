import * as React from "react"

import { cn } from "@/lib/utils"

const cardVariantStyles = {
  default:
    "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  glass:
    "group/card flex flex-col gap-4 overflow-hidden rounded-2xl glass-card text-sm text-card-foreground has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  "premium-outer":
    "h-full group p-1.5 rounded-[2rem] bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black/[0.05] dark:hover:bg-white/[0.04]",
  "premium-highlighted":
    "h-full p-2 rounded-[2.5rem] bg-gradient-to-b from-black/5 to-transparent dark:from-white/10 dark:to-white/5 border border-black/10 dark:border-white/20 shadow-2xl relative",
}

function Card({
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm"; variant?: "default" | "glass" | "premium-outer" | "premium-highlighted" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      className={cn(cardVariantStyles[variant] || cardVariantStyles.default, className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

const cardContentVariantStyles = {
  default: "px-4 group-data-[size=sm]/card:px-3",
  "premium-inner":
    "h-full p-8 rounded-[calc(2rem-0.375rem)] bg-white/60 dark:bg-[#0A0A0A]/40 backdrop-blur-2xl border border-black/5 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col",
  "premium-inner-highlighted":
    "p-10 h-full rounded-[calc(2.5rem-0.5rem)] bg-white/60 dark:bg-[#0A0A0A]/40 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex flex-col",
}

function CardContent({ className, variant = "default", ...props }: React.ComponentProps<"div"> & { variant?: "default" | "premium-inner" | "premium-inner-highlighted" }) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariantStyles[variant] || cardContentVariantStyles.default, className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
