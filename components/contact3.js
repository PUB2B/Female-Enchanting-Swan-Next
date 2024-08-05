import React from 'react'

import PropTypes from 'prop-types'

const Contact3 = (props) => {
  return (
    <>
      <div className="contact3-contact20 thq-section-padding">
        <div className="contact3-max-width thq-section-max-width">
          <div className="contact3-section-title">
            <span>
              {props.content2 ?? (
                <>
                  <span className="contact3-text18 thq-body-small">
                    Our team will respond to your messages as soon as possible.
                  </span>
                </>
              )}
            </span>
            <div className="contact3-content">
              <h2>
                {props.heading1 ?? (
                  <>
                    <h2 className="contact3-text17 thq-heading-2">
                      Contact Us
                    </h2>
                  </>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <>
                    <p className="contact3-text11 thq-body-large">
                      <span>
                        Feel free to reach out to us for any inquiries or
                        feedback. We are here to assist you.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="contact3-row">
            <div className="contact3-content1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact3-contact-info">
                <div className="contact3-content2">
                  <h3 className="contact3-text03 thq-heading-3">Email</h3>
                  <p>
                    {props.content3 ?? (
                      <>
                        <p className="contact3-text10 thq-body-large">
                          For urgent matters, please contact us via phone for
                          immediate assistance.
                        </p>
                      </>
                    )}
                  </p>
                </div>
                <span>
                  {props.email1 ?? (
                    <>
                      <span className="contact3-text19 thq-body-small">
                        contact@website.com
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>
            <div className="contact3-content3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact3-contact-info1">
                <div className="contact3-content4">
                  <h3 className="contact3-text05 thq-heading-3">Phone</h3>
                  <p>
                    {props.content4 ?? (
                      <>
                        <p className="contact3-text15 thq-body-large">
                          Follow us on social media for updates and news.
                        </p>
                      </>
                    )}
                  </p>
                </div>
                <span>
                  {props.phone1 ?? (
                    <>
                      <span className="contact3-text09 thq-body-small">
                        +123-456-7890
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>
            <div className="contact3-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact3-contact-info2">
                <div className="contact3-content6">
                  <h3 className="contact3-text07 thq-heading-3">Office</h3>
                  <p>
                    {props.content5 ?? (
                      <>
                        <p className="contact3-text14 thq-body-large">
                          We look forward to hearing from you!
                        </p>
                      </>
                    )}
                  </p>
                </div>
                <span>
                  {props.address1 ?? (
                    <>
                      <span className="contact3-text16 thq-body-small">
                        123 Main Street, City, Country
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact3-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact3-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-section-title {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact3-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-row {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact3-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-contact-info {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact3-text03 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-contact-info1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact3-text05 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-contact-info2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact3-text07 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-text09 {
            display: inline-block;
            text-align: center;
          }
          .contact3-text10 {
            display: inline-block;
            text-align: center;
          }
          .contact3-text11 {
            display: inline-block;
            text-align: center;
          }
          .contact3-text14 {
            display: inline-block;
            text-align: center;
          }
          .contact3-text15 {
            display: inline-block;
            text-align: center;
          }
          .contact3-text16 {
            display: inline-block;
            text-align: center;
          }
          .contact3-text17 {
            display: inline-block;
          }
          .contact3-text18 {
            display: inline-block;
          }
          .contact3-text19 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 767px) {
            .contact3-row {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact3-row {
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Contact3.defaultProps = {
  phone1: undefined,
  content3: undefined,
  content1: undefined,
  content5: undefined,
  content4: undefined,
  address1: undefined,
  heading1: undefined,
  content2: undefined,
  email1: undefined,
}

Contact3.propTypes = {
  phone1: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  content5: PropTypes.element,
  content4: PropTypes.element,
  address1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  email1: PropTypes.element,
}

export default Contact3
