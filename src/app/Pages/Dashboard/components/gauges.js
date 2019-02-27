import React from 'react';
import GaugeCard from './gaugesCard';

class Gauges extends React.Component {
    render() {
        return(
            <div>
                <h3>Gauges</h3>
                <GaugeCard/>
                <GaugeCard/>
                <GaugeCard/>
            </div>
        )
    }
}

export default Gauges;