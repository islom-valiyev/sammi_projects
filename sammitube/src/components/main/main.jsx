import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Stack, Box, Container, Typography } from "@mui/material";
import { Category, Videos, Loader } from "../index";
import { ApiService } from '../../service/api.service'
const Main = () => {
	const [selactedCategory, setSelactedCategory] = useState("New");
	const selactedCategoryHandle = (category) => setSelactedCategory(category);
	const [videos, setVideos] = useState([])
	useEffect(() => {
		ApiService.fetching(`search?part=snippet&q=${selactedCategory}`).then(data => setVideos(data.items))
	}, [selactedCategory])
	return (
		<Stack>
			<Category
				selactedCategoryHandle={selactedCategoryHandle}
				selactedCategory={selactedCategory}
			/>
			<Box p={2} sx={{ height: "90vh" }}>
				<Container maxWidth={"90%"}>
					<Typography variant={"h4"} fontWeight={"bold"} mb={2}>
						{selactedCategory}{" "}
						<span style={{ color: colors.secondary }}>videos</span>
					</Typography>
					<Videos videos={videos} />
					{videos.items ? videos.items.map(c => c.kind) : <Loader />}
					{/* {videos.items.map(c => c.kind)} */}

				</Container>
			</Box>
		</Stack>
	);
};
export default Main;
