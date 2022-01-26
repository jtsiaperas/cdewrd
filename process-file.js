const fs = require("fs");
fs.readFile('DICTPAGE.RAW','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return
    }
    let lines = data.split("\n");
    let fives = [];
    let sixes = [];
    let sevens = [];
    let eights = [];
    lines.forEach(line =>
        {
            let word = line.split(" ")[0];
            let len = word.length;
            word = word.split("");
            if(word[0]=="#")
            {
                word[0] = "";
                len--;
            }
            if(word[len]==",")
            {
                word[len]="";
                len--;
            }
            switch(len)
            {
                case 5:
                    word = word.join("")+"\n"    
                    fs.appendFile("fives.json",word,err => error(err));
                    break;

                case 6:
                    word = word.join("")+"\n"    
                    fs.appendFile("sixes.json",word,err => error(err));
                    break;
                    
                case 7:
                    word = word.join("")+"\n"    
                    fs.appendFile("sevens.json",word,err => error(err));
                    break;

                case 8:
                    word = word.join("")+"\n"    
                    fs.appendFile("eights.json",word,err => error(err));
                    break;
                default:
                    break;
            }
       });
});