import { Search } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import { Paper, IconButton } from "@mui/material";
import { useState } from "react";
import {useNavigate} from "react-router-dom"


const SearchBar = () => {
	const navigate = useNavigate()
	const [value, setValue] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		if (value) {
			navigate(`/search/${value}`)
		}
	};
	return (
		<Paper
			component={"form"}
			sx={{ border: `1px solid ${colors.primary}`, pl: 2, boxShadow: "none" }}
			onSubmit={submitHandler}
		>
			<input
				type="text"
				placeholder="Search..."
				className="search-bar"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<IconButton type="submit">
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
