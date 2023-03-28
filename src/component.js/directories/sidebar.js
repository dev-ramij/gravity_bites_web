import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Menu, MenuItem, Fade } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import config from '../../config/config';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
const drawerWidth = 224;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(96%)`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Sidebar = () => {

    const [buttonText, setButtonText] = useState(false)
    function handelClick() {
        setButtonText(!buttonText)
    }

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(!open)

    };;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openDrop = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ display: 'flex' }} className="main-sidebar">
            <CssBaseline />
            <AppBar position="fixed" open={open} className="header">
                <Toolbar>
                         <Form.Control
                                type="search"
                                placeholder="&#xF002; Search" 
                                style={{fontFamily:"Arial, FontAwesome",marginRight:"10px",width:"190px"}}
                                className="header-search"
                                aria-label="Search"
                            >

                            </Form.Control>
                    <div className='d-flex m-auto' style={{paddingLeft:"40px"}}>
                        <div className='online-satus' style={{ width: "130px" }}>
                            <h2>{buttonText ? "You're Offline" : "You're Online"}</h2></div>
                    </div>
                    <div className='profile me-2'>
                        <div className='d-flex align-items-center'>
                       
                            <div className='online-mode'>
                                <button type="button" onClick={handelClick} style={{ background: buttonText ? '#6ac82d' : '#e00b0b' }} >{buttonText ? "Go Online" : "Go Offline"}</button>
                            </div>
                            <Button startIcon={<AccountCircleIcon fontSize='large' color="primary" className='ms-auto profile-icon' />}
                                // style={{ width: "330px" }}
                                id="fade-button"
                                aria-controls={openDrop ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openDrop ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <span>My Account</span>
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                className="header-menu"
                                anchorEl={anchorEl}
                                open={openDrop}
                                onClose={handleClose}
                                sx={{ ml: -2 }}
                                TransitionComponent={Fade}
                            >
                                <div className='main-menus'>
                                    <Link to={`${config.baseUrl}store-profile`}><MenuItem onClick={handleClose}>Store Profile</MenuItem></Link>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </div>
                            </Menu>
                        </div>
                    </div>

                </Toolbar>

            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Divider />

                <List className='sidebar'>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "20px" }}>
                        <Link to={`${config.baseUrl}`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 2, justifyContent: 'center'}}>
                                    <img src='images/logo.png' alt='logo' style={{ width: "70px", marginTop: "-15px", height: "auto" }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}my-orders`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/order.png' alt='icon' />
                                    {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >My Orders</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}my-products`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/product.png' alt='icon' />
                                    {/* <i class="fa fa-cubes" aria-hidden="true"></i> */}

                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >My Products</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}insight`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/insight.png' alt='icon' />
                                    {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >Insight</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}wallet`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/wallet.png' alt='icon' />
                                    {/* <i class="fa fa-briefcase" aria-hidden="true"></i> */}

                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >Wallet</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}review`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/reviews.png' alt='icon' />
                                    {/* <i class="fa fa-star-half-o" aria-hidden="true"></i> */}
                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >My Reviews</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}coupons-card`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/coupon.png' alt='icon' />
                                    {/* <i class="fa fa-file-text" aria-hidden="true"></i> */}
                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >Coupons</ListItemText>
                            </ListItemButton>
                        </Link>

                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}terms-condition`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/tandc.png' alt='icon' />
                                    {/* <i class="fa fa-file-text" aria-hidden="true"></i> */}

                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >Terms & condition</ListItemText>
                            </ListItemButton>
                        </Link>

                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}support`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/help.png' alt='icon' />
                                    {/* <i class="fa fa-file-text" aria-hidden="true"></i> */}
                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >Support</ListItemText>
                            </ListItemButton>
                        </Link>

                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <Link to={`${config.baseUrl}setting`}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 0, }}>
                                <ListItemIcon className='sidebar-icons' sx={{ minWidth: 0, mr: open ? 1 : 'auto', ml: 3, justifyContent: 'center', }}>
                                    <img src='images/settings.png' alt='icon' />
                                    {/* <i class="fa fa-file-text" aria-hidden="true"></i> */}

                                </ListItemIcon>
                                <ListItemText className='side-text' sx={{ opacity: open ? 1 : 0 }} >Setting</ListItemText>
                            </ListItemButton>
                        </Link>

                    </ListItem>
                </List>
                <div className='toggle-sidebar' onClick={handleDrawerOpen}>
                </div>
            </Drawer>

        </Box>
    );
}
export default Sidebar