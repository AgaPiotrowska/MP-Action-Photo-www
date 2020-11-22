# MP ActionPhoto

This is a React powered, 100% serverless professional photographer website with built-in login page and API for the owner to upload photos and blog posts. Frontend stack is: React, React-Router, Redux, SASS and some external libraries (photo gallery, image compressor, text editor). 
AWS architecutre: react application is stored in S3 and served behind CloudFront (SSL/TLS enabled). Route53 is used as DNS. Albums and photos information are stored in DynamoDB. and actual photos files are stored in S3. Backend server is working on API Gateway connected to Lamba functions. Authentication service for Admin Panel is AWS Cognito (JWT).  

![mpaction1](https://user-images.githubusercontent.com/67587804/99002964-9c460780-253d-11eb-9323-8f624d9aebb8.png)

![webapp](https://user-images.githubusercontent.com/67587804/99846521-c2d7f400-2b76-11eb-83b0-6fa3b62747a6.png)

## Motivation

I started this project to practise the use of Redux as well as to implement and fetch data from created API. 

## Content

Website consists of 6 sections. 

**Main page** consists of carousel of best photos of the photographer as well as contact details and links to follow on social media. 

Getting into navigation bar, we can select **Portfolio Page** where we have examples of different categories of photos - clicking on one of them will take us to the gallery page of certain album. 

The next section called **Migawki** is a blog part of the webpage, where viewers can read interesting travel stories posted with photos of the author.

**Video** section presents video portfolio of the author. You can play video directly from the page. 

In **About Me** section you will find a short story taking about author's motivations as well as contact details and contact form. 

Section **Realizations** contains the list of author's last commercial projects. Each project has its own gallery with photos. 

The last subpage **Login** is only accessed by the photographer - admin can easily add or remove pictures in a chosen portfolio album, as well as add blog posts. The author has a full control on what's published on the webpage.

![logindetails](https://user-images.githubusercontent.com/67587804/99078222-52e9cc80-25be-11eb-8066-63972ced365f.png)

See live at: https://www.mpactionphoto.pl/

## Built with

- [Create React App](https://github.com/facebook/create-react-app) - JavaScript Framework
- [React-Router](https://github.com/ReactTraining/react-router) - Declarative routing for React
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
- [Sass](https://github.com/sass/sass) - An extension of CSS
- [React Photo Gallery](https://www.npmjs.com/package/react-photo-gallery) - Responsive, accessible, composable, and customizable image gallery component
- [React Snapshot](https://www.npmjs.com/package/react-snapshot) - A zero-configuration static pre-renderer for React apps
- [React Slick](https://www.npmjs.com/package/react-slick) - Carousel component built with React
- [Amazon Cognito Identity JS](https://www.npmjs.com/package/amazon-cognito-identity-js) - Amazon Cognito Identity Provider JavaScript 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
