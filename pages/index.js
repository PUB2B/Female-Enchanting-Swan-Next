import React from 'react'
import Head from 'next/head'

import Gallery3 from '../components/gallery3'
import Footer4 from '../components/footer4'

const Landing = (props) => {
  return (
    <>
      <div className="landing-container">
        <Head>
          <title>Junior Shop</title>
          <meta property="og:title" content="Junior Shop" />
        </Head>
        <a
          href="https://s.shopee.com.br/9Uhf3Zw0t2"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-link"
        >
          <Gallery3
            content1={
              <>
                <span className="landing-text thq-body-large">
                  Separamos as lojas que faz ofertas relâmpago para você ficar
                  por dentro
                </span>
              </>
            }
            heading1={
              <>
                <h2 className="landing-text1 thq-heading-2">
                  Ofertas relâmpagos todos dias
                </h2>
              </>
            }
            image6Src="/fa84c3946e5291268d309feefcf97690-600w.png"
            className="landing-component"
          ></Gallery3>
        </a>
        <Footer4
          termsLink={
            <>
              <span className="landing-text2 thq-body-small">
                Terms and Conditions
              </span>
            </>
          }
          cookiesLink={
            <>
              <span className="landing-text3 thq-body-small">
                Cookies Policy
              </span>
            </>
          }
          privacyLink={
            <>
              <span className="landing-text4 thq-body-small">
                Privacy Policy
              </span>
            </>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .landing-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .landing-link {
            display: contents;
          }
          .landing-component {
            text-decoration: none;
          }
          .landing-text {
            display: inline-block;
            text-align: center;
          }
          .landing-text1 {
            display: inline-block;
            text-align: center;
          }
          .landing-text2 {
            display: inline-block;
          }
          .landing-text3 {
            display: inline-block;
          }
          .landing-text4 {
            fill: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Landing
