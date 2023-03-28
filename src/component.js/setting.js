import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './directories/sidebar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// import Sonnet from '../../components/Sonnet';

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Setting = () => {
    const [theme, setTheme] = useState("light-theme")

    const dark = () => {
        // if (theme === "dark-theme") {
        //     setTheme("light-theme")
        // }
        // else {
        //     setTheme("dark-theme")
        // }
        setTheme("dark-theme")
    }
    const light = () => {

        setTheme("light-theme")
    }
    useEffect(() => {
        document.body.className = theme
    }, [theme])
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <Main>
                    <DrawerHeader />
                    <div className='setting'>
                        <h2>Select Mode</h2>
                        {/* <button type='button' onClick={toggleTheme}>
                            Switch
                        </button> */}
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" onClick={light} control={<Radio />} label="Light Mode" />
                                <FormControlLabel value="male" onClick={dark} control={<Radio />} label="Dark Mode" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </Main>
            </Box>
        </>
    );
}
export default Setting;