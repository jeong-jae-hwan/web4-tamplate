import React from 'react'

//style
import styled from '@emotion/styled'
import Image from 'next/image'

//png
import banner1 from 'public/images/sec1/banner1.png'
import banner2 from 'public/images/sec1/banner2.png'
import banner3 from 'public/images/sec1/banner3.jpg'

//module
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])

//
export default function Sec1() {
  const banners = [
    {
      img: banner1,
      type: 'EVENT',
      title: 'Illustration\nCRYSTALEP.1\nPRE-LAUNCHEVENT',
      date: '2023.03.27 14:00 ~ 2023.04.10 23:59',
    },
    {
      img: banner2,
      type: 'PRODUCT',
      title: 'Illustration\nCRYSTALEP.1\nPRE-LAUNCHEVENT',
      date: '2023.03.27 14:00 ~ 2023.04.10 23:59',
    },
    {
      img: banner3,
      type: 'COMPANY',
      title: 'Illustration\nCRYSTALEP.1\nPRE-LAUNCHEVENT',
      date: '2023.03.27 14:00 ~ 2023.04.10 23:59',
    },
  ]

  return (
    <View>
      <Swiper modules={[Pagination]} pagination={true} className="swiper">
        {banners.map((item, i) => {
          return (
            <SwiperSlide key={i} className="swiper_item">
              <Image src={item.img} alt="배너" />
              <Typo>
                <span data-aos="fade" data-aos-delay="300">
                  {item.type}
                </span>
                <h1 data-aos="fade">{item.title}</h1>
                <p
                  data-aos="fade"
                  data-aos-delay="200"
                >{`사전 등록 이벤트 종료까지 :\n  ${item.date}`}</p>
              </Typo>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </View>
  )
}

//styled
const View = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    height: 100vh;
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper_item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 600px) {
        align-items: flex-end;
        padding-bottom: 80px;
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Typo = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 0 30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    background-color: #1c78f2;
    padding: 10px 16px;
    color: #fff;
    border-radius: 100px;
    font-size: 15px;
  }

  h1 {
    font-size: 46px;
    color: #fff;
    white-space: pre-line;
    margin: 14px 0 25px;

    @media (max-width: 1080px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 16px;
    color: #e0e0e0;
    line-height: 1.45;

    @media (max-width: 600px) {
      white-space: pre-line;
      font-size: 14px;
    }
  }
`
