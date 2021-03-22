class UserView{
    constructor(userSetModel){

        let userView = "";

        userSetModel.setUsers.forEach( (element) => { //Esse forEach cria um codigo html com as informações de cada usuário

            userView += `<div class="col-3 mb-2 text-center mt-2 justify-content-center">
                            <p id="login-${element.login}" class="fonte-padrao text-center m-0 member-login" >${element.login}</p>
                            <img id="${element.login}" class="img-fluid rounded-circle avatar" src="${element.avatar_url}" 
                            onclick="userController.showModal(id)" data-bs-toggle="modal" data-bs-target="#modalInfos">
                        </div>`
        });

        this._users_html = userView;
    };

    userOnScreen(){ //Essa função faz aparecer na div específica para os membros
        let userInfoDiv = document.querySelector(".infoDivUser");
        userInfoDiv.innerHTML = this._users_html;
    };
};