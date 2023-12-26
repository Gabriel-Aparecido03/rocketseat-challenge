import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant ?: 'primary' | 'secondary',
  leftIcon ?: ReactNode,
  text?: string,
  rightIcon ?: ReactNode
}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(
  ({ variant = "primary", text , leftIcon , rightIcon, ...props },ref)=>{
  return (
    <button 
      className={`items-center rounded-lg justify-center gap-3 flex p-2 w-full ${variant === "primary" ? 'bg-[#115D8C]' : 'bg-green-500'}`} 
      ref={ref}  
      { ...props } 
    >
      { leftIcon && leftIcon }
      <span className="text-white font-bold text-center uppercase text-base">{ text }</span>
    </button>
  )
})

Button.displayName = Button.name

export { Button }