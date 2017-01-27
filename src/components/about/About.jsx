import React, {Component} from 'react';
import styled from 'styled-components';
import './about.css';

export class About extends Component {
    render() {
        return (
            <Wrapper>
                <Content className="bulb">
                    <TitleWrap>
                        <Title white>about</Title>
                    </TitleWrap>
                    <DescrWrap>
                        <Descr white>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Descr>
                    </DescrWrap>

                    <TitleWrap>
                        <Title>contact</Title>
                    </TitleWrap>

                    <DescrWrap>
                        <Descr>
                            <Link href="mailto:stephanie.khodorkovsky@unlv.edu">stephanie.khodorkovsky@unlv.edu</Link>
                        </Descr>
                        <Descr>
                            702-406-0846
                        </Descr>
                    </DescrWrap>
                </Content>
                <Photo>

                </Photo>
            </Wrapper>
        )
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
`;

const Content = styled.div`
    flex: 1 1 10rem;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 55% 45%;
    padding: 5% 10%;
`;

const TitleWrap = styled.div`
    margin-bottom: 1rem;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    color: ${(props) => props.white ? '#ffffff' : '#48577C'};
    font-family: 'moon_flowerregular';
`;

const DescrWrap = styled.div`
    margin-bottom: 3rem;
`;

const Descr = styled.div`
    max-width: 520px;
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: ${(props) => props.white ? '#ffffff' : '#48577C'};
    font-family: 'helvetica_neueregular';
`;

const Link = styled.a`
    color: #48577C;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        font-weight: bold;
    }
`;

const Photo = styled.div`
    flex: 1 1 10rem;
    border-left: 1px solid #fafafa;
`;
