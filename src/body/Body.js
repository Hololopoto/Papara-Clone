import React from "react";
import "./body.css";

function Body() {
  return (
    <div className="container-xxl">
      <div className="first row bdy">
        <div className="container">
          <div className="bdy-1 ">
            <div className="left d-flex flex-column  justify-content-start">
              <h1>Banka Değil, Papara</h1>
              <p>
                <mark className="glow-1">7/24 ücretsiz para gönder, </mark>
                faturalarını öde,bütçeni <br /> yönet. Ücretsiz
                <mark className="glow-2"> Papara Card </mark>
                ile tüm dünyada ve <br /> internette borçlanmadan harcarken
                anında nakit <br /> kazan. <br />
                <br /> Sen de <mark className="glow-3"> 18 milyondan </mark>
                fazla Paparalı arasına katıl,
                <br /> finansal özgürlükle tanış.
              </p>
              <span className="span-sign-btn">
                <button className="btn-sign">Papara Hesabı Aç</button>
              </span>
            </div>
            <div className="right d-flex">
              <div className="right-imgs d-flex">
                <img
                  className="ppr"
                  src="https://cdn.papara.com/web/cards/gray_mastercard.svg"
                  width="181"
                  height="287"
                  alt="Papara Gray Card"></img>
                <div className="phone-img">
                  <img
                    className="iphone"
                    src="https://www.papara.com/iPhone.png?v=2"
                    alt="iPhone"
                    width={280}
                    height={560}
                  />
                  <img
                    className="inn w-auto"
                    width={280}
                    height={560}
                    src="https://www.papara.com/home.png?v=1"
                    alt="inn"
                  />
                  <img
                    className="ppr-black"
                    width={181}
                    height={287}
                    src="https://cdn.papara.com/web/cards/black-mastercard.svg"
                    alt="Papara Black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl d-flex  mt-5   ">
        <div className="l dp-flex mt-5 me-5 d-inline">
          <div className="lcost d-flex  ">
            <div className="usd d-flex align-items-center ">
              <img
                src="https://dkto9gpxgolik.cloudfront.net/icons/currencies/usd.svg"
                alt="USD"
                className="round d-flex "
              />
              <div className="d-flex flex-column ms-2 ">
                <div className="one">
                  <span>USD</span>
                  <span className="p1-1 ms-1">30,3826</span>
                </div>
                <span className="two">
                  <span className="pr-1">%0,21</span>
                  <span className="inline-flex ms-1">↑</span>
                </span>
              </div>
            </div>
            <div className="usd d-flex align-items-center ms-4 ">
              <img
                src="https://dkto9gpxgolik.cloudfront.net/icons/currencies/eur.svg"
                alt="USD"
                className="round d-flex "
              />
              <div className="d-flex flex-column ms-2 ">
                <div className="one">
                  <span>EUR</span>
                  <span className="p1-1 ms-1">33,1961</span>
                </div>
                <span className="two">
                  <span className="pr-1">%0,35</span>
                  <span className="inline-flex ms-1">↑</span>
                </span>
              </div>
            </div>
            <div className="usd d-flex align-items-center ms-4 ">
              <img
                src="https://dkto9gpxgolik.cloudfront.net/icons/currencies/gbp.svg"
                alt="USD"
                className="round d-flex "
              />
              <div className="d-flex flex-column ms-2 ">
                <div className="one">
                  <span>GBP</span>
                  <span className="p1-1 ms-1">38,7894</span>
                </div>
                <span className="two">
                  <span className="pr-1">%0,01</span>
                  <span className="inline-flex ms-1">↑</span>
                </span>
              </div>
            </div>
            <div className="usd d-flex align-items-center ms-4 ">
              <img
                src="https://dkto9gpxgolik.cloudfront.net/icons/currencies/xau.svg"
                alt="USD"
                className="round d-flex "
              />
              <div className="d-flex flex-column ms-2 ">
                <div className="one">
                  <span>Altın</span>
                  <span className="p1-1 ms-1">2.018,3006</span>
                </div>
                <span className="two">
                  <span className="pr-1">%0,36</span>
                  <span className="inline-flex ms-1">↓</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right d-flex">
          <div className="container-xxl d-flex align-items-end ms-5 app">
            <a
              href="https://apps.apple.com/us/app/papara-finansal-hizmetler/id1146507477"
              className=" cursor-pointer d-flex ms-5 link-underline text-dark link-underline-opacity-0"
              target="_blank">
              <img
                src="https://www.papara.com/_next/static/media/appstore.2f6a59e0.svg"
                alt="App Store"
                className="rounded-1 me-3 "
                height={40}
                width={40}
              />
              <span className="tag d-flex flex-column">
                <span className="text">App Store</span>
                <span className="vote d-flex">
                  <span className="star1 d-flex">★★★★★</span>
                  <span className="vote1">4.8</span>
                </span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mobillium.papara"
              className=" cursor-pointer d-flex ms-3 link-underline text-dark link-underline-opacity-0"
              target="_blank">
              <img
                src="https://www.papara.com/_next/static/media/playstore.f59ade1d.svg"
                alt="App Store"
                className="rounded-1 me-3 "
                height={40}
                width={40}
              />
              <span className="tag d-flex flex-column">
                <span className="text">Google Play</span>
                <span className="vote d-flex">
                  <span className="star2">★★★★★</span>
                  <span className="vote1">4.6</span>
                </span>
              </span>
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C104453451"
              className=" cursor-pointer d-flex ms-3 link-underline text-dark link-underline-opacity-0"
              target="_blank">
              <img
                src="https://www.papara.com/_next/static/media/appgallery.5c5381ee.svg"
                alt="App Store"
                className="rounded-1 me-3 "
                height={40}
                width={40}
              />
              <span className="tag d-flex flex-column">
                <span className="text">App Store</span>
                <span className="vote d-flex">
                  <span className="star3">★★★★★</span>
                  <span className="vote1">4.5</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <section>
        <div className="container d-flex mt-5">
          <div className="left2 container mt-5">
            <h2>
              Hesap kartının sadeliğini <br class="d-none d-sm-block"></br>
              kredi kartının ödülleri ile <br class="d-none d-sm-block"></br>
              birleştirdik.
            </h2>
            <p>
              <mark className="glow-2">Papara Card </mark>ile asla boçlanmaz,
              hesabındaki parayı harcarsın.Harcamalarını kolayca takip eder,
              harcarken anında nakit kazanırsın.
              <br class="d-none d-sm-block"></br>
              <br class="d-none d-sm-block"></br>
              <mark className="glow-1">
                Kart ücreti, kullanım ücreti, kart aidatı yok.
              </mark>
            </p>
          </div>
          <div className="right2 container">
            <div className="right2-img">
              <img
                src="https://cdn.papara.com/web/cards/gray_mastercard.svg"
                alt="gray mastercard"
                className="mdw142px mdh226px lgw178px lgh283px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
