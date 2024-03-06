#Namaste React

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithms - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent hasshing
- Data Spliting
- Differential Bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused codes
- Diffrent dev and production bundles

//Food App

/\*\*

- header
- - logo
- - nav-items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
- - Img
- - Name of Restaurant, Star Ratings, Cuisines,Delivery ect.
- -
- Footer
- - CopyRight
- - Links
- - Address
- - Contact
-
- \*/

Two Types of Exports & Import

- - Default Export/Import

  - export default Component;
  - import Component from "path;

- - Named Export/Import
    - export cont Component;
    - import {Component} from "path";

- React Hooks
  - (Normal Js Utility Functions)
  - useState()
  - useEffect()

...

# 2 Types of Routing in the Web Apps

- Client side Routing => It is internal which is called inside the appLayout.
- Server side Routing  
  Making a Network Calls from the Server.

# Redux ToolKit

- Install @reduxjs/toolkit and react-redux
- Build Our Store
- Connect Our store to our app
- Slice(cartSlice)
- dispactAction
- Selector

# Types of Testing

- Unit Testing
- Integration Testing
- End to End Testing(e2e testing)

# Setting Up Testing in our App

- Install React Testing Library
- Installed Jest
- Installed Babel Dependencies(On jest website)
- Configure Babel
- Configure Parcel config file to disable default Babel Transpilation(On parcel website)
- Jest Configuration npx jest --inits
- Install JSDOM Library.
- Install @babel/preset-react -to make JSX Work in the test Cases.
- Include @babel/preset-react inside my babel configuration.
- Install @testing-library/jest-dom(toBeInTheComponent())
