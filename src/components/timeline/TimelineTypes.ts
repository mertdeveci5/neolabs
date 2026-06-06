import type React from "react"

export type TimelineItemId = string | number

export type TimelineEntry = {
  id: TimelineItemId
  title: string
  description?: React.ReactNode
  date?: React.ReactNode
}

export type LogTimelineEntry = {
  id: TimelineItemId
  description: string
  date: Date | string
}
