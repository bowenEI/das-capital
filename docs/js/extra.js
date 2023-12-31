document.addEventListener('DOMContentLoaded', function () {
    // 添加点击事件监听器到abbr标签
    document.querySelectorAll('abbr').forEach(function (abbr) {
        abbr.addEventListener('click', function () {
            try {
                if (abbr.parentNode.nextSibling.getAttribute('class') === 'admonition note') {
                    abbr.parentNode.nextSibling.remove();
                }
            }
            catch {
                // 创建 admonition note 元素
                var note = document.createElement('div');
                note.setAttribute('class', 'admonition note');

                var pTitle = document.createElement('p');
                pTitle.setAttribute('class', 'admonition-title');
                pTitle.innerText = 'Note';

                var pText = document.createElement('p');
                pText.innerText = abbr.getAttribute('title');

                note.appendChild(pTitle);
                note.appendChild(pText);
                abbr.parentNode.insertAdjacentElement('afterend', note);
            }
        });
    })
});

window.onload = function () {
    var el_article = document.querySelector(".md-content__inner.md-typeset");
    console.log(el_article);
    var el_children = el_article.children;
    console.log(el_children);
    el_children = Array.from(el_children).slice(1, el_children.length - 2);
    console.log(el_children);
}