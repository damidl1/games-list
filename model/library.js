class Library{

    constructor(library = []){

        this.library = library;
    }


    addGame(game){
     this.library.push(game);
    }


  
sortByName() {
    this.library.sort(function(a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
}

    sortByYear() {
        this.library.sort(function(a, b) {
      
          if (a.year < b.year) {
            return -1;
          }
      
          if (a.year > b.year) {
            return 1;
          }
      
          return 0;
        });
      }
  }


