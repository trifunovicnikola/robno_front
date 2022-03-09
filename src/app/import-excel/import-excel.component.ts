import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ImportExportServisService } from '../import-export-servis.service';

@Component({
  selector: 'vex-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.scss']
})
export class ImportExcelComponent implements OnInit {

  constructor( private fb:FormBuilder, private servis:ImportExportServisService) { }

  pomocniZaKalk:any;
  pomocniZaStavke:any;
  
  unosFajlovi = this.fb.group(
    {
      pomocniZaKalk:[null, Validators.required],
      pomocniZaStavke:[null, Validators.required]
    }
  )

  ngOnInit(): void {

    sessionStorage.clear();
    console.log(this.unosFajlovi.valid);
    
  }

  downloadMyFile1(){
    // const link = document.createElement('a');
    // link.setAttribute('target', '_blank');

    // link.setAttribute('href', sessionStorage.getItem('prvi'));
    // link.setAttribute('download', `PomocniZkalk.xlsx`);
    // document.body.appendChild(link);
    // link.click();
    // link.remove();

    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets';
    link.download = "Pomocni Zkalk.xlsx";
    document.body.appendChild(link);
    link.click();
    link.remove();


}

downloadMyFile2(){
  // const link = document.createElement('a');
  // link.setAttribute('target', '_blank');

  // link.setAttribute('href', sessionStorage.getItem('prvi'));
  // link.setAttribute('download', `PomocniZkalk.xlsx`);
  // document.body.appendChild(link);
  // link.click();
  // link.remove();

  let link = document.createElement('a');
  link.setAttribute('type', 'hidden');
  link.href = 'assets';
  link.download = "pomocni za stavke.xlsx";
  document.body.appendChild(link);
  link.click();
  link.remove();


}


  uploadExcel1(e:any) {
  
  try{
  
  const fileName = e.target.files[0].name;
  
  import('xlsx').then(xlsx => {
    let workBook:any = null;
    let jsonData = null;
    const reader = new FileReader();
    // const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = xlsx.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial:any, name:any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = xlsx.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.unosFajlovi.controls['pomocniZaKalk'].setValue = jsonData[Object.keys(jsonData)[0]];
      this.servis.pomocni_Zkalk= this.unosFajlovi.controls['pomocniZaKalk'];
      console.log(this.unosFajlovi.controls['pomocniZaKalk'].setValue);

    };
    reader.readAsBinaryString(e.target.files[0]);
  });

}catch(e){
   console.log('error', e);
}

}


uploadExcel2(e:any) {
  
  try{
  
  const fileName = e.target.files[0].name;
  
  import('xlsx').then(xlsx => {
    let workBook:any = null;
    let jsonData = null;
    const reader = new FileReader();
    // const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = xlsx.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial:any, name:any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = xlsx.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.unosFajlovi.controls['pomocniZaStavke'].setValue = jsonData[Object.keys(jsonData)[0]];
      this.servis.pomocni_za_stavke = this.unosFajlovi.controls['pomocniZaStavke'].setValue;
      console.log(this.unosFajlovi.controls['pomocniZaStavke'].setValue);

    };
    reader.readAsBinaryString(e.target.files[0]);
  });

}catch(e){
   console.log('error', e);
}

}






submit()
{
  let prvi = this.unosFajlovi.controls['pomocniZaKalk'].value;
  let drugi = this.unosFajlovi.controls['pomocniZaStavke'].value;
  
  
  this.pomocniZaKalk = this.unosFajlovi.controls['pomocniZaKalk'].setValue;
  this.pomocniZaStavke= this.unosFajlovi.controls['pomocniZaStavke'].setValue;
  // console.log(this.pomocniZaKalk.length);
  // console.log(this.pomocniZaKalk[0]);
  
  for(let i =0 ; i<this.pomocniZaKalk.length;i++)
  {
    if(this.pomocniZaKalk[i].Broj_fakture && this.pomocniZaKalk[i].Datum_fakture && this.pomocniZaKalk[i].sifra_dobavljaca && this.pomocniZaKalk[i].Broj_stavki && this.pomocniZaKalk[i].Broj_artikla && this.pomocniZaKalk[i].Iznos_sa_PDVom && this.pomocniZaKalk[i].PDV_iznos && this.pomocniZaKalk[i].Iznos_bez_PDVa  )
    {
      continue;
    }else{
      alert("nije svako polje popunjeno u fajlu Pomocni Zkalk")
      return console.log("nije svako polje popunjeno u fajlu Pomocni Zkalk");
      
    }
  }

  for(let i =0 ; i<this.pomocniZaStavke.length;i++)
  {
    if(this.pomocniZaStavke[i].sifra_dobavljaca  && this.pomocniZaStavke[i].naziv_dobavljaca  && this.pomocniZaStavke[i].broj_fakture && this.pomocniZaStavke[i].datum_fakture && this.pomocniZaStavke[i].sifra_artikla && this.pomocniZaStavke[i].naziv_artikla && this.pomocniZaStavke[i].kataloski_broj && this.pomocniZaStavke[i].jedinica_mjere && this.pomocniZaStavke[i].kolicina && this.pomocniZaStavke[i].PDV_u_procentima && this.pomocniZaStavke[i].nabavna_cijena_sa_PDV && this.pomocniZaStavke[i].iznos_bez_PDV && this.pomocniZaStavke[i].PDV_iznos  && this.pomocniZaStavke[i].iznos_bez_PDVa )
    {
      continue;
    }else{
      alert("nije svako polje popunjeno u fajlu pomocni za stavke")
      return console.log("nije svako polje popunjeno u fajlu pomocni za stavke");
      
    }
  }

  sessionStorage.setItem('prvi', prvi);
  console.log("uspjesno dodat pomocni zkalk");
  sessionStorage.setItem('drugi', drugi);
  console.log("uspjesno dodat pomocni za stavke");
  
  
  

  
  //sessionStorage.getItem()
}

}
