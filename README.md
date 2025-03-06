# Wordle Emoji Copier

A simple Chrome extension that copies your Wordle game results as emoji strings for sharing with your framily or colleagues.

## Features

- **Emoji Conversion:**  
  Converts your Wordle board into emojis:
  - 🟩 for correct letters (right letter in the right spot)
  - 🟨 for present letters (right letter in the wrong spot)
  - ⬜ for absent letters

- **Easy Sharing:**  
  With a single click, the extension copies the result (one row per line) to your clipboard.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer Mode**.
4. Click **Load Unpacked** and select the repository folder.
5. Visit [Wordle on the NYT](https://www.nytimes.com/games/wordle/) and play your game.
6. Click the **Copy Wordle Emojis** button that appears on the page to copy your result.

## File Structure

```
wordle-emoji-copier/
├── README.md           # Project overview and documentation
├── LICENSE             # MIT license
├── manifest.json       # Chrome extension manifest file
├── content.js          # Main content script for converting board tiles to emojis
├── icon.png            # Extension icon (see design proposal below)
└── .gitignore          # Git ignore rules
```

## Usage

After installing the extension and playing a game, click the floating **Copy Wordle Emojis** button to copy your emoji result to the clipboard. Paste it into your social media or messaging app to share your Wordle results.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Author

Created by Glenn Callaerts (https://www.callinetic.be).