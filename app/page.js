"use client"
import Form from "@/components/DesignForm/page"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const handleClick = () => router.push("/home")
  return (
    <main className="h-screen bg-gradient-to-r from-[#A1CCD1]  to-[#002B5B]">
      <div className="flex items-center justify-center h-full">
        <form
          action="/procesar-formulario"
          method="POST"
          className="bg-white p-16 shadow animate-fade"
        >
          <div className="grid grid-cols-1 gap-5">
            <Form>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required />
            </Form>
            <Form>
              <label htmlFor="correo">Correo electrónico</label>
              <input type="email" id="correo" name="correo" required />
            </Form>
            <Form>
              <label htmlFore="contrasena">Contraseña</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                required
              />
            </Form>
          </div>

          <input
            type="submit"
            value="Enviar"
            onClick={handleClick}
            className="bg-[#EA5455] text-white px-4 py-2 mt-4 cursor-pointer"
          />
        </form>
      </div>
    </main>
  )
}
