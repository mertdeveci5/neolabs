import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"
import { cn } from "@/lib/utils"
import type { TimelineEntry } from "./TimelineTypes"

type InlineDateTimelineProps = {
  items: TimelineEntry[]
  activeStep?: number
  className?: string
  density?: "compact" | "default"
}

export function InlineDateTimeline({
  items,
  activeStep,
  className,
  density = "default",
}: InlineDateTimelineProps) {
  const isCompact = density === "compact"

  return (
    <Timeline defaultValue={activeStep ?? items.length} className={cn(isCompact && "gap-0", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          className={cn(
            isCompact &&
              "group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:not-last:pb-3",
          )}
          step={index + 1}
        >
          <TimelineHeader className="min-w-0">
            <TimelineSeparator
              className={cn(
                isCompact &&
                  "group-data-[orientation=vertical]/timeline:-left-4 group-data-[orientation=vertical]/timeline:h-[calc(100%-0.625rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-3.5",
              )}
            />
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <TimelineTitle
                className={cn(
                  isCompact
                    ? "-mt-1 text-muted-foreground text-[11px] leading-4 tracking-normal"
                    : "-mt-0.5",
                )}
              >
                {item.title}
              </TimelineTitle>
              {item.date ? (
                <TimelineDate className={cn(isCompact ? "m-0 text-[10px] leading-4" : "m-0")}>
                  {item.date}
                </TimelineDate>
              ) : null}
            </div>
            <TimelineIndicator
              className={cn(
                isCompact &&
                  "group-data-[orientation=vertical]/timeline:-left-4 size-2.5 border-border bg-background group-data-completed/timeline-item:border-border group-data-completed/timeline-item:bg-muted group-data-completed/timeline-item:bg-none group-data-completed/timeline-item:shadow-none",
              )}
            />
          </TimelineHeader>
          {item.description ? (
            <TimelineContent className={cn(isCompact && "mt-1 text-[11px] leading-4")}>
              {item.description}
            </TimelineContent>
          ) : null}
        </TimelineItem>
      ))}
    </Timeline>
  )
}
