import React, { Component } from "react"
import SbEditable from 'storyblok-react'
import Icon_star from "../images/icon_star.svg"
import { Menu } from 'semantic-ui-react'


export default class Header extends Component {


      state = { activeItem: 'High Performance',
      activeItem2:'SEO Agencies & keyword Ranking Software' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemClick2 = (e, { name }) => this.setState({ activeItem2: name })
    renderHigh = () => {


        return (
                   <div>
                        <div className="home_features_tab__item">
                            <h3 className="title">High Speed & Performance</h3>
                            <p>Storm Proxies' 1GB network is optimized for high performance and fast multi-threaded tools.</p>
                        </div>
                
                        <div className="home_features_tab__item">
                            <h3 className="title">Private Dedicated Proxies</h3>
                            <p>Premium private dedicated proxy. Optimized for tasks that requirehigh-speed fixed IP addresses.</p>
                        </div>
                
                        <div className="home_features_tab__item">
                            <h3 className="title">Unlimited bandwidth</h3>
                            <p>You get unlimited bandwidth. No hidden costs, no limits on bandwidth.</p>
                        </div>
        
                        <div className="home_features_tab__item">
                            <h3 className="title">Automatic & Instant Delivery</h3>
                            <p>Get instant access after payment - no waiting for account activation or proxies setup.</p>
                        </div>
                   </div>
        )
    }
    
    renderGeoUse = () => {
        return (
              <div className="home_cases_item">
                        <div className="home_cases_item__top home_cases_top">
                            <div className="home_cases_top__item">
                                <h3 className="title">Geo Blocked Surfing</h3>
                                <img src={require("../images/img_cases_2.svg")} alt="Img"/>
                            </div>
                        </div>
                        <div className="home_cases_item__title">
                            <h3 className="title">International Geo Surfing</h3>
                        </div>
                        <div className="home_cases_item__text">
                            <p>LimeProxies’ international proxy services allow you to browse the web as if from anywhere in the world, enabling you to see local search results, run accurate international keyword reports, and get valuable marketing and business insights.</p>
                        </div>
                    </div>
        )
    }

    renderBigG = () => {
        return (
         <div className="home_cases_item">
                        <div className="home_cases_item__top home_cases_top">
                            <div className="home_cases_top__item">
                                <h3 className="title">Big-G Stealth Extractor</h3>
                                <img src={require("../images/img_cases_3.svg")}  alt="Img"/>
                            </div>
                        </div>
                        <div className="home_cases_item__title">
                            <h3 className="title">Big-G Stealth Extractor</h3>
                        </div>
                        <div className="home_cases_item__text">
                            <p>The Big-G Stealth Extractor by LimeProxies  enables you to send up to 600 Queries per Minute to Google–without being blocked or detected. Use the Big-G Stealth Extractor to run your favorite SEO software and get Google rankings 600+ times faster than normal.</p>
                        </div>
                    </div>    
        )
    }

    renderHighSpeed = () => {
        return (
           <div className="home_cases_item">
                        <div className="home_cases_item__top home_cases_top">
                            <div className="home_cases_top__item">
                                <h3 className="title">High Speed Web Scraping</h3>
                                <img src={require("../images/img_cases_4.svg")} alt="Img"/>
                            </div>
                        </div>
                        <div className="home_cases_item__title">
                            <h3 className="title">Proxy Servers for High Speed Web Scraping</h3>
                        </div>
                        <div className="home_cases_item__text">
                            <p>A reliable proxy server platform &amp; API optimized for rapid web scraping—with- out being blocked. LimeProxies offers proxy solutions that are fast, secure, and scalable to meet your enterprise needs.</p>
                        </div>
                    </div> 
        )
    }



    renderPrivacy = () => {
        return (
            <div className="home_cases_item">
                        <div className="home_cases_item__top home_cases_top">
                            <div className="home_cases_top__item">
                                <h3 className="title">Online Privacy</h3>
                                <img src={require("../images/img_cases_5.svg")} alt="Img"/>
                            </div>
                        </div>
                        <div className="home_cases_item__title">
                            <h3 className="title">Privatise Online Encryption</h3>
                        </div>
                        <div className="home_cases_item__text">
                            <p>Privatise Online Encryption delivers sophisticated, built-for-business online privacy protection, allowing you to encrypt your online communications between your device and the server or network you are connected to.</p>
                        </div>
                    </div>
        )
    }

   renderSEO = () => {
        return (
               <div className="home_cases_item">
                        <div className="home_cases_item__top home_cases_top">
                            <div className="home_cases_top__item">
                                <h3 className="title">SEO Agencies &amp; keyword Ranking Software</h3>
                                <img src={require("../images/img_cases_1.svg")} alt="Img"/>
                            </div>
                        </div>
                        <div className="home_cases_item__title">
                            <h3 className="title">Proxy Solutions for SaaS, Cloud, and App Developers</h3>
                        </div>
                        <div className="home_cases_item__text">
                            <p>Limeproxie’s reliable, secure proxy server platform and API is built for rapid data extraction—without being blocked. Our private proxy solutions are customizable and scalable to meet the needs of complex SaaS development, cloud development, and app store optimization.</p>
                        </div> 
               </div>
        )
    }

    renderGeo = () => {

        return (
              <div className="home_features_tab__location">
                    <img src={require("../images/img_features_2.jpg")} alt="Img"/>
                    <p>Click here for <a href="#/">detailed locations</a></p>
                </div>
        )
    }

    

  render() {
      console.log(this.state.activeItem2);
        const { activeItem,activeItem2 } = this.state
    const homepageprops = this.props.blok
    return (
        <SbEditable content={homepageprops}>
      <div>
          {/* <!--begin home header--> */}
<section className="home_header">
    <div className="container">
        <div className="home_header__wrapper home_header_wrap">
            <div className="home_header_wrap__item home_header_item">
                <h1 className="title">{homepageprops.homeTitle} <strong>{homepageprops.homeTitle2}</strong></h1>
                <p>{homepageprops.titleDescriptions}</p>
                <div className="home_header_item__form">
                    <form action="">
                        <input type="email" placeholder="Enter your email"/>
                        <input type="submit" value="Get Started"/>
                    </form>
                    <a className="btn_white" href="#/">{homepageprops.signinText}</a>
                </div>
            </div>
            <div className="home_header_wrap__item home_header_item">
                <a href="#/">
                    <img src={require("../images/img_header_video.jpg")} alt="Video"/>
                    <span><img src={require("../images/icon_play.svg")} alt="Play"/></span>
                </a>
            </div>
        </div>
        <div className="home_header__logo home_logo">
            <div className="home_logo__item">
                <img src={require("../images/logo_labs.jpg")} alt="Logo"/>
            </div>
            <div className="home_logo__item">
                <img src={require("../images/logo_webposition.jpg")} alt="Logo"/>
            </div>
            <div className="home_logo__item">
                <img src={require("../images/logo_booking.jpg")} alt="Logo"/>
            </div>
            <div className="home_logo__item">
                <img src={require("../images/logo_hotels.jpg")} alt="Logo"/>
            </div>
            <div className="home_logo__item">
                <img src={require("../images/logo_webposition.jpg")} alt="Logo"/>
            </div>
        </div>
    </div>
</section>
{/* <!--end home header-->
<!--begin home how--> */}
<section className="home_how">

    <div className="container">
        <div className="home_how__title">
            <h2 className="title">{homepageprops.helpTitle}</h2>
        </div>
        <div className="home_how__wrapper home_how_wrap">
            {/* <!--begin item--> */}
            <div className="home_how_wrap__item">
                <img src={require("../images/icon_how_1.svg")} alt="Icon"/>
                <h3 className="title">
                {homepageprops.helpText}   
                </h3>
                
                <p>{homepageprops.helpDesc} </p>
            </div>
            {/* <!--end item-->
            <!--begin item--> */}
            <div className="home_how_wrap__item">
                <img src={require("../images/icon_how_2.svg")} alt="Icon"/>
                <h3 className="title">
                {homepageprops.helpTextTwo}   
          
                </h3>
                <p>{homepageprops.helpDescTwo} </p>
            </div>
            {/* <!--end item-->
            <!--begin item--> */}
            <div className="home_how_wrap__item">
                <img src={require("../images/icon_how_3.svg")} alt="Icon"/>
                <h3 className="title">
                 {homepageprops.helpTextThree}   
                </h3>
                <p>{homepageprops.helpDescThree} </p>
            </div>
            {/* <!--end item-->
            <!--begin item--> */}
            <div className="home_how_wrap__item">
                <img src={require("../images/icon_how_4.svg")} alt="Icon"/>
                <h3 className="title">
                    {homepageprops.helpTextFour}
                </h3>
                <p>{homepageprops.helpDescFour}</p>
            </div>
            {/* <!--end item--> */}
        </div>
    </div>
</section>
{/* <!--end home how-->
<!--begin home features--> */}
<section className="home_features">
    <div className="container">
        <div className="home_features__wrapper home_features_wrap">
            <div className="home_features_wrap__img">
                <img src={require("../images/img_features.jpg")} alt="Image"/>
                <h3 className="title">AAsome</h3>
                <p>Fast , Scalable and secure</p>
            </div>
            <div className="home_features_wrap__item">
                <h2 className="title">With LimeProxies get Awesome features for best price. </h2>
                <p>The dedicated proxies that we offer are hosted on a
                    server network owned by us. Unlike other proxy
                    sellers who only resell proxies, we own 100% of our
                    inventory, which gives us the opportunity to sell
                    them for much lower prices.</p>
                <a href="#/">
                    Learn More
                    <img src={require("../images/arrows_right.svg")} alt="Arrows"/>
                </a>
            </div>
        </div>
        <div className="home_features__title">
            <h2 className="title">Our Awesome features</h2>
        </div>

     <div className="home_features__list">
        <Menu  className="ui menu home_features__menu">
                <Menu.Item name='High Performance' active={activeItem === 'High Performance'}  onClick={this.handleItemClick} />
                <Menu.Item
                name='40 + Geo Locations'
                active={activeItem === '40 + Geo Locations'}
                onClick={this.handleItemClick}
               
                />

                <Menu.Item
                name='Simeltanious Usage'
                active={activeItem === 'Simeltanious Usage'}
                onClick={this.handleItemClick}
                />
                 <Menu.Item
                name='Anytime IP Refresh'
                active={activeItem === 'Anytime IP Refresh'}
                onClick={this.handleItemClick}
                />
             </Menu>
                <div className="home_features__block">
                    <div className="ui tab home_features__tab active" data-tab="tab-name">
                        {activeItem === 'High Performance' ? this.renderHigh() : activeItem === '40 + Geo Locations' ? this.renderGeo() : null}

           
                     </div>
                </div>
        </div>

        
    </div>
</section>
{/* <!--end home features-->
<!--begin home reasons--> */}
<section className="home_reasons">
    <div className="container">
        <div className="home_reasons__wrapper home_reasons_wrap">
            <div className="home_reasons_wrap__list home_reasons_list">
                <h2 className="title">3 reasons to choose Limeproxies</h2>
                {/* <!--begin item--> */}
                <div className="home_reasons_list__item home_reasons_item">
                    <div className="home_reasons_item__icon">
                        <img src={require("../images/icon_reasons_1.svg")} alt="Icon"/>
                    </div>
                    <div className="home_reasons_item__text">
                        <h3 className="title">
                            Blazing-fast Server speeds
                        </h3>
                        <p>Huge global network servers optimized for fast connections. Unlimited bandwidth, no throttling.</p>
                    </div>
                </div>
                {/* <!--end item-->
                <!--begin item--> */}
                <div className="home_reasons_list__item home_reasons_item">
                    <div className="home_reasons_item__icon">
                        <img src={require("../images/icon_reasons_2.svg")} alt="Icon"/>
                    </div>
                    <div className="home_reasons_item__text">
                        <h3 className="title">
                            No restrictions
                        </h3>
                        <p>Stream or download anything, from any of our servers, anywhere on Earth, with your IP address hidden from prying eyes.</p>
                    </div>
                </div>
                {/* <!--end item-->
                <!--begin item--> */}
                <div className="home_reasons_list__item home_reasons_item">
                    <div className="home_reasons_item__icon">
                        <img src={require("../images/icon_reasons_3.svg")} alt="Icon"/>
                    </div>
                    <div className="home_reasons_item__text">
                        <h3 className="title">
                            Serious security
                        </h3>
                        <p>Protect yourself from hacking and surveillance with 256-bit AES encryption and DNS/IPv6 leak protection.</p>
                    </div>
                </div>
                {/* <!--end item--> */}
            </div>
            <div className="home_reasons_wrap__img">
                <img src={require("../images/img_reasons.png")} alt="Image"/>
            </div>
        </div>
    </div>
</section>
{/* <!--end home reasons-->
<!--begin home form--> */}
<section className="home_form">
    <div className="container">
        <div className="home_form__title">
            <h2 className="title">Make your web surfing happier and easy today</h2>
        </div>
        <form action="">
            <input type="email" placeholder="Enter email"/>
            <input type="submit" value="Get Started"/>
        </form>
    </div>
</section>
{/* <!--end home form-->
<!--begin home cases--> */}
<section className="home_features">
    <div className="container">
        <div className="home_features__title">
            <h2 className="title">Use Cases</h2>
        </div>
        <div className="home_features__list">
               <Menu  className="ui menu home_features__menu">
                <Menu.Item name='SEO Agencies &amp; keyword Ranking Software' active={activeItem2 === 'SEO Agencies & keyword Ranking Software'}  onClick={this.handleItemClick2} />
                <Menu.Item
                name='Geo- surfing'
                active={activeItem2 === 'Geo- surfing'}
                onClick={this.handleItemClick2}
               
                />

                <Menu.Item
                name='Big-G Stealth'
                active={activeItem2 === 'Big-G Stealth'}
                onClick={this.handleItemClick2}
                />
                 <Menu.Item
                name='Web Scraping'
                active={activeItem2 === 'Web Scraping'}
                onClick={this.handleItemClick2}
                />
                                 <Menu.Item
                name='Online Privacy'
                active={activeItem2 === 'Online Privacy'}
                onClick={this.handleItemClick2}
                />
             </Menu>
            <div className="home_features__block">
             <div className="ui tab home_features__tab active">
                {activeItem2 === 'SEO Agencies & keyword Ranking Software' ? this.renderSEO() : 
                activeItem2 === 'Geo- surfing' ? this.renderGeoUse() :
                activeItem2 === 'Big-G Stealth' ? this.renderBigG() :
                activeItem2 === 'Web Scraping' ? this.renderHighSpeed() :
                activeItem2 === 'Online Privacy' ? this.renderPrivacy():
                null}
             </div> 
            </div>
        </div>
    </div>
</section>
{/* <!--end home features-->
<!--begin home_love--> */}
<section className="home_love">
    <div className="container">
        <div className="home_love__title">
            <h2 className="title">People love Limeproxies</h2>
        </div>
        <div className="home_love__wrapper home_love_wrap">
            {/* <!--begin item--> */}
            <div className="home_love_wrap__item home_love_item">
                <div className="home_love_item__top home_love_top">
                    <div className="home_love_top__avatar">
                        <img src={require("../images/avatar_1.jpg")} alt="Avatar"/>
                    </div>
                    <div className="home_love_top__info">
                        <h3 className="title">Anime Kages</h3>
                        <ul>
                            <li><img src={Icon_star} alt="Icon"/></li>
                            <li><img src={Icon_star} alt="Icon"/></li>
                            <li><img src={Icon_star} alt="Icon"/></li>
                            <li><img src={Icon_star}  alt="Icon"/></li>
                            <li><img src={Icon_star} alt="Icon"/></li>
                        </ul>
                    </div>
                </div>
                <div className="home_love_item__title">
                    <h3 className="title">Fast and good communication</h3>
                </div>
                <div className="home_love_item__text">
                    <p>Fast and good communication. Any problems  or questions will be answered quickly. They are very helpful and I can recommend them.</p>
                </div>
                <div className="home_love_item__logo">
                    <img src={require("../images/logo_rev.svg")} alt="Logo"/>
                </div>
            </div>
            {/* <!--end item-->
            <!--begin item--> */}
            <div className="home_love_wrap__item home_love_item">
                <div className="home_love_item__top home_love_top">
                    <div className="home_love_top__avatar">
                        <img src={require("../images/avatar_1.jpg")} alt="Avatar"/>
                    </div>
                    <div className="home_love_top__info">
                        <h3 className="title">Christopher Avery, Austin, TX</h3>
                        <ul>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                        </ul>
                    </div>
                </div>
                <div className="home_love_item__title">
                    <h3 className="title">Great support from LimeProxies</h3>
                </div>
                <div className="home_love_item__text">
                    <p>I'm a novice at using a Proxy service. LimeProxies has been fabulous at getting me up and running. Excellent support.</p>
                </div>
                <div className="home_love_item__logo">
                    <img src={require("../images/logo_rev.svg")} alt="Logo"/>
                </div>
            </div>
            {/* <!--end item-->
            <!--begin item--> */}
            <div className="home_love_wrap__item home_love_item">
                <div className="home_love_item__top home_love_top">
                    <div className="home_love_top__avatar">
                        <img src={require("../images/avatar_1.jpg")} alt="Avatar"/>
                    </div>
                    <div className="home_love_top__info">
                        <h3 className="title">Julian Rost</h3>
                        <ul>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon"/></li>
                        </ul>
                    </div>
                </div>
                <div className="home_love_item__title">
                    <h3 className="title">Fast and good communication</h3>
                </div>
                <div className="home_love_item__text">
                    <p>Fast and good communication. Any problems  or questions will be answered quickly. They are very helpful and I can recommend them.</p>
                </div>
                <div className="home_love_item__logo">
                    <img src={require("../images/logo_rev.svg")} alt="Logo"/>
                </div>
            </div>
            {/* <!--end item--> */}
        </div>
    </div>
</section>
{/* <!--end home_love-->
<!--begin started--> */}
<section className="home_started">
    <div className="container">
        <div className="home_started__wrapper home_started_wrap">
            <div className="home_started_wrap__text">
                <h3 className="title">Get Started today for free</h3>
                <p>No credit card required</p>
            </div>
            <div className="home_started_wrap__form">
                <form action="">
                    <input type="email" placeholder="Enter email"/>
                    <input type="submit" value="Get Started"/>
                </form>
            </div>
        </div>
    </div>
</section>
{/* <!--end started--> */}
      </div>
      </SbEditable>
    );

  }
}