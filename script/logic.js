// Examples

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
        return this.firstName + " " + this.lastName;
    };
  }

// real code

var ceo = new Employee("Jeffrey", "Immelt", "jeffrey.immelt@ge.com", null);

var defaultEmployee = new Employee("Pedro", "Vega", "pedro.vega@mycompany.com", ceo);

function Employee(first, last, email, direct_superior) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.direct_superior = direct_superior;
    this.getName = function() {
        return this.firstName + " " + this.lastName;
    };
    this.setSuperior = function(newSuperior){
        this.direct_superior = newSuperior;
        console.log("the new boss of" + this.firstName + "is" +  newSuperior.name);
    };
  }

  