# ReactNative Starter

`react-native v0.61.5`\
`react-nativation v5.0.9`\
`react-redux v7.2.0`\
`styled-components v5.0.1`\
`why-did-you-render v4.0.5`

## Install

`yarn installproj`

## Start

### iOS

`yarn ios`

### Android

`yarn android`

## Renaming react native project

### iOS

1. Change bundle ID in Xcode
1. Change remaining folder and file names

Related issues [here](https://stackoverflow.com/questions/37908339/could-not-automatically-select-an-xcode-project)

### Android

1. Replace `reactnativestarter` string everywhere in `/android` folder\
`settings.gradle`\
`app/build.gradle`\
`app/BUCK`\
`app/src/main/AndroidManifest.xml`\
`app/src/main/java/com/reactnativestarter/MainActivity.java`\
`app/src/main/java/com/reactnativestarter/MainApplication.java`\
`app/src/main/res/values/strings.xml`\

1. Change `app/src/main/java/com/reactnativestarter` folder name

Related issues [here](https://github.com/facebook/react-native/issues/24616)
