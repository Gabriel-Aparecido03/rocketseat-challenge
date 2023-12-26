import { FaCircleNotch } from "react-icons/fa";

export function Loading() {
  return (
    <div className="flex items-center justify-center text-center">
      <FaCircleNotch className="animate-spin"/>
    </div>
  )
}