import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, ButtonGroup, Button, Radio, TextField } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/SetMessageAndTime.module.css';

const SetMessageAndTime = (props) => {
    const [selectedPage, setSelectedPage] = useState('/time-settings');

    const history = useHistory();

    const handleChange = (event) => {
        setSelectedPage(event.target.value);
        history.push(event.target.value);
    };

    return (
        <main>
        <section className={Style.TimeSettings}>
            <h3>Alarm message and time</h3>
            <Divider />
            <TextField 
                className={Style.TextField} 
                id="standard-basic" 
                label="Message" 
                color="secondary" 
                variant="filled"
                onChange={e => props.setMessage(e.target.value)} />
            <Divider />
            <TextField 
                className={Style.TextField} 
                id="time" 
                label="Alarm" 
                type="time"
                color="secondary" 
                variant="filled"
                defaultValue="07:30"
                onChange={e => props.setTime(e.target.value)}
                inputProps={{
                    step: 300,
                  }} />
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

export default SetMessageAndTime;