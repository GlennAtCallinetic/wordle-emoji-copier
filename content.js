(function () {
  // Create a floating button to trigger copying the result
  const button = document.createElement("button");
  button.textContent = "Copy Wordle Emojis";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.zIndex = 10000;
  button.style.padding = "10px 20px";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  document.body.appendChild(button);

  // Function that extracts the Wordle result as emoji strings
  function getWordleResult() {
    // Select all rows by their role attribute.
    const rows = document.querySelectorAll('[role="group"]');
    const resultLines = [];

    rows.forEach((row) => {
      let emojis = "";
      // Within each row, select the tiles (they have a aria-roledescription="tile")
      const tiles = row.querySelectorAll('[aria-roledescription="tile"]');
      tiles.forEach((tile) => {
        const state = tile.getAttribute("data-state");
        switch (state) {
          case "absent":
            emojis += "⬜";
            break;
          case "present":
            emojis += "🟨";
            break;
          case "correct":
            emojis += "🟩";
            break;
          default:
            break;
        }
      });
      // Only add rows that have tile data (skip empty rows)
      if (emojis.length > 0) {
        resultLines.push(emojis);
      }
    });
    return resultLines.join("\n");
  }

  // Function to copy text to the clipboard
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      () => alert("Wordle result copied to clipboard!!\n" + text),
      (err) => console.error("Could not copy text: ", err)
    );
  }

  // Event listener for the button click
  button.addEventListener("click", function () {
    const result = getWordleResult();
    copyToClipboard(result);
  });
})();
