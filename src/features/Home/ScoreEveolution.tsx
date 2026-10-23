import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const scoreHistory = [
  { date: "01/03", score: 65 },
  { date: "08/03", score: 72 },
  { date: "15/03", score: 68 },
  { date: "22/03", score: 81 },
  { date: "29/03", score: 88 },
];

function ScoreEvolutionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={scoreHistory}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="date" stroke="#9ca3af" />
        <YAxis domain={[0, 100]} stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #475569",
          }}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#34d399"
          strokeWidth={2}
          dot={{ fill: "#34d399", strokeWidth: 10 }}
          activeDot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ScoreEvolutionChart;
