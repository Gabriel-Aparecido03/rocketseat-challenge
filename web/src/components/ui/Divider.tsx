import { HTMLAttributes, forwardRef } from "react";

type DividerProps = HTMLAttributes<HTMLDivElement> & {}

const Divider = forwardRef<HTMLDivElement,DividerProps>(({ ...props},ref) =>{
  return (
    <div className="bg-gray-100 h-[1px] w-full" ref={ref} {...props} />
  )
})

Divider.displayName = Divider.name

export { Divider }