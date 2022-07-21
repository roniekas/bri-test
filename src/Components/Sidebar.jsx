import React from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Divider from '@mui/material/Divider';


const Sidebar = ({mode, setMode}) => {
    return (
        <Box flex={2} p={2} sx={{
            display: {
                xs: "none",
                sm: "block"
            }
        }}>
            <Box position="fixed">
            <nav aria-label="main mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#asd">
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary="Universitas Terbaik" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#asd">
                    <ListItemIcon>
                        <HomeWorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pimpinan Universitas Indonesia" />
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
            <Divider />
            </Box>
        </Box>
    )
}

export default Sidebar;