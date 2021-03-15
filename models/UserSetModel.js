class UserSetModel{
    constructor(){
        this._tesseractUser = [];
    };

    get user(){
        return this._tesseractUser;
    };

    getUserData(){

        let url = 'https://api.github.com/orgs/grupotesseract/public_members'

        let request = new XMLHttpRequest();

        request.open("GET", url);
        
        request.addEventListener("load", () => {
            if(request.status == 200){
                let usersResponse = JSON.parse(request.responseText);

                let users = usersResponse.map((user) => {
                    return new UserModel(user.login, user.avatar_url);
                });

                this._tesseractUser = users
            }
        });

        request.send();
    };
};