import React from "react";
import { AppBar, Toolbar, styled, Typography, Box, Badge } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';

const NavbarKeren = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("input")(({theme}) => ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    border: "none",
    height: "30px"
}))
const Icons = styled(Box)(({theme}) => ({
    alignItems:"center",
    display:"flex",
}))

class Navbar extends React.Component{
    state = {
        input: ''
    }
    
    handleInputan = (e) => {
        console.log('Langsung dari event dari Navbar : ' + e.target.value);
        this.setState({
            input: e.target.value
        }, () => this.props.handleinput(e.target.value) )
        
    }
    render(){
        return (
            <AppBar position="sticky" >
                <NavbarKeren>
                <Typography variant="h6" sx={{
                    display:{
                        xs:"none",
                        sm:"block"
                    }
                }}>BRI - College </Typography><AccountBalanceWalletOutlinedIcon sx={{
                    display:{
                        xs:"block",
                        sm:"none"
                    }
                }}/>
                <Search type="text" id="input" onChange={this.handleInputan}></Search>
                <Icons>
                <Badge color="secondary">
                        <InputOutlinedIcon />
                </Badge>
                <Typography sx={{
                    marginLeft:"10px"
                }}>Login</Typography>
                </Icons>
                </NavbarKeren>
            </AppBar>
        )
    }
}

export default Navbar;