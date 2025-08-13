"use client"

import * as React from "react"

type ScrollToTopButtonProps = React.ComponentProps<"button"> & {
  mobileOnly?: boolean
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  mobileOnly = true,
  onClick,
  children,
  ...props
}) => {
  const handleClick = React.useCallback<NonNullable<ScrollToTopButtonProps["onClick"]>>(
    (event) => {
      if (onClick) onClick(event)
      if (event.defaultPrevented) return

      if (typeof window === "undefined") return
      const shouldScroll = mobileOnly
        ? window.matchMedia("(max-width: 767px)").matches
        : true
      if (!shouldScroll) return

      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    [mobileOnly, onClick]
  )

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  )
}


