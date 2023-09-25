import React from "react";

export default function Heading({ children, ...rest }) {
  return (
    <div {...rest} style={{ fontFamily: "Permanent Marker" }}>
      <h1>{children}</h1>
    </div>
  );
}
