class UserController{
    showUser(){
        let userSetModel = new UserSetModel();
        userSetModel.getUserData();

        let userView = new UserView(userSetModel);
        userView.userOnScreen();
    };
};

let userController = new UserController();

let main = document.querySelector(".main");

window.addEventListener("load", () => {
    userController.showUser();
});