class ModalModel{
    constructor(){
        this._name = "";
        this._public_repos = "";
        this._followers = "";
        this._created_at = "";
    };

    get name() {
        return this._name;
    };

    get public_repos() {
        return this._public_repos;
    };

    get followers() {
        return this._followers;
    }

    get created_at() {
        return this._created_at;
    }

    getUserModalData(login){

        let url = `https://api.github.com/users/${login}`

        let request = new XMLHttpRequest();

        request.open("GET", url);

        request.addEventListener("load", () => {
            if(request.status == 200){
                let response = JSON.parse(request.responseText);

                this._name = response.name;
                this._public_repos = response.public_repos;
                this._followers = response.followers;
                this._created_at = response.created_at;
            }
            else{
                throw "Sorry, an error ocurred, try again later.";
            }
        });

        request.send();
    };
}