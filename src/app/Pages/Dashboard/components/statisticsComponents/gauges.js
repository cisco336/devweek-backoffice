import React from 'react';
import GaugeCard from './gaugesCard';
import { string, number } from 'prop-types';

class Gauges extends React.Component {
    constructor(props) {
        super(props);
        // To do: this should come from statistics as an object
        this.state = {
            title: string,
            subtitle: string,
            value: number,
            link: string,
            color: string
        }
    }
    render() {
        return(
            <div>
                <div className="gauge-content__grid">
                    {/* To do: this should be rendered on another function iterating an object */}
                    <GaugeCard
                        title="Events"
                        subtitle="SubTitle"
                        value="1878"
                        link="Link"
                    />
                    <GaugeCard
                        title="Speakers"
                        subtitle="SubTitle"
                        value="2874"
                        link="Link"
                    />
                </div>
            </div>
        )
    }
}

export default Gauges;