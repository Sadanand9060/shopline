import React from "react";
import "./loading.css";
import Skeleton from "@mui/material/Skeleton";

const Loading = () => {
  return (
    <div className="skeletonCss">
      <Skeleton height={600} width={300} />
      <Skeleton height={600} width={300} />
      <Skeleton height={600} width={300} />
      <Skeleton height={600} width={300} />
    </div>
  );
};

export default Loading;
