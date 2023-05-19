import { useState } from "react";
import { colors } from "../../constants/colors";
import { Stack, Box, Container, Typography } from "@mui/material";
import { Category, Videos } from "../index";
const Main = () => {

  const [selactedCategory, setSelactedCategory] = useState("new");

  const selactedCategoryHandle = (category) => setSelactedCategory(category);

  console.log(process.env.REACT_APP_PUBLIC_KEY);
  
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
          <Videos/> 
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
