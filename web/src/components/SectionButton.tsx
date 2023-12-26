interface PropsType {
  isSelected: boolean
  onClick: () => void
  text : string
}

export function SectionButton({ isSelected, onClick ,text }: PropsType) {
  return (
    <button 
      onClick={onClick}
      className={`bg-none bg-transparent border-b-2 border-solid ${isSelected ? 'border-b-orange-100' : 'border-b-background'} uppercase font-bold text-gray-500`}
    >
      { text }
    </button>
  )
}