import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class GaugeCard extends React.Component {
    render() {
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const value = this.props.value;
        const link = this.props.link;
        return(
            <div className="gauge-container">
                <Card className="gauge-card">
                    <CardContent className="gauge-card__content">
                        <div className="gauge-card__content--big-number">
                            {value}
                        </div>
                        <div className="gauge-card__content--text">
                            <Typography variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography className="" color="textSecondary" gutterBottom>
                                {subtitle}
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

export default GaugeCard;