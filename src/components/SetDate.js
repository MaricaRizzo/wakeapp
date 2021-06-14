import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Radio, TextField, Divider, Button } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/SetDate.module.css';

const SetDate = (props) => {
    const [selectedPage, setSelectedPage] = useState('/date-settings');

    const history = useHistory();

    const handleChange = (event) => {
        setSelectedPage(event.target.value);
        history.push(event.target.value);
    };

    const handleClick = (event) => {
        props.setDate(
            event.currentTarget.firstElementChild
            .firstElementChild.innerHTML
        );
    }

    return (
        <main>
            <section className={Style.PickDay}>
                <h3>Pick day for alarm</h3>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Monday</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Tuesday</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Wednesday</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Thursday</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Friday</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Saturday</h4>
                </Button>
                <Divider />
                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                    <h4>Sunday</h4>
                </Button>
                <Divider />
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

export default SetDate;