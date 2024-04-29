# FFVGS Frontend

The App uses the [FFVGS-Backend](https://github.com/Pascal1414/ffvgs-backend).

## `.env`

Add the following variables to the .env file.

```
STRAPI_API_URL=<https://example.com>
CLOUDINARY_CLOUD_NAME=<CLOUDINARY_CLOUD_NAME>
```

## Documents

The documents are mapped from the 'public/documents' directory. Name the documents with a combination of Pascal and Kebab case, for example 'My-Document.pdf'.

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
