const dynamicContent = document.getElementById("dynamicCont");
let phrases=["Software Engineer...","Web Developer...","Competitive Programer..."];
// console.log(document.getElementsByName("span"));
// dynamicContent.textContent +="s";
let phraseIndex=0;
let letterIndex=0;

function printLetter(phase){
    if(letterIndex==phase.length)
    {
        letterDelete();
    }
    else if(letterIndex<phase.length)
    {
        // dynamicContent.textContent=phase;
        dynamicContent.textContent += phase.charAt(letterIndex);
        letterIndex+=1;
        // console.log(dynamicContent);
        setTimeout(function(){
            printLetter(phase);
        },100);
    }
}
// console.log(phrases[0].slice(0,letterIndex-3));
function letterDelete()
{
    if(letterIndex>-1)
    {
        let updatePhase="";
        for(let index=0 ;index<letterIndex; index++){
            updatePhase += phrases[phraseIndex].charAt(index);
        }
        // console.log(updatePhase);
        dynamicContent.textContent = updatePhase;
        letterIndex-=1;
        // console.log(phase);
        setTimeout(letterDelete,100)
    }
    else 
    {
        phraseIndex=(phraseIndex+1)%phrases.length;
        printLetter(phrases[phraseIndex]);
    }
}

printLetter(phrases[0]);