import React from "react";
import CardItem from "../../components/Card/Card";
import { ListContainer } from "./NFTList.styles";


const NFTList = ({ nfts }) => {
  return (
    <ListContainer>
      {nfts?.map((data) => <CardItem data={data} key={data.id} />)}
    </ListContainer>
  );
};

export default NFTList
