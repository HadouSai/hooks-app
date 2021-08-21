import { error } from "console";
import { useEffect, useRef, useState } from "react";

export interface dataFetch {
  author: string;
  quote: string;
}

export interface initialState {
  data: dataFetch[];
  loading: boolean;
  error: any;
}

export const useFetch = (url: string) => {
  const initialState: initialState = {
    data: [],
    loading: true,
    error: null,
  };

  const useFetchMounted = useRef(true);

  // para saber si el componente ya no esta visible
  // y prevenir leaks
  useEffect(
    () => () => {
      useFetchMounted.current = false;
    },
    []
  );

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);

    const getData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);

        useFetchMounted.current
          ? setState({ loading: false, error: null, data })
          : console.log("nose llamo");
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [url]);

  return state;
};
