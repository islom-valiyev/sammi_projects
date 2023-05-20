import { Card, CardContent, CardMedia, Typography, } from "@mui/material"
import { colors } from "../../constants/colors"
import  moment  from 'moment'

const VideoCard = ({ video }) => {
    console.log(video);
    return (
        <Card sx={{ width: '320px', boxShadow: 'none', borderRadius: 0 }}>
            <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} sx={{ width: '360px,', height: '180px' }}  >
                <CardContent sx={{ background: colors.primary, height: '200px', position: 'relative' }}>
                    <Typography my={'5'} sx={{ opacity: '4' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                </CardContent>
            </CardMedia>

        </Card>
    )
}

export default VideoCard
