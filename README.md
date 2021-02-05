# Marvel Search For A Hero

A list of Marvel characters is shown on startup.  The list can be refined by typing in your favourite characters name.  

Selecting a character will show a list of all the comics the character featured in.

Selecting Statistics tab at the bottom, will show statistics for selection of characters.

# Dependancies
This application was developed used EXPO.

The following additional packages were installed : 
- react-native-vector-icons
- react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
- react-navigation
- react-native-crypto-js
- react-native-md5
- navigation-tabs
- react-native-dropdown-picker
- react-native-chart-kit
- react-native-svg
- expo-linear-gradient

Marvel api keys are required.  This can be generated after account was created, on https://developer.marvel.com/.  Update 'src\api\marvelApi.js' public & private const with these keys.

The application should be ready to run!

# Known issues
- Loading indicator required when waiting for API to respond to request.
- Deleting a character from Statistics view is not implemented yet.
