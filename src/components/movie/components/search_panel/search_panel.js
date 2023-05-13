import { useState } from 'react' 
import './search_panel.css' 
// SearchPanel nomli yangi komponent yaratiladi, bu Component klassidan extends qilinadi
const SearchPanel = props => {
	const [term, setTerm] = useState('')

	const updateTermHandler = e => {
		const term = e.target.value.toLowerCase()
		setTerm(term)
		props.updateTermHandler(term)
	}

	return (
		<input
			type='text'
			className='form-control search-input'
			placeholder='Kinolarni qidirish'
			onChange={updateTermHandler}
			value={term}
		/>
	)
}

export default SearchPanel