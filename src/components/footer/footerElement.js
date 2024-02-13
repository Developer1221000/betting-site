import React from "react";
import { cx } from "@emotion/css";

const FooterElement = (props) => {
  return (
    <>
      <a
        className={cx(
          "cursor-pointer px-4",
          window.location.pathname === `/${props.label.toLowerCase().replace(/\s/g, '')}`
            ? "text-[#008000]"
            : "text-white"
        )}
        href={`/${props.label.toLowerCase().replace(/\s/g, '')}`}
      >
        {props.label}
      </a>
    </>
  );
};

export default FooterElement;
