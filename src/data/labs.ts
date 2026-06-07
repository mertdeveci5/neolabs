import companiesCsv from "../../neolabs_company_websites.csv?raw"
import { companyDescriptions } from "./descriptions.generated"
import { manualCompanyDescriptions } from "./descriptions.manual"

export type LabProfile = {
  description: string
  id: string
  name: string
  websiteUrl: string
  linkedinUrl: string
}

export const labs: readonly LabProfile[] = parseCompaniesCsv(companiesCsv)

function parseCompaniesCsv(csv: string): readonly LabProfile[] {
  return csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const [name = "", websiteUrl = "", linkedinUrl = ""] = line.split(",").map((value) => value.trim())
      const normalizedWebsiteUrl = isLinkedInUrl(websiteUrl) ? "" : websiteUrl
      const id = slugify(name)

      return {
        description: manualCompanyDescriptions[id] ?? companyDescriptions[id] ?? "",
        id,
        linkedinUrl,
        name,
        websiteUrl: normalizedWebsiteUrl,
      }
    })
    .filter((company) => company.name)
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function isLinkedInUrl(value: string) {
  try {
    return new URL(value).hostname.replace(/^www\./, "") === "linkedin.com"
  } catch {
    return false
  }
}
