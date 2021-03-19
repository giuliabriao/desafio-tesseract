class ModalView{
    constructor(){

        let $ = document.querySelector.bind(document);

        this.login = $('.member-login');
        this.name = $('.name');
        this.avatarUrl = $('.avatar-url');
        this.quantRepos = $('.quant-repos');
        this.followers = $('followers');
        this.createdAt = $('created-at');
    };

    modal(object){
        this.login.textContent = object.login;
        this.name.textContent = `Essa pessoa se chama ${object.name}`;
        this.avatarUrl.setAttribute("src", object.avatar_url);
        this.quantRepos.textContent = `Ela possui ${object.public_repos} repositórios,`;
        this.followers.textContent = `e tem ${object.public_repos} seguidores.`;
        this.createdAt.textContent = `Sua conta foi criada em ${object.created_at}.`
    };

}