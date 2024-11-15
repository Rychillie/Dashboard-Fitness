import { useEffect, useRef, useState } from 'react';
import ProgressChart from './progress-chart';

interface ResponsiveChartProps {
  data: { date: string; count: number }[];
}

const ResponsiveChart = ({ data }: ResponsiveChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 337.5 }); // Default 16:9 aspect ratio

  const updateDimensions = () => {
    if (chartRef.current) {
      const width = chartRef.current.offsetWidth;
      const height = (width * 9) / 16; // Maintain 16:9 aspect ratio
      setDimensions({ width, height });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div ref={chartRef} className="w-full">
      <ProgressChart
        data={data}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};

export default ResponsiveChart;
