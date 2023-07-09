class Game{

    constructor(image, name, year, publisher) {
        this.image = image;
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






