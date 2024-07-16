import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(response => response.json())
      .then(data => {
        // Extract population data for different nations
        const populations = data.data.map(item => ({
          nation: item.Nation,
          population: item.Population
        }));
        setPopulationData(populations);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Prepare data for Chart.js
  const chartData = {
    labels: populationData ? populationData.map(item => item.nation) : [],
    datasets: [
      {
        label: 'Population',
        data: populationData ? populationData.map(item => item.population) : [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nation'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Population'
        }
      }
    }
  };

  return (
    <div>
      <h2>Population Data for Different Nations</h2>
      {populationData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading population data...</p>
      )}
    </div>
  );
};

export default PopulationGraph;
