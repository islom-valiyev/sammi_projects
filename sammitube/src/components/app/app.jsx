import { Routes, Route } from 'react-router-dom'
import { Box } from "@mui/material";
import { Main, Channel } from '../'


function App() {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/channel/:id' element={<Channel />} />

            </Routes>
        </Box>
    );
}

export default App;
