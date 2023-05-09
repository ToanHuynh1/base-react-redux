import React from "react";

class MyComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name: '',
            address: 'tg'
        }
    }

    handleOnChangeInput = (event) => [
        this.setState({
            name: (event.target.value)
        })
    ]

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    
    render(){
        let {name} = this.state
        return(
            <>
                <h1>My name is: {name}</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input 
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleOnChangeInput(event)}
                    ></input>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default MyComponent