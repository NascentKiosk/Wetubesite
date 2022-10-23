import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <div>
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          img src={require("../img/lotus-everything-you-need-to-know.jpg")}
        />
        
        <Details type={type}>
          <ChannelImage
            type={type}
            img src={require("../img/donut.jpg")}
          />
          <Texts>
            <Title>LOTUS - Everything You Need to Know | Up To Speed</Title>
            <ChannelName>Donut Media</ChannelName>
            <Info>2472719 Views</Info>
          </Texts>
        </Details>
      </Container>
    </Link>

    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          img src={require("../img/levitating.jpg")}
        />
        
        <Details type={type}>
          <ChannelImage
            type={type}
            img src={require("../img/dua-lipa.jpg")}
          />
          <Texts>
            <Title>Dua Lipa - Levitating Featuring DaBaby (Official Music Video)</Title>
            <ChannelName>Donut Media</ChannelName>
            <Info>602451553 Views</Info>
          </Texts>
        </Details>
      </Container>
    </Link>

    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          img src={require("../img/levitating.jpg")}
        />
        
        <Details type={type}>
          <ChannelImage
            type={type}
            img src={require("../img/dua-lipa.jpg")}
          />
          <Texts>
            <Title>Dua Lipa - Love Again (Official Music Video)</Title>
            <ChannelName>Donut Media</ChannelName>
            <Info>203228730 Views</Info>
          </Texts>
        </Details>
      </Container>
    </Link>


    
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          img src={require("../img/new-rules.jpg")}
        />
        
        <Details type={type}>
          <ChannelImage
            type={type}
            img src={require("../img/dua-lipa.jpg")}
          />
          <Texts>
            <Title>Dua Lipa - New Rules (Official Music Video)</Title>
            <ChannelName>Donut Media</ChannelName>
            <Info>2724816745 Views</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
    </div>
  );
};

export default Card;