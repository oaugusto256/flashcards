# readable

:flower_playing_cards: "Flashcards" is the third React project made for the React Udacity Nanodegree program.

![alt text](https://github.com/tavioalves/flashcards/blob/master/images/flashcards.png)

## Tested with

The application was tested using a iOS(iPhone 6S) device, unfortunately I don't have a Android device to test the app with it.

## How to use and test

*PS: It's necessary that you have a mobile device that has Expo app, and a computer that can run the Expo CLI.*


Clone the repository to a folder of your choice, redirect to the cloned repository and execute the following command:

```javascript
yarn install
```

After the installation of the libs and dependencies, start the project executing the command:

```javascript
yarn start
```

Use the mobile device camera to scan the QRCode and run the project.

## Organization

The project is organized in the following way:

- src
  - actions
  - components
  - reducers
  - screens
  - types
- App.js

## Libs

Below we can see all the libs used in the project:

|       Name       |                                                                                         Function                                                                                         |
| :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       expo       |                           A free and open source toolchain built around React Native to help you build native iOS and Android apps using JavaScript and React.                           |
|      redux       |                         Helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.                         |
|   redux-thunk    | Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests. |
|   react-redux    |                                                                                Binding of React and Redux                                                                                |
| react-navigation |                                                                                 React native navigation                                                                                  |

## License

MIT © 2018

## Build tool

This project was created using the [Expo](https://expo.io/).
