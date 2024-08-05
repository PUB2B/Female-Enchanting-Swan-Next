import React from 'react'

import PropTypes from 'prop-types'

const Testimonial12 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial12-max-width thq-section-max-width">
          <div className="testimonial12-section-title">
            <h2>
              {props.heading1 ?? (
                <>
                  <h2 className="testimonial12-text16 thq-heading-2">
                    What Our Customers Say
                  </h2>
                </>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <>
                  <p className="testimonial12-text11 thq-body-large">
                    Read testimonials from our satisfied customers to see why
                    they love our services.
                  </p>
                </>
              )}
            </p>
          </div>
          <div className="testimonial12-container thq-flex-row">
            <div className="testimonial12-content thq-flex-column">
              <div className="testimonial12-stars">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <p>
                {props.review1 ?? (
                  <>
                    <p className="testimonial12-text15 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </>
                )}
              </p>
              <div className="testimonial12-avatar">
                <img
                  alt={props.author1Alt}
                  src={props.author1Src}
                  className="testimonial12-avatar-image thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial12-avatar-content">
                  <span>
                    {props.author1Name ?? (
                      <>
                        <span className="testimonial12-text14 thq-body-small">
                          John Doe
                        </span>
                      </>
                    )}
                  </span>
                  <span>
                    {props.author1Position ?? (
                      <>
                        <span className="testimonial12-text18 thq-body-small">
                          CEO, Company A
                        </span>
                      </>
                    )}
                  </span>
                </div>
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial12-logo"
                />
              </div>
            </div>
            <div className="testimonial12-content1 thq-flex-column">
              <div className="testimonial12-stars1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <p>
                {props.review2 ?? (
                  <>
                    <p className="testimonial12-text10 thq-body-large">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                  </>
                )}
              </p>
              <div className="testimonial12-avatar1">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="testimonial12-avatar-image1 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial12-avatar-content1">
                  <span>
                    {props.author2Name ?? (
                      <>
                        <span className="testimonial12-text17 thq-body-small">
                          Jane Smith
                        </span>
                      </>
                    )}
                  </span>
                  <span>
                    {props.author2Position ?? (
                      <>
                        <span className="testimonial12-text13 thq-body-small">
                          Marketing Manager, Company B
                        </span>
                      </>
                    )}
                  </span>
                </div>
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial12-logo1"
                />
              </div>
            </div>
            <div className="testimonial12-content2 thq-flex-column">
              <div className="testimonial12-stars2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <p>
                {props.review3 ?? (
                  <>
                    <p className="testimonial12-text12 thq-body-large">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </>
                )}
              </p>
              <div className="testimonial12-avatar2">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="testimonial12-avatar-image2 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial12-avatar-content2">
                  <span>
                    {props.author3Name ?? (
                      <>
                        <span className="testimonial12-text09 thq-body-small">
                          Alice Johnson
                        </span>
                      </>
                    )}
                  </span>
                  <span>
                    {props.author3Position ?? (
                      <>
                        <span className="testimonial12-text19 thq-body-small">
                          CTO, Company C
                        </span>
                      </>
                    )}
                  </span>
                </div>
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial12-logo2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial12-max-width {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial12-container {
            gap: var(--dl-space-space-twounits);
            width: auto;
          }
          .testimonial12-content {
            gap: var(--dl-space-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-stars {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial12-avatar {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-avatar-image {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial12-avatar-content {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-logo {
            height: 2rem;
          }
          .testimonial12-content1 {
            gap: var(--dl-space-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-stars1 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial12-avatar1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial12-avatar-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-logo1 {
            height: 2rem;
          }
          .testimonial12-content2 {
            gap: var(--dl-space-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-stars2 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial12-avatar2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial12-avatar-content2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-logo2 {
            height: 2rem;
          }
          .testimonial12-text09 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial12-text10 {
            display: inline-block;
          }
          .testimonial12-text11 {
            display: inline-block;
            text-align: center;
          }
          .testimonial12-text12 {
            display: inline-block;
          }
          .testimonial12-text13 {
            display: inline-block;
          }
          .testimonial12-text14 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial12-text15 {
            display: inline-block;
          }
          .testimonial12-text16 {
            width: 100%;
            display: inline-block;
            text-align: center;
          }
          .testimonial12-text17 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .testimonial12-text18 {
            display: inline-block;
          }
          .testimonial12-text19 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial12-container {
              align-items: center;
            }
            .testimonial12-text10 {
              text-align: center;
            }
            .testimonial12-text12 {
              text-align: center;
            }
            .testimonial12-text15 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .testimonial12-max-width {
              padding: var(--dl-space-space-threeunits);
            }
            .testimonial12-section-title {
              width: 100%;
              max-width: 800px;
            }
            .testimonial12-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .testimonial12-max-width {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial12-avatar {
              flex-direction: column;
            }
            .testimonial12-avatar-content {
              align-items: center;
              justify-content: center;
            }
            .testimonial12-avatar1 {
              flex-direction: column;
            }
            .testimonial12-avatar-content1 {
              align-items: center;
              justify-content: center;
            }
            .testimonial12-avatar2 {
              flex-direction: column;
            }
            .testimonial12-avatar-content2 {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial12.defaultProps = {
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Name: undefined,
  review2: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1500061982269-8126fe112dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3NjYwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company3LogoAlt: 'Company C Logo',
  content1: undefined,
  author3Alt: 'Image of Alice Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3NjYwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  author2Position: undefined,
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Src:
    'https://images.unsplash.com/photo-1706885093496-64e6ff14155e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg3NjYwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author1Name: undefined,
  company1LogoAlt: 'Company A Logo',
  review1: undefined,
  heading1: undefined,
  author2Name: undefined,
  company2LogoAlt: 'Company B Logo',
  author1Position: undefined,
  author3Position: undefined,
  author1Alt: 'Image of John Doe',
}

Testimonial12.propTypes = {
  company3LogoSrc: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author3Src: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  company3LogoAlt: PropTypes.string,
  content1: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Src: PropTypes.string,
  review3: PropTypes.element,
  author2Position: PropTypes.element,
  company2LogoSrc: PropTypes.string,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.element,
  company1LogoAlt: PropTypes.string,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  author2Name: PropTypes.element,
  company2LogoAlt: PropTypes.string,
  author1Position: PropTypes.element,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
}

export default Testimonial12
