"use client"

import { useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "./utils"

type CardProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
}

export const CardFeature = <T extends ElementType = "div">({
  as,
  children,
  className,
}: CardProps<T>): JSX.Element => {
  const Component = as || "div"
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const refComponent = useRef<HTMLDivElement>(null)

  return (
    <Component
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={refComponent}
      className={cn(
        "relative rounded-3xl overflow-hidden border transition-colors duration-700 bg-black",
        isHovered ? "border-white" : "border-[#383838]",
        className,
      )}
    >
      <div className="absolute top-0 flex w-full justify-center">
        <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
      </div>

      <div className="p-6">{children}</div>
    </Component>
  )
}
