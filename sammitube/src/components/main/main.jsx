import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Stack, Box, Container, Typography } from "@mui/material";
import { Category, Videos } from "../index";
import { ApiService } from '../../service/api.service'
const Main = () => {

  const [selactedCategory, setSelactedCategory] = useState("new");

  const selactedCategoryHandle = (category) => setSelactedCategory(category);
  const [videos, setVideos] = useState([])

  // console.log(process.env.REACT_APP_PUBLIC_KEY);

  useEffect(() => {
    ApiService.fetching(`search?part=snippet&q=Music`).then(data => setVideos(data.items))

  }, [])

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
          {videos.items ? videos.items.map(c => c.kind) : 'loading...'}
          {/* {videos.items.map(c => c.kind)} */}

        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
