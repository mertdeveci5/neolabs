import { useEffect, useMemo, useState } from "react"
import { SideDateTimeline } from "@/components/timeline/SideDateTimeline"
import type { TimelineEntry } from "@/components/timeline/TimelineTypes"
import { Button } from "@/components/ui/button"
import { labs, type LabProfile } from "@/data/labs"
import { companyNews, newsFetchedAt, type CompanyNewsItem } from "@/data/news.generated"
import { manualCompanyNews } from "@/data/news.manual"
import { cn } from "@/lib/utils"

export default function App() {
  const [query, setQuery] = useState("")
  const [selectedLabId, setSelectedLabId] = useState(labs[0]?.id ?? "")

  const visibleLabs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return labs.filter((lab) => {
      const matchesQuery =
        !normalizedQuery ||
        [lab.name, lab.websiteUrl, lab.linkedinUrl, getHostname(lab.websiteUrl)]
          .some((value) => value.toLowerCase().includes(normalizedQuery))

      return matchesQuery
    })
  }, [query])

  useEffect(() => {
    if (visibleLabs.some((lab) => lab.id === selectedLabId)) {
      return
    }

    setSelectedLabId(visibleLabs[0]?.id ?? labs[0]?.id ?? "")
  }, [selectedLabId, visibleLabs])

  const selectedLab = labs.find((lab) => lab.id === selectedLabId) ?? visibleLabs[0] ?? labs[0]

  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="grid min-h-svh grid-cols-1 lg:grid-cols-[minmax(360px,48vw)_minmax(0,1fr)]">
        <LabSidebar
          labs={visibleLabs}
          query={query}
          selectedLabId={selectedLab.id}
          onQueryChange={setQuery}
          onSelectLab={setSelectedLabId}
        />
        <LabDetail lab={selectedLab} />
      </div>
    </main>
  )
}

function LabSidebar({
  labs: visibleLabs,
  onQueryChange,
  onSelectLab,
  query,
  selectedLabId,
}: {
  labs: readonly LabProfile[]
  onQueryChange: (query: string) => void
  onSelectLab: (labId: string) => void
  query: string
  selectedLabId: string
}) {
  return (
    <aside className="h-[62svh] border-b border-border bg-background lg:sticky lg:top-0 lg:h-svh lg:border-b-0 lg:border-r">
      <div className="flex h-full min-h-0 flex-col">
        <div className="shrink-0 px-5 pb-5 pt-5 sm:px-7 sm:pt-7">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-3xl font-normal tracking-normal text-foreground sm:text-4xl">NeoLabs</h1>
              <p className="mt-2 text-muted-foreground text-sm leading-6">{labs.length} AI companies</p>
            </div>
          </div>

          <label className="block">
            <span className="sr-only">Search labs</span>
            <input
              className="h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
              placeholder="Search companies or websites"
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.currentTarget.value)}
            />
          </label>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-7 sm:px-7">
          {visibleLabs.length > 0 ? (
            <ul className="space-y-2">
              {visibleLabs.map((lab) => (
                <LabListRow
                  isSelected={lab.id === selectedLabId}
                  key={lab.id}
                  lab={lab}
                  onSelect={() => onSelectLab(lab.id)}
                />
              ))}
            </ul>
          ) : (
            <div className="rounded-md border border-dashed border-border bg-background px-4 py-8 text-center">
              <p className="text-sm text-foreground">No labs match this view.</p>
              <Button className="mt-3" size="xs" variant="outline" onClick={() => onQueryChange("")}>
                Clear search
              </Button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

function LabListRow({
  isSelected,
  lab,
  onSelect,
}: {
  isSelected: boolean
  lab: LabProfile
  onSelect: () => void
}) {
  return (
    <li className="group relative">
      <button
        aria-pressed={isSelected}
        className={cn(
          "block w-full cursor-pointer rounded-md border border-transparent bg-transparent px-3 py-3 text-left transition-colors duration-150 ease-in-out hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
          isSelected && "text-foreground",
        )}
        title={lab.name}
        type="button"
        onClick={onSelect}
      >
        <div className="flex w-full items-center gap-3">
          <LabLogo lab={lab} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="flex min-w-0 items-baseline">
              <span className="truncate text-sm leading-5 text-foreground transition-colors">{lab.name}</span>
              <span aria-hidden="true" className="ml-4 h-px min-w-8 flex-1 self-center border-b border-border" />
            </div>
          </div>
          {lab.websiteUrl ? (
            <span className="max-w-[42%] shrink-0 truncate text-muted-foreground text-sm leading-5">
              {getHostname(lab.websiteUrl)}
            </span>
          ) : null}
        </div>
      </button>
    </li>
  )
}

function LabDetail({ lab }: { lab: LabProfile }) {
  return (
    <section className="min-h-svh overflow-y-auto bg-background">
      <article className="mx-auto max-w-3xl px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
        <div className="flex items-start gap-4">
          <LabLogo lab={lab} size="lg" />
          <h2 className="min-w-0 text-4xl font-normal tracking-normal text-foreground sm:text-5xl">{lab.name}</h2>
        </div>

        <dl className="mt-8 grid max-w-xl grid-cols-[7rem_minmax(0,1fr)] gap-x-5 gap-y-3 border-y border-border py-5 text-sm">
          <DetailLink label="LinkedIn" href={lab.linkedinUrl} value={formatLinkedIn(lab.linkedinUrl)} />
          {lab.websiteUrl ? <DetailLink label="Website" href={lab.websiteUrl} value={formatWebsite(lab.websiteUrl)} /> : null}
        </dl>

        <p className="mt-8 max-w-2xl text-base leading-8 text-foreground">
          {lab.name} is listed in the NeoLabs company index. Use the links above as the source profile for this entry.
        </p>

        <section className="mt-10 max-w-2xl border-t border-border pt-7">
          <h3 className="mb-5 text-sm font-normal text-muted-foreground">News timeline</h3>
          <SideDateTimeline items={getNewsTimelineItems(lab)} />
        </section>
      </article>
    </section>
  )
}

function LabLogo({ lab, size }: { lab: LabProfile; size: "sm" | "lg" }) {
  const logoUrl = getLabLogoUrl(lab)

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-secondary font-normal text-muted-foreground",
        size === "lg" ? "size-12 text-sm sm:size-14 sm:text-base" : "size-7 text-[10px]",
      )}
    >
      <span>{getLabInitials(lab.name)}</span>
      {logoUrl ? (
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full bg-background object-contain"
          decoding="async"
          loading="lazy"
          referrerPolicy="no-referrer"
          src={logoUrl}
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
        />
      ) : null}
    </span>
  )
}

