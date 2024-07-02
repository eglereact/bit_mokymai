import { useEffect, useReducer } from "react";
import axios from "axios";
import colorsReducer from "../reducers/colorsReducer";
import { read } from "../Actions/colorsActions";

const useRead = (serverUrl) => {
  const [colors, dispatchColors] = useReducer(colorsReducer, null);

  useEffect((_) => {
    axios
      .get(`${serverUrl}colors`)
      .then((res) => {
        dispatchColors(read(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { colors, dispatchColors };
};

export default useRead;
