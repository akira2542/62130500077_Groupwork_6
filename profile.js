const constraints = {
    firstname : {
        presence : true
    },
    lastname : {
        presence : true
    },
    username : {
        presence : true
    },
    password : {
        presence : true,
        length : {
            minimum : 8,
            message : "must be at least 8 characters"
        }
    },
    age : {
        presence : true,
        numericality : {
            lessThan : 150
        }
    },
    email : {
        presence : true,
        email: true
    }
    ,
    title : {
        presence : false
    },
    gender : {
        presence : true
    }
}

const app = {
    data () {
        return {
            firstname : 'Ruangrit',
            lastname : 'Kaewkrom',
            profession : 'Front-End Developer', 
            article : 24,
            follower : 248,
            rating : '9.8',
            imgURL : './images/harold.jpg',
            account : {
                firstname: null,
                lastname : null,
                username : null,
                password : null,
                age: null,
                email: null,
                title: null,
                gender: null
            },
            errors : null
        }
    },
    methods : {
        validateSubmit(e) {
            this.errors = validate(
                {
                    firstname: this.account.firstname,
                    lastname : this.account.lastname,
                    username : this.account.username,
                    password : this.account.password,
                    age: this.account.age,
                    email: this.account.email,
                    title: this.account.title,
                    gender: this.account.gender
                }
                ,constraints)
            if (this.errors) {
                console.log(this.errors)
                e.preventDefault();
            }
        }    
    }
}

VueApp = Vue.createApp(app)
VueApp.mount('#app')
