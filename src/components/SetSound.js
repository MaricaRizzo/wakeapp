import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Radio, Divider, Button } from '@material-ui/core';
import {  } from '@material-ui/icons';
import Style from '../components/SetSound.module.css';

const SetSound = (props) => {
    const [selectedPage, setSelectedPage] = useState('/sound-settings');
    const [sounds, setSounds] = useState([{name: 'Dog barks', src: '../content/sounds/dogs.mp3'}, 
    {name: 'Bird sounds', src: '../content/sounds/birds.mp3'}, 
    {name: 'Waves', src: '../content/sounds/waves.mp3'}, 
    {name: 'Default', src: '../content/sounds/default.mp3'}]);

    const history = useHistory();

    const handleChange = (event) => {
        setSelectedPage(event.target.value);
        history.push(event.target.value);
    };

    const handleClick = (event) => {
        let sound = sounds.filter(i => {
            return i.name == event.currentTarget.firstElementChild.firstElementChild.innerHTML
        });
        props.setSound(sound[0]);
    }

    const handleRandom = () => {
        let rand = Math.floor(Math.random() * sounds.length);
        props.setSound(sounds[rand]);
    }

    return (
        <main>
            <section className={Style.PickSound}>
                <h3>Pick alarm signal</h3>
                <Divider className="mb-2" />
                {
                    sounds.map(i => {
                        return <div>
                                <Button onClick={(e) => handleClick(e)} variant="outlined" disableElevation>
                                    <h4>{i.name}</h4>
                                </Button>
                                <Divider />
                               </div>
                    })
                }
                <Button onClick={(e) => handleRandom(e)} variant="outlined" disableElevation>
                    <h4>Random</h4>
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

export default SetSound;