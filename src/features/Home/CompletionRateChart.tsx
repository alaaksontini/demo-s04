import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function CompletionRadialChart({ percentage }: { percentage: number }) {
  const data = [{ value: percentage, fill: "#818cf8" }];

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            dataKey="value"
            cornerRadius={10}
            background={{ fill: "#1e293b" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      {/* Valeur centrale en overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
      </div>
    </div>
  );
}

export default CompletionRadialChart;
