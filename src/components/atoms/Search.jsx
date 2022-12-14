import React from "react";
import { Box, TextField} from "@mui/material";
import { ImSearch } from "react-icons/im";

const Search = () => {
  return (
    <>
      <Box display={"inline-flex"} mr={2}>
        <TextField
          id="outlined-basic"
          label={<ImSearch />}
          variant="outlined"
          size={"small"}
        />
      </Box>
    </>
  );
};

export default Search;
