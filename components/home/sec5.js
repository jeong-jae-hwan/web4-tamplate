import React from 'react'

//styled
import styled from '@emotion/styled'

//
export default function Sec5() {
  return (
    <View>
      <strong data-aos="fade">
        {'국내 최고의 전문가\n 서비스와 함께 하세요!'}
      </strong>
      <p data-aos="fade" data-aos-delay="200">
        {
          '손쉬운 가입 및 서비스 등록을 통해\n 다양한 컬렉션을 등록 및 업로드하세요!'
        }
      </p>
      <button type="button" data-aos="fade" data-aos-delay="300">
        서비스 등록신청
      </button>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  background-color: #f7f8fa;
  padding: 60px 25px;
  transition: 0.3s ease-in-out;
  border-radius: 12px;

  @media (max-width: 600px) {
    padding: 50px 25px;
    border-radius: 0;
  }

  strong {
    font-size: 26px;
    line-height: 1.4;

    @media (max-width: 600px) {
      font-size: 22px;
      text-align: center;
      white-space: pre-line;
    }
  }

  p {
    font-size: 14px;
    color: #888;
    line-height: 1.4;

    @media (max-width: 600px) {
      font-size: 14px;
      text-align: center;
      white-space: pre-line;
    }
  }

  button {
    margin-top: 10px;
    padding: 14px 22px;
    border-radius: 12px;
    color: #fff;
    font-size: 15px;
    background-color: #1c78f2;
    color: #fff;

    &:hover {
      opacity: 0.9;
    }
  }
`
