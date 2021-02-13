import React, {Component} from 'react'

export default class Toggler extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.state((state)=>({isOpen: !state.isOpen}));
    };

    render() {
        return(
            return this.props.children({
            isOpen: this.state.isOpen 
            })
        )
    }
}