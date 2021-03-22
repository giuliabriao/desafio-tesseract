class UserController{
    constructor(){

        this.userSetModel = new UserSetModel();

        this.modalModel = new ModalModel();
    };

    showUser(){
        this.userSetModel.getUserData();

        let userView = new UserView(this.userSetModel);
        userView.userOnScreen();
    };

    showModal(loginUser){
     this.modalModel.getUserModalData(loginUser);

     let modalView = new ModalView();
     modalView.modal(this.modalModel.userInfo);
    };

    searchMembers(inputValue){

        let members = this.userSetModel.tesseractMember;

        let searchedMembers = members.filter( (member) => {
            return member._login == inputValue;
        });

        let model = new UserSetModel();
        model.tesseractMember = searchedMembers;


        let userView = new UserView(model);
        userView.userOnScreen();
    };
};