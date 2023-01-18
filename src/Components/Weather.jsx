import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Weather = () => {
	const [weather, setWeather] = useState()

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
                console.log(response.data)
				setWeather(response.data)
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
                    <td></td>
				</tr>
				<tr>
					<td>Temperature: </td>
				</tr>
				<tr>
					<td>Feels Like: </td>
				</tr>
				<tr>
					<td>Humidity: </td>
				</tr>
				<tr>
					<td>Wind Speed: </td>
				</tr>
			</table>
		</div>
	)
}

export default Weather
