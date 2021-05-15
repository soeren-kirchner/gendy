const GENDY_SELECTOR = '.gendy span:not([class]), .g'; 

function initElements(defaultVariant) {
    onElements(GENDY_SELECTOR, element => {
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
    onElements(GENDY_SELECTOR, element => {
        element.textContent = getTextContent(element, variant)
    });
}

function onElements(classnames, closure) {
    for(element of document.querySelectorAll(classnames)) {
        closure(element)
    }
}