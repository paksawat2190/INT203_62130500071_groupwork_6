const constraints = {
    firstname: {
        presence: true,
    },
    password:{
        presence:true,
    },
   
    }

const app =Vue.createApp( {
    data() {
        return {
            firstname: null,
            email: null,
            password: null,
            fullname: null,
            title:null,
            language_lists: [{ language_id: 1,  language_name:'TH'},
                            { language_id: 2,  language_name: 'ENG'},
                            { language_id: 3, language_name: 'CHA'}],
            errors:null,
            showfullname:null,
            showtitle:null,
            chosenlanguage:null,
        }
    },
    methods :{
        checkForm(){
            this.errors = validate({
                firstname: this.firstname,
                email: this.email,
                password: this.password,
                fullname: this.fullname,
                title:this.title,
                chosenlanguage:this.chosenlanguage,
            },constraints)
            if(!this.errors){
                this.updateinfomation()
                alert("Your profile is updated successfully.");
            }
        },
        updateinfomation(){
            this.showfullname = this.fullname;
            this.showtitle = this.title;
            this.showemail = this.email;
        },
    }
}
)
app.mount('#app')

