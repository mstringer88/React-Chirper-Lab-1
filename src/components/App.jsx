import React, { Component, Fragment } from "react";
import DisplayChirp from "./DisplayChirp";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            message: "",
            postArray: []
        }
    };

    componentDidMount() {
        let chirpsPost = [
            {
                newName: 'Michael',
                newMessage: 'Hello Michael'
            },
            {
                newName: 'Tamara',
                newMessage: 'Hello Tamara'
            },
            {
                newName: 'Jax',
                newMessage: 'Hello Jax'
            },
        ];
        this.setState({
            postArray: chirpsPost
        });
    }

    handleUserNameChange(e) {
        this.setState({ userName: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    handleButtonClick(e) {
        e.preventDefault();
        let newPostArray = this.state.postArray;
        let newChirpPost = {
            newName: this.state.userName,
            newMessage: this.state.message
        };
        newPostArray.unshift(newChirpPost);
        this.setState({
            postArray: newPostArray,
            userName: '',
            message: ''
        });
    }



    render() {
        return (
            <Fragment>

                <form>
                    <div className="form-group">
                        <label>User Name</label>
                        <input onChange={(e) => this.handleUserNameChange(e)} value={this.state.userName} className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Chirp Message</label>
                        <textarea onChange={(e) => this.handleMessageChange(e)} value={this.state.message} className="form-control" rows="3" placeholder="Insert Message"></textarea>
                    </div>
                    <button onClick={(e) => this.handleButtonClick(e)} type="submit" className="btn btn-primary">Create Chirp!</button>
                </form>
        {this.state.postArray.map((chirp) => {
                    return <DisplayChirp chirp={chirp} />
                })}

            </Fragment>
        )
    };
};

export default App;