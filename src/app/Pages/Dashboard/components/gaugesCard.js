import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class GaugeCard extends React.Component {
    render() {
        return(
            <div>
                <Card className="">
                    <CardContent>
                        <Typography className="" color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be
                            lent
                        </Typography>
                        <Typography className="" color="textSecondary">
                            adjective
                        </Typography>
                        <Typography component="p">
                            well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
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