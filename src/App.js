import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css';

import StatsBlocks from './components/StatsBlocks';
import InfoArea from './components/InfoArea';
import SkillsChart from './components/SkillsChart';

var imgs = require('./imges.js')


const App = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function loadData(){
            const user_id = localStorage.getItem('user')
            const response = await axios.get('http://www.mocky.io/v2/5e1a33553100004e0084b5f7', {
                headers: {
                    user_id
                }
            })

            console.log(response.data)
            setData(response.data)
        }

        loadData();
    }, []);

    return (
        <>

            <div id="team-profile">
                <header>
                    <img alt="Team Profile" src={imgs.logo} />
                </header>

                <div className="container">
              
                    <InfoArea data={data} />

                    <StatsBlocks/>

                    <div className="skills-chart-area">
                        <div className="physicals">
                            <SkillsChart data={data.physicals}/>
                        </div>

                        <div className="primitives">
                            <SkillsChart data={data.primitives}/>
                        </div>
                    </div>


                </div>
                
                <footer>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </footer>
            </div>
        </>
    )
}

export default App;