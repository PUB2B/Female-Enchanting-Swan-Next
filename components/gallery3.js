import React from 'react'

import PropTypes from 'prop-types'

const Gallery3 = (props) => {
  return (
    <>
      <div className="gallery3-gallery3 thq-section-padding">
        <div className="gallery3-max-width thq-section-max-width">
          <div className="gallery3-section-title">
            <h2>
              {props.heading1 ?? (
                <>
                  <h2 className="gallery3-text3 thq-heading-2">
                    Gallery Showcase
                  </h2>
                </>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <>
                  <span className="gallery3-text2 thq-body-large">
                    Explore our stunning collection of artworks from talented
                    artists around the world.
                  </span>
                </>
              )}
            </span>
          </div>
          <div className="gallery3-container thq-grid-4">
            <div className="gallery3-container1"></div>
            <div className="gallery3-container2"></div>
            <div className="gallery3-container3"></div>
            <div className="gallery3-container4"></div>
            <div className="gallery3-container5"></div>
            <div className="gallery3-container6">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery3-image6 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container7">
              <img
                alt={props.image7Alt1}
                src={props.image7Src1}
                className="gallery3-image7 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container8"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery3-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery3-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery3-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery3-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
          }
          .gallery3-container1 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-container2 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-container3 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-container4 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-container5 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-container6 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image6 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container7 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image7 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container8 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-text2 {
            display: inline-block;
            text-align: center;
          }
          .gallery3-text3 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .gallery3-image6 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image7 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
          }
          @media (max-width: 767px) {
            .gallery3-section-title {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery3.defaultProps = {
  image6Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  content1: undefined,
  image6Alt: 'Artwork 6',
  heading1: undefined,
  image7Alt1: 'Artwork 7',
  image7Src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Gallery3.propTypes = {
  image6Src: PropTypes.string,
  content1: PropTypes.element,
  image6Alt: PropTypes.string,
  heading1: PropTypes.element,
  image7Alt1: PropTypes.string,
  image7Src1: PropTypes.string,
}

export default Gallery3
