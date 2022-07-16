import React from 'react'
import { Chart } from "react-google-charts";


const Map = () => {
    return (
        <div>
            <Chart
                chartType="GeoChart"
                data={[["Country", "Popularity"],
                ["Germany", 200],
                ["United States", 300],
                ["Brazil", 400],
                ["Canada", 500],
                ["France", 600],
                ["RU", 700],]}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    )
}

export default Map