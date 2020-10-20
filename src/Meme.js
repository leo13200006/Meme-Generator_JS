import React, { Component } from 'react';
import { Button,Image,Row,Container,Col } from 'react-bootstrap';
import './App.css'
import Form from 'react-bootstrap/Form';

class Meme extends Component{

    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: ['']
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleSubmit=(event)=> {
        console.log("hiii")
        event.preventDefault()
        const randNum = Math.floor(Math.random() * (this.state.allMemeImgs.length))
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    handleTopChange=(event)=> {
        this.setState({ topText:event.target.value })
    }

    handleBottomChange=(event)=> {
        this.setState({ bottomText:event.target.value })
    }

    render() {
        return (
            <div className="justify-content-center">
            <Form className="row container justify-content-center mb-sm-3 mb-md-6 mt-sm-3 mt-md-6">
            <Form.Group controlId="basicInputForm" className="col-lg-6">
            <Form.Label>Top Text</Form.Label>
             <Form.Control type="text" placeholder="Enter text" value={this.state.topText} onChange={this.handleTopChange}/>
            <Form.Text className="text-muted" >
              This will be displayed on top side of the meme.
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="basicInputForm" className="col-lg-6">
            <Form.Label>Bottom Text</Form.Label>
             <Form.Control type="text" placeholder="Enter text" value={this.state.bottomText} onChange={this.handleBottomChange}/>
            <Form.Text className="text-muted" >
            This will be displayed on bottom side of the meme.
            </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={this.handleSubmit}>Next Meme</Button>
            </Form>


            <div className="meme mb-sm-3 mb-md-6">
                    <img src={this.state.randomImg} alt="" className="img-fluid"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>    
            </div>
    
        )
    }
}

export default Meme;