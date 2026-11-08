# Sothea website: Sanity setup

Sanity is where you edit the website's text and photos. The website reads from it every time it loads.
Until you finish these steps, the website shows its built-in content, so nothing breaks.

## 1. Check Node.js

Open a terminal and run:

```
node -v
```

You need version 22.12 or newer. If it's older, install the LTS version from https://nodejs.org

## 2. Create the Sanity project

1. Go to https://www.sanity.io/manage and sign in (a free account is fine).
2. Click **Create new project**, name it `Sothea Khmer Silver Handicrafts`.
3. When asked for a dataset, use `production` and keep it **Public**.
4. Copy the **Project ID** (a short code like `ab12cd34`).

## 3. Paste the Project ID in two files

- `studio/project.js`: replace `YOUR_PROJECT_ID`
- `website/config.js`: replace `YOUR_PROJECT_ID`

## 4. Install and import the current content

In a terminal, inside the `studio` folder:

```
npm install
npx sanity login
npm run import-content
```

This uploads all current text and photos (22 products, 6 categories, logo, sign) into Sanity.
Run `import-content` only once. Running it again replaces everything with the original content.

## 5. Let the website read from Sanity

Still in the `studio` folder, allow the addresses the website runs on:

```
npx sanity cors add http://127.0.0.1:5500 --no-credentials
npx sanity cors add http://localhost:5500 --no-credentials
```

Those two are for VS Code Live Server. When the site goes online, add its real address the same way, for example:

```
npx sanity cors add https://www.sotheasilver.com --no-credentials
```

## 6. Open the editor

On your computer:

```
npm run dev
```

Then open http://localhost:3333

To edit from anywhere, including a phone, put the editor online:

```
npm run deploy
```

Pick a name such as `sothea`. The editor will then be at https://sothea.sanity.studio

## Editing

- **Page text and photos**: the hero, craft section, សធ mark, location, address, phone, hours, map pin and links.
- **Products**: add, edit or remove pieces. The first photo is the one shown in the grid. "Order on the page" sets the order (smaller first).
- **Categories**: the filter buttons above the collection.

Every text field has an English box and a ខ្មែរ box. After editing, click **Publish**, then refresh the website.
Changes can take up to a minute to appear.

To let family members edit, invite them at https://www.sanity.io/manage under **Members**.

## If changes don't show

- Make sure you clicked **Publish**, not only saved a draft.
- Check the Project ID is the same in both files.
- Check the dataset is **Public** (sanity.io/manage, then API, then Datasets).
- Check the site's address was added with `sanity cors add`.
- Press Ctrl + F5 to reload without the cache.
