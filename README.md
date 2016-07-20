# es6-css-modules

Simple boilerplate (work in progress, use at own risk)

# Features

- babel for es6 and jsx
- css module loader
- (responsive) image loaders
- json loader
- wallaby

# Development

npm run dev

Uses webpack to bundle 'src/index.js' to 'public' folder.
Watches files in 'src/**'.

# Production

npm run prod

Cleans public directory
production build to 'public' folder

# Testing

Test files are placed next to the source file being tested and 
end with *Spec.js

# Wallaby

Create Webstorm wallaby run config with 'wallaby-node.js' and 'wallaby-webpack.js'
Use 'wallaby-node.js' to run tests in node without webpack
Use 'wallaby-webpack.js' to run tests in browser


