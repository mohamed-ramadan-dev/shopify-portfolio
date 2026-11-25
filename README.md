# Mohamed Ramadan · Shopify portfolio

A static portfolio with a home page, developer profile, a Shopify backend and checkout section, and seven project pages. No dependency installation or build step is required.

## Preview locally

Open `index.html` in a browser. Alternatively, run `python3 -m http.server 8000` from this folder and open <http://localhost:8000>.

## Publish on GitHub Pages

1. [Create a GitHub repository](https://github.com/new) named `shopify-portfolio` and choose **Public**. A public repository makes the portfolio source visible.
2. Unzip the project. Upload the **contents** of the project folder into the root of the repository. `index.html`, `assets/`, and `projects/` should all be at the top level. You can also push the contents with Git or GitHub Desktop. If your uploader skips the empty, hidden `.nojekyll` file, create it from GitHub’s **Add file → Create new file** or use Git to add it. The current portfolio works without it.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select `main` and `/(root)`, then save.
4. Once the deployment succeeds, open **Settings → Pages** and copy the URL next to **Your site is live at**. With this repository name the URL takes the form `https://YOUR-USERNAME.github.io/shopify-portfolio/`.

[GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Update the portfolio

- Edit `index.html` for the intro, project cards, profile and skills.
- Edit the corresponding file in `projects/` for a case study.
- Edit `assets/styles.css` for layout, colors and typography.
- Update the storefront links and visual assets in both the card and the individual project page when replacing a project.
- Commit your edits to the publishing branch. GitHub Pages republishes at the same address.

The images are sourced from public storefront URLs and credited on the case study pages. If a storefront removes an image, the portfolio still shows its project copy and links. You can replace the URL with an approved local image in `assets/`.

The seven case studies describe contributions checked against the original theme repositories. Links point to the current public storefronts, which may have changed since the work was completed.

The introduction uses a local portrait and links to Mohamed’s LinkedIn. Each project page includes a keyboard-operable animated walkthrough. With JavaScript disabled, every step is visible. The animations honor reduced-motion settings.
