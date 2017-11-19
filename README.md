# UdaciCards
A Project for Udacity React Nanodegree Program.

## Decribtion
In the App user can create Decks which contain cards. Each card contains a question and an answer. User can train with cards by selecting a deck from the decks view and then pressing start quiz. In the Quiz a user is presented with a Question and then user can click show answer button to check answer and inform the app whether user knew the answer or not. In the end of the quiz user sees how many of the cards he or she got correct. User also has ability to add new cards to decks.

NOTE: The App displays a notfication on the phone every day at 19:00 if user hasn't completed at least one quiz for the day.

## Platforms
This project has been tested on Android phone and Android emulator. Project has not been tested on IOS platform.

## Development notes
* The program has been implemented with react-native.
* The utils folder contains api file which is responssible for handling App's data in AsyncStorage.
* The components folder contains components of the app. Components are ordered in folders acording to features.
* In addition to pure components the components folder contains style folder which contains files with common stylesheets and also common folder which contains App's status bar, navigation and notification system.