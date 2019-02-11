import React, { Component } from "react"

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper header_wrap">
          <div className="header_wrap__left">
            <div className="header_wrap__logo">
              <a href="/"><img src="img/logo.svg" alt="Logo" /></a>
            </div>
            <nav className="header_wrap__menu">
              <ul>
                <li className="platform_nav has_children" style={{ display: "none" }}>
                  <a className="platform_nav_link" href="/staging/product_1.html">Features</a>
                  <nav className="sub_menu">
                    <div className="container">
                      <div className="sub_menu__item">
                        <h3 className="title">FOR</h3>
                        <ul>
                          <li>
                            <a href="#/">DEDICATED PROXIES</a>
                          </li>
                          <li>
                            <a href="#/">RESEDENTIAL PROXIES</a>
                          </li>
                          <li>
                            <a href="#/">MOBILE PROXIES</a>
                          </li>
                        </ul>
                      </div>
                      <div className="sub_menu__item">
                        <h3 className="title">FEATURES</h3>
                        <ul>
                          <li>
                            <a href="#/">REAL TIME CONVERSATIONS</a>
                            <p>24/7 real human support</p>
                          </li>
                          <li>
                            <a href="#/">ANALYTICS</a>
                            <p>Collect user data</p>
                          </li>
                          <li>
                            <a href="#/">AUTOMATED HELP CENTRE</a>
                            <p>Answer customer questions while you are gone</p>
                          </li>
                          <li>
                            <a href="#/">UNCOMPARABLE PLANS</a>
                            <p>Get the best plans at best price</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sub_menu__item">
                        <h3 className="title"></h3>
                        <ul>
                          <li>
                            <a href="#/">ANONYMOUS VISITOR INTELLIGENCE</a>
                            <p>Give your sales team X-ray vision</p>
                          </li>
                          <li>
                            <a href="#/">HOW IT WORKS</a>
                            <p>Get to know lime callmore closely</p>
                          </li>
                        </ul>
                      </div>
                      <div className="sub_menu__help">
                        <a href="#/">GET HELP NOW <img src="img/icon_right_arrow_white.svg" alt="Icon" /></a>
                      </div>
                    </div>
                  </nav>
                </li>
                <li><a href="/staging/product_1.html">Features</a></li>
                <li className="has_nav has_children">
                  <a href="#/">Use Case</a>
                  <ul className="sub_menu">
                    <li><a href="/staging/sales-intelligence.html">Sales intelligence</a></li>
                    <li><a href="/staging/proxy-server-seo.html">Proxy server seo</a></li>
                    <li><a href="/staging/ad-verification-proxy-network.html">Ad verification proxy network</a></li>
                    {/* <li><a href="#/">Rank Tracking</a></li>
                    <li><a href="#/">Data Scrapping</a></li>
                    <li><a href="#/">Price Comparison</a></li> */}
                  </ul>
                </li>
                <li><a href="/staging/pricing_v2.html">Pricing</a></li>
                <li className="has_nav has_children">
                  <a href="#/">Resources</a>
                  <ul className="sub_menu">
                    <li>
                      <a href="#/">Tutorials</a>
                    </li>
                    <li>
                      <a href="#/">Blog</a>
                    </li>
                    <li>
                      <a href="#/">Api documentation</a>
                    </li>
                  </ul>
                </li>
                <li className="has_nav has_children">
                  <a href="#/">Support</a>
                  <ul className="sub_menu">
                    <li><a href="help.limeproxies.com">Knowledgebase</a></li>
                    <li><a href="#/">Contact support</a></li>
                    <li><a href="status.limeproxies.com">Network status</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#/">Get A Demo</a>
                </li>
              </ul>
            </nav>
            <nav className="header_wrap__mobile_menu mobile_menu">
              <a className="mobile_menu__icon" href="#/"><i className="fas fa-bars"></i></a>
              <ul>
                <a className="mobile_menu__close" href="#/"><i className="fas fa-times"></i></a>
                <li>
                  <a href="#/">Platform</a>
                  <ul>
                    <li>
                      <a href="#/">DEDICATED PROXIES</a>
                    </li>
                    <li>
                      <a href="#/">RESEDENTIAL PROXIES</a>
                    </li>
                    <li>
                      <a href="#/">MOBILE PROXIES</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#/">Use Case</a>
                  <ul>
                    <li><a href="/staging/sales-intelligence.html">Sales intelligence</a></li>
                    <li><a href="/staging/proxy-server-seo.html">Proxy server seo</a></li>
                    <li><a href="/staging/ad-verification-proxy-network.html">Ad verification proxy network</a></li>
                    <li><a href="#/">Rank Tracking</a></li>
                    <li><a href="#/">Data Scrapping</a></li>
                    <li><a href="#/">Price Comparison</a></li>
                  </ul>
                </li>
                <li><a href="#/">Pricing</a></li>
                <li>
                  <a href="#/">Resources</a>
                  <ul className="sub_menu">
                    <li>
                      <a href="#/">Tutorials</a>
                    </li>
                    <li>
                      <a href="#/">Blog</a>
                    </li>
                    <li>
                      <a href="#/">Api documentation</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#/">Support</a>
                  <ul className="sub_menu">
                    <li><a href="http://help.limeproxies.com/">Knowledgebase</a></li>
                    <li><a href="#/">Contact support</a></li>
                    <li><a href="http://status.limeproxies.com/">Network status</a></li>
                  </ul>
                </li>
                <li><a href="#/">Get A Demo</a></li>
              </ul>
            </nav>
          </div>
          <div className="header_wrap__right">
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <input type="submit" value="Get Started" />
            </form>
            <a className="btn_white" href="#/">Sign in</a>
          </div>
        </div>
      </header>
    )
  }
}
