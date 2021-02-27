import React from 'react';
import {Line} from "react-chartjs-2";

const Chart = ({data}) => {

    const dataChart = {
        type: 'bar',
        labels: data.map(el => el.date),
        datasets: [
            {
                label: 'Газпром',
                data: data.map(el => {
                    if (el.name === 'Газпром') {
                        return el.value
                    }
                }),
                fill: false,
                backgroundColor: 'rgb(0, 0, 255)',
                borderColor: 'rgba(0, 0, 255, 0.8)',
            },
            {
                label: 'Автоваз',
                data: data.map(el => {
                    if (el.name === 'Автоваз') {
                        return el.value
                    }
                }),
                fill: false,
                backgroundColor: 'rgb(255, 0, 0)',
                borderColor: 'rgba(255, 0, 0, 0.8)'
            },
            {
                label: 'Сбербанк',
                data: data.map(el => {
                    if (el.name === 'Сбербанк') {
                        return el.value
                    }
                }),
                fill: false,
                backgroundColor: 'rgb(0, 255, 0)',
                borderColor: 'rgba(0, 255, 0, 0.8)'
            }
        ]
    }

    const optionsChart = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                }
            }
            ]
        }
    }

    return (
        <div>
            <div className='chart'>
                <Line data={dataChart} options={optionsChart}/>
            </div>
        </div>
    );
};

export default Chart;