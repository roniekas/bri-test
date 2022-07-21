import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Button from '@mui/material/Button';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };
export default function Post(props) {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
        return(
            <Card sx={{
                margin: "10px"
            }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }}>
                    {props.name[0]}
                </Avatar>
                }
                action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                }
                title={props.name}
                subheader={props.country}
            />
            <CardMedia
                component="img"
                height="15%"
                image="https://source.unsplash.com/random/1100x700/?university"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>
                </IconButton>
                <Button variant="contained" onClick={handleOpen}>Detail</Button>
            </CardActions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Detail Universitas - kademi Farmasi Mitra Sehat Mandiri Sidoarjo
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                        <li>Alpha_two_code : {props.alpha}</li>
                        <li>State-province : NULL</li>
                        <li>Country : {props.webPages}</li>
                        <li>Name : {props.name}</li>
                        <li>Web Akademik : <a href={props.webPages} target="_blank" rel="noreferrer noopener">{props.webPages}</a></li>
                        <li>Domains : {props.domains}</li>
                    </ul>
                </Typography>
                </Box>
            </Modal>
            </Card>
        )
}