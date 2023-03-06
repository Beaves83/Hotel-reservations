# Hotel Booking Web Application

## Description

This project is a small hotel booking web application that allows users to book hotels for dates of their choice. 

The project has the following functionalities:

- Check-in and check-out dates are today and tomorrow.
- When clicking on the "Modify" button, the "Summary" section information is updated.
- When selecting one of the 3 hotel options, the "Summary" section information is updated.
- When clicking on the "Save" button, the information must is saved locally. This means that when refreshing the browser, the data are retained.
- When `promo_code` parameter is within the URL, a discount is applied on the final price. E.g: `dummyurl.com?promo_code=10` applies a 10% discount on the Summary section

## Technologies Used

The following technologies were used in the development of this project:

- Vue 3 composition API (script setup): a JavaScript framework for building user interfaces.
- HTML and CSS: for the structure and styling of the web application.
- Tailwind CSS was used as a utility-first CSS framework.
- TypeScript: for the logic and interactivity of the web application.
- Vitest with Testing Library: for testing the web application.

## TODO
- The web application optimizes for mobile devices 
- 


## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn run dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn run build
```