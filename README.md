
# rn-crypto-icons

![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android-green)
[![NPM Badge](https://img.shields.io/npm/v/rn-crypto-icons)](https://badge.fury.io/js/rn-crypto-icons)

React Native component that displays an icon for a given cryptocurrency symbol.

<p align="center" >
  <img
    src="https://github.com/iamlucnguyen/rn-crypto-icons/raw/master/assets/images/preview.png"
    alt="Preview"
  />
</p>

## Installation

1. Install [react-native-svg](https://github.com/react-native-svg/react-native-svg#installation) in the newest version. 

2.
  ```
  $ npm install rn-crypto-icons
  ```

  or

  ```
  $ yarn add rn-crypto-icons
  ```

### Android

Rebuild the app.

### iOS

Install the pod, then rebuild the app.

`npx pod-install`


## Usage

```js
import CryptocurrencyIcon from "rn-crypto-icons"

.........

const App = () => {
  return(
      <CryptocurrencyIcon name="btc" size={48} />
  )
}
```
