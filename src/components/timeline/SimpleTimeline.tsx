import {
  Timeline,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"
import type { TimelineEntry } from "./TimelineTypes"

type SimpleTimelineProps = {
  items: TimelineEntry[]
  activeStep?: number
  className?: string
}

export function SimpleTimeline({ items, activeStep, className }: SimpleTimelineProps) {
  return (
    <Timeline defaultValue={activeStep ?? items.length} className={className}>
      {items.map((item, index) => (
        <TimelineItem key={item.id} step={index + 1}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineTitle className="-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
