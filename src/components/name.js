module.exports = class Name {
    constructor(name){
        this.name = name;       
    }
    
    render(){
        const h2 = document.createElement('h2');
        h2.innerHTML = this.name;
        h2.className = 'profile-name';
        return h2;        
    }
};

// moudle.exports = class ClassName {};  == class ClassName {} module.exports = className