function DetailLink({ href, label, value }: { href: string; label: string; value: string }) {
  return (
    <>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="min-w-0">
        <a
          className="block truncate text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {value}
        </a>
      </dd>
    </>
  )
}

function getLabLogoUrl(lab: LabProfile) {
  if (!lab.websiteUrl) {
    return ""
  }

  return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(lab.websiteUrl)}&sz=128`
}

function getLabInitials(name: string) {
  const words = name
    .replace(/\([^)]*\)/g, "")
    .split(/[^a-z0-9]+/i)
    .filter(Boolean)

  if (words.length === 0) {
    return "?"
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

function formatLinkedIn(linkedinUrl: string) {
  return linkedinUrl.replace(/^https:\/\/www\./, "")
}

function formatWebsite(websiteUrl: string) {
  return websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
}

function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

function getNewsTimelineItems(lab: LabProfile): TimelineEntry[] {
  const items = getMergedNewsItems(lab.id)
  if (items.length === 0) {
    return [
      {
        id: "empty-news",
        title: "No qualified timeline items",
        description: "No first-party, investor, or reputable publication items were found for this company.",
      },
    ]
  }

  return items.map((item) => ({
    id: item.id,
    date: item.date || item.source || "News",
    title: item.title,
    description: <NewsTimelineDescription item={item} />,
  }))
}

function getMergedNewsItems(labId: string) {
  const itemsByLink = new Map<string, { index: number; item: CompanyNewsItem }>()
  const mergedItems = [...(manualCompanyNews[labId] ?? []), ...(companyNews[labId] ?? [])]

  mergedItems.forEach((item, index) => {
    const key = item.link.trim()
    if (!key || itemsByLink.has(key)) {
      return
    }

    itemsByLink.set(key, { index, item })
  })

  return [...itemsByLink.values()]
    .sort((left, right) => {
      const rightTime = getNewsDateTime(right.item.date)
      const leftTime = getNewsDateTime(left.item.date)

      if (rightTime !== leftTime) {
        return rightTime - leftTime
      }

      return left.index - right.index
    })
    .map(({ item }) => item)
}

function getNewsDateTime(date: string) {
  const trimmedDate = date.trim()
  if (!trimmedDate) {
    return Number.NEGATIVE_INFINITY
  }

  const absoluteTime = Date.parse(trimmedDate)
  if (!Number.isNaN(absoluteTime)) {
    return absoluteTime
  }

  const relativeMatch = trimmedDate.match(/^(\d+|a|an)\s+(minute|hour|day|week|month|year)s?\s+ago$/i)
  if (!relativeMatch) {
    return Number.NEGATIVE_INFINITY
  }

  const amount = relativeMatch[1].toLowerCase() === "a" || relativeMatch[1].toLowerCase() === "an"
    ? 1
    : Number(relativeMatch[1])
  const unit = relativeMatch[2].toLowerCase()
  const baseTime = Date.parse(newsFetchedAt)

  if (Number.isNaN(amount) || Number.isNaN(baseTime)) {
    return Number.NEGATIVE_INFINITY
  }

  const multipliers: Record<string, number> = {
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000,
  }

  return baseTime - amount * multipliers[unit]
}

function NewsTimelineDescription({ item }: { item: CompanyNewsItem }) {
  return (
    <div className="space-y-1">
      {item.source ? <p className="text-xs text-muted-foreground">{item.source}</p> : null}
      {item.snippet ? <p>{item.snippet}</p> : null}
      <a
        className="inline-flex text-xs text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        href={item.link}
        rel="noreferrer"
        target="_blank"
      >
        Read source
      </a>
    </div>
  )
}
