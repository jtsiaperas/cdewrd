const fs = require("fs");

function cleanIt(uri){
    let wordList = [];
    let cleanList = [];
    fs.readStream(uri,'utf8',(data,err)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        wordList = JSON.parse(data);
        wordList = Array.sort(wordList);
        wordList.forEach(word => {
            if(word[0] !== word[0].toUpperCase())
            {
           
                let exists = false;
                for(let i=0; i<cleanList.length; i++)
                {
                    if(cleanList[i] == word)
                    {
                        exists = true;
                    }
                }
                if(!exists)
                {
                    cleanList.push(word);
                }
            }
        });
        fs.appendFile(uri,JSON.stringify(cleanList),err=>console.log(err));
    })
};

cleanIt("fives.json");
cleanIt("sixes.json");
cleanIt("sevens.json");
cleanIt("eights.json");