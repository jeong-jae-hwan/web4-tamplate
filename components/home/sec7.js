import React from 'react'

//styled
import styled from '@emotion/styled'

//module
import ScrollContainer from 'react-indiana-drag-scroll'

//svg
import Icon1 from 'public/icons/sec7/icon1.svg'
import Icon2 from 'public/icons/sec7/icon2.svg'
import Icon3 from 'public/icons/sec7/icon3.svg'
import Icon4 from 'public/icons/sec7/icon4.svg'

//
export default function Sec7() {
  const items = [
    {
      icon: Icon1,
      title: '브랜드 스토리',
      text: 'Developing safe and beneficial AI equires people from a wide range of disciplines and backgrounds.',
    },
    {
      icon: Icon2,
      title: '브랜드 스토리',
      text: 'Developing safe and beneficial AI equires people from a wide range of disciplines and backgrounds.',
    },
    {
      icon: Icon3,
      title: '브랜드 스토리',
      text: 'Developing safe and beneficial AI equires people from a wide range of disciplines and backgrounds.',
    },
    {
      icon: Icon4,
      title: '브랜드 스토리',
      text: 'Developing safe and beneficial AI equires people from a wide range of disciplines and backgrounds.',
    },
  ]

  return (
    <View>
      <ScrollContainer className="items">
        {items.map((item, i) => {
          return (
            <Box key={i} data-aos="fade">
              <item.icon />
              <span>{item.title}</span>
              <p>{item.text}</p>
            </Box>
          )
        })}
      </ScrollContainer>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1250px;
  padding: 0 25px 160px;
  display: flex;
  align-items: stretch;
  column-gap: 30px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 0 25px 100px;
  }

  .items {
    width: 100%;
    display: flex;
    column-gap: 30px;
    overflow: auto;
    cursor: grab;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1080px) {
      column-gap: 20px;
    }
  }
`

const Box = styled.div`
  width: 100%;
  max-width: calc(100% / 4 - 15px);
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 25px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1200px) {
    max-width: 260px;
    min-width: 260px;
  }

  svg {
    width: 60px;
    margin-bottom: 6px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #888;
    line-height: 1.35;
  }
`
