import React from 'react';
import styled from 'styled-components';
import getMockData from './mock';

const Wrapper = styled.div.attrs(() => ({
    className: 'flex flex-wrap'
}))``;

const ItemBox = styled.div.attrs(() => ({
    className: 'm-1'
}))`
    height: 100px;
    width: 100px;
    animation:myRotate 3s linear infinite;

    @keyframes myRotate{
        0%{ -webkit-transform: rotate3d(2, -1, -1, -0.2deg); opacity: 0;}
        25%{ -webkit-transform: rotate3d(2, 2, 2, -0.2turn);opacity: 0.3;}
        50%{ -webkit-transform: rotate3d(4, 2, 2, -0.2deg);opacity: 0.5;}
        75%{ -webkit-transform: rotate3d(1, 2, 2, -0.2turn);opacity: 0.7;}
        100%{ -webkit-transform: rotate3d(2, -1, 2 -0.2rad); opacity: 1;}
    }
`;

const Image = styled.img.attrs(() => ({
    className: 'w-full h-full'
}))``;

const AnimationItems = () =>
    <Wrapper>
        {
            getMockData(300).map(item => {
                return (
                    <ItemBox>
                        <Image src='https://img.stackshare.io/service/8158/E1G1nNb0_400x400.jpg' />
                    </ItemBox>
                )
            })}
    </Wrapper>

export default AnimationItems;