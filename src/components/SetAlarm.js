import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, ButtonGroup, Button, Radio } from '@material-ui/core';
import {  } from '@material-ui/icons';
import logo from '../content/images/logo.png';
import Style from '../components/SetAlarm.module.css';

const SetAlarm = (props) => {
    const [selectedPage, setSelectedPage] = useState('/alarm-settings');

    const history = useHistory();

    const handleChange = (event) => {
        setSelectedPage(event.target.value);
        history.push(event.target.value);
    };

    const handleClick = () => {
        const alarmObject = {
            message: props.message,
            time: props.time,
            sound: props.sound.src,
            day: props.date,
            active: true
        }
        props.addAlarm(alarmObject);
        history.push("/alarm-page");
    }

    return (
        <main>
        <section className={Style.AlarmSettings}>
            <h3>Add alarm</h3>
            <Divider />
            <ButtonGroup className={Style.ButtonGroup}>
                <Button onClick={() => history.push('/time-settings')} variant="outlined" disableElevation>
                    <h3>{props.message}</h3>
                    <h3>{props.time}</h3>
                </Button>
            </ButtonGroup>
            <Divider />
            <ButtonGroup className={Style.ButtonGroup}>
                <Button onClick={() => history.push('/date-settings')} variant="outlined" disableElevation>
                    <h3>Day</h3>
                    <h3>{props.date}</h3>
                </Button>
            </ButtonGroup>
            <Divider />
            <ButtonGroup className={Style.ButtonGroup}>
                <Button onClick={() => history.push('/sound-settings')} variant="outlined" disableElevation>
                    <h3>Sound</h3>
                    <h3>{props.sound.name}</h3>
                </Button>
            </ButtonGroup>
            <Divider />
            <Button disabled={props.message < 1 ? true : false} className={Style.Submit} onClick={() => handleClick()} color="secondary" variant="contained" disableElevation>Add alarm</Button>
        </section>
            <footer className={Style.Footer}>
                    <Radio
                        checked={selectedPage === '/alarm-settings'}
                        onChange={handleChange}
                        value="/alarm-settings"
                    />
                    <Radio
                        checked={selectedPage === '/time-settings'}
                        onChange={handleChange}
                        value="/time-settings"
                    />
                    <Radio
                        checked={selectedPage === '/date-settings'}
                        onChange={handleChange}
                        value="/date-settings"
                    />
                    <Radio
                        checked={selectedPage === '/sound-settings'}
                        onChange={handleChange}
                        value="/sound-settings"
                    />
            </footer>
        </main>
    )
};

export default SetAlarm;