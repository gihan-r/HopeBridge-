import React from "react";

import { cn } from "@/lib/utils";

export const ShimmerButton = ({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  borderRadius = "100px",
  ...props
}) => {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black px-8 py-4 text-white transition-all hover:border-white/20 hover:text-black",
        className
      )}
      style={{
        "--spread": "1em",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden [--container-size:100%]"
        style={{
          "--container-size": "100%",
        }}
      >
        <div
          className="absolute inset-0 animate-shimmer-slide bg-gradient-to-r from-transparent via-[var(--shimmer-color)] to-transparent"
          style={{
            "--shimmer-size": "var(--container-size)",
            "--shimmer-spread": "var(--spread)",
            "--shimmer-duration": "var(--speed)",
          }}
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-[var(--bg)] transition-colors duration-300 group-hover:bg-white" />
      <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 animate-spin-around bg-gradient-to-r from-transparent via-[var(--shimmer-color)] to-transparent"
          style={{
            "--shimmer-size": "var(--container-size)",
            "--shimmer-spread": "var(--spread)",
            "--shimmer-duration": "var(--speed)",
          }}
        />
      </div>
      <div className="relative">{children}</div>
    </button>
  );
};

ShimmerButton.displayName = "ShimmerButton";
