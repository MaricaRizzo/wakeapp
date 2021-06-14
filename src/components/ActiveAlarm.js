import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import {  } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/ActiveAlarm.module.css';
import bell from "../content/images/bell-icon.png";
import wave from '../content/images/blue-wave.png';

const ActiveAlarm = (props) => {
    const history = useHistory();

    const handleClick = () => {
        props.cancelAlarm(false,props.alarm.message);
        history.push("/alarm-page");
    }

    return (
        <section className={Style.activeAlarm}>
            <img src={wave} className={Style.waveIcon}></img>
            <section className={Style.alarmContainer}>
                <figure className={Style.swing}>
                    <img src={bell} alt="Bell" className={Style.bellIcon}></img>
                </figure>
                <h1 className={Style.alarmTime}>{props.alarm.time}</h1>
                <p>{props.alarm.message}</p>
            </section>

            <button className={Style.stopBtn} onClick={() => handleClick()}>Stop</button>

        </section>
    )
};

export default ActiveAlarm;