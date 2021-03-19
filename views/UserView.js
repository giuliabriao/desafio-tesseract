class UserView{
    constructor(userSetModel){

        let $ = document.createElement.bind(document);

        let userView = "";

        userSetModel.tesseractUser.forEach( (element) => {

            userView += `<div class="col-4 mb-2 mt-2">
                            <p class="text-center m-0" >${element.login}</p>
                            <img class="img-fluid mw-100" src="${element.avatar_url}">
                        </div>`

        });

        this._users_html = userView;
    };

    userOnScreen(){
        let userInfoDiv = document.querySelector(".infoDivUser");
        userInfoDiv.innerHTML = this._users_html;
    };
};