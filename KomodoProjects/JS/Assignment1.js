
function MenuChoice(selection)
{
    document.getElementById("Area1").style.visibility="hidden";
    document.getElementById("Area2").style.visibility="hidden";
    
    switch(selection)
    {
        case "Area1":
            document.getElementById("Area1").style.visibility="visible";
            break;
        case "Area2":
            document.getElementById("Area2").style.visibility="visible";
            break;
        case "None":
            break;
        default:
            alert("Please select a menu option");
    }
}