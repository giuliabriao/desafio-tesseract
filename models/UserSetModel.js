class UserSetModel{
    constructor(){
        this._users = [];
    };

    get users(){
        return this._users;
    };

    set users(users){
        this._users = users;
    }

    getAllUsers(){

        let url = 'https://api.github.com/orgs/grupotesseract/public_members';

        let request = new XMLHttpRequest();

        request.open("GET", url, false);
        
        request.addEventListener("load", () => {
            if(request.status == 200){
                let usersResponse = JSON.parse(request.responseText);

                this.users = usersResponse;
            }else{
                throw "Sorry, an error ocurred, try again later.";
            }
        });

        request.send();
    };
};