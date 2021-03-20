class UserController{
    showUser(){
        let userSetModel = new UserSetModel();
        userSetModel.getUserData();

        let userView = new UserView(userSetModel);
        userView.userOnScreen();
    };

    showModal(loginUser){
     let modalModel = new ModalModel();
     modalModel.getUserModalData(loginUser);

     let modalView = new ModalView();
     modalView.modal(modalModel.userInfo);
    };
};