import axios from 'axios';
import React from 'react'
import { Chart } from "react-google-charts";
import { useNavigate } from 'react-router-dom';

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
    colorAxis: { colors: ['#000000', '#d4b114', '#e85a03'] },
    colors: ['red', 'green', 'orange', 'blue', 'yellow'],
    resolution: 'provinces',
    backgroundColor: { fill: 'grey' },
    /*datalessRegionColor: '#81d4fa',*/
    // defaultColor: 'cornsilk',
    defaultColor: '#9D5011',
    datalessRegionColor: 'transparent',
    // stroke: 'red',
    width: "100%",
    height: "80vh",
};

const Map = ({setQuestions,questions}) => {
    const navigate=useNavigate()
    const getStatename = async (indexNo) => {
        try {
            
       
        const stateName = data[indexNo][0]
        console.log(stateName);
        const res = await axios.get(`${process.env.REACT_APP_API}/quiz`);
        const vass=res.data[0];
        const sss=vass[stateName];
        setQuestions(sss);
        navigate('/quiz')
        console.log(sss); } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Chart
                chartEvents={[
                    {
                        //   eventName: "select",
                        //   callback: ({ chartWrapper }) => {
                        //     const chart = chartWrapper.getChart();
                        //     const selection = chart.getSelection();
                        //     if (selection.length === 0) return;
                        //     const region = data[selection[0].row + 1];
                        //     console.log("Selected : " + region);
                        //   },
                        eventName: "select",
                        callback({ chartWrapper }) {
                            const index = chartWrapper.getChart().getSelection();
                            console.log(index[0].row);
                            getStatename(index[0].row + 1);
                        }

                    },
                ]}
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