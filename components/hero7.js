import React from 'react'

import PropTypes from 'prop-types'

const Hero7 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero7-max-width thq-section-max-width">
          <div className="hero7-content">
            <h1>
              {props.heading1 ?? (
                <>
                  <h1 className="hero7-text5 thq-heading-1">
                    Catchy and engaging hero headline here
                  </h1>
                </>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <>
                  <p className="hero7-text4 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </>
              )}
            </p>
            <div className="hero7-actions">
              <div className="hero7-container">
                <button className="thq-button-filled hero7-button">
                  <span>
                    {props.action1 ?? (
                      <>
                        <span className="hero7-text7 thq-body-small">
                          Main action
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
              <div className="hero7-container1">
                <button className="thq-button-outline hero7-button1">
                  <span>
                    {props.action2 ?? (
                      <>
                        <span className="hero7-text6 thq-body-small">
                          Secondary action
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero7-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero7-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 1000px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero7-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero7-container {
            display: flex;
            align-items: flex-start;
          }
          .hero7-container1 {
            display: flex;
            align-items: flex-start;
          }
          .hero7-text4 {
            display: inline-block;
            text-align: center;
          }
          .hero7-text5 {
            display: inline-block;
            text-align: center;
          }
          .hero7-text6 {
            display: inline-block;
            text-align: center;
          }
          .hero7-text7 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 479px) {
            .hero7-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero7-container {
              width: 100%;
            }
            .hero7-button {
              width: 100%;
            }
            .hero7-container1 {
              width: 100%;
            }
            .hero7-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero7.defaultProps = {
  content1: undefined,
  heading1: undefined,
  action2: undefined,
  action1: undefined,
}

Hero7.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero7
