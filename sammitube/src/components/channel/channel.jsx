import { useParams, } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Container } from "@mui/material"
import { ApiService } from "../../service/api.service"
import { ChannelCard, Videos } from '../index'
const Channel = () => {
	const [channelDetails, setchannelDetails] = useState()
	const [videos, setVideos] = useState([])
	useEffect(() => {
		const getData = async () => {
			try {
				const dataChannelsDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
				setchannelDetails(dataChannelsDetail.items[0])
				const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet`)
				setVideos(dataVideo?.items)
			} catch (error) {
				console.log(error);
			}
		}
		getData()
	})
	const { id } = useParams()
	console.log(videos);
	return (
		<Box minHeight={'95vh'} mt={'10vh'}>
			<Box>
				<Box width={'100%'} height={'300px'} sx={{ backgroundImage: `url(${channelDetails?.brandingSettings?.image?.bannerExternalUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', objectFit: 'cover', backgroundRepeat: 'no-repeat' }} />
				<ChannelCard video={channelDetails} marginTop={'-100px'} />
			</Box>
			<Container maxWidth={'90%'}>
				{' '}
				<Videos videos={videos} />
			</Container>
		</Box>
	)
}
export default Channel
