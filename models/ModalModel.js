class ModalModel{
    constructor(){
        this._login = "";
        // this._name = "";
        // this._public_repos = "";
        // this._followers = "";
        // this._created_at = "";
    };

    // get name() {
    //     return this._name;
    // };

    // get public_repos() {
    //     return this._public_repos;
    // };

    // get followers() {
    //     return this._followers;
    // }

    // get created_at() {
    //     return this._created_at;
    // }

    get login(){
        return this._login;
    }

    getUserModalData(login){

        let url = `https://api.github.com/users/${login}`

        let request = new XMLHttpRequest();

        request.open("GET", url), false;

        request.addEventListener("load", () => {
            if(request.status == 200){
                let response = JSON.parse(request.responseText);

                this._login = response.login;
            }
            else{
                throw "Sorry, an error ocurred, try again later.";
            }
        });

        request.send();
    };
}