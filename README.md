# wireFrame
<p align="center">
  <img src="./public/image/WeatherApp.png" width="450"/>
</p>

<!-- https://wireframe.cc/6b7aCr -->
# Building Steps
```
[ ]   Create Search Bar "needs to be a container so it can talk to redux"
[ ]   Get API

```
# Goal for application
```
[x]   Setup react and redux
[ ]   Ajax through Redux
[ ]   Third Party line chart
[ ]   Weather API 
[ ]   Search Weather by loaction  
```
<a href="https://openweathermap.org/forecast5">Open Weather Map</a>

# npm "dependencies": 
```
    "axios": "^0.17.1",
    "jquery": "^3.3.1",
    "lodash": "^4.17.5",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.6",
    "react-scripts": "1.1.1",
    "redux": "^3.7.2",
    "redux-promise": "^0.5.3"
```
# reducer starter
```
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
```
# common issue
* how to hide api key
```
export default function api_key() {
    var api_key = "blafkjweofkhwkfhfojkhfr";
    return (
        {api_key}
);
}
```
* make sure to put this file in the gitignore 
