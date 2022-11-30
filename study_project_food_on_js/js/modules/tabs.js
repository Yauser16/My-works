function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    /* // TABS  */   
    const tabs = document.querySelectorAll(tabsSelector),
          tabscontent = document.querySelectorAll(tabsContentSelector),
          tabsparent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabscontent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabscontent[i].classList.add('show', 'fade');
        tabscontent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsparent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);   
                    }
                });
        }
    });
}

export default tabs;