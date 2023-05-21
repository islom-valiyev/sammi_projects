import { CheckCircle } from "@mui/icons-material"
import { Box,Typography, CardMedia } from "@mui/material"

const ChannelCard = ({ video }) => {
    return (
        <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '365px', md: '320px' }, height: '326px', margin: 'auto' }} >
            <CardMedia image={video?.snippet?.thumbnails?.default?.url} alt={video?.snippet?.title} sx={{ borderRadius: '50px', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}>
            </CardMedia>
            <Typography variant={'h6'}>
                {video?.snippet?.title}  <CheckCircle sx={{fontSize:'14px,' ,color:'gray' ,ml:'5px'}}/>  
                {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>

        </Box>
    )
}

export default ChannelCard