import { useTheme } from "styled-components";

function BackArrowButton() {
  const color = useTheme();

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.9999 9.33301C19.5013 9.33301 9.33325 19.501 9.33325 31.9997C9.33325 44.4983 19.5013 54.6663 31.9999 54.6663C44.4986 54.6663 54.6666 44.4983 54.6666 31.9997C54.6666 19.501 44.4986 9.33301 31.9999 9.33301ZM31.9999 58.6663C17.2959 58.6663 5.33325 46.7037 5.33325 31.9997C5.33325 17.2957 17.2959 5.33301 31.9999 5.33301C46.7039 5.33301 58.6666 17.2957 58.6666 31.9997C58.6666 46.7037 46.7039 58.6663 31.9999 58.6663Z"
        fill={String(color.text)}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.8463 43.2545C35.337 43.2545 34.825 43.0598 34.4356 42.6705L25.137 33.4172C24.761 33.0412 24.5503 32.5318 24.5503 31.9985C24.5503 31.4678 24.761 30.9585 25.137 30.5825L34.4356 21.3265C35.217 20.5478 36.481 20.5478 37.2623 21.3318C38.0436 22.1158 38.0383 23.3825 37.257 24.1612L29.385 31.9985L37.257 39.8385C38.0383 40.6172 38.0436 41.8812 37.2623 42.6652C36.873 43.0598 36.3583 43.2545 35.8463 43.2545Z"
        fill={String(color.text)}
      />
    </svg>
  );
}

export default BackArrowButton;