import React, { useState } from "react"
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Chip,
} from "@mui/material"
import { CardContainer, ChipWrapper, CardOuter } from "./Card.styles"
import moment from "moment"
import NFTDetails from "../../pages/modal/NFTDetails"

const CardItem = ({ data }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <CardContainer onClick={() => setOpen(true)}>
        <CardOuter>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={data?.media[0]?.gateway}
              alt={data?.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                {data?.title ? data?.title : "N/A"}
              </Typography>
              <ChipWrapper>
                <span>Symbol</span>
                <Chip
                  label={
                    data?.contractMetadata?.symbol
                      ? data?.contractMetadata?.symbol
                      : "N/A"
                  }
                  variant="outlined"
                  color="secondary"
                />
              </ChipWrapper>
              <ChipWrapper>
                <span>Token Type</span>
                <Chip
                  label={data?.contractMetadata?.tokenType}
                  variant="outlined"
                  color="secondary"
                />
              </ChipWrapper>
              <ChipWrapper>
                <span>Last Updated</span>
                <Chip
                  label={moment(data?.timeLastUpdated).utc().format("LL")}
                  variant="filled"
                  color="secondary"
                />
              </ChipWrapper>
            </CardContent>
          </CardActionArea>
        </CardOuter>
      </CardContainer>
      {open && <NFTDetails open={open} setOpen={setOpen} data={data} />}
    </>
  )
}

export default CardItem
