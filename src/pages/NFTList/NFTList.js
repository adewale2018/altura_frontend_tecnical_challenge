import React from "react"
import { v4 as uuidv4 } from 'uuid';
import CardItem from "../../components/Card/Card"
import { ListContainer } from "./NFTList.styles"


const NFTList = ({ nfts }) => {
  return (
    <>
    <ListContainer>
      {nfts?.map((data) => <CardItem data={data} key={uuidv4()} />)}
    </ListContainer>
    </>
  )
}

export default NFTList
