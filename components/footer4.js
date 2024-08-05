import React from 'react'

import PropTypes from 'prop-types'

const Footer4 = (props) => {
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="thq-body-small">© 2024 Junior SHOP</span>
              </div>
              <div className="footer4-footer-links">
                <span>
                  {props.privacyLink ?? (
                    <>
                      <span className="footer4-text6 thq-body-small">
                        Privacy Policy
                      </span>
                    </>
                  )}
                </span>
                <span>
                  {props.termsLink ?? (
                    <>
                      <span className="footer4-text5 thq-body-small">
                        Terms and Conditions
                      </span>
                    </>
                  )}
                </span>
                <span>
                  {props.cookiesLink ?? (
                    <>
                      <span className="footer4-text4 thq-body-small">
                        Cookies Policy
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text4 {
            display: inline-block;
          }
          .footer4-text5 {
            display: inline-block;
          }
          .footer4-text6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  cookiesLink: undefined,
  termsLink: undefined,
  privacyLink: undefined,
}

Footer4.propTypes = {
  cookiesLink: PropTypes.element,
  termsLink: PropTypes.element,
  privacyLink: PropTypes.element,
}

export default Footer4
