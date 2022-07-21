import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";
import "./load.css";
import axios from "axios";


class Feed extends React.Component{
    constructor(props){
        super(props);
        this.updateUniv = this.updateUniv.bind(this);
    } 
    state = {
        univs: [],
        bar: false,
        a: ''
    }

    componentDidMount(){
        this.updateUniv();
    }

    componentDidUpdate(prevProps) {
        if(this.props.inputan !== prevProps.inputan)
        {
          this.updateUniv();
        }
    }
    
    updateUniv() {
        if (this.props.inputan) {
            axios.get(`http://universities.hipolabs.com/search?country=Indonesia&name=${this.props.inputan}`)
            .then((res) => {
                this.setState({
                    univs: res.data,
                    bar: true
                });
            })
            .catch(function (error) {
                console.error(error);
            })
        } else {
            axios.get(`http://universities.hipolabs.com/search?country=Indonesia`)
            .then((res) => {
                this.setState({
                    univs: res.data,
                    bar: true
                });
            })
            .catch(function (error) {
                console.error(error);
            })
        }  
      }

    render(){
        return (
            <Box flex={4} p={2}>
                {
                
                !this.state.bar ? (
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    this.state.univs.map((univ, i) => {
                        return <Post 
                        key={i} 
                        name={univ.name} 
                        country={univ.country}
                        alpha={univ.alpha_two_code}
                        webPages={univ.web_pages[0]}
                        domains={univ.domains[0]}/>
                    })
                )
            }                
            {console.log('ini dari feed : ' + this.props.inputan)}
            </Box>
        )
    }
}

export default Feed;