import { useEffect, useState } from "react";
import axios from "axios";
import { addColor, remove0Id, replace0Id } from "../Actions/colorsActions";

const useCreate = (server_url, dispachColors) => {
  const [create, setCreate] = useState(null);
  const [store, setStore] = useState(null);

  useEffect(() => {
    if (null === store) {
      return;
    }
    dispachColors(addColor({ ...store, id: 0 }));
    axios
      .post(`${server_url}colors`, store)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          dispachColors(replace0Id(res.data.id));
        }
        dispachColors(remove0Id());
      })
      .catch((error) => {
        console.log(error);
        dispachColors(remove0Id());
      });
    setStore(null);
  }, [store, server_url]);

  return {
    create,
    setCreate,
    setStore,
  };
};
export default useCreate;
