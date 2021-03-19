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
};