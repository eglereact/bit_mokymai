import { useEffect, useState } from "react";
import axios from "axios";

const useCreate = (server_url) => {
  const [create, setCreate] = useState(null);
  const [store, setStore] = useState(null);

  useEffect(() => {
    if (null === store) {
      return;
    }
    axios
      .post(`${server_url}colors`, store)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    setStore(null);
  }, [store, server_url]);

  return {
    create,
    setCreate,
    setStore,
  };
};
export default useCreate;
