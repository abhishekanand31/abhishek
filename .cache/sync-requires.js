const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/suraj/workspace/git/abhishek/.cache/dev-404-page.js"))),
  "component---src-templates-cara-tsx": hot(preferDefault(require("/home/suraj/workspace/git/abhishek/src/templates/cara.tsx")))
}

