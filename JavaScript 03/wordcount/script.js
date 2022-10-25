const countWord = () => {
    const textarea = document.querySelector("#text");
    let wordCount = 0;
    if (textarea.value != ''){
        const words = textarea.value.split(' ');
        let nonEmptyWords = []
        words.forEach((ele) => {
            if(ele != ''){
                nonEmptyWords.push(ele);
            }
        })

        wordCount = nonEmptyWords.length;
    }
    
    const countSpan = document.querySelector("#count");
    countSpan.innerText = wordCount;
}

document.querySelector("#text").addEventListener("selectionchange", countWord);

console.log(this);