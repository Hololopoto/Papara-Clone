import React from "react";
import "./body.css";

function Body() {
  return (
    <section>
      <div className="first container">
        <div className="bdy">
          <div className="bdy-1">
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
            <div className="right dp-flex">
              <div className="right-imgs">
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
                    className="inn"
                    width={280}
                    height={560}
                    src="https://www.papara.com/home.png?v=1"
                    alt="inn"
                  />
                </div>
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
    </section>
  );
}

export default Body;
