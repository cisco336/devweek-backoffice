import React from 'react';

// Material Ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// React ChartJs 2
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
                return <Doughnut data={this.props.data}/>
            case 'pie':
                return <Pie data={this.props.data}/>
            case 'line':
                return <Line data={this.props.data}/>
            case 'bar':
                return <Bar data={this.props.data}/>

            default:
                return <h1>No chart type Selected</h1>
        }
    }
    render() {
        return(
            <div className="chart-container">
                <Card className="chart-card">
                    <CardContent className="chart-card__content" >
                        <div className="chart-card__content--big-chart">
                            {this.typeOfChart()}
                        </div>
                        <div className="chart-card__content--text">
                            <Typography variant="h5" component="h2">
                                title
                            </Typography>
                            <Typography className="" color="textSecondary" gutterBottom>
                                subtitle
                            </Typography>
                            <Typography component="p">
                                Card message.
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default ChartCard;