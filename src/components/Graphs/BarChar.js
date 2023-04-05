import React from 'react';
import Chart from 'react-apexcharts';

function BarChar(props) {
    return (
        <>
            <Chart
                type='bar'
                width={700}
                height={300}
                // series defines the data to be shown in the graph
                series={[
                    {
                        data: [6578, 6787, 3245, 9876, 2324, 5123, 2435]
                    }
                ]}
                options={{
                    // Title of the graph
                    title: {
                        text: 'Bar Chart Developed By Chirag',
                        style: {fontSize: '20px'}
                    },
                    // Color of the graph
                    colors: ['#F44336'],
                    // X-axis labels
                    xaxis: {
                        // X-axis labels
                        categories: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Youtube', 'TikTok', 'Reddit'],
                        // X-axis title and style
                        title: {
                            text: 'Social Media Sites',
                            style: {
                                fontSize: '15px',
                                color: '#F44336'
                            },
                        },
                        // X-axis labels style
                        labels: {
                            style: {
                                fontSize: '12px',
                                colors: '#000'
                            },
                        },
                    },
                    // Y-axis labels
                    yaxis: {
                        // Y-axis title and style
                        title: {
                            text: 'Number of Subscribers',
                            style: {
                                fontSize: '15px',
                            }
                        },
                        labels: {
                            // function to format the labels of the Y-axis
                            formatter(val) {
                                return `${val}K`;  // Appending K to the values
                            },
                            // Y-axis labels style
                            style: {
                                fontSize: '15px',
                                colors: '#000'
                            }
                        },
                    },

                    dataLabels: {
                        // function to format the labels of the graphs bars
                        formatter(val) {
                            return `${val}K`;  // Appending K to the values
                        },
                        style: {
                            fontSize: '15px',
                            // colors: '#000'
                        },
                    },
                    // Horizontal or vertical graph
                    plotOptions: {bar: {horizontal: false}},
                    // Dark mode
                    // theme: {mode: 'dark'}
                    responsive: [{
                        breakpoint: 1000,
                        options: {

                        }
                    }]
                }}
            >
            </Chart>
        </>
    );
}

export default BarChar; // Exporting the component