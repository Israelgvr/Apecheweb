import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import './line.css';
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";

function Pie() {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [44, 55, 13],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Videos', 'Images', 'Otros'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  const handleDownloadPNG = () => {
    const chartNode = chartRef.current;
    html2canvas(chartNode).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'pie-chart.png');
      });
    });
  };

  const handleDownloadSVG = () => {
    const chartNode = chartRef.current;
    const svg = chartNode.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    saveAs(blob, 'pie-chart.svg');
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

        <div ref={chartRef}></div>
    </div>
  );
}

export default Pie;
