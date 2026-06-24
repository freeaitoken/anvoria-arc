import { useEffect, useRef, useState, ReactNode, ElementType } from "react";
import { cn } from "../utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}

export default function Reveal({ children, className, delay = 0, y = 24, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={cn("reveal-text", visible && "is-visible", className)}
      style={{
        transitionDelay: `${delay}ms`,
        ["--tw-translate-y" as any]: visible ? "0px" : `${y}px`,
      }}
    >
      {children}
    </Component>
  );
}