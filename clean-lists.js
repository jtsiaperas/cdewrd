const fs = require("fs");

function cleanIt(uri){
    let wordList = [];
    let cleanList = [];
    fs.readFile(uri,'utf8',(err,data)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        wordList = data.split('\n');
        cleanList.push('\n');
        cleanList.push(wordList[0]);
        for(i=1; i<wordList.length; i++)
        {
            if(wordList[i] != wordList[i-1])
            {
                cleanList.push(wordList[i])
            }
        }
        cleanList=cleanList.join("\n")
        fs.appendFile(uri,cleanList,err=>console.log(err));
    });
    
};
  

cleanIt("fives.json");
cleanIt("sixes.json");
cleanIt("sevens.json");
cleanIt("eights.json");
