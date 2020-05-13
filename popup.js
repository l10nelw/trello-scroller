document.body.addEventListener('click', onClick);

async function onClick(event) {
    const [tab] = await browser.tabs.query({ currentWindow: true, active: true });
    browser.tabs.sendMessage(tab.id, { position: event.target.id });
}
