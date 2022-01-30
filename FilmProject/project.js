const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// start UI object
const ui = new UI();
// generate object storage
const storage = new Storage();

//all events load

EventListeners();

function EventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
     let films = storage.getFilmsFromStorage();
     ui.loadAllFilms(films);

     });

     cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}
function addFilm(e){
const title = titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

if(title === "" || director === "" || url === ""){
    //error
    ui.displayMessages("Fill the all blanks..","danger");
}else{
    // new film
    const newFilm = new Film(title,director,url);

    ui.addFilmToUI(newFilm); //add a new film to ui
    storage.addFilmToStorage(newFilm); // add film to storage
    ui.displayMessages("film successfully added..","success");
}


ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("successfully deleted..","success");
        

    }
}

function clearAllFilms(){

    if(confirm("Are You Sure ?")){
         ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    }
   
}
