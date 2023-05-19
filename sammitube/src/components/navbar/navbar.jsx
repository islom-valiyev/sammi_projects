import { Link } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import { logo } from '../../constants/index'
import { colors } from '../../constants/colors'
import { SearchBar } from '../index'

const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2} sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary }}>
      <Link to={"/"} height={'10vh'}>
        <img src={logo} alt="logo" height={30} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  )
}

export default Navbar
