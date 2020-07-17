function feetToMile(feet){
    const divisorValueForConversion = 5280;
    if(feet<0)
    {
       return -1;
    }
    else if(feet==0)
    {       
       return 0;
    }
    else{
        var mile = feet/divisorValueForConversion;
        return mile.toFixed(7);
    }
}

function woodCalculator(numberOfChairs,numberOfTables,numberOfBeds)
{
    if((numberOfBeds < 0)||(numberOfChairs < 0)||(numberOfTables < 0))
    {
        return -1;
    }
    else{
        var woodForChairs = numberOfChairs * 1;
        var woodForTables = numberOfTables * 3;
        var woodForBeds = numberOfBeds * 5;
    
        var totalAmountOfWood = woodForChairs + woodForTables + woodForBeds;
    
        return totalAmountOfWood;
    }
}


function tinyFriend(friendNames){
    let maxNameLength = 999;
    var tinyFriendName = [];
    if(friendNames==null){
        return -1;
    }
    else{
        for(var i=0;i<friendNames.length;i++)
        {
            if(maxNameLength>=friendNames[i].length)
            {
                maxNameLength = friendNames[i].length;
                tinyFriendName.push(friendNames[i]);
            }
        }
        return tinyFriendName;
    }    
}

function brickCalculator(floor){
    const brickHeightFirstTenFloor = 15;
    const brickHeightSecondTenFloor = 12;
    const brickHeightRest = 10;
    const bricksPerFeet = 1000;
    var remainingFloor = floor-20;
    var bricks;
    if(floor == 0 || floor <0)
    {
        return -1;
    }
    else if(remainingFloor<0 || remainingFloor == 0)
    {
       var remainingAfterTenFloor = floor - 10;
       if(remainingAfterTenFloor < 0 || remainingAfterTenFloor==0)
       {
           bricks = floor * brickHeightFirstTenFloor * bricksPerFeet;
           return bricks;
       }
       else{
           bricksForFirstTenFloors = 10 * brickHeightFirstTenFloor * bricksPerFeet;
           bricksForRemainingFloors = remainingAfterTenFloor * brickHeightSecondTenFloor * bricksPerFeet;

           bricks = bricksForFirstTenFloors + bricksForRemainingFloors;
           return bricks;
       }
    }
    else{
        bricksForFirstTenFloors = 10 * brickHeightFirstTenFloor * bricksPerFeet;
        bricksForSecondTenFloors = 10 * brickHeightSecondTenFloor * bricksPerFeet;
        bricksForRemainingFloors = remainingFloor * brickHeightRest * bricksPerFeet;
        bricks = bricksForFirstTenFloors + bricksForSecondTenFloors + bricksForRemainingFloors;

        return bricks;
    }
}





// Feet to Mile Conversion

var feetInput = 15000;
var resFeetToMile = feetToMile(feetInput);
if(resFeetToMile<0)
{
    console.log('Distance can not be negative. Please provide right value');
}
else if(resFeetToMile==0){
    console.log('Distance can not be zero. Please provide right value')
}
else{
    console.log("Converted distance from feet to mile is:",resFeetToMile);
}

//Chair bed and table and wood calculate
var chair = -3;
var table = 4;
var bed = 5;
console.log('Amount of wood requied: '+woodCalculator(chair,table,bed));


//Brick Calculate
console.log("Bricks: "+brickCalculator(30));

//Find tiny Friend

var namesOfFriends = ['Rafa','Rime','Rafee','Zahra','Bushra','Maruful Haque']
console.log('Friend having the smallest name is:',tinyFriend(namesOfFriends));



