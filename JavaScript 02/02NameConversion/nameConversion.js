function showCases(){
    const text = document.querySelector("#text").value;
    const camelCase = document.querySelector("#camel-case")
    camelCase.innerText = convertToCamelCase(text);

    const pascalCase = document.querySelector("#pascal-case")
    pascalCase.innerText = convertToPascalCase(text);

    const snakeCase = document.querySelector("#snake-case")
    snakeCase.innerText = convertTosnakeCase(text);

    const screamingSnakeCase = document.querySelector("#screaming-snake-case")
    screamingSnakeCase.innerText = convertToscreamingSnakeCase(text);

    const kebabCase = document.querySelector("#kebab-case")
    kebabCase.innerText = convertTokebabCase(text);

    const screamingkebabCase = document.querySelector("#screaming-kebab-case")
    screamingkebabCase.innerText = convertToScreamingKebabCase(text);
}

function convertToCamelCase(text){
    return text.split(' ').map((word, index) => {
        return index == 0 ? word[0].toLowerCase() + word.slice(1).toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
}

function convertToPascalCase(text){
    return text.split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join('')
}

function convertTosnakeCase(text){
    return text.toLowerCase().split(' ').join('_')
}

function convertToscreamingSnakeCase(text){
    return text.toUpperCase().split(' ').join('_')
}

function convertTokebabCase(text){
    return text.toLowerCase().split(' ').join('-')
}

function convertToScreamingKebabCase(text){
    return text.toUpperCase().split(' ').join('-')
}

document.querySelector("#convert-btn").addEventListener("click", showCases);
