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

type SideDateTimelineProps = {
  items: TimelineEntry[]
  activeStep?: number
  className?: string
}

export function SideDateTimeline({ items, activeStep, className }: SideDateTimelineProps) {
  return (
    <Timeline defaultValue={activeStep ?? items.length} className={className}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          step={index + 1}
          className="sm:group-data-[orientation=vertical]/timeline:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator />
            {item.date ? (
              <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-right">
                {item.date}
              </TimelineDate>
            ) : null}
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          {item.description ? <TimelineContent>{item.description}</TimelineContent> : null}
        </TimelineItem>
      ))}
    </Timeline>
  )
}
