class UserView{

    constructor(){
        this._userInfoDiv = document.querySelector(".infoDivUser");
    };

    renderUsers(userSetModel){
        let usersHtml = "";

        userSetModel.users.forEach( (element) => {

            usersHtml += `<div class="col-3 mb-2 text-center mt-2 justify-content-center">
                            <p id="login-${element.login}" class="fonte-padrao text-center m-0 member-login" >${element.login}</p>
                            <img id="${element.login}" class="img-fluid rounded-circle avatar" src="${element.avatar_url}" 
                            onclick="userController.showUserInfo(id)">
                        </div>`
        });

        this._userInfoDiv.innerHTML = usersHtml;
    };
};