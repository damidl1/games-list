class Game{

    constructor(name, year, publisher) {
        this.name = name;
        this.year = year;
        this.publisher = publisher;
    }

    toString(){
      return 'Nome: ' + this.name + '\n' +
        'Anno di pubblicazione: ' + this.year + '\n' +
        'Pubblicato da: ' + this.publisher;
    }
}





