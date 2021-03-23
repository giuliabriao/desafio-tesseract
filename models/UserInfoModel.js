class UserInfoModel{
    constructor(){
        this._userInfo = {};
    };

    get userInfo(){
        return this._userInfo;
    }

    getUserInfo(login){

        let url = `https://api.github.com/users/${login}`

        let request = new XMLHttpRequest();

        request.open("GET", url, false);

        request.addEventListener("load", () => {
            if(request.status == 200){
                let response = JSON.parse(request.responseText);

                this._userInfo = response;
            }
            else{
                throw "Sorry, an error ocurred, try again later.";
            }
        });

        request.send();
    };
}