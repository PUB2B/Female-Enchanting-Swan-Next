import React from 'react'
import Head from 'next/head'

import Timeline1 from '../components/timeline1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Female Enchanting Swan</title>
          <meta property="og:title" content="Female Enchanting Swan" />
        </Head>
        <Timeline1
          date1={
            <>
              <h3 className="home-text thq-heading-3">05/08/2024</h3>
            </>
          }
          date2={
            <>
              <span className="home-text01 thq-body-small">12/05/2023</span>
            </>
          }
          date3={
            <>
              <span className="home-text02 thq-body-small">17/08/2023</span>
            </>
          }
          date4={
            <>
              <span className="home-text03 thq-body-small">02/01/2024</span>
            </>
          }
          card1Title={
            <>
              <h3 className="home-text04 thq-heading-3">
                <span>Lançamento do site pessoal</span>
                <br></br>
              </h3>
            </>
          }
          card2Title={
            <>
              <h3 className="home-text07 thq-heading-3">
                Long heading for a title
              </h3>
            </>
          }
          card3Title={
            <>
              <h3 className="home-text08 thq-heading-3">
                Long heading for a title
              </h3>
            </>
          }
          card4Title={
            <>
              <h3 className="home-text09 thq-heading-3">
                Long heading for a title
              </h3>
            </>
          }
          card1Action1={
            <>
              <span className="home-text10">Acessar</span>
            </>
          }
          card1Action2={
            <>
              <span className="home-text11">ler mais</span>
            </>
          }
          card1Content={
            <>
              <span className="home-text12 thq-body-small">
                Nesse site vou  vou organizar links de produtos 
              </span>
            </>
          }
          card2Action1={
            <>
              <span className="home-text13">Primary action</span>
            </>
          }
          card2Action2={
            <>
              <span className="home-text14">Secondary action</span>
            </>
          }
          card2Content={
            <>
              <span className="home-text15 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </>
          }
          card3Action1={
            <>
              <span className="home-text16">Primary action</span>
            </>
          }
          card3Action2={
            <>
              <span className="home-text17">Secondary action</span>
            </>
          }
          card3Content={
            <>
              <span className="home-text18 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </>
          }
          card4Action1={
            <>
              <span className="home-text19">Primary action</span>
            </>
          }
          card4Action2={
            <>
              <span className="home-text20">Secondary action</span>
            </>
          }
          card4Content={
            <>
              <span className="home-text21 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </>
          }
          card1ImageSrc="/tgewpfh6qq2xk1vv5qqz6g-200h.png"
        ></Timeline1>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text {
            display: inline-block;
          }
          .home-text01 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .home-text02 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .home-text03 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .home-text04 {
            display: inline-block;
          }
          .home-text07 {
            display: inline-block;
          }
          .home-text08 {
            display: inline-block;
          }
          .home-text09 {
            display: inline-block;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
