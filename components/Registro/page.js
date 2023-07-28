import Form from "../DesignForm/page"

export default function Registro() {
  return (
    <div className="m-12 animate-fade w-full">
      <h1 className="text-[#002B5B] font-bold text-2xl uppercase">
        Registro de Préstamos
      </h1>
      <form className="my-5">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Form>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
          </Form>
          <Form>
            <label htmlFor="monto">Monto del préstamo</label>
            <input type="number" id="monto" name="monto" required />
          </Form>
          <Form>
            <label htmlFor="fecha">Fecha del préstamo</label>
            <input type="date" id="fecha" name="fecha" required />
          </Form>
        </div>

        <input
          type="submit"
          value="Enviar"
          className="bg-[#EA5455] text-white px-4 py-2 mt-4 cursor-pointer"
        />
      </form>
      <form><Form>
            <label htmlFor="nombre">Busquedad por ID</label>
            <input type="text" id="nombre" name="nombre" required placeholder="34341..." />
          </Form></form>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-black mt-5">
          <thead className="text-xs text-white uppercase bg-[#002B5B]">
            <tr>
            <th scope="col" className="px-6 py-3">
                ID del empleado
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre completo
              </th>
              <th scope="col" className="px-6 py-3">
                Monto
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
            <td className="px-6 py-4">3542</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                Yalith Torres
              </th>
              <td className="px-6 py-4">$65.346</td>
              <td className="px-6 py-4">12/04/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
