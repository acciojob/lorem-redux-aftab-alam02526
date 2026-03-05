import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "./actions";

function LoremComponent() {
  const dispatch = useDispatch();
  const { title, body, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default LoremComponent;
