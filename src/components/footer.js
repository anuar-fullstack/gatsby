import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer show_desctop">
        <div className="footer__contacts footer_contacts">
          <div className="container">
            <div className="footer_contacts__item footer_contacts_item">
              <a href="#/">
                <img className="icon" src="img/icon_support.svg" alt="Icon" />
                Quick Support 24 x 7 X 365
                <img className="arrow" src="img/icon_right_arrow.svg" alt="Icon" />
              </a>
            </div>
            <div className="footer_contacts__item footer_contacts_item">
              <a href="#/">
                <img className="icon" src="img/icon_uptime.svg" alt="Icon" />
                99.99 % Up time
                <img className="arrow" src="img/icon_right_arrow.svg" alt="Icon" />
              </a>
            </div>
            <div className="footer_contacts__item footer_contacts_item">
              <a href="#/">
                <img className="icon" src="img/icon_secure.svg" alt="Icon" />
                Fast & Secure
                <img className="arrow" src="img/icon_right_arrow.svg" alt="Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__menu footer_menu">
          <div className="container">
            <div className="footer_menu__item">
              <h3 className="title">Limeproxies</h3>
              <ul>
                <li><a href="/staging/product_1.html">Features</a></li>
                <li><a href="/staging/prixing_v2.html">Pricing Plans</a></li>
                <li><a href="#/">Request a Demo</a></li>
                <li><a href="#/">Proxy Locations</a></li>
                <li><a href="#/">Why LimeProxies</a></li>
                <li><a href="#/">Compare</a></li>
              </ul>
            </div>
            <div className="footer_menu__item">
              <h3 className="title">Locations</h3>
              <ul>
                <li><a href="/staging/uk_proxies.html">UK Proxies</a></li>
                <li><a href="/staging/australia_proxies.html">Australia Proxies</a></li>
                <li><a href="/staging/canada_proxies.html">Canada Proxies</a></li>
                <li><a href="/staging/singapore_proxies.html">Singapore Proxies</a></li>
                <li><a href="/staging/brazil_proxies.html">Brazil Proxies</a></li>
              </ul>
            </div>
            <div className="footer_menu__item">
              <h3 className="title">USE CASES</h3>
              <ul>
                <li><a href="/staging/sales-intelligence.html">Sales intelligence</a></li>
                <li><a href="/staging/proxy-server-seo.html">Proxy server seo</a></li>
                <li><a href="/staging/ad-verification-proxy-network.html">Ad verification proxy network</a></li>
                {/* <li><a href="#/">Rank Tracking</a></li>
                <li><a href="#/">Data Scrapping</a></li>
                <li><a href="#/">Price Comparison</a></li> */}
              </ul>
            </div>
            <div className="footer_menu__item">
              <h3 className="title">RESOURCES</h3>
              <ul>
                <li><a href="#/">Customer Testimonials</a></li>
                <li><a href="#/">Proxy Guides</a></li>
                <li><a href="/staging/about.html">About us</a></li>
                <li><a href="/staging/contacts.html">Contact Us</a></li>
                <li><a href="#/">Affiliates</a></li>
                <li><a href="#/">Refer a friend</a></li>
              </ul>
            </div>
            <div className="footer_menu__item">
              <h3 className="title">GET HELP</h3>
              <ul>
                <li><a href="help.limeproxies.com">Support Center</a></li>
                <li><a href="#/">FAQ</a></li>
                <li><a href="#/">Tutorials</a></li>
                <li><a href="#/">Contact Sales</a></li>
                <li><a href="status.limeproxies.com">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom footer_bottom">
          <div className="container">
            <div className="footer_bottom__socials footer_socials">
              <ul>
                <li>
                  <a target="_blank" href="https://www.facebook.com/limeproxiesonline/"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/limeproxies"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/limeproxies/"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UCmRhZT7mgQAMc_A_ekDDydA"><i className="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright footer_copyright">
          <div className="container">
            <div className="footer_copyright__text">
              <p>Ⓒ Copyright 2018 Limeproxies.com</p>
            </div>
            <div className="footer_copyright__nav">
              <ul>
                <li>
                  <a href="/staging/terms.html">Terms</a>
                </li>
                <li>
                  <a href="/staging/refund.html">Refund</a>
                </li>
                <li>
                  <a href="/staging/privacy.html">Privacy</a>
                </li>
                <li>
                  <a href="/staging/user_policy.html">User Policy</a>
                </li>
                <li>
                  <a href="/staging/agreement.html">Service Level Agreement</a>
                </li>
              </ul>
            </div>
            <div className="footer_copyright__phone">
              <a href="tel:+1 (936) 342-7014">
                <i className="fas fa-phone"></i>
                +1 (936) 342-7014
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
