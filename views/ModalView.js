class ModalView{ //Aqui estou puxando apenas as informações do usuário que eu quero.
    constructor(){

        let $ = document.querySelector.bind(document);

        this.name = $('.name');
        this.avatarUrl = $('.avatar-url-modal');
        this.quantRepos = $('.quant-repos');
        this.followers = $('.followers');
        this.createdAt = $('.created-at');
    };

    modal(userInfo){

        let createdAt = userInfo.created_at;

            //Aqui tratando da data que veio formatada como eu não gostaria.
        let data = createdAt.split("T")[0];
        let [yyyy, mm, dd] = data.split("-");
        var correctDate = `${dd}-${mm}-${yyyy}`;

        this.name.textContent = `Essa pessoa se chama ${userInfo.name}`;
        this.avatarUrl.setAttribute("src", userInfo.avatar_url);
        this.quantRepos.textContent = `Ela possui ${userInfo.public_repos} repositórios`;
        this.followers.textContent = `e tem ${userInfo.followers} seguidores.`;
        this.createdAt.textContent = `Sua conta foi criada em ${correctDate}.`
    };
}