import React, {Component} from 'react';
import styled from 'styled-components';

// import {Lightbox} from 'react-lightbox-component';
import Lightbox from 'react-image-lightbox';

export class GalleryImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    openLightBox(e) {
        e.preventDefault();
        this.setState({ isOpen: true });
    }

    render() {
        const { thumbnail, original, name } = this.props;
        const { isOpen } = this.state;

        return (
            <Wrapper>
                <LinkWrap href="#" onClick={this.openLightBox.bind(this)}>
                    <Image src={thumbnail} alt="galery image"/>
                </LinkWrap>
                {isOpen &&
                    <Lightbox
                        imageTitle={name}
                        mainSrc={original}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </Wrapper>
        )
    }
}

export default GalleryImage;

const Wrapper = styled.li`
    width: 25%;
`;

const LinkWrap = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    transition: opacity 0.3s;
    &:hover {
        opacity: 1;
    }
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    width: 100%;
`;
