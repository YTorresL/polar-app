export default function Form({ children }) {
  return (
    <div className="uppercase font-medium">
      <div className="grid grid-cols-1 gap-2 first:text-sm last:border-b border-[#002B5B]">
        {children}
      </div>
    </div>
  )
}
