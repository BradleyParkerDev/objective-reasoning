// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

//1. isAdmin

function createUserRole(firstName, lastName, userRole){
    const user = {
        firstName: firstName,
        lastName: lastName,
        userRole: userRole
    }
    return user;
}

function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    }
    else{
        return false;
    }
}

/*
eileen = createUserRole("Eileen", "Smith", "REGULAR_USER");
console.log(eileen);
console.log(isAdmin(eileen));

ian = createUserRole("Ian", "Rogers", "USER_Manager");
console.log(ian);
console.log(isAdmin(ian));

jeff = createUserRole("Jeff", "Wilson", "ADMIN");
console.log(jeff);
console.log(isAdmin(jeff));
*/
//---------------------------------------------------------------------------------


//2. getEmail

function getEmail(user){
    emailAddress = String(user.firstName + "." + user.lastName + "@codeimmersives.com");
    return emailAddress.toLowerCase();
}
/*
brian = createUserRole("Brian", "Carela", "ADMIN");
anthony = createUserRole("Anthony", "Derosa", "ADMIN");
console.log(getEmail(brian));
console.log(getEmail(anthony));
*/
//---------------------------------------------------------------------------------


//3. getPlaylistLength
function createPlaylist(name, songs){
    const playlist = {
        name:name,
        songs:songs
    }
    return playlist;

}

function getPlaylistLength(playlist){
    let length = playlist.songs.length
    return length;
}
/*
myJams = createPlaylist("my jams", ['Vienna', 'Hey Ya!']);
console.log(getPlaylistLength(myJams));
p1 = createPlaylist('playlist 1',['song1', 'song2', 'song3']);
console.log(getPlaylistLength(p1));
*/
//---------------------------------------------------------------------------------


//4. getHardestHomework
function createHomework(name, averageScore){
    const homework = {
        name:name,
        averageScore: averageScore
    }
    return homework;
}

function getHardestHomework(homeworkArray){
    let scores = [];
    let hardestHomework;
    if(homeworkArray.length === 0){
        return "";
    }
    else{
        for(let i = 0; i < homeworkArray.length; i++){

            scores[i] = homeworkArray[i].averageScore
        }
        highestScore = Math.min(...scores);
        for(let i = 0; i < homeworkArray.length; i++){
            if(homeworkArray[i].averageScore === highestScore){
                hardestHomework =  homeworkArray[i].name;
            }
        }  
        return hardestHomework;
    }

}

/*
hipHipArray = createHomework('hip-hip-array', 12);
waitIObject = createHomework('wait-i-object', 200);
objecteiveReasoning = createHomework( 'objective-reasoning', 25);

myArray = [hipHipArray,waitIObject,objecteiveReasoning];
console.log(myArray);
console.log(getHardestHomework(myArray));
*/
//---------------------------------------------------------------------------------


//5. createPhonebook


function createPhonebook(namesArray, numbersArray){
    let arr = namesArray;
    let arr2 = numbersArray;
    let phonebook = new Object();  
    for(let i = 0; i < namesArray.length; i++){
        phonebook[arr[i]] = arr2[i];
    }
    return phonebook;

}
/*
phoneBook = createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']);
console.log(phoneBook);
*/



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};