import React from 'react';
import { List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Link } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MouseIcon from '@mui/icons-material/Mouse';
import ExploreIcon from '@mui/icons-material/Explore';
import { Link as RouterLink } from 'react-router-dom';

const DrawerComp = ({ open, Drawer, DrawerHeader }) => {

    return (
        <>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <List sx={{ display: 'flex', alignItems: 'center', mx: 'auto' }}>
                        <Link component={RouterLink} to={"/dashboard"}>
                            <Button variant='h1' sx={{ color: 'black', fontSize: '20px' }} >
                                <WorkIcon sx={{ mr: 2, color: '#5bc96b' }} />
                                Bst
                            </Button>
                        </Link>
                    </List>
                </DrawerHeader>
            <Divider />
            <List>
                <Link component={RouterLink} to="/dashboard" sx={{ textDecoration: 'none'}}>
                    <ListItem disablePadding sx={{ ml: open ? 3 : 'auto',}}>
                        <ListItemButton sx={{ px: 2.5 }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >  <GridViewIcon />
                            </ListItemIcon>
                            <ListItemText  sx={{ opacity: open ? 1 : 0, color: 'black'}}>
                            Dashboard
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} to="/products" sx={{ textDecoration: 'none'}}>
                    <ListItem disablePadding sx={{ ml: open ? 3 : 'auto',}}>
                        <ListItemButton sx={{ px: 2.5 }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >  <MouseIcon />
                            </ListItemIcon>
                            <ListItemText  sx={{ opacity: open ? 1 : 0, color: 'black' }}>
                                Products
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} to="/customers" sx={{ textDecoration: 'none'}}>
                    <ListItem disablePadding sx={{ ml: open ? 3 : 'auto',}}>
                        <ListItemButton sx={{ px: 2.5 }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >  <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText  sx={{ opacity: open ? 1 : 0, color: 'black' }}>
                                Customer
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link component={RouterLink} to="/orders" sx={{ textDecoration: 'none'}}>
                    <ListItem disablePadding sx={{ ml: open ? 3 : 'auto',}}>
                        <ListItemButton sx={{ px: 2.5 }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >  <ExploreIcon />
                            </ListItemIcon>
                            <ListItemText  sx={{ opacity: open ? 1 : 0, color: 'black' }}>
                                Orders
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            </Drawer>
        </>
    );

    // return (
    //     <>
    //         <Drawer variant="permanent" open={open}>
    //             <DrawerHeader>
    //                 <List sx={{ display: 'flex', alignItems: 'center', mx: 'auto' }}>
    //                     <Link component={RouterLink} to={"/dashboard"}>
    //                         <Button variant='h1' sx={{ color: 'black', fontSize: '20px' }} >
    //                             <WorkIcon sx={{ mr: 2, color: '#5bc96b' }} />
    //                             Bst
    //                         </Button>
    //                     </Link>
    //                 </List>
    //             </DrawerHeader>
    //             <Divider />
    //             <List>
    //                 {['Dashboard', 'Category', 'Product', 'Order'].map((text, index) => (
    //                     <ListItem key={text} disablePadding >
    //                         <ListItemIcon
    //                             sx={{
    //                                 minWidth: 0,
    //                                 ml: open ? 3 : 'auto',
    //                                 justifyContent: 'center',
    //                             }}
    //                         >
    //                         </ListItemIcon>

    //                         <ListItemButton
    //                             sx={{
    //                                 minHeight: 48,
    //                                 justifyContent: open ? 'initial' : 'center',
    //                                 px: 2.5,
    //                             }}
    //                         >
    //                             <ListItemIcon
    //                                 sx={{
    //                                     minWidth: 0,
    //                                     mr: open ? 3 : 'auto',
    //                                     justifyContent: 'center',
    //                                 }}
    //                             >
    //                                 {index % 2 === 0 ? <GridViewIcon /> : <CachedIcon />}
    //                             </ListItemIcon>
    //                             <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    //                         </ListItemButton>
    //                     </ListItem>
    //                 ))}
    //             </List>
    //             {/* <Divider /> */}
    //             {/* <List>
    //                 {['Products'].map((text, index) => (
    //                     <ListItem key={text} disablePadding sx={{ display: 'block' }}>
    //                         <ListItemButton to={"/products"}
    //                             sx={{
    //                                 minHeight: 48,
    //                                 justifyContent: open ? 'initial' : 'center',
    //                                 px: 2.5,
    //                             }}
    //                         >
    //                             <ListItemIcon
    //                                 sx={{
    //                                     minWidth: 0,
    //                                     mr: open ? 3 : 'auto',
    //                                     justifyContent: 'center',
    //                                 }}
    //                             >
    //                                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //                             </ListItemIcon>
    //                             <NavLink to={"/products"} style={{ textDecoration: 'none' }}>
    //                                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    //                             </NavLink>
    //                         </ListItemButton>
    //                     </ListItem>
    //                 ))}
    //             </List> */}
    //         </Drawer>
    //     </>
    // )
    //     <>
    //         <List>
    //             <Link component={RouterLink} to="/dashboard">
    //                 <ListItemButton>
    //                     <ListItemIcon>
    //                         <WorkIcon />
    //                     </ListItemIcon>
    //                     <ListItemText primary="Dashboard" />
    //                 </ListItemButton>
    //             </Link>
    //             <Link component={RouterLink} to="/category">
    //                 <ListItemButton>
    //                     <ListItemIcon>
    //                         <GridViewIcon />
    //                     </ListItemIcon>
    //                     <ListItemText primary="Category" />
    //                 </ListItemButton>
    //             </Link>
    //             <Link component={RouterLink} to="/product">
    //                 <ListItemButton>
    //                     <ListItemIcon>
    //                         <CachedIcon />
    //                     </ListItemIcon>
    //                     <ListItemText primary="Product" />
    //                 </ListItemButton>
    //             </Link>
    //             <Link component={RouterLink} to="/order">
    //                 <ListItemButton>
    //                     <ListItemIcon>
    //                         <MailIcon />
    //                     </ListItemIcon>
    //                     <ListItemText primary="Order" />
    //                 </ListItemButton>
    //             </Link>
    //         </List>
    //     </>
    // );
};


export default DrawerComp;
