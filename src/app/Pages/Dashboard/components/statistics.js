import React from 'react';
import Gauges from './statisticsComponents/gauges';
import Chart from './statisticsComponents/charts';
import { string } from 'prop-types';

class Statisctics extends React.Component {
    // Props are hardcoded for now
    constructor(props) {
        super(props);
        this.state = {
            gauges: {},
            charts: {
                type: 'doughnut',
                data: {
                    labels: ['label1', 'label2'],
                    datasets: [{
                        label: 'Speakers',
                        data: [
                            1323
                        ],
                        backgroundColor: [
                            'blue', 'green', 'red'
                        ]
                    }]
                }
            }
        }
    }
    render() {
        return(
            <div>
                <h2>Statistics</h2>
                <Gauges />
                <Chart data={this.state.charts}/>
            </div>
        )
    }
}

export default Statisctics;