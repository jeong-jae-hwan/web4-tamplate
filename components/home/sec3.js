import React from 'react'
import Image from 'next/image'

//styled
import styled from '@emotion/styled'

//png
import img1 from 'public/images/sec3/img1.png'
import img2 from 'public/images/sec3/img2.png'
import img3 from 'public/images/sec3/img3.png'

//
export default function Sec3() {
  const items = [
    { img: img1, name: 'Citizen', tags: '#adventure #profile' },
    { img: img2, name: 'Big BOoss', tags: '#adventure #bear' },
    { img: img3, name: 'Flower Life', tags: '#adventure #view #tree' },
  ]

  return (
    <View>
      <h2 data-aos="fade">
        다양한 상품을
        <br />
        둘러보고 구매하세요
      </h2>

      <Items>
        {items.map((item, i) => {
          return (
            <Item key={i}>
              <Image src={item.img} alt={item.name} data-aos="fade" />
              <span data-aos="fade" data-aos-delay="200">
                {item.name}
              </span>
              <p data-aos="fade" data-aos-delay="200">
                {item.tags}
              </p>
            </Item>
          )
        })}
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
  padding: 0 25px;
  transition: 0.3s ease-in-out;

  h2 {
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
  display: flex;
  align-items: stretch;
  column-gap: 30px;
  row-gap: 40px;
  padding: 40px 0 20px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }
  }

  @media (max-width: 600px) {
    padding: 26px 0 20px;
    flex-wrap: wrap;
  }
`

const Item = styled.li`
  width: 100%;
  max-width: calc(100% / 3 - 20px);
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    max-width: 360px;
    min-width: 360px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 100%;
  }

  img {
    width: 100%;
    max-height: 400px;
    aspect-ratio: 1 / 2;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 8px;
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
      font-size: 14px;
    }
  }
`
