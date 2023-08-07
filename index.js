const taskContainer = document.querySelector(".task__container");
const globalStore = [];
console.log(taskContainer);

const generateNewCard = (taskData) =>  `
    <div class="col-sm-10 col-md-4 col-lg-3" id=${taskData.id}>
                <div class="card">
                    <div class="card-header d-flex justify-content-end gap-2">
                      <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pen"></i></button>
                      <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
                     </div>
                      <div class="card-body">
                        <img src="${taskData.imageUrl}" class="card-img-top" alt="image">
                        
                      <h5 class="card-title fw-bolder text-primary">${taskData.taskTitle}</h5>
                      <p class="card-text">${taskData.taskDescription}</p>
                      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                  </div>
                  </div>
            </div>

    `;


const loadInitialCardData = () => {
    // localstorage to get tasky card data
    const getCardData =localStorage.getItem("tasky");

    //convert to normal object
    const {cards} = JSON.parse(getCardData);

    //loop over those arrays of  task object to create html card, inject it to dom
    cards.map((cardObject) => {
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

         // update globalstore
        globalStore.push(cardObject);
    });

   


};

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    }
   
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

    globalStore.push(taskData);
    localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

};