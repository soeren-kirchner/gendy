// set default value on page loaded
window.addEventListener('load', (event) => {
    initElements(':')
});

function initElements(defaultVariant) {
    onElements('.g', element => {
        [element.dataset.first, element.dataset.second, element.dataset.third=''] = element.textContent.split('|')
        element.dataset.y = ['y', 'ys'].includes(element.dataset.third) ? element.dataset.first + element.dataset.third : element.dataset.third 
    })
    setVariant(defaultVariant)
}

function getTextContent(element, variant) {
    if(variant=='y') return element.dataset.y
    return element.dataset.second == '' ? element.dataset.first : element.dataset.first + variant + element.dataset.second
} 

function setVariant(variant) {
    onElements('.g', element => {
        element.textContent = getTextContent(element, variant)
    });
    showVariantsList(false)
}

function onElements(classnames, closure) {
    for(element of document.querySelectorAll(classnames)) {
        closure(element)
    }
}

function showVariantsList(show = true) {
    var list = document.getElementById('glist')
    list.classList.remove(show ? 'glist-off' : 'glist-on')
    list.classList.add(show ? 'glist-on' : 'glist-off')
}
