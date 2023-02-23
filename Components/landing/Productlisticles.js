export default function Productlisticles() {
  return (
    <div id="product_listicles" className="rm-product__listicles pb-0">
      <div className="rm-random__container rm-listicle__box">
        <div className="rm-main-head">
          You'll love to
          <span>take these home</span>
        </div>
        <div className="rm-slide__navigator rm-listicle__navigator">
          <div
            slot="button-prev"
            className="swiper-button-lp swiper-button-disabled"
            tabIndex="0"
            role="button"
            aria-label="Previous slide"
            aria-disabled="true"
          >
            <div className="rento-sprite rento-sprite-down__chevron-icon"></div>
          </div>
          <div
            slot="button-next"
            className="swiper-button-ln"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-disabled="false"
          >
            <div className="rento-sprite rento-sprite-down__chevron-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
