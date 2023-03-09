import * as React from "react"
import PropTypes from "prop-types"
import { MdVerified } from "react-icons/md"
import { GrTwitter } from "react-icons/gr"
import {
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Button,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { removeDigit } from "../../utils/utils"

import CloseIcon from "@mui/icons-material/Close"
import {
  Title,
  LargeWrapper,
  IconWrapper,
  Icon,
  ChipWrapper,
  MainWrapper,
  Data,
  Image,
  ImageWrapper,
  AnchorWrapper,
  StatusWrapper,
  ButtonWrapper,
  Link
} from "./NFTDetails.styles"
import moment from "moment"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

const NFTDetails = ({ open, setOpen, data }) => {
  const handleClose = () => {
    setOpen(false)
  }

  let status = data && data?.contractMetadata?.openSea?.safelistRequestStatus
  let twitterUsername =
    data && data?.contractMetadata?.openSea?.twitterUsername

  let nftId = removeDigit(data?.title)

  return (
    <div>
      <BootstrapDialog
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h3" color="secondary">
            {" "}
            {data?.title}
          </Typography>
          <AnchorWrapper
            href={`https://twitter.com/${twitterUsername}`}
            target="_blank"
          >
            Check on Twitter <GrTwitter />
          </AnchorWrapper>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div>
            <IconWrapper>
              <StatusWrapper>
                <Typography variant="paragraph">
                  SAFE LIST REQUEST STATUS
                </Typography>
                <Chip label={status} color="secondary" variant="outlined" />
              </StatusWrapper>
              <Icon>
                <MdVerified
                  color={
                    status === "verified" || status === "approved"
                      ? "green"
                      : ""
                  }
                  size={40}
                />
              </Icon>
            </IconWrapper>
            <ImageWrapper>
              <Image src={data?.media[0]?.thumbnail} alt={data?.title} />
              <div>
                <Title>CONTRACT ADDRESS</Title>
                <Chip
                  label={data?.contract?.address}
                  variant="filled"
                  size="large"
                  color="secondary"
                />
              </div>
            </ImageWrapper>
          </div>
          <ButtonWrapper>
            <Link cursor={nftId === undefined ? 'not-allowed': 'pointer'} href={`https://opensea.io/assets/ethereum/${data?.contract?.address}/${nftId}`} target='_blank'>BUY NFT</Link>
          </ButtonWrapper>
          <LargeWrapper>
            <MainWrapper>
              <ChipWrapper>
                <Chip
                  size="medium"
                  label="Name"
                  variant="outlined"
                  color="secondary"
                />{" "}
                <Data>
                  {" "}
                 <Typography paragraph>
                 {data?.contractMetadata?.name
                    ? data?.contractMetadata?.name
                    : "N/A"}
                 </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Chip label="Token Type" variant="outlined" color="secondary" />
                <Data>
                <Typography paragraph>
                {" "}
                  {data?.contractMetadata?.tokenType
                    ? data?.contractMetadata?.tokenType
                    : "N/A"}
                </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Chip
                  label="Total Supply"
                  color="secondary"
                  variant="outlined"
                />
                <Data>
                  <Typography paragraph>
                  {" "}
                  {data?.contractMetadata?.totalSupply
                    ? data?.contractMetadata?.totalSupply
                    : "N/A"}
                  </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Chip
                  label="Contract Deployer"
                  color="secondary"
                  variant="outlined"
                />
                <Data>
                  <Typography paragraph>
                  {" "}
                  {data?.contractMetadata?.contractDeployer
                    ? data?.contractMetadata?.contractDeployer
                    : "N/A"}
                  </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Chip label="Symbol" color="secondary" variant="outlined" />
                <Data>
                  <Typography paragraph>
                  {" "}
                  {data?.contractMetadata?.symbol
                    ? data?.contractMetadata?.symbol
                    : "N/A"}
                  </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Chip
                  label="Deployed Block Number"
                  color="secondary"
                  variant="outlined"
                />
                <Data>
                  <Typography paragraph>
                  {" "}
                  {data?.contractMetadata?.deployedBlockNumber
                    ? data?.contractMetadata?.deployedBlockNumber
                    : "N/A"}
                  </Typography>
                </Data>
              </ChipWrapper>
            </MainWrapper>
          </LargeWrapper>
          <LargeWrapper>
            <Title>Description</Title>
            <Typography variant="paragraph">
              {data?.metadata?.description
                ? data?.metadata?.description
                : "N/A"}
            </Typography>
          </LargeWrapper>
          <LargeWrapper>
            <Title> Last Time Updated</Title>
            <Chip
              label={moment(data?.timeLastUpdated).utc().format("LLL")}
              color="secondary"
              variant="filled"
            />
          </LargeWrapper>
          <Title>OPEN SEA RELATED DATA</Title>
          <LargeWrapper>
            <MainWrapper>
              <ChipWrapper>
                
                <Chip
                  size="medium"
                  label="Collection Name"
                  variant="outlined"
                  color="secondary"
                />
                <Data>
                  <Typography paragraph>
                  {data?.contractMetadata?.openSea?.collectionName
                    ? data?.contractMetadata?.openSea?.collectionName
                    : "N/A"}
                    </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Data>
                  <Typography paragraph>
                  {data?.contractMetadata?.openSea?.description
                    ? data?.contractMetadata?.openSea?.description
                    : "N/A"}
                    </Typography>
                </Data>
                <Chip
                  label="Description"
                  variant="outlined"
                  color="secondary"
                />
              </ChipWrapper>
              <ChipWrapper>
                <Chip
                  label="Floor Price"
                  color="secondary"
                  variant="outlined"
                />
                <Data>
                 <Typography paragraph>
                 {" "}
                  {data?.contractMetadata?.openSea?.floorPrice
                    ? data?.contractMetadata?.openSea?.floorPrice
                    : "N/A"}
                 </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Chip
                  label="Discord Url"
                  color="secondary"
                  variant="outlined"
                />
                <Data>
                  <Typography paragraph>
                  {" "}
                  {data?.contractMetadata?.openSea?.discordUrl ? (
                    <a
                      href={data?.contractMetadata?.openSea?.discordUrl}
                      target="_blank"
                    >
                      Visit the Discord
                    </a>
                  ) : (
                    "N/A"
                  )}
                  </Typography>
                </Data>
              </ChipWrapper>
              <ChipWrapper>
                <Chip
                  label="External Url"
                  color="secondary"
                  variant="outlined"
                />
                <Data>
                  <Typography paragraph>
                  {" "}
                  {data?.contractMetadata?.openSea?.externalUrl ? (
                    <a
                      href={data?.contractMetadata?.openSea?.externalUrl}
                      target="_blank"
                    >
                      Visit the External URL
                    </a>
                  ) : (
                    "N/A"
                  )}
                  </Typography>
                </Data>
              </ChipWrapper>
            </MainWrapper>
            <LargeWrapper>
              <Title>Last Time Ingested</Title>
              <Chip
                label={moment(data?.contractMetadata?.openSea?.lastIngestedAt)
                  .utc()
                  .format("LLL")}
                color="secondary"
                variant="filled"
              />
            </LargeWrapper>
          </LargeWrapper>
        </DialogContent>
      </BootstrapDialog>
    </div>
  )
}

export default NFTDetails
