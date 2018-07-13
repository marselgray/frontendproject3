import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import UV from './components/UV.js';
import Indices from './components/Indices.js';

//Marsel's API KEY for open weather map
const API_KEY = 'cad2d6dddccc9804f43e7c3af9e56f52';


class Heir extends React.Component {
    state = {
        lat: undefined,
        lon: undefined,
        value: undefined,
        error: undefined
    }

    //Get UV index
    getUV =  async (e) => {
        e.preventDefault();
        const lat = e.target.elements.lat.value;
        const lon = e.target.elements.lon.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/uvi/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await api_call.json();
        
        if (lat && lon) {
            console.log(data);
            this.setState({
                //data is the first array with lat,long, and value as objects within the array
                //the array displays UV index for next 8 days, but only need to access the currnet day (index 0)
                lat: data[0].lat,
                lon: data[0].lon,
                value: data[0].value,
                error: ''
            });
        } else {
            this.setState({
                lat: undefined,
                lon: undefined,
                value: undefined,
                error: 'please enter values'
                });
            }
    }

    render(){
        return (
            <div>
                <Titles />
                <Form getUV={this.getUV}/>
                <UV 
                lat={this.state.lat}
                lon={this.state.lon}
                value={this.state.value}
                error={this.state.error}
                />
                <Indices
                value={this.state.value}
                />
            </div>
        )
    }
}

export default Heir


