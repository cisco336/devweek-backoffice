import React from 'react';
import ChartCard from './chartCard';

const Chart = (props) => {
    return (
        <div className="chart-content__grid">
            <ChartCard type={props.data.type} data={props.data.data}/>
            <ChartCard type={props.data.type} data={props.data.data}/>
            <ChartCard type={props.data.type} data={props.data.data}/>
        </div>
    );
};

export default Chart;