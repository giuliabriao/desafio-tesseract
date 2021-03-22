class UserSetModel{
    constructor(){
        this._setUsers = [];
    };

    get setUsers(){
        return this._setUsers;
    };

    //Esse setter serve para quando precisarmos dele no filtro para o campo de busca lá no controller.
    set setUsers(members){
        this._setUsers = members;
    }

    getUserData(){

        let url = 'https://api.github.com/orgs/grupotesseract/public_members';

        let request = new XMLHttpRequest();

        request.open("GET", url, false);
        
        request.addEventListener("load", () => {
            if(request.status == 200){
                let usersResponse = JSON.parse(request.responseText);

                let users = usersResponse.map((user) => {
                    return new UserModel(user.login, user.avatar_url);
                });

                this._setUsers = users;

            }else{
                throw "Sorry, an error ocurred, try again later.";
            }
        });

        request.send();
    };
};