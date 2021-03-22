class UserSetModel{
    constructor(){
        this._tesseractMember = [];
    };

    get tesseractMember(){
        return this._tesseractMember;
    };

    set tesseractMember(members){
        this._tesseractMember = members;
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

                this._tesseractMember = users;
            }
        });

        request.send();
    };
};