// @author Joshua Rodriguez
// @Date  9/22/21


function gamerName() {
    var userName = window.prompt("Name invalid I can fix it, please give me your name!");
    console.log("Username =", userName);
//Array name
    var nameArray = userName.split('');
    console.log("nameArray =",  nameArray);
//Sorting the Array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
//bring the array back together
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
//show the results to see what it returns
    return nameSorted;
}


//Output
document.writeln("I managed to fix the problem with your name!: ",
                gamerName(), "</br>");
