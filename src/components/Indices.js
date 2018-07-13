import React from 'react';
import './Indices.css';
 
class Indices extends React.Component{
    render(){
        let button;
        let p;
        if (this.props.value >= 0 && this.props.value <= 2.99) {
           button = <button className='green'> Low </button>
           p = <p> UV Index Low - Green
           Low danger from the sun's UV rays for the average person.
           Wear sunglasses on bright days.
           If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen.
           Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.</p>
        }
        if (this.props.value >= 3 && this.props.value <= 5.99) {
            button = <button className='yellow'> Moderate </button>
            p = <p>Moderate risk of harm from unprotected sun exposure.
            Stay in shade near midday when the sun is strongest.
            If outdoors, wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. 
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure. </p>
         }
         if (this.props.value >= 6 && this.props.value <= 7.99) {
            button = <button className='orange'> High </button>
            p = <p>High risk of harm from unprotected sun exposure. Protection against skin and eye damage is needed.
            Reduce time in the sun between 10 a.m. and 4 p.m.
            If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. 
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure. </p>
         }
         if (this.props.value >= 8 && this.props.value <= 10.99) {
            button = <button className='red'> Very High </button>
            p = <p> Very high risk of harm from unprotected sun exposure. Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.
            Minimize sun exposure between 10 a.m. and 4 p.m.
            If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating. 
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.</p>
         }
         if (this.props.value >= 11) {
            button = <button className='purple'> Extreme </button> 
            p = <p> Extreme risk of harm from unprotected sun exposure. Take all precautions because unprotected skin and eyes can burn in minutes. 
            Try to avoid sun exposure between 10 a.m. and 4 p.m.
            If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.</p>
         }
         

        return (
            <div> 
                {button}
                {p}
            </div>
        );
    }
};


export default Indices


// information provided from www.epa.gov/sunsafety/uv-index-scale-1