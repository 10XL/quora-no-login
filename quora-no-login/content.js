if (document.getElementsByClassName('signup_wall_content')[0]) {
  chrome.runtime.sendMessage({
    reload: true
  });
}

window.addEventListener('click', function(event) {
  let questionLink = findLink(event.path);
  if (questionLink) {
    chrome.runtime.sendMessage({
      reload: true,
      url: questionLink
    });
  }
}, true);

function findLink(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i].className === 'question_link')
      return 'https://www.quora.com' + arr[i].attributes.href.value;
}