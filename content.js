if (document.getElementsByClassName('signup_wall_content')[0]) {
  chrome.runtime.sendMessage({
    reload: true
  });
}