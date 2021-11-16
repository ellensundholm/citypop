# CityPop

CityPop is a mobile application which allows you to:

1. Search for a country and get the cities in that country sorted on population.
    * Is a city clicked, the population for this is shown.
2. Search for a city and get the population of that city.

## Development using expo and Expo Client

To start developing on this project first clone this project and install the necessary dependencies:

* git clone https://github.com/ellensundholm/citypop.git
* cd citypop
* npm install

Expo client enables you to work with your code in your editor and see it the project in your phone using the Expo Client app.

To run this project with Expo Client: 

1. Download the "Expo Client" app from the Play Store or App Store.
2. Start your project with Expo
    * Install the CLI: npm i -g expo-cli
    * Start project: expo start
3. Open project in Expo Client app
    * Scan the QR code i the terminal to open the project in Expo Client

You can now start exploring, update and debug the app. 
Any changes to the code will update the project in Expo Client app.

---

## Build the application

To build a standalone version of the citypop app there are a number of ways you can to this described below.

If you are on a Windows computer, you have to have WLS enabled.

---

### **Android:**

You can either choose to build using APK or Android App Bundle. See commands below.

1. Build APK
    * expo build:android -t apk
2. Build Android App Bundle
    * expo build:ios

The first time creating a build will require the creation of a keystore. You will be asked to either upload a keystore or let expo create one for you.

If you let expo create the keystore for you, run below command to fecth the keystore:

* expo fetch:android:keystore

Backup this key in a safe location.

---

### **IOS:**

There are two alternatives when building to ios. If you want to test the application in a simulator use the 'Build for simulator' command and if you want to publish the app to a store you need to use the 'Build using archive' command.

To be able to build for ios, you need to have credentials. You can let expo create this credentials for you or use you Apple account information.

1. Build using archive
    * expo build:ios -t archive
2. Build for simulator
    * expo build:ios -t simulator

---

### **Retrieving the file**

When the build is finished you follow the url and downlaod the file.

---

### **Test the app on a device or simulator**

**Android - apk file**

1. Android Emulator: drag and drop the .apk file into the emulator
2. Android device: make sure you have Android Platform Tools and adb installed on your computer. Then run the command below:
    * adb install <name of .apk file>
    * This will result in the citypop application being installed on your Android device.

---

**iOS simulator**

1. Download the artifact and unzip the tar.gz file and then drag and drop it into your iOS simulator.











