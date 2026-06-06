import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-normal text-base outline-none transition-all duration-150 ease-in-out before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 data-loading:select-none data-loading:text-transparent sm:text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-9 px-3 sm:h-8",
        sm: "h-8 gap-1.5 px-2.5 sm:h-7",
        xs: "h-7 gap-1 rounded-md px-2 text-sm before:rounded-[calc(var(--radius-md)-1px)] sm:h-6 sm:text-xs",
        icon: "size-9 sm:size-8",
        "icon-sm": "size-8 sm:size-7",
        "icon-xs": "size-7 rounded-md before:rounded-[calc(var(--radius-md)-1px)] sm:size-6",
      },
      variant: {
        default:
          "border-[oklch(0.53_0.25_265.05)] bg-[linear-gradient(180deg,oklch(0.67_0.19_263),oklch(0.59_0.26_263)_62%,oklch(0.64_0.22_263))] text-white shadow-[inset_0_1px_0_oklch(1_0_0/0.2),inset_0_-1px_0_oklch(0_0_0/0.2),0_1px_2px_oklch(0_0_0/0.2)] [text-shadow:0_1px_rgb(0_11_15/0.4)] hover:border-[oklch(0.50_0.26_265.05)] hover:brightness-[0.98] active:translate-y-px",
        outline:
          "border-input bg-card text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-accent active:bg-accent/80",
        ghost:
          "border-transparent text-foreground hover:bg-accent hover:text-secondary-foreground active:bg-accent/80",
        link: "border-transparent px-0 text-[oklch(0.50_0.18_252)] underline-offset-4 hover:underline focus-visible:ring-[oklch(0.67_0.19_263)]",
      },
    },
  },
)

export interface ButtonProps extends useRender.ComponentProps<"button"> {
  loading?: boolean
  size?: VariantProps<typeof buttonVariants>["size"]
  variant?: VariantProps<typeof buttonVariants>["variant"]
}

export function Button({
  children,
  className,
  disabled: disabledProp,
  loading = false,
  render,
  size,
  variant,
  ...props
}: ButtonProps): React.ReactElement {
  const isDisabled = Boolean(loading || disabledProp)
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] = render ? undefined : "button"

  const defaultProps = {
    children: (
      <>
        {children}
        {loading ? <Spinner className="pointer-events-none absolute" data-slot="button-loading-indicator" /> : null}
      </>
    ),
    className: cn(buttonVariants({ className, size, variant })),
    "aria-disabled": loading || undefined,
    "data-loading": loading ? "" : undefined,
    "data-slot": "button",
    disabled: isDisabled,
    type: typeValue,
  }

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  })
}
