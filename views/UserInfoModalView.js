class UserInfoModalView{
    constructor(){

        let $ = document.querySelector.bind(document);

        this.name = $('.name');
        this.avatarUrl = $('.avatar-url-modal');
        this.quantRepos = $('.quant-repos');
        this.followers = $('.followers');
        this.createdAt = $('.created-at');
    };

    modalInfos(userInfo){

        let createdAt = userInfo.created_at;

        //Formatando a data.
        let data = createdAt.split("T")[0];
        let [yyyy, mm, dd] = data.split("-");
        var formatedDate = `${dd}/${mm}/${yyyy}`;

        this.name.textContent = `Essa pessoa se chama ${userInfo.name}`;
        this.avatarUrl.setAttribute("src", userInfo.avatar_url);
        this.quantRepos.textContent = `Ela possui ${userInfo.public_repos} repositórios`;
        this.followers.textContent = `e tem ${userInfo.followers} seguidores.`;
        this.createdAt.textContent = `Sua conta foi criada em ${formatedDate}.`
    };

    
}