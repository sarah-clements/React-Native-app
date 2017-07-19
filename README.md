## How to Run the App

* Download this repo
* Install [Node](https://nodejs.org/en/download/)
* Install [Expo](https://expo.io/) on your mobile device
* In the terminal, navigate to this folder and type `npm install` to install node modules
* After the dependencies are installed, type `npm start` 
* On your mobile, open expo and scan the code shown in your terminal window and the app should initialize/start
 
## Thoughts on this Project

Before coding, I created a basic outline of which redux tools I needed to use. A few roadblocks I hit along the way included a dependency related error for a package I installed, and there appeared to be many different ways to use redux; it was challenging to decide on what was most appropriate for this project. I tried to keep it simple and in some places used a manual, bare-bones approach to save time. For example, instead of using react Navigator I used a simple switch. I also used a single reducer instead of a combined reducer. Some thoughts about the work I've done and what I would iterate on and improve would be to try the Navigator, use SectionList or FlatList for the item list (to utilize the pull refresh and scrolling features), loading and error handling and combining shared styles into a central stylesheet.
