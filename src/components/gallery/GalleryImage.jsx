import React, {Component} from 'react';
import styled from 'styled-components';

export class GalleryImage extends Component {
    render() {
        return (
            <Wrapper>
                <Link href="#">
                    <Image src="http://placehold.it/350x350" alt="gallery image"/>
                </Link>
            </Wrapper>
        )
    }
}

export default GalleryImage;

const Wrapper = styled.li`
    width: 25%;
`;

const Link = styled.a`
    display: block;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    opacity: 0.4;
`;
