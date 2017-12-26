import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router";
import FontAwesome from "react-fontawesome";

import GalleryImage from "./GalleryImage";

import fineData from "./fineData";
import graphData from "./graphData";

export class Art extends Component {
  constructor(props) {
    const fineArt = "fine-art";
    const graphic = "graphic-design";

    super(props);
    if (props.route.path === fineArt) {
      this.state = fineData;
    } else if (props.route.path === graphic) {
      this.state = graphData;
    }
  }

  renderContent() {
    return Object.keys(this.state).map((val, index) => {
      return (
        <ContentWrap key={index}>
          <Title position={this.state[val].position}>
            {this.state[val].title}
          </Title>
          <Content>
            <GalleryList>{this.renderImages(val)}</GalleryList>
          </Content>
        </ContentWrap>
      );
    });
  }

  renderImages(id) {
    const imagesArr = this.state[id].images;

    return imagesArr.map((val, index) => {
      return <GalleryImage key={index} {...val} />;
    });
  }

  render() {
    return (
      <Wrapper className="bg-blue">
        <HomeButton to="/">
          <FontAwesome className="super-crazy-colors" name="home" size="2x" />
        </HomeButton>
        {this.renderContent()}
      </Wrapper>
    );
  }
}

export default Art;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #48577c;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  overflow-y: scroll;
  background-image: url("./images/art-page-big.jpg");
`;

const ContentWrap = styled.div`
  width: 100%;
  padding-left: 72px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  height: 72px;
  line-height: 72px;
  font-size: 2.25rem;
  font-family: "moon_flowerregular";
  color: #fff;
  transform-origin: 0 0;
  transform: rotate(-90deg);
  position: absolute;
  top: ${props => {
    switch (props.position) {
      case "oil":
        return "185px";

      case "portraiture":
        return "134px";

      case "various":
        return "100px";

      case "logos":
        return "80px";

      case "typography":
        return "135px";

      case "packaging":
        return "105px";

      default:
        return "114px";
    }
  }};
  left: 0;
`;

const Content = styled.div`
  width: 100%;
`;

const GalleryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const HomeButton = styled(Link)`
  text-align: right;
  margin-right: 20px;
  padding: 10px 0;
  &:hover span {
    color: rgba(255, 255, 255, 1);
  }
  span {
    color: rgba(255, 255, 255, 0.2);
    transition: 0.3s;
  }
`;
