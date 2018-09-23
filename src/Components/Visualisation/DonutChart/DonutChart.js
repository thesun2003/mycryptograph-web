import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class DonutChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pieOptions: {
                // title: this.props.title,
                pieHole: 0.4,
                slices: [
                    {
                        color: "#2BB673"
                    },
                    {
                        color: "#d91e48"
                    },
                    {
                        color: "#007fad"
                    },
                    {
                        color: "#e9a227"
                    }
                ],
                legend: {
                    position: "right",
                    alignment: "center",
                    // textStyle: {
                    //     color: "#233238",
                    //     fontSize: 14
                    // }
                },
                pieSliceText: 'value',
                pieStartAngle: 90,
                tooltip: {
                    showColorCode: true
                },
                chartArea: {
                    top: 30,
                    left: 10,
                    right: 10,
                    bottom: 10,
                    width: "100%",
                    height: "100%",
                },
            }
        };
    }

    render() {
        return (
            <Chart
                chartType="PieChart"
                data={this.props.data}
                options={this.state.pieOptions}
                // graph_id="PieChart"
                width={this.props.width}
                height={this.props.height}
                legend_toggle
            />
        );
    }
}

export default DonutChart;
