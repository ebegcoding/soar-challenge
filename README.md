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

# Assumptions

1. This web app uses json server for a more realistic feeling of an interactive web app. Json server is deployed in vercel, the db will reset everytime there is a new deployment to [json server repo](https://github.com/ebegcoding/soar-json-server)
2. You can run the app with local json server, if you clone [json server repo](https://github.com/ebegcoding/soar-json-server) and update `VITE_BACKEND_URL` env var. However, it works just fine with the json server deployed in vercel.
3. I used `@tabler/icons-react` for icons in this web app, just for speed and time reasons. However, `vite-plugin-svgr` plugin is installed and setup, so it is just fine and supports to use inline svg imported as `ReactComponent`, if I would have imported assets from figma.
4. No components or design system lib was used intentionally, I rather created everything myself, just to expose css, accessibility and development skills.
5. Intentionally did not put too much effort into customizing charts ui to match figma.
