class UserController{
    constructor(){

        this.userSetModel = new UserSetModel();
        this.modalModel = new ModalModel();
    };

    showUsers(){
        this.userSetModel.getUserData();

        //Passando as informações da model para a view.
        let userView = new UserView(this.userSetModel)
        userView.userOnScreen();
    };

    showModal(loginUser){
     this.modalModel.getUserModalData(loginUser);
     
        //Fazendo aparecer as informações relativas ao modal, conectando a model com a view.
     let modalView = new ModalView();
     modalView.modalInfos(this.modalModel.userInfo);
    };

    searchMembers(inputValue){

        let searchButton = document.querySelector('#searchButton');
        let searchedLogin = inputValue.toLowerCase();
        let members = this.userSetModel.setUsers;

        //Aqui o array de objetos com login e avatar_url é filtrado apenas pelo login, 
        //a função includes() faz o papel de conferir se o login tem os mesmos caracteres
        //do value do input. 
        let searchedMembers = members.filter( (member) => {
            return member.login.toLowerCase().includes(searchedLogin);
        });

        //Esse if faz aparecer o modal de erro caso não localize o usuário na busca.
        if(searchedMembers.length == 0){
            searchButton.setAttribute("data-bs-toggle","modal");
            searchButton.setAttribute("data-bs-target","#modalError"); 
            return;
        }

        let model = new UserSetModel();
        model.setUsers = searchedMembers;

        let userView = new UserView(model);
        userView.userOnScreen();
    };

    removingAttributesFromSearchButton(){
        searchButton.removeAttribute("data-bs-toggle","modal");
        searchButton.removeAttribute("data-bs-target","#modalError");
    }
};