# Urban Risk Map Cards
Urban Risk Map reporting cards web-app.

## Development server

Run `npm run start` (for default deployment jp) or `dep=cc npm run pre-build-tasks && ng serve` (for deployment with code cc) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
### Adding a new deployment
1. Run `export dep='xx'` & `npm run add-deployment` to create the scaffolding for a new deployment.
2. The following files will be added in the specified folders:
- `src/environments/xx`
  - environment.json
  - environment.prod.json
- `deployments/xx/`
  - index.html
  - `/assets`
    - `/icons`
    - `/images`
    - `/locales`
      - en.json
    - `/logos`
  - `/resources`
3. `angular.json` will be modified to add deployment configurations.
4. `package.json` will be modified to add build scripts.
4. The default deck that will be served is `flood`.
5. To test the deployment locally, change the deployment variable in `package.json` > `scripts.start`, run `npm start`, and open `http://localhost:4200/test123/flood` in the browser.

### Adding a new deck of cards
1. Run `export deck=sample` & `npm run add-deck` to create a route to a new cards deck.
2. This will add a new folder, `sample` in `src/app/routes/decks`, including the following:
- sample-routing.module.ts
- sample.component.html
- sample.component.scss
- sample.component.spec.ts
- sample.component.ts
- sample.module.ts
3. Add a new object to the list of "decks" in `src/environments/$dep/environment.json` for the respective deployments, with the following structure:
```json
{
  "decks": [
    "name": "sample",
    "cards": [
      "location"
    ]
  ]
}
```
4. To test the deck locally, change the deployment variable in `package.json` > `scripts.start` to $dep for which the environment file was modified in Step 3, run `npm start`, and open `http://localhost:4200/test123/sample`.

### Adding new cards
1. Run `export card=card_name` & `npm run add-card` to create a route to a new card.
2. Add `card_name` to the list of 'cards' in `src/environments/$dep/environment.json` for the desired deck object, eg.
```json
{
  "decks": [
    "name": "flood",
    "cards": [
      "card_name"
    ]
  ]
}
```
3. To test the card locally, change the deployment variable in `package.json` > `scripts.start` to $dep for which the environment file was modified in Step 2, run `npm start`, and open `http://localhost:4200/test123/flood/card_name`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



1. Location - bug: pin location not showing immediately

~~2. Location - Search bar height set to 48~~

~~3. Flood depth - decrease opacity of water to 70% - 80% of what it is now.~~

4. ⁠Flood depth - main image  is currently blurry

5. ⁠Flood depth - main image - new height to be sent by Hafsa 

~~6. ⁠Flood depth - bug: shows in cm before changing to ft in~~

~~7. ⁠Flood depth - dots to be added below gender icons~~

~~8. ⁠Photo - make it optional. Enable next button from the beginning.~~

~~9. ⁠Photo - fix font size of button. ‘Upload image’~~

10. ⁠Photo - bug. When a second photo is replaced by new photo it still shows the previous one in edit 

11. ⁠Photo - being compressed in view. Focus on center point in the viewing square and let the rest not show. So the scale is not off. 

12. Photo - Allow uploading of the entire image not just square. This is done right alright. Don’t change. Remove the cropping out feature, change to focusing in. 

13. ⁠Photo - Edit option needs to be reworked to match figma 

~~14. ⁠Description - ‘enter description here’ a. Fix font color b. Fix font size c. Fix font itself~~

~~15. ⁠Description - remove ‘(optional)’ from copy next to ‘Add description’~~

~~16. ⁠Description - remove ‘a’ from between ‘Add’ and ‘description’~~

~~17. ⁠Description - bug: the character count is a countdown. Make it count up.~~

18. ⁠Desktop Location - Instruction Copy. We want to keep it different. Should read “Click and drag to your pin location” instead of “Move…” 

19. ⁠Overall - Buttons. Both next and back button backgrounds should remain white in full opacity. Just the words should be lesser in opacity 

20. ⁠Overall - Buttons - Next and Back button are not turning green on phone. Works fine on desktop 

21. ⁠Checklist - work to start after Hafsa notifies that screen is ready

22. ⁠Summary - work on this screen once Hafsa has made changes and they have been discussed. 