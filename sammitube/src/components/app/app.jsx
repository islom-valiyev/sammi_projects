import { Routes, Route } from 'react-router-dom'
import { Box } from "@mui/material";
import { Main } from '../'
import { Channel } from '../'


function App() {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/channel' element={<Channel />}/>

            </Routes>
        </Box>
    );
}

export default App;
