import Form from "../DesignForm/page"

export default function Senso() {
  return (
    <div className="m-12 animate-fade w-full">
      <h1 className="text-[#002B5B] font-bold text-2xl uppercase">
        Senso de empleados
      </h1>
      <form className="my-5">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Form>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" required />
          </Form>
          <Form>
            <label htmlFor="employee-id">Employee ID Number</label>
            <input type="text" id="employee-id" name="employee-id" required />
          </Form>
          <Form>
            <label htmlFor="department">Department</label>
            <input type="text" id="department" name="department" required />
          </Form>
          <Form>
            <label htmlFor="job-title">Job Title</label>
            <input type="text" id="job-title" name="job-title" required />
          </Form>
          <Form>
            <label htmlFor="date-of-hire">Date of Hire</label>
            <input type="date" id="date-of-hire" name="date-of-hire" required />
          </Form>
          <Form>
            <label htmlFor="work-location">Work Location</label>
            <input
              type="text"
              id="work-location"
              name="work-location"
              required
            />
          </Form>
          <Form>
            <label htmlFor="phone-number">Phone Number</label>
            <input type="tel" id="phone-number" name="phone-number" required />
          </Form>
          <Form>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </Form>
          <Form>
            <label htmlFor="emergency-contact-name">
              Emergency Contact Name
            </label>
            <input
              type="text"
              id="emergency-contact-name"
              name="emergency-contact-name"
              required
            />
          </Form>
          <Form>
            <label htmlFor="emergency-contact-relationship">
              Emergency Contact Relationship
            </label>
            <input
              type="text"
              id="emergency-contact-relationship"
              name="emergency-contact-relationship"
              required
            />
          </Form>
          <Form>
            <label htmlFor="emergency-contact-phone">
              Emergency Contact Phone Number
            </label>
            <input
              type="tel"
              id="emergency-contact-phone"
              name="emergency-contact-phone"
              required
            />
          </Form>
        </div>

        <input
          type="submit"
          value="Submit"
          className="bg-[#EA5455] text-white px-4 py-2 mt-4 cursor-pointer"
        />
      </form>
      <div className="relative overflow-x-auto w-full">
        <table className="text-sm text-left text-black mt-5 w-full">
          <thead className="text-xs text-white uppercase bg-[#002B5B]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre completo
              </th>
              <th scope="col" className="px-6 py-3">
                ID del empleado
              </th>
              <th scope="col" className="px-6 py-3">
                Departamento
              </th>
              <th scope="col" className="px-6 py-3">
                Cargo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                Yalith Torres
              </th>
              <td className="px-6 py-4">3542</td>
              <td className="px-6 py-4">Programación</td>
              <td className="px-6 py-4">Desarrollo web</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
