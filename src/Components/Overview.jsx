import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

function Overview(props) {
	const currentDisplay = useSelector(selectDisplay)
	const { name, population, capital, currencies } = currentDisplay

	console.log(currentDisplay)

	return (
		<div className="stack">
			<h2>{name.official}</h2>
			<table className="overview-table">
				<tr>
					<td>Population:</td>
					<td>{population.toLocaleString('en-US')}</td>
				</tr>
				<tr>
					<td>Capital:</td>
					<td>{capital[0]}</td>
				</tr>
				{Object.entries(currencies).map(([key, val]) => {
					return (
						<tr>
							<td>Currencies:</td>
							<td>{val.name} - </td>
							<td>{key} - </td>
							<td>{val.symbol}</td>
						</tr>
					)
				})}
				<tr>
					<td></td>
					<td></td>
				</tr>
			</table>
		</div>
	)
}

export default Overview
