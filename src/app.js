const { load } = require('./users');
const ProfileCard = require('./components/profile-card');

function init() {
    const main = document.querySelector('main');

    console.log(load());

    load()
        .then(users => {
            if(!(users && users.length)){
                main.innerHTML = 'Unable to load user data at this time.';
                return;
            }
            users.forEach(user=>{
                const id = user.id;
                const name = `${user.first_name} ${user.last_name}`;
                const email = user.email;
                const avatarUrl = user.avatar;

                // console.log(id, name, email, avatarUrl);
                const profileCard = new ProfileCard(id, name, email, avatarUrl);
                console.log(profileCard);
                main.appendChild(profileCard.render());

            });
        });

    

}

window.onload = init;