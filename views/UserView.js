class UserView{
    constructor(userSetModel){

        let userView = "";

        userSetModel.tesseractMember.forEach( (element) => {

            userView += `<div class="col-4 mb-2 mt-2 justify-content-around">
                            <p class="text-center m-0 member-login" >${element.login}</p>
                            <img id="${element.login}" class="img-fluid mw-100 avatar-url" src="${element.avatar_url}" 
                            onclick="userController.showModal(id)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        </div>`
        });

        this._users_html = userView;
    };

    userOnScreen(){
        let userInfoDiv = document.querySelector(".infoDivUser");
        userInfoDiv.innerHTML = this._users_html;
    };
};