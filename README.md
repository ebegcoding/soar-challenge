# About

Two repos for this challenge:

- [web application](https://github.com/ebegcoding/soar-challenge)
- [json server](https://github.com/ebegcoding/soar-json-server)

Vercel live:

- [demo](https://soar-challenge-five.vercel.app/)

# Setup locally

Very easy to setup locally. Simply follow below steps:

1. Create `.env.local` in root dir and copy `.env.local.template` contents to the created file.
2. run `pnpm install` to install dependencies
3. run `pnpm dev` to run the project locally
4. enjoy

# Assumptions

1. This web app uses json server for a more realistic feeling of an interactive web app. Json server is deployed in vercel, the db will reset everytime there is a new deployment to [json server repo](https://github.com/ebegcoding/soar-json-server)
2. Because I implemented json server, web app is interactive, this means you can update profile and avatar, and the changes will be reflected in the form or avatar in the header. You can create a new transaction from quick transfer card, which will update the transactions list and charts.
3. Because json server is not implemented to serve static files, we save avatar as a blob, which means it won't show anymore once the page is reloaded.
4. You can run the app with local json server, if you clone [json server repo](https://github.com/ebegcoding/soar-json-server) and update `VITE_BACKEND_URL` env var. However, it works just fine with the json server deployed in vercel.
5. I used `@tabler/icons-react` for icons in this web app, just for speed and time reasons. However, `vite-plugin-svgr` plugin is installed and setup, so it is just fine and supports to use inline svg imported as `ReactComponent`, if I would have imported assets from figma.
6. No components or design system lib was used intentionally, I rather created everything myself, just to expose css, accessibility and development skills.
7. No util or hooks lib were used for the same reason as above.
8. Lists are paginated in the server and also virtualized in the frontend for best performance.
9. Intentionally did not put too much effort into customizing charts ui to match figma.
