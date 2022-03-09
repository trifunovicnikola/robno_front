export class Customer {
  id: number;
  imageSrc: string;
  firstName: string;
  lastName: string;
  street: string;
  zipcode: number;
  city: string;
  phoneNumber: string;
  mail: string;
  labels:string;


  constructor(customer) {
    this.id = customer.id;
    this.imageSrc = customer.Broj_fakture;
    this.firstName = customer.Datum_fakture;
    this.lastName = customer.sifra_dobavljaca;
    this.street = customer.Broj_stavki;
    this.zipcode = customer.Broj_artikla;
    this.city = customer.Iznos_bez_PDVa;
    this.phoneNumber = customer.PDV_iznos;
    this.mail = customer.Iznos_sa_PDVom;
    this.labels=customer.label;
  }

  get name() {
    let name = '';

    if (this.firstName && this.lastName) {
      name = this.firstName + ' ' + this.lastName;
    } else if (this.firstName) {
      name = this.firstName;
    } else if (this.lastName) {
      name = this.lastName;
    }

    return name;

  }

  set name(value) {
  }

  get address() {
    return `${this.street}, ${this.zipcode} ${this.city}`;

  }

  set address(value) {
  }
}
