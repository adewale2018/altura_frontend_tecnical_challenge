import { styled } from "@mui/material/styles";
import device from "../../utils/device";

export const ButtonWrapper = styled("div")`
  text-align: center;
  margin: 100px 0;
 
`;

export const Link = styled("a")`
  text-decoration: none;
  font-size: 20px;
  background-color: #9c27b0;
  color: #fff;
  padding: 20px 90px;
  border-radius: 15px;
  cursor: ${p => p.cursor}
`;

export const Image = styled("img")`
  border: 5px solid #eee;
  border-radius: 18px;
`;

export const ImageWrapper = styled("div")`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const LargeWrapper = styled("div")`
  margin: 60px 0px;
`;

export const Title = styled("h2")`
  margin: 20px 0px;
  text-transform: uppercase;
`;
export const AnchorWrapper = styled("a")`
  text-decoration: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const StatusWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const IconWrapper = styled("div")`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  @media ${device.mobileL} {
    margin: 30px 0px;
  }
`;
export const Icon = styled("div")`
  text-transform: uppercase;
`;

export const ChipWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  padding: 40px 100px;
  border-bottom: 1px solid #eee;

  @media ${device.tablet} {
    padding: 20px 50px;
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.mobileL} {
    padding: 10px;
  }
`;

export const Data = styled("strong")`
  font-size: 22px;
  @media ${device.tablet} {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const MainWrapper = styled("div")`
  margin: 0 100px;
  @media ${device.tablet} {
    margin: 0 30px;
  }
  @media ${device.mobileL} {
    margin: 0 5px;
  }
`;
