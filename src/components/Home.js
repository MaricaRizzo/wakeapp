import { useState, useEffect, useCallback } from 'react';
import {  } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/Home.module.css';
import Alarm from "../components/Alarm"

const Home = (props) => {

    const handleActive = (e,j) => {
        props.cancelAlarm(e,j)
    }

    return (
        <section>

            <h2 className={Style.logo}>Wakeapp</h2>
            {
                props.alarms.map(alarm => {
                    return <Alarm message={alarm.message} time={alarm.time} day={alarm.date} onClick={(e,j) => handleActive(e,j)} />
                })
            }
        </section>
    )
};

export default Home;