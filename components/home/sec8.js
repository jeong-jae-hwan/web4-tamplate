import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

//img
import img from 'public/images/sec8-img.png'

//styled

//
export default function Sec8() {
  return (
    <View>
      <Image src={img} alt="se8" />
      <h6 data-aos="fade-up">
        우리는 수 많은 전문가를
        <br />
        지금도 만들고 있습니다.
      </h6>
    </View>
  )
}

//styled
const View = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding-bottom: 40px;
  }

  img {
    width: 100%;
    height: 700px;
    object-fit: cover;

    @media (max-width: 600px) {
      height: 600px;
    }
  }

  h6 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    z-index: 20;
    width: 100%;
    max-width: 1080px;
    padding: 0 30px;
    color: #fff;
    line-height: 1.4;

    @media (max-width: 1080px) {
      text-align: center;
      font-size: 32px;
    }

    @media (max-width: 600px) {
      text-align: center;
      font-size: 26px;
    }
  }
`
