import React from "react";
import { useTheme } from "styled-components";

function FacebookButton() {
  const color = useTheme();

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_18_44)">
        <path
          d="M25.9619 13.4121C25.9619 6.50781 20.3662 0.912109 13.4619 0.912109C6.55762 0.912109 0.961914 6.50781 0.961914 13.4121C0.961914 19.6523 5.53223 24.8232 11.5088 25.7607V17.0254H8.33496V13.4121H11.5088V10.6582C11.5088 7.52588 13.374 5.79492 16.2305 5.79492C17.5977 5.79492 19.0283 6.03906 19.0283 6.03906V9.11523H17.4512C15.8984 9.11523 15.415 10.0796 15.415 11.0684V13.4121H18.8818L18.3276 17.0254H15.415V25.7607C21.3916 24.8232 25.9619 19.6523 25.9619 13.4121Z"
          fill={String(color.text)}
        />
      </g>
      <defs>
        <clipPath id="clip0_18_44">
          <rect
            width="25"
            height="25"
            fill={String(color.text)}
            transform="translate(0.961914 0.912109)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookButton;
