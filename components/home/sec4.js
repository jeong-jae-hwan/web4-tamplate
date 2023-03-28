import React from 'react'

//styled
import styled from '@emotion/styled'
import ScrollContainer from 'react-indiana-drag-scroll'

//png
import img1 from 'public/images/sec4/img1.png'
import img2 from 'public/images/sec4/img2.png'
import img3 from 'public/images/sec4/img3.png'
import img4 from 'public/images/sec4/img4.png'
import img5 from 'public/images/sec4/img5.png'
import img6 from 'public/images/sec4/img6.png'
import Image from 'next/image'

//
export default function Sec4() {
  const items = [
    { img: img1, name: 'Vitige', tags: '#전문가 #아티스트' },
    { img: img2, name: 'Vitige', tags: '#전문가 #아티스트' },
    { img: img3, name: 'Vitige', tags: '#전문가 #아티스트' },
    { img: img4, name: 'Vitige', tags: '#전문가 #아티스트' },
    { img: img5, name: 'Vitige', tags: '#전문가 #아티스트' },
    { img: img6, name: 'Vitige', tags: '#전문가 #아티스트' },
  ]

  return (
    <View>
      <h3 data-aos="fade">
        다양한 전문가를
        <br />
        확인하고 의뢰하세요
      </h3>

      <Items>
        <ScrollContainer className="items">
          {items.map((item, i) => {
            return (
              <Item key={i} data-aos="fade" data-aos-delay="200">
                <Image src={item.img} alt={item.name} />
                <span>{item.name}</span>
                <p>{item.tags}</p>
              </Item>
            )
          })}
        </ScrollContainer>
      </Items>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 200px 20px 200px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 100px 25px 100px;
  }

  @media (max-width: 600px) {
    padding: 80px 25px 80px;
  }

  h3 {
    font-size: 40px;
    line-height: 1.35;

    @media (max-width: 1080px) {
      font-size: 34px;
    }

    @media (max-width: 600px) {
      font-size: 26px;
    }
  }
`

const Items = styled.ul`
  width: 100%;
  transition: 0.3s ease-in-out;
  padding-top: 40px;

  @media (max-width: 600px) {
    padding: 26px 0 0;
  }

  .items {
    width: 100%;
    display: flex;
    column-gap: 40px;
    overflow: auto;
    cursor: grab;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 600px) {
      column-gap: 30px;
    }
  }
`

const Item = styled.li`
  width: 160px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;

  @media (max-width: 600px) {
    width: 120px;
    min-width: 120px;
    align-items: flex-start;
  }

  img {
    width: 100%;
    height: 160px;
    aspect-ratio: 1 / 1;
    border-radius: 100px;
    object-fit: cover;
    margin-bottom: 10px;

    @media (max-width: 600px) {
      height: 120px;
      margin-bottom: 6px;
    }
  }

  span {
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  p {
    white-space: pre-line;
    font-size: 15px;
    color: #1c78f2;

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`
