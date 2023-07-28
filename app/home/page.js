"use client"
import Estadistica from "@/components/Estadistica/page"
import { IconTeddyBear } from "@/components/Icons/page"
import Registro from "@/components/Registro/page"
import Senso from "@/components/Senso/page"
import Sorteos from "@/components/Sorteos/page"
import { useState } from "react"

const navigation = [
  {
    name: "Senso de empleados",
    path: "senso",
  },
  {
    name: "Registro de préstamos",
    path: "registro",
  },
  {
    name: "Estadisticas",
    path: "estadisticas",
  },
  {
    name: "Sorteos",
    path: "sorteos",
  },
]

export default function HomePage() {
  const [visibleId, setVisibleId] = useState("senso")
  const handleClick = (id) => {
    if (visibleId === id) {
      setVisibleId("senso")
    } else {
      setVisibleId(id)
    }
  }
  return (
    <div className="flex lg:h-screen flex-col lg:flex-row">
      <header className="bg-[#F9F5EB]">
        <div className="py-3 pl-5 flex items-center gap-2">
          <IconTeddyBear className="h-10 w-10" fill="#002B5B" />
          <h1 className="text-[#002B5B] font-bold text-2xl">Polar</h1>
        </div>
        <nav className="grid grid-cols-1 gap-1 lg:w-80">
          {navigation.map((item, index) => (
            <button
              key={index}
              className={`py-3 pl-5 bg-[#E4DCCF] text-left text-[#002B5B] hover:text-[#EA5455]
            font-medium uppercase text-sm transition ease-in-out duration-300 ${
              visibleId === item.path ? "border-r-4 border-[#EA5455]" : ""
            }`}
              onClick={() => handleClick(item.path)}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </header>
      <main className="overflow-y-auto flex items-center justify-center w-full">
        {visibleId === "senso" && <Senso />}
        {visibleId === "registro" && <Registro />}
        {visibleId === "estadisticas" && <Estadistica />}
        {visibleId === "sorteos" && <Sorteos />}
      </main>
    </div>
  )
}
