# SelfieGram

  Built using React 15.6.2, Redux, Bootstrap, and React Router v4.
  Built upon Create React App for easy testing.

# Running

  Simply run 'yarn install' and 'yarn start'

# Future Improvements

  - Styling: I didn't spend too much time thinking about or implementing the styling and it could definitely use a facelift

  - Naming Conventions: Some actions and API calls should be renamed to eliminate confusion

  - Alerts: Success or error alerts could be helpful for some pages

  - Following Users: Had an issue with the API not updating who the user was and was not following in the is_followed field on a user so I was unable to add this feature

  - Profile Flashes: Occasional flash of the last profile data when viewing a new profile

  - Store/Reducer Management Cleanup: I tried to keep the reducers split to a page level but it could have been done cleaner or even more compressed/combined

  - Username to API Cheat: Given the small number of users, I just created a switch statement to map username to userId; obviously not scalable. I should have made a separate API call to check the handle vs. id

# Breakdown

src/actions
  - action types
  - actions and action creators for the entire app

src/api
  - interacting with API

src/common
  - stateless components that may be reused (ModalDetail, MiniProfile)
  - Header and Content for use in App container

src/components
  - mostly stateful containers for each page
  - some supporting stateless components broken down by page

src/reducers
  - reducers and a combiner for the entire app
  - mostly broken down into a by-page basis

src/store
  - combines multiple reducers and Thunk middleware

src/App.js
  - defines Header, Content page structure

src/index.js
  - entry point
  - connects the store and router to App
