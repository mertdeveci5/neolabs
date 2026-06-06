import { Timeline, TimelineContent, TimelineDate, TimelineItem } from "@/components/ui/timeline"
import type { LogTimelineEntry } from "./TimelineTypes"

type LogTimelineProps = {
  items: LogTimelineEntry[]
  className?: string
}

function formatLogDate(value: Date | string): string {
  if (typeof value === "string") {
    return value
  }

  const date = value.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  const time = value.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
  })
  return `${date} · ${time}`
}

export function LogTimeline({ items, className }: LogTimelineProps) {
  return (
    <Timeline className={className ?? "divide-border/60 divide-y rounded-lg border border-border/60 bg-card"}>
      {items.map((item, index) => (
        <TimelineItem key={item.id} step={index + 1} className="m-0! px-4! py-3!">
          <TimelineContent className="text-foreground tracking-tight">
            {item.description}
            <TimelineDate className="mt-1 font-mono text-[11px]">{formatLogDate(item.date)}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
