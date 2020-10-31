import React, { Component } from 'react';
import './App.css'
import { Modal,Image,Row,Container,Col,Button } from 'react-bootstrap';
import Meme from './Meme';


class Select extends Component {
    state = {
        topText: "",
        bottomText: "",
        randomImg: "",
        allMemeImgs: [''],
        showMeme:true
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    dispMeme(){
        console.log("hi");
        this.setState({showMeme:false})
    }

    showGrid(){
        this.setState({showMeme:true});
    }


    render() {
        const images = this.state.allMemeImgs.map(image => {
            return <img src={image.url} className="gallery__img col-md-20 col-sm-3" onClick={()=>{this.dispMeme(); this.setState({randomImg:image.url})}}/>
         });

         var screen=this.state.showMeme;

         if(screen)
         {
    return ( 
        <div className="container">
            <h1>Select a meme template</h1>
        <div className="row gallery">
                       { images }
        </div>
        </div>
       
     );
    }
    else{
        return(
        <Meme image={this.state.randomImg}/>
        );
    }
    }
}
 
export default Select;