// class Storage{

//     static getSearchedUsersFromStorage(){
//      let users;

//      if(localStorage.getItem === "searched"){
//          users = [];
//      }else{
//          users = JSON.parse(localStorage.getItem("searched"));
//      }

//      return users;


//     }
//     static addSearchedUserToStorage(username){
//     let users = this.getSearchedUsersFromStorage();
   
//     //indexOf
//     if(users.indexOf(username) === -1){// -1 means username not exist in local storage
//        users.push(username);
//     }
//     localStorage.setItem("searched",JSON.stringify(users));



//     }
//     static clearAllSearchedUsersFromStorage(){
//     localStorage.removeItem("searched");

//     }


// }


// function Storage(){

// }

// Storage.prototype.getSearchedUsersFromStorage() = function(){

//     let users;

//     if(localStorage.getItem("searched") === null){
//       users = [];
//     }else{

//         users = JSON.parse(localStorage.getItem("searched"));
//     }
//     return users;
// }

// Storage.prototype.addSearchedUserToStorage = function(username){
// let users = this.getSearchedUsersFromStorage();

// users.push = (username);

// localStorage.setItem("searched",JSON.stringify(username));


// }

// Storage.prototype.clearAllSearchedUsersFromStorage = function(){

//     localStorage.removeItem("searched");
// }

