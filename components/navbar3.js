import React from 'react'

import PropTypes from 'prop-types'

const Navbar3 = (props) => {
  return (
    <>
      <header className="navbar3-container">
        <header data-thq="thq-navbar" className="navbar3-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar3-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar3-desktop-menu">
            <nav className="navbar3-links">
              <a href={props.link1Url} className="navbar3-link1">
                {props.link1 ?? (
                  <>
                    <span className="navbar3-text2 thq-link thq-body-small">
                      Home
                    </span>
                  </>
                )}
              </a>
              <a href={props.link2Url} className="navbar3-link2">
                {props.link2 ?? (
                  <>
                    <span className="navbar3-text thq-link thq-body-small">
                      Dates
                    </span>
                  </>
                )}
              </a>
              <a href={props.link3Url} className="navbar3-link3">
                {props.link3 ?? (
                  <>
                    <span className="navbar3-text1 thq-link thq-body-small">
                      Primary Actions
                    </span>
                  </>
                )}
              </a>
              <a href={props.link4Url} className="navbar3-link4">
                {props.link4 ?? (
                  <>
                    <span className="navbar3-text4 thq-link thq-body-small">
                      Secondary Actions
                    </span>
                  </>
                )}
              </a>
              <a href={props.link5Url} className="navbar3-link5">
                {props.link5 ?? (
                  <>
                    <span className="navbar3-text3 thq-link thq-body-small">
                      About Us
                    </span>
                  </>
                )}
              </a>
            </nav>
            <div className="navbar3-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-x-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar3-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar3-icon06">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar3-mobile-menu">
            <div className="navbar3-nav">
              <div className="navbar3-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar3-logo"
                />
                <div data-thq="thq-close-menu" className="navbar3-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar3-icon08">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar3-links1">
                <a href={props.link1Url}>
                  {props.link1 ?? (
                    <>
                      <span className="navbar3-text2 thq-link thq-body-small">
                        Home
                      </span>
                    </>
                  )}
                </a>
                <a href={props.link2Url}>
                  {props.link2 ?? (
                    <>
                      <span className="navbar3-text thq-link thq-body-small">
                        Dates
                      </span>
                    </>
                  )}
                </a>
                <a href={props.link3Url}>
                  {props.link3 ?? (
                    <>
                      <span className="navbar3-text1 thq-link thq-body-small">
                        Primary Actions
                      </span>
                    </>
                  )}
                </a>
                <a href={props.link4Url}>
                  {props.link4 ?? (
                    <>
                      <span className="navbar3-text4 thq-link thq-body-small">
                        Secondary Actions
                      </span>
                    </>
                  )}
                </a>
                <a href={props.link5Url}>
                  {props.link5 ?? (
                    <>
                      <span className="navbar3-text3 thq-link thq-body-small">
                        About Us
                      </span>
                    </>
                  )}
                </a>
              </nav>
            </div>
            <div className="navbar3-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar3-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar3-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: idth;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar3-image1 {
            height: 3rem;
          }
          .navbar3-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar3-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar3-link1 {
            text-decoration: none;
          }
          .navbar3-link2 {
            text-decoration: none;
          }
          .navbar3-link3 {
            text-decoration: none;
          }
          .navbar3-link4 {
            text-decoration: none;
          }
          .navbar3-link5 {
            text-decoration: none;
          }
          .navbar3-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navbar3-burger-menu {
            display: none;
          }
          .navbar3-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar3-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar3-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar3-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar3-logo {
            height: 3rem;
          }
          .navbar3-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar3-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar3-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar3-icon-group1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
          }
          .navbar3-text {
            display: inline-block;
          }
          .navbar3-text1 {
            display: inline-block;
          }
          .navbar3-text2 {
            display: inline-block;
          }
          .navbar3-text3 {
            display: inline-block;
          }
          .navbar3-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .navbar3-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar3-desktop-menu {
              display: none;
            }
            .navbar3-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar3-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar3-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar3.defaultProps = {
  link3Url: '/primary-actions',
  logoAlt: 'Website Logo',
  link1Url: '/home',
  link2: undefined,
  link3: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link1: undefined,
  link5Url: '/about-us',
  link5: undefined,
  link4Url: '/secondary-actions',
  link4: undefined,
  link2Url: '/dates',
}

Navbar3.propTypes = {
  link3Url: PropTypes.string,
  logoAlt: PropTypes.string,
  link1Url: PropTypes.string,
  link2: PropTypes.element,
  link3: PropTypes.element,
  logoSrc: PropTypes.string,
  link1: PropTypes.element,
  link5Url: PropTypes.string,
  link5: PropTypes.element,
  link4Url: PropTypes.string,
  link4: PropTypes.element,
  link2Url: PropTypes.string,
}

export default Navbar3
