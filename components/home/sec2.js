import React from 'react'

//styled
import styled from '@emotion/styled'

//svg
import NoticeIcon from 'public/icons/notice-icon.svg'

//utill
import moment from 'utils/moment'

//
export default function Sec2() {
  return (
    <View>
      <Box>
        <NoticeIcon />
        <p>[공지] 랜딩페이지 타입 신규 템플릿 출신</p>

        <span>{moment(new Date())}</span>
      </Box>
    </View>
  )
}

const View = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 25px 120px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 60px 25px 100px;
  }

  @media (max-width: 600px) {
    padding: 20px 0px 80px;
  }
`

const Box = styled.div`
  width: 100%;
  padding: 16px 20px;
  background-color: #fff;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    border-radius: 0;
    padding: 14px 20px;
  }

  p {
    width: 100%;
    font-size: 15px;
    color: #555;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 13px;
    color: #999;

    @media (max-width: 600px) {
      display: none;
    }
  }
`
