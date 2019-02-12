import React from 'react';
//
import favicon from './images/favicon.png'
import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="ru">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <meta name="theme-color" content="#fff" />
          <title>Limeproxies</title>
          <link rel="shortcut icon" href={favicon} type="image/png"></link>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet"></link>
          {this.props.headComponents}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </head>
        <body>
          <Header />
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
       
          <Footer />
        </body>
      </html>
    );
  }
}