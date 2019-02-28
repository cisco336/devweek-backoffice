import React from 'react';
import { 
    Doughnut,
    Pie,
    Line,
    Bar,
    HorizontalBar,
    Radar,
    Polar,
    Bubble,
    Scatter,
    defaults,
    Chart
} from 'react-chartjs-2';

class ChartCard extends React.Component {
    typeOfChart(type = this.props.type) {
        switch(type){
            case 'doughnut':
                return <Doughnut/>
            case 'pie':
                return <Pie/>
            case 'line':
                return <Line/>

            default:
                return <h1>No chart type Selected</h1>
        }
    }
    render() {
        return(
            <div>
                {this.typeOfChart()}
            </div>
        )
    }
}

export default ChartCard;