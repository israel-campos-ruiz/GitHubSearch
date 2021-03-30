import { useEffect, useState, useRef } from "react";
import axios from "axios";
const useGet = (endpoint) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );
  useEffect(() => {
    const getData = async () => {
      try {
        setState({ data: null, loading: true, error: null });
        const response = await axios.get(endpoint, {headers: {  "Content-Type": "application/json"}});
        const { data } = response
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error });
      }
    };
    if (isMounted.current) {
      getData();
    }
  }, [endpoint]);
  return state;
};
export default useGet;
