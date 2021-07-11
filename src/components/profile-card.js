const Avatar = require('./avatar');
const UserInfo = require('./user-info');

class ProfileCard{
    constructor(id, name, email, avatarUrl) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatarUrl = avatarUrl;
    }

    render() {
        const section = document.createElement('section');
        section.id = `profile-${this.id}`;
        section.className = 'profile-card';
        //section.innerHTML = this.name;

        const avatar = new Avatar(this.avatarUrl, this.name);
        const userInfo = new UserInfo(this.name, this.email);
        
        section.appendChild(avatar.render());
        section.appendChild(userInfo.render());


        return section;
    }
}

module.exports = ProfileCard;