import { styled } from "styled-components";
import { Switch } from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 98dvw;
`;

export const Logo = styled.div`
  width: 63%;
  /* width: 60dvw; */
  display: flex;
  margin-left: 10dvw;
`;

export const Bar = styled.div`
  display: flex;
  align-items: baseline;
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  margin: 0 10px;
`;

export const CustomSwitch = styled(Switch)`
  margin-left: 10dvw;

  & .MuiSwitch-switchBase {
    &.Mui-checked {
      transform: translateX(13px);
      color: #fff;
      & + .MuiSwitch-track {
        background-color: #34c759;
        opacity: 1;
      }
    }
  }

  & .MuiSwitch-thumb {
    margin: 5px;
    width: 20px;
    height: 20px;
  }

  & .MuiSwitch-track {
    border-radius: 21px;
    width: 70px;
    height: 24px;
    background-color: #787880;
  }
`;
