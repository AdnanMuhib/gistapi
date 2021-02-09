# React Gists App
This Gists App is based on the forked copy of [this project](https://github.com/dubizzle-onboarding/gistapi).
It uses Github's [Octokit REST API](https://octokit.github.io/rest.js/v18/)

## Features
- Get and display a list of 30 most recent public gists on Github
- Display meta data about the gist which includes:
  - Gist Author
  - Author Avatar
  - Description of gist
  - Files in the gist
  - Number of comments
  - Timestamps for upserts
  - Hyperlinks to the gist on Github(open in new tab)
- Allow to search gists by Github username
  - Search only when Enter key is pressed
  - Display a list of most recent gists when search field is clear with no username
- Params type checking using ``PropTypes``
- Display of error Message in case of no gists found for the searched user
- Display error message in case of some error in API
- Clean UI similar to [this](https://raw.githubusercontent.com/dubizzle-onboarding/gistapi/main/design_inspiration.png).
- Optimised rendering
- Code comments

## Future Enhancements
The Gists App can be further improved by:

- Using React Context API or Redux for the Global State Management(currently props to pass data between hierarchy of components)
- Using pagination of the API to see more gists
- Adding Filters for the gists retrieval criteria
- Adding Internal Pages and Routing to see the detailed content of the gists within the App
- Working on responsive for smaller devices
- Writing unit-tests for components

## Looking forward to hear the Feedback

The current implentation is a quick one, just keeping in mind the quick solution based on the required functionality, there are still lots of areas that can be improved by putting some more time and effort. I am looking forward for your honest review and feedback.

Sincerely:

[Adnan](https://github.com/AdnanMuhib)

Linkedin: [Connect With Me](https://linkedin.com/in/adnanmuhib)
