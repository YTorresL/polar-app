import { useState } from "react"
import Form from "../DesignForm/page"

function Sortear() {
  const numeros = []

  for (let i = 0; i < 6; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (61 - 1)) + 1
    while (numeros.includes(numeroAleatorio)) {
      numeroAleatorio = Math.floor(Math.random() * (61 - 1)) + 1
    }
    numeros[i] = numeroAleatorio
  }

  numeros.sort(function (a, b) {
    return a - b
  })
  return String(numeros[0]).padStart(2, "0")
}

export default function Sorteos() {
  const [value, setValue] = useState("00")
  const handleClick = () => setValue(Sortear())
  return (
    <>
      <div className="m-12 animate-fade w-full">
        <h1 className="text-[#002B5B] font-bold text-2xl uppercase">
          Sorteos de Préstamos
        </h1>
        <div className="flex items-center gap-5 mt-5">
          <div className="border border-[#002B5B] p-4">
            <h3 id="numero">{value}</h3>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="bg-[#EA5455] text-white px-4 py-2 cursor-pointer"
            >
              Genera el numero
            </button>
          </div>
        </div>
        <form className="my-5">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <Form>
              <label htmlFor="monto">Numero de sorteo</label>
              <input type="text" id="nombre" name="nombre" required />
            </Form>
            <Form>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required />
            </Form>

            <Form>
              <label htmlFor="fecha">Departamento</label>
              <input type="text" id="nombre" name="nombre" required />
            </Form>
          </div>

          <input
            type="submit"
            value="Enviar"
            className="bg-[#EA5455] text-white px-4 py-2 mt-4 cursor-pointer"
          />
        </form>
        <div className="relative overflow-x-auto w-full">
          <table className="text-sm text-left text-black mt-5 w-full">
            <thead className="text-xs text-white uppercase bg-[#002B5B]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Full name
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  17
                </th>
                <td className="px-6 py-4">Yalith Torres</td>
                <td className="px-6 py-4">Programación</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
