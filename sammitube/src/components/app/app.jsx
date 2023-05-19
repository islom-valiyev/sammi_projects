import { Routes, Route } from 'react-router-dom'
import { Box } from "@mui/material";
import { Main, Channel, Navbar, Search, VideoDetail, } from '../'
// import { useEffect } from 'react';
// import { ApiService } from '../../service/api.service';


function App() {
   
    return (

        <Box>
            <Navbar />
            <Routes>

                <Route path='/' element={<Main />} />
                <Route path='/channel/:id' element={<Channel />} />
                <Route path='/video/:id' element={<Search />} />
                <Route path='/search/:id' element={<VideoDetail />} />
            </Routes>
        </Box>
    );
}

export default App;
