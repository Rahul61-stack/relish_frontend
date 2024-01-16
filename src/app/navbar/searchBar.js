import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import axios from "axios";
import { ListItemText } from "@mui/material";
import { apiRoutes } from "../config";
const filter = createFilterOptions();

export default function SearchBar() {
  const msg = "YES"
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  function searchSuggestions(event) {
    console.log(event.target.value);
    const temp = items.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setSuggestions(temp.map((item) =>item.name));
  }
  useEffect(() => {
    axios.get(apiRoutes("getallitems")).then((response) => {
      setItems(response.data);
    });
  });
  return (
    <div>
      {/* Figure something out for mobile */}
      <div className=" hidden md:block">
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={suggestions}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            console.log(option)
            // Regular option
            return option.title;
          }}
          renderOption={(props, option) => (
            <li
              style={{
                backgroundColor: "#1e293b",
                backgroundSize:'cover',
                border:10
              }}
              {...props}
            >
             <ListItemText primary={option} style={{ color: 'white',border:20 }} />
            </li>
          )}
          sx={{ width: 400, height: 38 }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={()=>searchSuggestions}
              label="Search for Items"
              InputLabelProps={{
                ...params.InputLabelProps,
                style: { color: "white" },
              }}
              InputProps={{
                ...params.InputProps,
                style: { color: "white" },
              }}
            />
          )}
        />
      </div>
      <div className=" md:hidden">
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={suggestions}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(props, option) => (
            <li
              style={{
                backgroundColor: "#475569",
                backgroundSize:'cover'
              }}
              {...props}
            >
             <ListItemText primary={option} style={{ color: 'white' }} />
            </li>
          )}
          sx={{ width: 100, height: 40 }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={searchSuggestions}
              label="Search for Items"
              InputLabelProps={{
                ...params.InputLabelProps,
                style: { color: "white" },
              }}
              InputProps={{
                ...params.InputProps,
                style: { color: "white" },
              }}
            />
          )}
        />
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
