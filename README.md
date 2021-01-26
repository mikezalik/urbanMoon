# urbanMoon ☕️

[urbanMoon](https://brave-booth-15c32b.netlify.app/) is a front-end react SPA designed to provide quick, local weather updates on the go.

## Usage 👩‍💻

In order to get started, clone this repo. Enter the commands below in your terminal:

```bash
git clone https://github.com/mikezalik/urbanMoon.git
cd urbanMoon
npm install
```

- **Development**: to run the app locally run `npm run build`, then `npm run dev`. Open browser to 'localhost:1234'.
- **Build**: to start the build process run `npm run build`.

## Project Summary 👍

urbanMoon is a single page application I designed to quickly retrieve location based weather updates with user permission.

## Screenshot 📸

| <img alt="Landing Page" src="design/Screen Shot 2021-01-26 at 11.17.24 AM.png" width="500"> |
| Landing Page |

## Design Process 📐

In the design phase of this application, I started by thinking about how I could deliver information in a straightforward, no frills user interface. I opted to use bootstrap to help with consistency in design and used dribbble for limited inspiration (I am not a designer...). I opted to use a geolocation based process to help streamline the retrieval of relevant and local weather information. I decided to use the openweathermap api as their api provides a comprehensive list of information that may be retrieved based on latitude and longitude.

## Development Process 🛠

I started the development process with an HTML first approach. This promotes progressive enhancement(despite this being a small app), and allowed me to focus on the user experience. I had intially coded this app in jQuery and thought it would be great practice to code this in vanilla JavaScript. Performance improved and I liked the idea of seeing what was going on under the hood. I then thought to incorporate a framework and started with vue, but later migrated this to react. React is great because of the context provided and the ability to use JavaScript in the react convention. I decided not to bootstrap with create react app and used parcel to bundle everything for the sake of simplicity, convention and speed.

### Accessibility 🌏

Using a progressive enhancement strategy with an HTML first approach and within the constraints of web standards offered an implicit level of accessibility:

- WCAG 2.0 Level AA Compliance
- VoiceOver Rotor: the Rotor is a commonly used feature that allows for more efficient web browsing by listing common elements like headings, links, and images. To maximize this feature I ensured that the page had proper heading structure.
- Details and Summary Elements: use of the details and summary elements provide interactivity without the use of JavaScript to hide content.
- Emoji: they are accessible to screen readers.

## Tech Used 💻

### Front-End

- HTML5
- CSS3
- React

### Deployment

- [Parcel](https://parceljs.org/) - bundler
- [Netlify](https://netlify.com) - PaaS host
- [ESLint](https://eslint.org/) - linting utility
- [Prettier](https://prettier.io/) - code formatter

## Future Improvements 🚀

I would like to build out a week based forecast feature and allow for users to search the forecast of other areas.
