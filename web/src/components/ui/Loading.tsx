import { FaCircleNotch } from "react-icons/fa";

export function Loading() {
  return (
    <div className="flex items-center min-h-[calc(100vh-215px)] justify-center text-center">
      <FaCircleNotch className="animate-spin"/>
    </div>
  )
}