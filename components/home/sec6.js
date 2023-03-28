import React from 'react'

//styled
import styled from '@emotion/styled'

//png
import img from 'public/images/sec6-img.png'
import Image from 'next/image'

//
export default function Sec6() {
  return (
    <View>
      <Info>
        <strong data-aos="fade">
          계속해서 배울 수 있도록 격려하며, 다양한 분야의 아이디어를
          만들어갑니다. 그리고 새로운 아이디어 끝 없이 고민합니다.
        </strong>

        <Profile data-aos="fade" data-aos-delay="200">
          <Image src={img} alt="sec6" />
          <p>
            Eliie port
            <br />
            <span>#product #engineer</span>
          </p>
        </Profile>
      </Info>

      <Image
        src={img}
        alt="sec6"
        className="image"
        data-aos="fade"
        data-aos-delay="400"
      />
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  row-gap: 30px;
  column-gap: 50px;
  transition: 0.3s ease-in-out;
  padding: 200px 25px;

  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 40px 0 100px;
  }

  .image {
    width: 100%;
    max-width: 550px;
    height: 500px;
    border-radius: 12px;
    object-fit: cover;

    @media (max-width: 1080px) {
      max-width: 100%;
      border-radius: 0;
    }

    @media (max-width: 600px) {
      height: 400px;
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-top: 40px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    order: 1;
    padding: 10px 20px 0;
  }

  @media (max-width: 600px) {
    row-gap: 20px;
  }

  strong {
    max-width: 490px;
    font-size: 40px;
    white-space: pre-line;

    @media (max-width: 1080px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      max-width: 380px;
      font-size: 26px;
    }
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
  transition: 0.3s ease-in-out;

  img {
    max-width: 36px;
    width: 36px;
    height: 36px;
    border-radius: 100px;
    object-fit: contain;

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
  }

  p {
    font-size: 15px;
    font-weight: 500;

    span {
      font-size: 13px;
      color: #1c78f2;
      font-weight: 400;
    }
  }
`
