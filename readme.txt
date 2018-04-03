Setting and Building the project
Extract the Zip
1. Change directory - cd terraceapp/
2. Install dependencies - "yarn install"
3. "react-native run-android" to run on android device and "react-native run-ios"

Project src folder struture
src/
  components/ - To keep all the resuable components
  screens/ - folder to keep codes of the screens
  img/ - stores all the image resources
  R.js - All the resources are indexed here

Using Flux for screen routing as it is a simple and powerful API to do so.
antd-mobile components are used to design the elements of the app.
LinearGradient is a library to give gradient effect to the view in the app.

Populating /R.js file with images and colors

/components/ProfileCard
Starting with creating and designing the ProfileCard component to be used as horizontal scroll item in home screen
  Covering the card with TouchableOpacity to give a clicking effect. Use of Dimensions are done to properly place the
  elements wherever needed.

rn-sliding-up-panel is used to create slide up effect to views in homescreen.

/screens/HomeScreen
This is the where the code of home screen goes.
First, the image avatar and "Nearby" text goes at flex-start of the screen with adaptive margin between them.
Second, creating a scrollview with horizontal scrolling and putting some ProfileCard into them.
  Assigning onPress prop to the cards to slide up the details panel.

/screens/Details
Then, designing the details slide up view with message and send icons in either sides of profile pic and getting the images
and colors from R.

The last screen , message screen, containing a FlatList which is resource efficient. ListItem of react-native-elements is used
to create items of the list. A "Nearby" text with larger font and then a horizontal scrollview to show all nearby people's
profile pic. Finally, setting a PanResponder to the views inside the SlidingUpPanel to resolve the conflict between
vertical slide of panel and horizontal scroll of the ScrollView.

Codes of home screen are not modularised.
