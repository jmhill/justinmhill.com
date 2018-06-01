const React = require('react');
const NavBar = require('../components/NavBar');

// const mailChimpStyle = {
//   __html: `
//   #mc_embed_signup {
//     background: #fff;
//     clear: left;
//     font: 14px Helvetica, Arial, sans-serif;
//   }
//   `,
// };

const DefaultLayout = (props) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>Justin Hill</title>
        <meta name="description" content="A blog and portfolio site focusing on technology, web development, and education." />

        {/* -- Pure.css -- */}
        <link rel="stylesheet" href="/styles/pure-min.css" />
        <link rel="stylesheet" href="/styles/grids-responsive-min.css" />
        <link rel="stylesheet" href="/styles/blog.css" />
        <link rel="canonical" href="http://justinmhill.com/" />

        {/* -- Begin MailChimp Signup Form -- */}
        <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />

        {/* -- Font Awesome -- */}>
        <link rel="stylesheet" href="/styles/font-awesome/font-awesome-4.6.1/css/font-awesome.min.css" />
      </head>

      <body>
        <div className="layout pure-g">
          <NavBar />
          <div className="content pure-u-1 pure-u-md-3-4">
            {props.children}
          </div>
        </div>
      </body>

    </html>
  );
};

module.exports = DefaultLayout;
