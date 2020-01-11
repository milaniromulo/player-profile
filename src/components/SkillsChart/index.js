import React from 'react';
import { Radar } from 'react-chartjs-2';
import "./index.css";

const options = {
    title: { display:false },
    legend: { display:false },
    tooltips: {
        callbacks: {
            title: function(tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
        }
    },
    scale: {
        ticks: {
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 5,
            stepSize: 1
        }
    }
};

let data = {
    labels: [' ', ' ', ' ', ' ', ' '],
    datasets: [{
        label: 'Note ',
        backgroundColor: 'rgba(70,116,238,0.5)',
        borderColor: 'rgba(1,31,117,1)',
        data: [0, 0, 0, 0, 0]
    }]
};

const SkillsGraph = (props) => {

    if (props.data !== undefined) {
        data = {
            labels: Object.keys(props.data),
            datasets: [{
                label: 'Note ',
                backgroundColor: 'rgba(70,116,238,0.5)',
                borderColor: 'rgba(1,31,117,1)',
                data: Object.values(props.data),
            }]
        };
    }


    return (
        <div className="skills-chart">
            <Radar data={data} options={options}/>
        </div>
    );
};

export default SkillsGraph;