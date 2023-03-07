import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Chip,
} from "@mui/material"
import { CardContainer, ChipWrapper, ButtonWrapper } from "./Card.styles"
import moment from "moment"

const CardItem = ({ data }) => {
  return (
    <CardContainer>
      <Card sx={{ width: 345, borderRadius: "18px", height: 450 }}>
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
              {data?.title}
             
            </Typography>
            <ChipWrapper>
              <span>Symbol</span>
              <Chip label={data?.contractMetadata?.symbol ? data?.contractMetadata?.symbol : 'N/A'} variant='outlined' color='secondary' />
            </ChipWrapper>
            <ChipWrapper>
              <span>Token Type</span>
              <Chip label={data?.contractMetadata?.tokenType} variant='outlined' color='secondary' />
            </ChipWrapper>
            <ChipWrapper>
              <span>Last Updated</span>
              <Chip label={moment(data?.timeLastUpdated).utc().format('LL')} variant='filled' color='secondary' />
            </ChipWrapper>
          </CardContent>
        </CardActionArea>
        <ButtonWrapper>
          <Button color="secondary" variant='outlined'>
            Learn More
          </Button>
        </ButtonWrapper>
      </Card>
    </CardContainer>
  )
}

export default CardItem
