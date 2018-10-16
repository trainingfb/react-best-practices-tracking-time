# REACT BEST PRACTICES - TRACKING TIME SOURCE CODE

## RUN PROJECT

1) Run the client:

```
npm run start
```

2) Run mock server
```
npm run server
```

## BRANCHES

This project contains three branches:

* 'master': React only with stateful parent component
* 'composition': state handled by an Higher Order Component
* 'redux': demo with Redux

---

## REACT BEST PRACTICES: summary

* Follow naming conventions and best practices
    * Folders: kebab-case
    * Components: PascalCase
    * Extensions: .jsx for React files, .js for ES6 modules
    * Close Every Element <br />
* keep it simple. LIFT
* Organize your apps in components
* Keep your components small
* Stateful containers and stateless UI components
* Separate your business logic from UI and interaction logic
* Write functional components
* Increase performance with Pure Components and shouldComponentUpdate()
* Check your properties with PropTypes validation
* JSX is not your enemy :)
* Bind functions in the constructor methods (ok we should but I don't like this too much : )

* Use an immutable state
* Use a state manager, such as Redux or Mobx State Tree
* React and Redux dev tools
* Code Splitting and Lazy Loading for your routes (i.e. React Loadable)
* Use React pattern such as HoC (Higher ORder Components) and render props
* Test your Code
* Always check your bundle size
* Avoid Refs when possible
* CSS: inline, styled or external CSS? Use what you prefer : )

### NOTES:

* remember that `setState` is asynchronous


### GOTCHAS
* Add index.js files to identify public interfaces
* use destructuring. Increase readability


### PROJECT ORGANIZATION

* organize your files by feature. Avoid organization by functions
* Folder names inspired by Angular best practices
* Use Ducks File Structure
    * [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
    * [Scaling your Redux App with ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
    * [The Ducks File Structure for Redux](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c)

WRONG:

* 📁 components
    * 📄 Card.jsx
    * 📄 Catalog.jsx
    * 📄 NavBar.jsx
    * 📄 Users.jsx
* 📁 services
* 📁 containers
* 📁 actions
* 📁 reducers


GOOD:

* 📁 core
    * 📁 components
        * 📄 NavBar.jsx
    * 📁 services
        * 📄 app.settings.js
* 📁 features
    * 📁 users
        * 📁 actions
        * 📁 components
        * 📁 containers
        * 📁 reducers
        * 📁 selectors
    * 📁 catalog
        * 📁 actions
        * 📁 components
        * 📁 containers
        * 📁 reducers
        * 📁 selectors
* 📁 shared
    * 📁 components
    * 📁 services

