import { forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {
  focusOnMount?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ focusOnMount, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "bg-black outline-none focus:ring-0 border border-bb-cursor caret-bb-cursor",
          className
        )}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={focusOnMount}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; // Helps with debugging in React DevTools

export default Input;
