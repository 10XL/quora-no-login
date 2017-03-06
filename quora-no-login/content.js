if (document.getElementsByClassName('signup_wall_content')[0]) {
  chrome.runtime.sendMessage({
    reload: true
  });
}

window.addEventListener('click', function(event) {
  let questionLink = cardLink(event.target) || findLink(event.path);
  console.log('event is: ', event);
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

function cardLink(card) {
  if (card.className === 'feed_item_overlay')
    return card.attributes.href.value;
  if (card.className === 'read_more_link')
    return card.parentNode.attributes.href.value;
}