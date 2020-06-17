function onClicked(tab) {
  const prefix = " » "
  const user = "eswat2"
  const url =
    "tweetbot://" +
    user +
    "/post?" +
    "text=" +
    encodeURIComponent(prefix) +
    encodeURIComponent(tab.title) +
    " -- " +
    encodeURIComponent(tab.url)

  window.open(url)
}

chrome.browserAction.onClicked.addListener(onClicked)

// vim:set ts=8 sts=2 sw=2 tw=0 et:
