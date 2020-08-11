import React from 'react';
import styled from 'styled-components';
import getMockData from './mock';
import tw from 'twin.macro';
const Wrapper = styled.div.attrs(() => ({
  className:`
    h-auto
    m-auto
    bg-lightGrey
    bg-opacity-100
    rounded-sm overflow-hidden shadow-lg
    `,
}))`
  width: 320px;
`;

const Wrapper2 = styled(Wrapper)`
  ${tw`bg-red-500`};
`;

const ImageBox = styled.div.attrs(() => ({
}))`
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
  font-size: 18px;
  padding: 12px;
`;

const ContentCard = () => <Wrapper2>
  {
    getMockData().map(item => (
      <div key={item.id}>
        <ImageBox>
          <RatioBox>
            <Image src={item.image} />
          </RatioBox>
        </ImageBox>
        <Title>{item.title}</Title>
      </div>
    ))
  }
</Wrapper2>;

export default ContentCard;