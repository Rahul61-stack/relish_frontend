import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import store from "../store";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { apiRoutes } from "../config";

function AddressList({ address, id, callBack }) {
  const [showAddress, setShowAddress] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const customer = useSelector((state) => state.auth.login);
  const [finaladdress, setAddress] = useState();
  //FUNCTION + USEEFFECT TO GET CUSTOMER AT MOUNT
  useEffect(() => {
    if (customer.isLoggedIn) {
      axios
        .get(apiRoutes("getcustomer", customer.id))
        .then((response) => setAddressList(response.data.address));
    } else {
      setAddressList(address);
    }
    if (customer.isLoggedIn) {
      setShowAddress(true);
    }
  }, []);
  function addressHandler(event) {
    callBack(event.target.value,addressList)
    setAddress(event.target.value);
  }
  
  return (
    <div>
      {showAddress ? (
        <FormControl>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            style={{ color: "white" }}
          >
            Select an Address
          </FormLabel>
          <RadioGroup
            defaultValue={finaladdress}
            name="controlled-radio-buttons-group"
            onChange={() => addressHandler()}
            value={finaladdress}
          >
            {addressList.map((address, i) => {
              return (
                <FormControlLabel
                  key={i}
                  className="px-6 line-clamp-1 text-lg py-2"
                  value={address.nickname}
                  control={
                    <Radio className="bg-white border-white -translate-x-2 h-4 w-4" />
                  }
                  label={address.nickname + " " + address.apartment}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AddressList;
