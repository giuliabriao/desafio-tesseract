class UserController {
    constructor() {

        this.userSetModel = new UserSetModel();
        this.userInfoModel = new UserInfoModel();

        this.view = new UserView();
        this.userInfoModalView = new UserInfoModalView();
    };

    showAllUsers() {
        this.userSetModel.getAllUsers();

        this.view.renderUsers(this.userSetModel);
    };

    showUserInfo(userLogin) {
        this.userInfoModel.getUserInfo(userLogin);

        this.userInfoModalView.show(this.userInfoModel.userInfo);
    };

    searchUsers(login) {
        let lowerCaseLogin = login.toLowerCase();
        let members = this.userSetModel.users;

        let searchedMembers = members.filter((member) => {
            return member.login.toLowerCase().startsWith(lowerCaseLogin);
        });

        if (searchedMembers.length == 0) {

            ModalView.showModal("#userNotFoundModal");

            this.showAllUsers();

            return;
        };

        let model = new UserSetModel();
        model.users = searchedMembers;

        this.view.renderUsers(model);
    };
};