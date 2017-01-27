import React, {Component} from 'react';
import styled from 'styled-components';

import GalleryImage from './GalleryImage';
import './gallery.css';

export class Art extends Component {

    constructor(props) {
        super(props);
        if(props.route.path === 'fine-art') {
            this.state = {
                'oil and drawings': {
                    images: [
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350"
                    ],
                    option: 'long'
                },
                'portreture': {
                    images: [
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350"
                    ],
                    option: ''
                }
            }
        } else if ( props.route.path === 'graphic-design' ) {
            this.state = {
                'posters and illustrators': {
                    images: [
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350"
                    ]
                },
                'logos': {
                    images: [
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350"
                    ]
                },
                'ads/filters': {
                    images: [
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350"
                    ]
                },
                'typography': {
                    images: [
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350"
                    ]
                },
                'other': {
                    images: [
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350" ,
                        "http://placehold.it/350x350"
                    ]
                }
            }
        }
    }

    renderContent() {
        return Object.keys(this.state).map( (val, index) => {
            return (
                <ContentWrap key={index}>
                    <Title option={this.state[val].option} >{val}</Title>
                    <Content>
                        <GalleryList>
                            {this.renderImages(val)}
                        </GalleryList>
                    </Content>
                </ContentWrap>
            )
        })
    }

    renderImages(e) {
        const imagesArr = this.state[e].images;

        return imagesArr.map( (val, index) => {
            return <GalleryImage key={index} image={val}/>;
        });
    }

    render() {
        return (
            <Wrapper className="bg-blue">
                {this.renderContent()}
            </Wrapper>
        )
    }
}

export default Art;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: #48577C;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    overflow-y: scroll;
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
    font-family: 'moon_flowerregular';
    color: #fff;
    transform-origin: 0 0;
    transform: rotate(-90deg);
    position: absolute;
    top: ${
            (props) => {
                if (props.option === 'long') {
                    return '185px'
                } else {
                    return '114px'
                }
            }
        };
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
