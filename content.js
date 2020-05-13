const $board = document.getElementById('board');
const $lists = $board.querySelectorAll(':scope > .list-wrapper');
const listCount = $lists.length;

const scrollInfo = { inline: 'center' };
const scrollTo = $el => $el.scrollIntoView(scrollInfo);
const isEven = n => n % 2 === 0;

browser.runtime.onMessage.addListener(onMessageReceived);

function onMessageReceived(message) {
    if (message.position) return position[message.position]();
}

const position = {
    start() {
        scrollTo($lists[0]);
    },
    middle() {
        const $list = $lists[Math.floor(listCount / 2)];
        scrollTo(isEven(listCount) ? $list : $list.querySelector('.list-header-extras'));
    },
    end() {
        scrollTo($lists[listCount - 1]);
    },
};
