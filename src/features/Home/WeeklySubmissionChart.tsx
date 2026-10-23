import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const weeklyData = [
  { week: "S1", submissions: 3 },
  { week: "S2", submissions: 5 },
  { week: "S3", submissions: 2 },
  { week: "S4", submissions: 7 },
  { week: "S5", submissions: 4 },
];
function WeeklySubmissions() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={weeklyData}>
        <XAxis dataKey="week" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Bar dataKey="submissions" fill="#818cf8" radius={[4, 4, 4, 4]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WeeklySubmissions;
