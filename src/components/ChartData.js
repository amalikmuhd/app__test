import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import '../styles/ChartData.css';

const ChartData = ({tickerGraphData}) => {
  return (
    <div className="chart-data-container">
      <ResponsiveContainer width="100%" height={'100%'}>
        <AreaChart
          width={'100%'}
          height={'100%'}
          data={tickerGraphData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis dataKey="price" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartData;
