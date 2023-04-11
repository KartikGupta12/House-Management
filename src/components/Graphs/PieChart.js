import React, {useLayoutEffect, useState} from 'react';
import Chart from 'react-apexcharts';

// This function is used to get the size of the window
// custom hook
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function PieChart({labels, series, title, colors}) {
    const [width] = useWindowSize();
    return (
        <>
            <Chart
                type='pie'
                width={width <= 700 ? width : "85%"}
                height={450}
                series={series}
                options={{
                    title: {
                        text: title,
                        style: {
                            fontSize: '20px',
                        }
                    },
                    colors: colors,
                    noData: {
                        text: 'Empty Data',
                    },
                    labels: labels,
                    responsive: [{
                        breakpoint: 480,
                        options: {}
                    }]
                }}
            >
            </Chart>
        </>
    );
}

export default PieChart; // Exporting the component