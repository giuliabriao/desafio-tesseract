class UserController{
    showUser(){
        let userSetModel = new UserSetModel();
        userSetModel.getUserData();

        let userView = new UserView();
        userView.userOnScreen(userModel);
    }
}

let userController = new UserController();

let main = document.querySelector(".main");

window.addEventListener("load", () => {
    userController.showUser();
});