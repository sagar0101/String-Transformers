const LowerCase = document.querySelector(".LowerCase");
const UpperCase = document.querySelector(".UpperCase");
const PascalCase = document.querySelector(".PascalCase");
const SnakeCase = document.querySelector(".SnakeCase");
const CamelCase = document.querySelector(".CamelCase");
const KebabCase = document.querySelector(".KebabCase");
const TrimCase = document.querySelector(".TrimCase");
const input_txt = document.querySelector(".input-txt");

function toPascalCase(str) {
    return str
        .toLowerCase()                    
        .split(/[\s_]+/)                  
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join('');                       
}
function toKebabCase(str) {
    return str
        .toLowerCase()                    
        .split(/[\s]+/)                  
        .join('-');                       
}
function toSnakeCase(str) {
    return str
        .toLowerCase()                    
        .split(/[\s]+/)                  
        .join('_');                       
}
function toCamelCase(str) {
    return str
        .toLowerCase()                    
        .split(/[\s_]+/) 
        .map((word,index)=>{
            if(index===0){
                return word
            }
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join('');                       
}

input_txt.addEventListener("input", () => {
    LowerCase.innerText=(input_txt.value).toLowerCase()
    UpperCase.innerText=(input_txt.value).toUpperCase()
    TrimCase.innerText=(input_txt.value).replace(/\s+/g, '');
    PascalCase.innerText=toPascalCase(input_txt.value)
    CamelCase.innerText=toCamelCase(input_txt.value)
    KebabCase.innerText=toKebabCase(input_txt.value)
    SnakeCase.innerText=toSnakeCase(input_txt.value)
   
});
