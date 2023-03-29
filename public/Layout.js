import React from 'react'
import { useRouter } from 'next/router'

//styled
import styled from '@emotion/styled'

//custom
import ScrollTopTab from 'widgets/ScrollTopTab'

//components
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

//
export default function Layout({ children }) {
  const router = useRouter()
  const errorPage = router.pathname === '/404'

  return (
    <div className="layout">
      {!errorPage && <Header />}
      <main>{children}</main>
      {!errorPage && <Footer />}

      <ScrollTopTab />
    </div>
  )
}

//styled
const Splash = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 100px;
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  }
`
