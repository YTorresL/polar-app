import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts"

export default function Estadistica() {
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ]

  return (
    <div className="m-12 animate-fade w-full">
      <BarChart width={380} height={400} data={data}>
        <Bar dataKey="students" fill="#002B5B" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  )
}
