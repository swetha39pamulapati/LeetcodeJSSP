let generateAbbreviations = function(word){
   let result = [];
    generateAbbreviationHelper("", word, result,0,0);
    return result;
}
function  generateAbbreviationHelper(data, word, result,count,position){
    if(position == word.length)
    {
        if(count == 0)
        {
            result.push(data);

        }
        else
        {
            data += count;
            result.push(data);
        }
        return;
    }
    if (count > 0)
        generateAbbreviationHelper(data+count+ word[position], word, result,0,position+1);
    else
        generateAbbreviationHelper( data + word[position], word, result, 0, position + 1);
    generateAbbreviationHelper( data , word, result, count+1, position + 1);
}
console.log(generateAbbreviations("word"));