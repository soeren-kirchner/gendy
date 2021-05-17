const GENDY_QUERY = '.gendy span:not([class]), .g'; 

function gendyInit(defaultVariant) {
    gendyOnElements(GENDY_QUERY, element => {
        [element.dataset.first, element.dataset.second, element.dataset.third=''] = element.textContent.split('|')
        element.dataset.y = ['y', 'ys'].includes(element.dataset.third) ? element.dataset.first + element.dataset.third : element.dataset.third 
    })
    gendySetVariant(defaultVariant)
}

function gendySetVariant(variant) {
    gendyOnElements(GENDY_QUERY, element => {
        element.textContent = gendyGetTextContent(element, variant)
    });
}

function gendyGetTextContent(element, variant) {
    if(variant=='y') return element.dataset.y
    return element.dataset.second == '' ? element.dataset.first : element.dataset.first + variant + element.dataset.second
} 

function gendyOnElements(classnames, closure) {
    for(element of document.querySelectorAll(classnames)) {
        closure(element)
    }
}