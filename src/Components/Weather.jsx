import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const compass = {
	N: 'north',
	E: 'east',
	S: 'south',
	W: 'west'
}

const Weather = () => {
	const [weather, setWeather] = useState({})
	const [dirWords, setDirWords] = useState('')

	const display = useSelector(selectDisplay)

	const latitude = display.capitalInfo.latlng[0]
	const longitude = display.capitalInfo.latlng[1]

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/current.json',
			params: { q: `${latitude}, ${longitude}` },
			headers: {
				'X-RapidAPI-Key': '87313b6ee5msh78c6057cebcddbbp1e8778jsn2bd0475b4655',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
			}
		}

		axios
			.request(options)
			.then(function (response) {
				setWeather(response.data)

				const resDir = response.data.current.wind_dir
				let resDirWords = ''
				for (let i = 0; i < resDir.length; i++) {
					resDirWords += compass[resDir[i]]

                    if (resDir.length === 3 && i === 0) {
                        resDirWords += '-'
                    }
                    setDirWords(resDirWords)
				}
			})
			.catch(function (error) {
				console.error(error)
			})
	}, [])

	// ------------------------------------
	// PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
	// ------------------------------------

	return (
		<div>
			<table className="overview-table">
				<tr>
					<td>Conditions: </td>
					<td>{weather?.current?.condition?.text}</td>
				</tr>
				<tr>
					<td>Temperature: </td>
					<td>{weather?.current?.temp_f}</td>
				</tr>
				<tr>
					<td>Feels Like: </td>
					<td>{weather?.current?.feelslike_f}</td>
				</tr>
				<tr>
					<td>Humidity: </td>
					<td>{weather?.current?.humidity}%</td>
				</tr>
				<tr>
					<td>Wind Speed: </td>
					<td>
						{weather?.current?.wind_mph} mph {dirWords}
						{/* {weather.current.wind_dir} */}
					</td>
				</tr>
			</table>
		</div>
	)
}

export default Weather
