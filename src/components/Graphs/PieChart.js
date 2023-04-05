import React from 'react';
import Chart from 'react-apexcharts';

function PieChart({labels, series, title}) {
    return (
        <>
            <Chart
                type='pie'
                width={700}
                height={400}
                series={series}
                options={{
                    title: {
                        text: title,
                        style:{
                            fontSize: '20px',
                        }
                    },
                    // colors: ['#00FFFF','#7FFFD4','#454B1B','#088F8F','#AAFF00'],
                    noData: {
                        text: 'Empty Data',
                    },
                    labels: labels
                }}
            >
            </Chart>
        </>
    );
}

export default PieChart; // Exporting the component