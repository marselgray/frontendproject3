import React from 'react';

class UV extends React.Component{
    render(){
        return (
            <div> 
                {this.props.lat && this.props.lon && <p>Latitude: { this.props.lat }</p>}
                {this.props.lat && this.props.lon && <p>Longitude: { this.props.lon }</p>}
                {this.props.value && <h3>UV Index: {this.props.value }</h3>}
                {this.props.error && <p> {this.props.error} </p>}
            </div>
        );
    }
};

export default UV