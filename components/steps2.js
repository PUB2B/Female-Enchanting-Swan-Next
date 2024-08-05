import React from 'react'

import PropTypes from 'prop-types'

const Steps2 = (props) => {
  return (
    <>
      <div className="steps2-container thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container1 thq-grid-2">
            <div className="steps2-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps2-actions">
                <button className="thq-button-filled thq-button-animated steps2-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps2-container2">
              <div className="steps2-container3 thq-card">
                <h2>
                  {props.step1Title ?? (
                    <>
                      <h2 className="steps2-text18 thq-heading-2">
                        Choose a Date
                      </h2>
                    </>
                  )}
                </h2>
                <span>
                  {props.step1Description ?? (
                    <>
                      <span className="steps2-text19 thq-body-small">
                        Select a date from the calendar that works best for you.
                      </span>
                    </>
                  )}
                </span>
                <label className="steps2-text05 thq-heading-3">01</label>
              </div>
              <div className="steps2-container4 thq-card">
                <h2>
                  {props.step2Title ?? (
                    <>
                      <h2 className="steps2-text15 thq-heading-2">
                        Enter Your Information
                      </h2>
                    </>
                  )}
                </h2>
                <span>
                  {props.step2Description ?? (
                    <>
                      <span className="steps2-text22 thq-body-small">
                        Fill in your details to secure your spot for the
                        selected date.
                      </span>
                    </>
                  )}
                </span>
                <label className="steps2-text08 thq-heading-3">02</label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2>
                  {props.step3Title ?? (
                    <>
                      <h2 className="steps2-text20 thq-heading-2">
                        Confirmation
                      </h2>
                    </>
                  )}
                </h2>
                <span>
                  {props.step3Description ?? (
                    <>
                      <span className="steps2-text16 thq-body-small">
                        Receive a confirmation email with all the necessary
                        information.
                      </span>
                    </>
                  )}
                </span>
                <label className="steps2-text11 thq-heading-3">03</label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2>
                  {props.step4Title ?? (
                    <>
                      <h2 className="steps2-text17 thq-heading-2">
                        Get Ready to Attend
                      </h2>
                    </>
                  )}
                </h2>
                <span>
                  {props.step4Description ?? (
                    <>
                      <span className="steps2-text21 thq-body-small">
                        Prepare yourself for an exciting and informative event!
                      </span>
                    </>
                  )}
                </span>
                <label className="steps2-text14 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container1 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container2 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container3 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text05 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text08 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text11 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text14 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-text15 {
            display: inline-block;
          }
          .steps2-text16 {
            display: inline-block;
            text-align: center;
          }
          .steps2-text17 {
            display: inline-block;
          }
          .steps2-text18 {
            display: inline-block;
          }
          .steps2-text19 {
            display: inline-block;
            text-align: center;
          }
          .steps2-text20 {
            display: inline-block;
          }
          .steps2-text21 {
            display: inline-block;
            text-align: center;
          }
          .steps2-text22 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps2-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps2-container3 {
              width: 100%;
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps2-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step2Title: undefined,
  step3Description: undefined,
  step4Title: undefined,
  step1Title: undefined,
  step1Description: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step2Description: undefined,
}

Steps2.propTypes = {
  step2Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps2
