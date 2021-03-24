class ModalView{
    static showModal(id){
        let userInfoModal = new bootstrap.Modal(document.querySelector(id))

        userInfoModal.show();
    }
}