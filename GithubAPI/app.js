
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.querySelector("#clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();


eventListeners();

function eventListeners(){
 githubForm.addEventListener("submit",getData);
 clearLastUsers.addEventListener("click",clearAllSearched);
 document.addEventListener("DOMContentLoaded",getAllSearched);

};

function getData(e){
let username = nameInput.value.trim(); //trim sag sol bosluklari kapatiyo

if(username === ""){
    alert("Please Enter a Valid Username");
}else{ 
    github.getGithubData(username)
    .then(response => {
        if(response.user.message === "Not Found"){
            ui.showError("User Not Found");
        }else{
            // Storage.addSearchedUserToStorage(username);
            // // storage.addSearchedUserToStorage();
            // ui.addSearchedUserToUI(username);
            ui.showUserInfo(response.user);
            ui.showReposInfo(response.repo);
        }
    })
    .catch(err => ui.showError(err));
}

    ui.clearInput();

    e.preventDefault();
}

function clearAllSearched(){
if(confirm("Are you sure?")){
    Storage.getAllSearchedUsersFromStorage();
    ui.clearAllSearchedFromUI();
}


}

function getAllSearched(){
//arananlari storageden al UI ekle

let users = Storage.getAllSearchedUsersFromStorage();
let result = "";
users.forEach(user => {
    // <li class = "list group-item"> </li>
    result += ` <li class = "list group-item">${user} </li>`
});
lastUsers.innerHTML = result;

}
