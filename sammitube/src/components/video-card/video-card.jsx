import { Avatar, Card, CardContent, CardMedia, Stack, Typography, } from "@mui/material"
import { colors } from "../../constants/colors"
import moment from 'moment'
import { CheckCircle } from "@mui/icons-material";
import{Link} from "react-router-dom"

const VideoCard = ({ video }) => {

    const showCheckCircle = Math.random() < 0.5;

    return (
        <Card sx={{ width: { xs: '100%', sm: '360px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
			<Link to={`/video/${video.id.videoId}`}>
            <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} sx={{ width: {xs:'100%' , sm :'360px', md:'320px'}, height: '180px' }} />
			</Link>
            <CardContent sx={{ background: colors.primary, height: '200px', position: 'relative' }}>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5'} sx={{ opacity: '4' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ opacity: '.6' }}> {video?.snippet?.description.slice(0, 50)}</Typography>
                </Link>
                <>
                    <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'}>
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                        <Typography variant={'subtitle2'} color={'gray'}>
                            {video?.snippet?.channelTitle}
                            {showCheckCircle && <CheckCircle sx={{ fontSize: '12px', color: "gray", ml: "5px" }} />}
                        </Typography>
                    </Stack>
                </>
            </CardContent>
        </Card>
    )
}

export default VideoCard
