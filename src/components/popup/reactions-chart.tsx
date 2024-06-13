import useStore from '@/lib/store';

import { Pie } from 'react-chartjs-2';

const ReactionsChart = () => {
  const reactions = useStore((state) => state.reactions);
  const labels: string[] = [];
  const dataValues: number[] = [];
  Object.entries(reactions).forEach(([reaction, value]) => {
    if (reaction != 'all') {
      labels.push(reaction.charAt(0).toUpperCase() + reaction.slice(1).toLowerCase());
      dataValues.push(value);
    }
  });
  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(53, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(53, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="w-full h-3/4 text-white flex items-end">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ReactionsChart;
