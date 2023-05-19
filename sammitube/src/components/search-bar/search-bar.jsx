import { Search } from '@mui/icons-material'
import { colors } from '../../constants/colors'
import { Paper, IconButton } from '@mui/material'
const SearchBar = () => {
    return (
        <Paper component={'form'} sx={{ border:`1px solid ${colors.primary}`, pl:2, boxShadow: "none" }}>
            <input type="text" placeholder='Search...'className='search-bar' />
            <IconButton>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
