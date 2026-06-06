import type React from "react"
import { cn } from "@/lib/utils"

export function Spinner({
  className,
  ...props
}: React.ComponentProps<"span">): React.ReactElement {
  return (
    <span
      aria-label="Loading"
      className={cn(
        "size-4 rounded-full border-2 border-current border-t-transparent opacity-80 animate-spin",
        className,
      )}
      role="status"
      {...props}
    />
  )
}
