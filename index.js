
function superbowlWin(record){
    let theElement = record.find(element => element.result === "W");
    if(theElement){
        return (theElement.year);
    }else return (undefined);
}