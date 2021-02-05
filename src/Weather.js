import Axios from 'axios';
import React, { useState } from 'react'

/*export default class Weather extends Component {
    constructor(){
        super();
        this.state = {
            location: '',
            temp: undefined,
            description: undefined,
            submitted: false,
            everything: {},
            country: undefined,
            humidity: undefined
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=a64a5772183a4423f74c695be124a317`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                temp : response.main.temp,
                submitted: true,
                description: response.weather[0].description,
                everything : response,
                country: response.sys.country,
                humidity: response.main.humidity
            })
        })
    }

    convert = (temp) => {
        return Math.floor(temp-273.5);
    }

    dateBuilder = (d) => {
        let months = ["January","February","March","April","May","June","July","August",
        "September","October","November","December"]
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return day + ', ' + month + ' ' + date + ', ' + year;
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]:value})
    }


    render() {
        
        
        return (
            <div className = 'big-box'>
                <form onSubmit = {(event)=>this.handleSubmit(event)}>
                    <input
                        className = 'search'
                        type = 'text'
                        name = 'location'
                        placeholder = 'Enter a city'
                        value = {this.state.location}
                        onChange = {(event)=>this.handleChange(event)}
                        autoComplete = 'off'
                    /><br/>
                </form>
                {this.state.submitted ? <h1>{this.state.everything.name}, {this.state.country}</h1> : null }

                <h1>{this.dateBuilder(new Date())}</h1>
                
                {this.state.submitted ? <h1>{this.convert(this.state.temp)}°C</h1> : null }
                
                <h1>{this.state.description}</h1>

                {this.state.submitted ? <h1>Humidity: {this.state.humidity}%</h1> : null }
            </div>
        )
    }
}*/

export default function Weather() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState([])
    const api_key = 'a64a5772183a4423f74c695be124a317'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`

    const getWeather = async () => {
       if(query !== ''){ const apiCall = await fetch(url)
        const data = await apiCall.json()
        setWeather(data)
        setQuery('')
        console.log(data)}
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        getWeather();
    }

    const convert = (temp) => {
        return Math.floor(temp-273.5);
    }

    const dateBuilder = (d) => {
        let months = ["January","February","March","April","May","June","July","August",
        "September","October","November","December"]
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return day + ', ' + month + ' ' + date + ', ' + year;
    }
    return (
        <div>
            <div className = 'big-box'>
            <form onSubmit = {handleSubmit}>
                    <input
                        className = 'search'
                        type = 'text'
                        placeholder = 'Enter a city'
                        value = {query}
                        onChange = {e => setQuery(e.target.value)}
                        autoComplete = 'off'
                    /><br/>
                </form>
                {weather.name && <h1>{weather.name}, {weather.sys.country}</h1> }

                <h1>{dateBuilder(new Date())}</h1>
                
                {weather.name && <h1>{convert(weather.main.temp)}°C</h1> }
                
                {weather.name && <h1>{weather.weather[0].description}</h1>}

                {weather.name && <h1>Humidity: {weather.main.humidity}%</h1> }
        </div>
        </div>
    )
}
