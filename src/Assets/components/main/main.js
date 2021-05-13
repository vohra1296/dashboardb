import React from 'react'
import './main.css'
import Score from '../charts/score'
import { Segment, Icon } from 'semantic-ui-react'
import { Step, Steps } from 'semantic-react';
import Chart from "react-google-charts";
import Calendar from '../../../Assets/components/Calendar'


const Main = () => {

    return (
        <main>
            <div className="main">
                <button class="ui primary button" tabIndex="0">Upgrade</button>
            </div>
            <div className='segments'>
                <div className='score'>
                    <Segment type='raised' style={{ height: 150, width: 250 }} description="Attribute 01" >
                        <Score />

                    </Segment>
                </div>

                <div className='score'>

                    <Steps >
                        <Step style={{ height: 150, width: 250 }} icon="user" title="120 Users" description="Attribute 02" link="#Step" />
                    </Steps>
                </div>

                <div className='score'>
                    <Steps >
                        <Step style={{ height: 150, width: 250 }} icon="shop" title="Carts" description="Attribute 03" link="#Step" />
                    </Steps>
                </div>

                <div className='score'>
                    <Steps >
                        <Step style={{ height: 150, width: 250 }} icon="law" title="Justice" description="Attribute 04" link="#Step" />
                    </Steps>
                </div>
            </div>
            <div className='chart'>

                <Segment style={{ width: 1090, }}>


                    <div className='calendar'>

                        <Calendar />
                    </div>


                    <Chart
                        width={1024}
                        height={'400px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['x', 'Users', 'Score'],
                            [0, 0, 0],
                            [1, 100, 59],
                            [2, 76, 89],
                            [3, 120, 78],
                            [4, 78, 45],
                            [5, 500, 98],
                            [6, 156, 100],
                            [7, 109, 178],
                        ]}
                        options={{
                            hAxis: {
                                title: 'Analytics',
                            },
                            vAxis: {
                                title: 'Popularity',
                            },
                            series: {
                                1: { curveType: 'function' },
                            },
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                </Segment></div>

            <div className='text'>
                <h5><Icon name='copyright' />Copyrights -  Akash Vohra 2021 All Rights Reserved</h5>
            </div>

        </main>
    );

}



export default Main;