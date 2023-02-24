const users = require('./data');

const getUsers = new Promise ((resolve, reject) =>{

    setTimeout(() =>{ 
        let fetchedUsers = users; 

        if (fetchedUsers.length > 0 ) {
        resolve (fetchedUsers)
        } else {
        reject(" a Base de dados esta vazia")
        }
    }, 2000);

});

const getMaleUsers = (users) => {
    return new Promise((resolve,reject) =>{
        let maleUsers = users.filter(user =>{
            if(user.sex === "male"){
                return user
            }
        });
        if (maleUsers.length> 0) {
            resolve(maleUsers)
        } else{
            reject(" não existe usuario do sexo masculino nesta base de dados")
        }
    })
};

const checkAge = (users) => {
    return new Promise ((resolve, reject) =>{
        let adults = users.filter(user =>{
            if(user.age >= 18){
                return user
            }
        });
            if (adults.length > 0) {
                resolve(adults)
            } else{
                reject(" não há adutlos nesta base de usuarios ")
            }
        })
    }



getUsers
    .then(users => getMaleUsers(users))
    .then(maleUsers => checkAge(maleUsers))
    .then(adults => console.log(adults))
    .catch(error => console.log(error))