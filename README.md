
# rn-cryptocurrency-icons

![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android-green)
[![NPM Badge](https://img.shields.io/npm/v/rn-cryptocurrency-icons)](https://badge.fury.io/js/rn-cryptocurrency-icons)

React Native component that displays an icon for a given cryptocurrency symbol.

<p align="center" >
  <img
    src="https://github.com/iamlucnguyen/rn-cryptocurrency-icons/raw/master/assets/images/preview.png"
    alt="Preview"
  />
</p>

## Installation

1. Install [react-native-svg](https://github.com/react-native-svg/react-native-svg#installation) in the newest version. 

2.
  ```
  $ npm install rn-cryptocurrency-icons
  ```

  or

  ```
  $ yarn add rn-cryptocurrency-icons
  ```

### Android

Rebuild the app.

### iOS

Install the pod, then rebuild the app.

`npx pod-install`


## Usage

```js
import CryptocurrencyIcon from "rn-cryptocurrency-icons"

.........

const App = () => {
  return(
      <CryptocurrencyIcon name="btc" size={48} />
  )
}
```
