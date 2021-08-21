import React from "react";
import useCounter from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const MultiplesCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  // aca hay un caso
  // viene undefined y esto tengo que validarlo
  // pero ala vez pintarlo
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, error, data } = useFetch(url);

  let authorU = "";
  let quoteU = "";

  if (data?.[0]) {
    const { author, quote } = data[0];
    authorU = author;
    quoteU = quote;
  }

  console.log(authorU, quoteU);

  return (
    <div>
      <h1>Breaking bad Api</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quoteU}</p>
          <footer className="blockquote-footer pt-2">{authorU}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment()}>
        Next
      </button>
    </div>
  );
};

export default MultiplesCustomHooks;
