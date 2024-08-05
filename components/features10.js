import React from 'react'

import PropTypes from 'prop-types'

const Features10 = (props) => {
  return (
    <>
      <div className="features10-layout300 thq-section-padding">
        <div className="features10-max-width thq-flex-column thq-section-max-width">
          <div className="features10-section-title thq-flex-column">
            <span>
              {props.slogan ?? (
                <>
                  <span className="features10-text08 thq-body-small">
                    Experience excellence in every feature.
                  </span>
                </>
              )}
            </span>
            <h2>
              {props.sectionTitle ?? (
                <>
                  <h2 className="features10-text10 thq-heading-2">
                    Key Features
                  </h2>
                </>
              )}
            </h2>
            <p>
              {props.sectionDescription ?? (
                <>
                  <p className="features10-text03 thq-body-large">
                    Discover the amazing features of our platform that will
                    enhance your experience.
                  </p>
                </>
              )}
            </p>
          </div>
          <div className="features10-content thq-grid-auto-300">
            <div className="features10-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3>
                {props.feature1Title ?? (
                  <>
                    <h3 className="features10-text11 thq-heading-3">
                      User-Friendly Interface
                    </h3>
                  </>
                )}
              </h3>
              <span>
                {props.feature1Description ?? (
                  <>
                    <span className="features10-text12 thq-body-small">
                      Our platform offers an intuitive and easy-to-navigate
                      interface for seamless user experience.
                    </span>
                  </>
                )}
              </span>
            </div>
            <div className="features10-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3>
                {props.feature2Title ?? (
                  <>
                    <h3 className="features10-text07 thq-heading-3">
                      Advanced Security
                    </h3>
                  </>
                )}
              </h3>
              <span>
                {props.feature2Description ?? (
                  <>
                    <span className="features10-text04 thq-body-small">
                      We prioritize the security of your data with
                      state-of-the-art encryption and protection measures.
                    </span>
                  </>
                )}
              </span>
            </div>
            <div className="features10-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3>
                {props.feature3Title ?? (
                  <>
                    <h3 className="features10-text06 thq-heading-3">
                      24/7 Customer Support
                    </h3>
                  </>
                )}
              </h3>
              <span>
                {props.feature3Description ?? (
                  <>
                    <span className="features10-text13 thq-body-small">
                      Get assistance anytime you need with our round-the-clock
                      customer support team.
                    </span>
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="features10-actions thq-flex-row">
            <button className="features10-button thq-button-filled">
              <span>
                {props.mainAction ?? (
                  <>
                    <span className="features10-text09 thq-body-small">
                      Sign Up Now
                    </span>
                  </>
                )}
              </span>
            </button>
            <button className="features10-button1 thq-button-outline">
              <span>
                {props.secondaryAction ?? (
                  <>
                    <span className="features10-text05 thq-body-small">
                      Learn More
                    </span>
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features10-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features10-max-width {
            gap: var(--dl-space-space-threeunits);
            align-items: center;
          }
          .features10-section-title {
            align-items: center;
          }
          .features10-content {
            align-self: stretch;
            align-items: center;
          }
          .features10-feature1 {
            align-items: flex-start;
          }
          .features10-feature2 {
            align-items: flex-start;
          }
          .features10-feature3 {
            align-items: flex-start;
          }
          .features10-actions {
            align-items: flex-start;
          }
          .features10-button {
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .features10-button1 {
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .features10-text03 {
            display: inline-block;
            text-align: center;
          }
          .features10-text04 {
            display: inline-block;
          }
          .features10-text05 {
            display: inline-block;
          }
          .features10-text06 {
            display: inline-block;
          }
          .features10-text07 {
            display: inline-block;
          }
          .features10-text08 {
            display: inline-block;
          }
          .features10-text09 {
            display: inline-block;
          }
          .features10-text10 {
            display: inline-block;
          }
          .features10-text11 {
            display: inline-block;
            text-align: center;
          }
          .features10-text12 {
            display: inline-block;
          }
          .features10-text13 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features10-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features10-section-title {
              width: auto;
            }
            .features10-feature2 {
              width: auto;
            }
            .features10-feature3 {
              width: auto;
            }
            .features10-text10 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features10-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features10-actions {
              width: 100%;
              flex-direction: column;
            }
            .features10-button {
              width: 100%;
            }
            .features10-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features10.defaultProps = {
  sectionDescription: undefined,
  feature2Description: undefined,
  secondaryAction: undefined,
  feature3Title: undefined,
  feature2ImageAlt: 'Advanced Security Image',
  feature2Title: undefined,
  slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1517867281387-41c25817a140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3NjYwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1691097097104-5d1d91ebba42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3NjYwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1504893254130-93636feb25af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3NjYwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  mainAction: undefined,
  sectionTitle: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature1Description: undefined,
  feature3ImageAlt: '24/7 Customer Support Image',
  feature3Description: undefined,
}

Features10.propTypes = {
  sectionDescription: PropTypes.element,
  feature2Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
}

export default Features10
