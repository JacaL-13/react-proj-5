import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectPotentials } from '../redux/slices/potentialCountriesSlice'
import { setDisplayCountry } from '../redux/slices/displayCountrySlice'

const OptionDisplay = () => {
	let currentPotentials = useSelector(selectPotentials)

	const dispatch = useDispatch()

	return (
		<div className="stack">
			{currentPotentials.map((cntry, idx) => {
				return (
					<h2
						key={cntry.name.official}
						className="country-option"
						onClick={() => {
							dispatch(setDisplayCountry(currentPotentials[idx]))
						}}
					>
						{cntry.name.common}
					</h2>
				)
			})}
		</div>
	)
}

export default OptionDisplay
