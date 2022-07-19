import React from 'react'
import { Chart } from "react-google-charts";

const data = [
    ['State Code', 'State'],
    ['IN-UP', 'Uttar Pradesh'],
    ['IN-MH', 'Maharashtra'],
    ['IN-BR', 'Bihar'],
    ['IN-WB', 'West Bengal'],
    ['IN-MP', 'Madhya Pradesh'],
    ['IN-TN', 'Tamil Nadu'],
    ['IN-RJ', 'Rajasthan'],
    ['IN-KA', 'Karnataka'],
    ['IN-GJ', 'Gujarat'],
    ['IN-AP', 'Andhra Pradesh'],
    ['IN-OR', 'Orissa'],
    ['IN-TG', 'Telangana'],
    ['IN-KL', 'Kerala'],
    ['IN-JH', 'Jharkhand'],
    ['IN-AS', 'Assam'],
    ['IN-PB', 'Punjab'],
    ['IN-CT', 'Chhattisgarh',],
    ['IN-HR', 'Haryana',],
    ['IN-JK', 'Jammu and Kashmir',],
    ['IN-UT', 'Uttarakhand',],
    ['IN-HP', 'Himachal Pradesh',],
    ['IN-TR', 'Tripura',],
    ['IN-ML', 'Meghalaya',],
    ['IN-MN', 'Manipur',],
    ['IN-NL', 'Nagaland',],
    ['IN-GA', 'Goa',],
    ['IN-AR', 'Arunachal Pradesh',],
    ['IN-MZ', 'Mizoram',],
    ['IN-SK', 'Sikkim',],
    ['IN-DL', 'Delhi',],
    ['IN-PY', 'Puducherry',],
    ['IN-CH', 'Chandigarh',],
    ['IN-AN', 'Andaman and Nicobar Islands',],
    ['IN-DN', 'Dadra and Nagar Haveli',],
    ['IN-DD', 'Daman and Diu',],
    ['IN-LD', 'Lakshadweep',]
]

export const options = {
    region: 'IN',
    domain: 'IN',
    displayMode: 'regions',
    colorAxis: { colors: ['#e5ef88', '#d4b114', '#e85a03'] },
    colors: ['red', 'green', 'orange', 'blue', 'yellow'],
    resolution: 'provinces',
    backgroundColor: { fill: 'grey', stroke: "#fff", strokeWidth: "5" },
    /*datalessRegionColor: '#81d4fa',*/
    // defaultColor: 'cornsilk',
    defaultColor: '#9D5011',
    datalessRegionColor: 'transparent',
    stroke: 'red',
    width: "100%",
    height: "80vh",
};
const Map = () => {
    return (
        <div>
            <Chart
                chartType="GeoChart"
                data={data}
                options={options}
                width="100%"
                height="100vh"
                legendToggle
            />
        </div>
    )
}

export default Map