# Expo-Universal lib
expo universal libs component (support web &amp; mobile)

#### Preview: https://expo-universal.vercel.app

# About

- Routing by expo router v2 from Expo SDK 49
- All component base on expo and nativewind (tailwind css)
  - Responsive UI Supported
  - You can make you own theme by edit config file `tailwind.config.js`
  - Specific ui each platform some component Ex. `DatePicker, MenuPicker, Pagination, Toast, etc...`
- This lib provide many ui component for easy to use `"one codebase run anywhere!"`
- This lib No need to install developer build!

# HOW TO
  - clone this repo
  - install package => `yarn install`
  - run => `yarn start` => select platform follow cli suggestion
    
  #### run on web
  ```javascript
  yarn start --web
  or
  yarn web
  ```

  #### run on ios
  ```javascript
  yarn start --ios
  or
  yarn ios
  ```

  #### run on android
  ```javascript
  yarn start --android
  or
  yarn android
  ```

# Component List (26)

  - Label
  - Button
  - Dropdown
  - Icon
  - Toggle
  - Input
  - LoadingSpinnerOverlay
  - Accordion
  - Layout
  - OutsidePressHandler
  - Skeleton
  - Lottie
  - Alert
  - MapPicker
  - ScrollTo
  - DatePicker
  - Toast
  - MenuPicker
  - ImagePicker
  - FilePicker
  - Pagination
  - ImageCarousel
  - ThaiAddressAutoCompletePicker
  - FullModal
  - CameraPicker
  - Table

# TODO

  - improve toast position
  - add TimePicker component
  - add Switch component
  - add PDF viewer component
  - add Export Excel & PDF component
  - add RichTextEditor component
  - add charts components
  - image resize before upload
  - validator with zod
  - postform when upload files with progress function + ui
  - form creator function with json + good performance
  - iap (free without any provider)
  - add example => some cool ecommerce-app!
  - make this project as npm package

# TODO Maybe

  - image cache (wait until expo-image support run app with expo-go)
  - analytic
  - crashlytic
  - google ads (admob)
  - S3 uploader
