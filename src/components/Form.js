import React from 'react';

class Form extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.getUV}>
                <input type='text' name='lat' placeholder='latitude'/>
                <input type='text' name='lon' placeholder='longitude'/>
                <button className='uv'> Get UV Index </button>
            </form>
        );
    }
};

export default Form