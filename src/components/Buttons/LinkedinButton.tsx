import React from "react";
import { useTheme } from "styled-components";

function LinkedinButton() {
  const color = useTheme();

  return (
    <svg
      width="27"
      height="25"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.10534 3.51508C7.07003 1.91279 5.92423 0.692383 4.0636 0.692383C2.20298 0.692383 0.986572 1.91279 0.986572 3.51508C0.986572 5.08419 2.16703 6.33973 3.993 6.33973H4.02776C5.92423 6.33973 7.10534 5.08419 7.10534 3.51508ZM6.74711 8.57023H1.30819V24.9119H6.74711V8.57023ZM20.0997 8.1865C23.6788 8.1865 26.362 10.5226 26.362 15.5421L26.3617 24.9119H20.923V16.1691C20.923 13.9731 20.136 12.4746 18.1671 12.4746C16.6645 12.4746 15.7694 13.4848 15.3764 14.4605C15.2325 14.8102 15.1972 15.2974 15.1972 15.7858V24.9124H9.75767C9.75767 24.9124 9.82936 10.1041 9.75767 8.57067H15.1972V10.8853C15.9191 9.77263 17.212 8.1865 20.0997 8.1865Z"
        fill={String(color.text)}
      />
    </svg>
  );
}

export default LinkedinButton;
