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
import type { TimelineEntry } from "./TimelineTypes"

type DatedTimelineProps = {
  items: TimelineEntry[]
  activeStep?: number
  className?: string
}

export function DatedTimeline({ items, activeStep, className }: DatedTimelineProps) {
  return (
    <Timeline defaultValue={activeStep ?? items.length} className={className}>
      {items.map((item, index) => (
        <TimelineItem key={item.id} step={index + 1}>
          <TimelineHeader>
            <TimelineSeparator />
            {item.date ? <TimelineDate>{item.date}</TimelineDate> : null}
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          {item.description ? <TimelineContent>{item.description}</TimelineContent> : null}
        </TimelineItem>
      ))}
    </Timeline>
  )
}
