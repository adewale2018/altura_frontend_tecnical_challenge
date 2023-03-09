import { styled } from "@mui/material/styles";
import device from "../../utils/device";

export const CardContainer = styled("div")`
  margin-top: 5px;
  margin-bottom: 15px;
`;
export const CardOuter = styled("div")`
  height: 420px;
  border-radius: 18px;
  width: 345px;
  border: 1px solid #eee;
  overflow: hidden;

  @media ${device.mobileL} {
    width: 315px;
  }
`;
export const ChipWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
export const ButtonWrapper = styled("div")`
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
`;
