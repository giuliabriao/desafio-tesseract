class UserView{
    constructor(userSetModel){

        let $ = document.createElement.bind(document);

        let userView = "";

        userSetModel.tesseractUser.forEach( (element) => {

            userView += `<div><p>${element.login}</p></div><div><img src="${element.avatar_url}"></div>`

        });

        this._users_html = userView;
    };

    userOnScreen(){
        let userInfoDiv = document.querySelector(".infoDivUser");
        userInfoDiv.innerHTML = this._users_html;
    };
};