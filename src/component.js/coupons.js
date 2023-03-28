import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';
import dayjs from 'dayjs';
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


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

const Coupons = () => {

    const [valueTime, setValueTime] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChangetime = (newValue) => {
        setValueTime(newValue);
    };


    const [value, setValue] = React.useState(null);

    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('')
    const handleChangetwo = (event) => {
        setAge2(event.target.value)
    }

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <Main>
                    <DrawerHeader />
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className=''>
                                    <div className='review-card'>
                                        <h2 className='title'>Coupons</h2>
                                       
                                        <Row>
                                            <Col md={3}>
                                            <div className='back-button'>
                                                    <button type='button'>
                                                    <img src='images/left-arrow.png'/>
                                                    Back
                                                    </button>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                           
                                                <div style={{position:"relative"}}>
                                                <div className='coupon-card'>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Type of Discount</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={age}
                                                            label="Type of Discount"
                                                            onChange={handleChange}
                                                            className="coupon-text mb-3"
                                                        >
                                                            <MenuItem value={10}>250</MenuItem>
                                                            <MenuItem value={20}>300</MenuItem>
                                                            <MenuItem value={30}>500</MenuItem>
                                                        </Select>
                                                    </FormControl>

                                                    <Row className=''>
                                                        <Col sm={6}>
                                                            <TextField fullWidth id="outlined-basic" label="Discount" variant="outlined" className='coupon-text' />
                                                        </Col>
                                                        <Col md={6}>
                                                            <TextField fullWidth id="outlined-basic" label="Min order Value" variant="outlined" className='coupon-text' />
                                                        </Col>
                                                    </Row>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                                                                <DatePicker
                                                                    className='w-100 coupon-text mt-3'
                                                                    fullWidth
                                                                    label="Validate Period"
                                                                    value={value}
                                                                    onChange={(newValue) => {
                                                                        setValue(newValue);
                                                                    }}
                                                                    renderInput={(params) => <TextField {...params} />}

                                                                />
                                               
                                                                <TimePicker
                                                                    className='w-100 coupon-text mt-3'
                                                                    fullWidth
                                                                    value={valueTime}
                                                                    label="Daily Time Slot"
                                                                    onChange={handleChangetime}
                                                                    renderInput={(params) => <TextField {...params} />}
                                                                />
                                                            </LocalizationProvider>

                                                    <FormControl className='mt-3'>
                                                        <FormLabel id="demo-row-radio-buttons-group-label">Time of Customer</FormLabel>
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group"
                                                        >
                                                            <FormControlLabel value="female" control={<Radio />} label="All" />
                                                            <FormControlLabel value="male" control={<Radio />} label="First time customer   " />

                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormControl fullWidth  className='mt-3'>
                                                        <InputLabel id="demo-simple-select-label">Aplicable outlets</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={age2}
                                                            label="Aplicable outlets"
                                                            onChange={handleChangetwo}
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <div className='coupons-button mt-3'>
                                                        <button type='button' className='btn'>
                                                            Schedule
                                                        </button>
                                                        <button type='button' className='btn btn-secondary'>
                                                            Cancel
                                                        </button>
                                                    </div>
                                                    
                                                </div>
                                                </div>
                                                
                                            </Col>
                                            <Col md={3}></Col>
                                            
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Main>
            </Box>
        </>
    );
}
export default Coupons;