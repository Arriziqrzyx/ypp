import { cn } from "../../utils/cn";

export function Container({ children, className, as: Component = "div" }) {
  return (
    <Component className={cn("w-full max-w-7xl mx-auto px-6 md:px-12", className)}>
      {children}
    </Component>
  );
}
