dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));


function dragElement(terraniumElement)
{
    let pos1=0, pos2=0, pos3=0, pos4=0; //pos1 and pos2 : Change in cursor possition on x and y axis
    //pos 3 and pos4 : Current position of curson point on x and y axis
    terraniumElement.onpointerdown=pointerDrag;



function pointerDrag(e)
{
    e.preventDefault(); //prevent any default action that might be occur when event is triggred
    console.log(e); //logs the event object to the console. For debugging
    //console is the tool on browser that allow developers to see information about their code as it runs
    pos3=e.clientX;
    pos4=e.clientY;
    document.onpointermove=elementDrag;
    document.onpointerup=stopElementDrag;
}
function elementDrag(e)
{
    pos1=pos3-e.clientX;
    pos2=pos4-e.clientY;
    pos3=e.clientX;
    pos4=e.clientY;
    console.log(pos1,pos2,pos3,pos4);
    terraniumElement.style.top=(terraniumElement.offsetTop-pos2) + 'px';    //css is used
    terraniumElement.style.left=(terraniumElement.offsetLeft-pos1) + 'px';
}
function stopElementDrag()
{
    document.onpointerup=null;
    document.onpointermove=null;

}
}


