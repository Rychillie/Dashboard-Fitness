import { useTheme } from 'next-themes';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface ProgressChartProps {
  data: { date: string; count: number }[];
  width: number;
  height: number;
}

export default function ProgressChart({
  data,
  width,
  height,
}: ProgressChartProps) {
  const { theme } = useTheme();

  // Define colors based on the current theme
  const lineColor = theme === 'dark' ? '#82ca9d' : '#8884d8';
  const gridColor = theme === 'dark' ? '#444' : '#ccc';

  return (
    <LineChart width={width} height={height} data={data} className="mx-auto">
      <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip
        labelStyle={{
          color: theme === 'dark' ? '#fff' : '#000',
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
        }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="count"
        stroke={lineColor}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
