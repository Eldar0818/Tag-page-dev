const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget); // for select all div dections when them clicked.......
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active'); // for remove last clicked section......
        });
        tabs.forEach(tab => {
            tab.classList.remove('active'); // for focus on list items
        });
        tab.classList.add('active');
        target.classList.add('active');
    })
});