import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon ?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, ...props }, ref) => {
    return (
      <div className="rounded-lg flex items-center bg-[#F3F5F6] p-2 justify-between">
        <input
          className={`text-sm placeholder:text-[#737380] m-0 px-2 outline-none border-none bg-none bg-transparent flex-1`}
          type={type}
          ref={ref}
          {...props}
        />
        <div className="w-6">
          {leftIcon && leftIcon}
        </div>
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }