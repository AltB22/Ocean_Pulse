# The-Ocean-Pulse: Break Finder

## Table of Contents:

- [Description](#description)
- [Usage](#usage)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Mockup](#mockup)
- [Credits](#credits)
- [License](#license)

## Description

This project was the creation of a full stack website that utilizes specific technologies to render a workable and polished website that responds to a real world problem with a intuitive solution. The Website functionality allows a user to view several API's data on surfing locations thought the Bay Area and California. The website utilized MongoDb and GraphQL on the back end to create a in-house database. The program utilizes Mutations and Queries as well as Resolvers and TypeDefs to organize and connect the data from back end to front end. The front end is created using REACT and is run through the Apollo server The user created APIs as well as the Stormglass API both rendered for the user interface.

## Usage

As a User, I want to be able to view the most righteous surf spots on the "Best" Coast So that I can find the ultimate wave. I also want to let the World know about my sweet secret surf spot so that others can share those sick waves by posting my own surfing locations and having them put on the website.

## Acceptance Criteria

GIVEN a surf website that I'm able to find the best surf spots on the best coast<br>
WHEN I open the website<br>
THEN I am landed on the home page with the option to login or signup.<br>
WHEN I click the signup option<br>
THEN I am taken to the signup page and allowed to enter my information.<br>
WHEN i enter that information<br>
THEN i am taken to the login page where I can renter my information and sign up.<br>
When I am logged in<br>
THEN I can select the locations page and view the API of provided surf locations and its details.<br>
WHEN I click the "add location" button<br>
THEN I am taken to a page where I can create my own surf location with details<br>
WHEN I submit that location<br>
THEN the new location will be rendered onto the locations page with the rest of the data.<br>
WHEN I click the logout button<br>
THEN I will be logged out and will no longer be able to see the locations page.<br>

## Installation

Instillation is not required if the user is visiting the website through the Heroku Server.
<br> <https://young-temple-90764.herokuapp.com/#home> <br/>
A user would first need to initialize the package.json file by entering <b>npm instal</b> in the terminal. This will add the required modules for the functionality of the website.<br>
Next the user would need to enter the provided seeds into the databases. This is done by entering <b>npm run seed</b> in the terminal. This will fill the created databases with the seeded information and allow for the user to log in and see provided surf locations.<br>
Finally, the user will enter <b> npm run develop<b> to view the program on their local server.

## Usage

This project can be initiated by entering by first logging in with an email and password, or signing up with a name, email, and password and then logging in with the newly created login. Once a user is logged in, they can progress to the locations page and viewing the provided surfing spots. The user can then click the add location button and render the add location page. The user will then enter in the required information and submit it. The user will then see the new information rendered on the locations page. The user may also logout and end the session at any time by selecting the logout button.

## Contribution

## Testing

No testing was utilized for this project

## Mockup

![Alt text](./public/css/assets/Screen%20Shot%202023-02-19%20at%204.08.58%20PM.png)

## Credits

### Team Members:

- James Baxley | Github: [Kaneknah](https://github.com/Kaneknah)
- Vinícius Teixeira | [Vinni99](https://github.com/Vinni99)
- William Massie | [AltB22](https://github.com/AltB22)
- Beau Ben-Rhouma | Github: [BRhouma](https://github.com/BRhouma)

### Technologies utilized:

#### Front End

-Bootstrap 5.3<br>
-React<br>
-React<br>

#### Back End

-Node.js<br>
-Express.js<br>
-Sequelize<br>
-GraphQL<br>
-MongoDB<br>
-Apollo Server<br>

#### code creation

-Heroku<br>
-Insomnia<br>
-VS Code<br>
-MongoDB Compass

### GitHub Link: <https://github.com/AltB22/Ocean_Pulse>
### Heroku Link: <https://young-temple-90764.herokuapp.com/#home>

## License

N/A