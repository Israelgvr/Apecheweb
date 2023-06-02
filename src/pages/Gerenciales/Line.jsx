import { useState, useEffect } from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import Chart from 'chart.js/auto';
import './line.css';
import { useParams } from "react-router-dom";
function App() {
  
  const [dataCount, setDataCount] = useState(0);
  const { userId } = useParams();
  useEffect(() => {
    const apiUrl = `https://condor.onrender.com/api/imagen/${userId}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const countsByDate = {};
        data.forEach(item => {
          const date = item.date;
          if (countsByDate[date]) {
            countsByDate[date]++;
          } else {
            countsByDate[date] = 1;
          }
        });
        const dates = Object.keys(countsByDate);
        const counts = dates.map(date => countsByDate[date]);
        setDataCount({ dates, counts });
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (dataCount && dataCount.dates && dataCount.counts) {
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dataCount.dates,
          datasets: [{
            label: 'Archivos',
            data: dataCount.counts,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 3
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          layout: {
            padding: {
              left: 5,
              right: 5,
              top: 0,
              bottom: 5
            }
          },
          barPercentage: 0.4, // Set the width of the bars
          categoryPercentage: 0.4 // Set the width of the category (group of bars)
        }
      });
    }
  }, [dataCount]);

  const handleDownloadPNG = () => {
    const chartNode = document.getElementById('myChart');
    const imageURL = chartNode.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'chart.png';
    link.click();
  };

  const handleDownloadSVG = () => {
    const chartNode = document.getElementById('myChart');
    const svg = chartNode.innerHTML;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chart.svg';
    link.click();
  };

  return (
    <div>
    
      <div className="download-menu">
         <button onClick={handleDownloadPNG}>
             <i className="fas fa-download"></i> Descargar PNG
         </button>
        <button onClick={handleDownloadSVG}>
             <i className="fas fa-download"></i> Descargar SVG
        </button>
        </div>

        <div  >
             <canvas id="myChart"></canvas>
        </div>
    
    </div>
  );
}

export default App;
