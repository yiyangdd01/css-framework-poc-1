import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs(() => ({
  className: 'w-320px h-auto bg-lightGrey bg-opacity-100'
}))``;

const ImageBox = styled.div.attrs(() => ({
  className: 'bg-black'
}))`
    height: 160px;
    position: relative;
    &:before {
        display: table;
        content: '';
        padding-bottom: 56.25%;
    }
`;

const RatioBox = styled.div.attrs(() => ({
  className: 'absolute top-0 left-0 w-full h-full'
}))``;

const Image = styled.img.attrs(() => ({
  className: 'w-full h-full'
}))`
    object-fit: cover;
`;

const Title = styled.h2.attrs(() => ({
  className: 'text-xs'
}))`
  padding: 12px;
`;

const ContentCard = () => <Wrapper>
  <ImageBox>
    <RatioBox>
      <Image src='https://cdn.hk01.com/di/media/images/5014126/org/437adfa6c1f39a3de98294dd744739cf.jpg/S5q8tMgRQs9LMtPkYhiGT5Yea8PxuhbcI07eayNO3ms?v=w480r16_9' />
    </RatioBox>
  </ImageBox>
  <Title>sssss</Title>
</Wrapper>

export default ContentCard;