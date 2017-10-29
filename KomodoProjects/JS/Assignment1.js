
function MenuChoice(selection)
{
    document.getElementById("Area1").style.display="none";
    document.getElementById("Area2").style.display="none";
    
    switch(selection)
    {
        case "Area1":
            document.getElementById("Area1").style.display="initial";
            break;
        case "Area2":
            document.getElementById("Area2").style.display="initial";
            break;
        case "None":
            break;
        default:
            alert("Please select a menu option");
    }
}