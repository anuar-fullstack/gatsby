import React, { Component } from "react"
import SbEditable from 'storyblok-react'
import { Dropdown } from 'semantic-ui-react'


const friendOptions = [
  {  key: 1,
   text: 'First'
  
  },
    {
    key: 2,
   text: 'Second'
    
  }
]

export default class Contact extends Component {
  render() {
const friendOptions = [
  {  key: 1,
   text: 'First'
  
  },
    {
    key: 2,
   text: 'Second'
    
  }
]
              const contactprops = this.props.blok
    return (
         <SbEditable content={contactprops}>
        <div>
         {/* style={backgroundImage: url('img/img_contacts_header.jpg')} */}
<section className="contacts_header">
    <div className="container">
        <div className="contacts_header__title">
            <h3 className="title">
                How Can we Help?
            </h3>
        </div>


        <div className="ui fluid selection dropdown"> 
         <Dropdown placeholder='Choose an option...' key={friendOptions.key} fluid selection options={friendOptions} />
 
       
            
        </div>
    </div>
</section>


<section className="contacts_touch">
    <div className="container">
        <div className="contacts_touch__title">
            <h3 className="title">Lets get in touch...</h3>
        </div>
        <div className="contacts_touch__text">
            <p> with the right people at Limeproxies. We’re here to help!</p>
        </div>
        <div className="contacts_touch__wrapper contacts_touch_wrap">
        
            <div className="contacts_touch_wrap__item contacts_touch_item">
                <div className="contacts_touch_item__icon">
                    <img src={require("../images/icon_contacts_phone.svg")} alt="Icon"/>
                </div>
                <div className="contacts_touch_item__title">
                    <h3 className="title">Sales</h3>
                </div>
                <div className="contacts_touch_item__text">
                    <p>Learn how product analytics can help you.</p>
                </div>
                <div className="contacts_touch_item__btn">
                    <a href="#/">Contact Sales</a>
                </div>
            </div> 

            <div className="contacts_touch_wrap__item contacts_touch_item">
                <div className="contacts_touch_item__icon">
                    <img src={require("../images/icon_contacts_message.svg")} alt="Icon"/>
                </div>
                <div className="contacts_touch_item__title">
                    <h3 className="title">Help &amp; Support</h3>
                </div>
                <div className="contacts_touch_item__text">
                    <p>Get help with your account or technical questions</p>
                </div>
                <div className="contacts_touch_item__btn">
                    <a href="#/">Visit the help centre</a>
                </div>
            </div>
  
            <div className="contacts_touch_wrap__item contacts_touch_item">
                <div className="contacts_touch_item__icon">
                    <img src={require("../images/icon_contacts_telegram.svg")} alt="Icon"/>
                </div>
                <div className="contacts_touch_item__title">
                    <h3 className="title">Generel Inquiries</h3>
                </div>
                <div className="contacts_touch_item__text">
                    <p>Have a question about something else?</p>
                </div>
                <div className="contacts_touch_item__btn">
                    <a href="#/">Contact us</a>
                </div>
            </div>
   
        </div>
    </div>
</section>

<section className="contacts_find">
    <div className="container">
        <div className="contacts_find__title">
            <h2 className="title">Where you can find us</h2>
        </div>
    </div>
    <div className="contacts_find__wrapper contacts_find_wrap">
        <div className="container">
            <div className="contacts_find_wrap__img">
                <img src={require("../images/img_contacts_find.jpg")} alt="Image"/>
            </div>
            <div className="contacts_find_wrap__text">
                <h3 className="title">Headquaters</h3>
                <ul> 
                    <li>
                        <img src={require("../images/icon_contacts_place.svg")} alt="Icon"/>
                        <p>PurpleRain Technologies Inc
                            340 S Lemon Ave #9836
                            Walnut, CA 91789, United States</p>
                    </li>
                    <li>
                        <img src={require("../images/icon_contacts_message.svg")} alt="Icon"/>
                        <a href="mailto:info@purple-rain.io">info@purple-rain.io</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section className="contacts_else">
    <div className="container">
        <div className="contacts_else__title">
            <h2 className="title">Looking for something else?</h2>
        </div>
        <div className="contacts_else__wrapper contacts_else_wrap">
   
            <div className="contacts_else_wrap__item contacts_else_item">
                <h3 className="title">Custome Proxies</h3>
                <p>Learn about our Custome proxy solution and on demant network</p>
                <a href="#/">Learn More</a>
            </div>

            <div className="contacts_else_wrap__item contacts_else_item">
                <h3 className="title">Careers</h3>
                <p>See what it’s like to work at Amplitude and view our current openings.</p>
                <a href="#/">Learn More</a>
            </div>
 
        </div>
    </div>
</section>
 
<section className="home_started">
    <div className="container">
        <div className="home_started__wrapper home_started_wrap">
            <div className="home_started_wrap__text">
                <h3 className="title">Make your web surfing happier and easy today</h3>
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

</div>
 </SbEditable>
    );
  }
}