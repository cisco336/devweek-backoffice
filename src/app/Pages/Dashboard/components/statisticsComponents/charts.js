import React from 'react';
import ChartCard from './chartCard';

const Chart = (props) => {
    const data = {...props.data.data};
    console.log(data);
    return (
        <div>
            <ChartCard type={props.data.type} data={data}/>
        </div>
    );
};

export default Chart;