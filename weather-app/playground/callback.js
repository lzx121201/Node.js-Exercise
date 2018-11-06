var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Kyle'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(13, (userObject) => {
    console.log(userObject);
});