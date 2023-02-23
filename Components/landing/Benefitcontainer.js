export default function Benefitcontainer() {
  return (
    <>
      <div className="rm-benefit__container rm-mobile__hidden">
        <div className="container mx-auto">
          <div className="grid grid-rows grid-cols-6">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="rm-main-head">
                There is more
                <span>to renting</span>
              </div>
            </div>
          </div>
          <div className=" grid grid-rows grid-cols-3">
            <div className="  grid-cols-2 ">
              <div className="rm-benefit__block rm-margin__right">
                <div className="rento-sprite rento-sprite-icon-finest__quality"></div>
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That is why we do a strict
                  quality-check for every product.
                </p>
              </div>
            </div>
            <div className="  grid-cols-2 ">
              <div className="rm-benefit__block rm-margin__left">
                <div className="rento-sprite rento-sprite-icon-free__relocation"></div>
                <h3>Free relocation</h3>
                <p>
                  Changing your house or even your city? We all relocate your
                  rented products for free.
                </p>
              </div>
            </div>
            <div className=" grid-cols-2 ">
              <div className="rm-benefit__block rm-margin__right">
                <div className="rento-sprite rento-sprite-icon-free__maintenance"></div>
                <h3>Free maintenance</h3>
                <p>
                  Keeping your rented products in a spick and span condition is
                  on us, so you can sit back and relax.
                </p>
              </div>
            </div>
          </div>
          <div className=" grid grid-rows grid-cols-3 hidden-xs">
            <div className=" grid-cols-2 ">
              <div className="rm-benefit__block">
                <div className="rento-sprite rento-sprite-icon-cancel__anytime"></div>
                <h3>Cancel anytime</h3>
                <p>
                  Pay only for the time you use the product and close your
                  subscription without any hassle.
                </p>
              </div>
            </div>
            <div className="grid-cols-2 ">
              <div className="rm-benefit__block">
                <div className="rento-sprite rento-sprite-icon-easy__return"></div>
                <h3>Easy return on delivery</h3>
                <p>
                  If you do not like the product on delivery, you can return it
                  right away—no questions asked.
                </p>
              </div>
            </div>
            <div className="grid-cols-2 ">
              <div className="rm-benefit__block">
                <div className="rento-sprite rento-sprite-icon-keep__upgrading"></div>
                <h3>Keep upgrading</h3>
                <p>
                  Bored of the same product? Upgrade to try another, newer
                  design and enjoy the change!
                </p>
              </div>
            </div>
          </div>
          <div className=" grid grid-rows hidden-xs">
            <div>
              <a href="#" className="rm-benefits__viewmore-btn float-right">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
