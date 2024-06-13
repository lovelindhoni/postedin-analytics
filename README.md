# Postedin Analytics Chrome Extension

> [!NOTE]
> Analytics may appear broken due to LinkedIn's client-side routing. Please refresh the tab to re-render the analytics. Make sure you **signed into linkedin** and posts should should be opened in a seperate tab, (https://linkedin.com/posts/, https://linkedin.com/feed/update). 

## Overview

Postedin Analytics is a Chrome extension designed to provide detailed analytics for LinkedIn posts directly from your browser. With a simple click, users can view insightful metrics such as post details, reactions breakdown, and more, all presented in an easy-to-understand format.

## Features

- Fetches and displays the following metrics for any LinkedIn post:
  - User name
  - Description
  - Profile picture
  - Number of comments
  - Number of reposts
  - Mentions
  - Hashtags
- Presents reaction data in a pie chart format for visual analysis.

## How it works?

Postedin works by injecting content scripts into the host LinkedIn page, and querying and preprocessing data before passing it as a message back to the extension.

### Why was LinkedIn's API not used?

I didn't used the LinkedIn's API because it would result in rate limit exceedances, and, moreover, using the API would be very straightforward, like creating a web app, and I thought it would not reflect my abilities of creating a Chrome extension.

## Tech Stack

- **React.js**: Utilized for building the frontend UI of the Chrome extension.
- **TypeScript**: Used to add type definitions and improve code maintainability.
- **Tailwind CSS**: Used for styling components with utility-first CSS classes.
- **Chart.js**: Integrated to create interactive and visually appealing pie charts for displaying reaction data.

## Installation

To install the Postedin Analytics Chrome extension:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/lovelindhoni/postedin-analytics
```

2. Navigate to the project directory:

```bash
cd postedin-analytics
```

3. Install dependencies:

```bash
pnpm install
```

4. Build the project:

```bash
pnpm run build
```

5. Open Chrome and go to `chrome://extensions/`.

6. Enable Developer mode (toggle switch in the top-right corner).

7. Click on "Load unpacked" and select the `dist` folder from the project directory.

## Usage

1. Open LinkedIn in your chromium-based browser.

2. Navigate to any LinkedIn post you want to analyze and **wait until its completely loaded**.

3. Click on the Postedin Analytics extension icon in your browser toolbar.

4. If analytics looks broken or outdated, then please refresh the tab.

5. The extension will fetch and display analytics for the post, including user details, post description, reactions breakdown, comments, reposts, mentions, and hashtags.

## License

MIT
