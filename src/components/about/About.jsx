import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router";
import FontAwesome from "react-fontawesome";

export class About extends Component {
  render() {
    return (
      <Wrapper>
        <Content className="bulb">
          <HomeButton to="/">
            <FontAwesome className="super-crazy-colors" name="home" size="2x" />
          </HomeButton>
          <ContentWrap>
            <TitleWrap>
              <Title white>about</Title>
            </TitleWrap>
            <DescrWrap>
              <Descr white>
                Stephanie was born and raised in Moscow, Russia, where she spent
                18 years of her life before moving to Las Vegas, NV in 2013.
                Being passionate about visual arts, she first earned her
                associate’s degree in painting. Right after that she moved on to
                study Graphic Design and Media at the University of Nevada, Las
                Vegas. What attracts her about this field is the joy of
                combining her artistic skills with critical thinking and
                creating art that actually serves a purpose. In addition to her
                interest in graphic design, Stephanie has also been actively
                involved in the fine art scene, constantly showcasing her works
                at various exhibitions both in and out of state.
              </Descr>
            </DescrWrap>

            <TitleWrap>
              <Title>contact</Title>
            </TitleWrap>

            <DescrWrap>
              <Descr>
                <Email href="mailto:khodoart@gmail.com">
                  khodoart@gmail.com
                </Email>
              </Descr>
              <Descr>702-406-0846</Descr>
            </DescrWrap>
          </ContentWrap>
        </Content>
        <Photo>
          <img src="../../images/about.jpg" alt="it's me" />
        </Photo>
      </Wrapper>
    );
  }
}

export default About;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #7ebcbc;
  box-sizing: border-box;
  background-image: url("./images/light-bulb.svg");
`;

const Content = styled.div`
  flex: 1 1 10rem;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 55% 45%;
  padding: 5% 10%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${props => (props.white ? "#ffffff" : "#48577C")};
  font-family: "moon_flowerregular";
`;

const DescrWrap = styled.div`
  margin-bottom: 3rem;
  @media (max-width: 700px) and (max-height: 600px) {
    height: calc(100vh - 250px);
    overflow-y: auto;
  }
`;

const Descr = styled.p`
  max-width: 520px;
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${props => (props.white ? "#ffffff" : "#48577C")};
  font-family: "helvetica_neueregular";
`;

const Email = styled.a`
  color: #48577c;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    font-weight: bold;
  }
`;

const Photo = styled.div`
  flex: 1 1 10rem;
  border-left: 1px solid #fafafa;
  @media (max-width: 900px) {
    display: none;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const HomeButton = styled(Link)`
  position: absolute;
  top: 10px;
  right: 20px;
  span {
    color: rgba(255, 255, 255, 0.2);
    transition: 0.3s;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
