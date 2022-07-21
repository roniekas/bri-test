import React from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Kanan = () => {
    return (
        <Box flex={2} p={2} sx={{
            display: {
                xs: "none",
                sm: "block"
            }
        }}>
            <Box position="fixed">
            <Typography variant="h6">Komentar Teratas</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Roni Eka S" src="https://source.unsplash.com/random/100x100/?man" />
                </ListItemAvatar>
                <ListItemText
                primary="Bagaimana Pembuatannya ?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Recruiter 1 
                    </Typography>
                    {" — Lumayan berat dan waktu yang cukup mepet namun bisa JADI!"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Roni Eka Setiawan" src="https://source.unsplash.com/random/110x110/?man" />
                </ListItemAvatar>
                <ListItemText
                primary="Cukup Puas?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Recruiter 2 
                    </Typography>
                    {" — Belum, karena masih banyak kekurangan"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Roni Eka S" src="https://source.unsplash.com/random/120x120/?man" />
                </ListItemAvatar>
                <ListItemText
                primary="Patut direkomendasikan ?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Recruiter 3
                    </Typography>
                    {' — Ya, karena saya mempunyai semangat dan kemauan tinggi dalam pembelajaran'}
                    </React.Fragment>
                }
                />
            </ListItem>
            </List>
            </Box>
        </Box>
    )
}

export default Kanan;