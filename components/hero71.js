import React from 'react'

import PropTypes from 'prop-types'

const Hero71 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero71-max-width thq-section-max-width">
          <div className="hero71-content">
            <h1>
              {props.heading1 ?? (
                <>
                  <h1 className="hero71-text5 thq-heading-1">
                    Discover Exciting Events Near You
                  </h1>
                </>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <>
                  <p className="hero71-text4 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </>
              )}
            </p>
            <div className="hero71-actions">
              <div className="hero71-container">
                <button className="thq-button-filled hero71-button">
                  <span>
                    {props.action1 ?? (
                      <>
                        <span className="hero71-text6 thq-body-small">
                          View Upcoming Dates
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
              <div className="hero71-container1">
                <button className="thq-button-outline hero71-button1">
                  <span>
                    {props.action2 ?? (
                      <>
                        <span className="hero71-text7 thq-body-small">
                          Get Your Tickets Now
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
          .hero71-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero71-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 1000px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero71-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero71-container {
            display: flex;
            align-items: flex-start;
          }
          .hero71-container1 {
            display: flex;
            align-items: flex-start;
          }
          .hero71-text4 {
            display: inline-block;
            text-align: center;
          }
          .hero71-text5 {
            display: inline-block;
            text-align: center;
          }
          .hero71-text6 {
            display: inline-block;
            text-align: center;
          }
          .hero71-text7 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 479px) {
            .hero71-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero71-container {
              width: 100%;
            }
            .hero71-button {
              width: 100%;
            }
            .hero71-container1 {
              width: 100%;
            }
            .hero71-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero71.defaultProps = {
  content1: undefined,
  heading1: undefined,
  action1: undefined,
  action2: undefined,
}

Hero71.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
}

export default Hero71
