import React, { useEffect, useState } from 'react'

//modlues
import { Section } from 'deep-ui-design'
import Aos from 'aos'
import 'aos/dist/aos.css'

//components
import SEO from 'public/SEO'
import Sec1 from '@/components/home/sec1'
import Sec2 from '@/components/home/sec2'
import Sec3 from '@/components/home/sec3'
import Sec4 from '@/components/home/sec4'
import Sec5 from '@/components/home/sec5'
import Sec6 from '@/components/home/sec6'
import Sec7 from '@/components/home/sec7'
import Sec8 from '@/components/home/sec8'

//
export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 900, easing: 'ease-in-out' })
  }, [])

  return (
    <>
      <SEO title="템플릿 웹 사이트" />
      <Section>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
        <Sec7 />
        <Sec8 />
      </Section>
    </>
  )
}
