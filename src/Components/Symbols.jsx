import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

function Symbols(props) {
	const currentDisplay = useSelector(selectDisplay)

	return (
		<div className="symbols">
			<div className="stack">
				<img src={currentDisplay.flags.png} alt={`flag of ${currentDisplay.name.common}`} />
			</div>
			<div className="stack">
				{currentDisplay.coatOfArms.png ? (
					<img src={currentDisplay.coatOfArms.png} alt={`Coat of arms of ${currentDisplay.name.common}`} />
				) : (
					"No Coat of Arms"
				)}
			</div>
		</div>
	)
}

export default Symbols
