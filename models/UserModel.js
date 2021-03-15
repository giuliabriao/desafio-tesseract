class UserModel{
    constructor(login, avatar_url){
        this._login = login;
        this._avatar_url = avatar_url;
    };

    get login() {
        return this._login;
    };

    get avatar_url() {
        return this._avatar_url;
    };

    // getUserData(){

    //     let url = 'https://api.github.com/orgs/grupotesseract/public_members'

    //     let request = new XMLHttpRequest();

    //     request.open("GET", url);

    //     request.addEventListener("load", () => {
    //         if(request.status == 200){
    //             let response = JSON.parse(request.responseText);

    //             this._login = response.login;
    //             this._avatar_url = response.avatar_url;
    //         }
    //         else{
    //             throw "Sorry, an error ocurred, try again later.";
    //         }
    //     });

    //     request.send();
    // };
};