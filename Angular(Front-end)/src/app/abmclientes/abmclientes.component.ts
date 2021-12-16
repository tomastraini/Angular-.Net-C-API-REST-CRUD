import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-abmclientes',
  templateUrl: './abmclientes.component.html',
  styleUrls: ['./abmclientes.component.scss']
})
export class ABMClientesComponent implements OnInit {
  title = 'ProyectoAngularJS';
  li:any;
  col=["ID", "Fecha EXP", "CVV"]
  lis=[];
  constructor(private http : HttpClient){
  }
  postAgregarTar(data: any){
    console.log(data);
    this.http.post('https://localhost:44330/api/Cardlists', data).subscribe(Response => {

    })
  }
  ngOnInit(): void {
    this.http.get('https://localhost:44330/api/Cardlists')
    .subscribe(Response => {
      if(Response){ 
        hideloader();
      }
      console.log(Response)
      this.li=Response;
    });
    function hideloader(){
     console.log("Cargando...")
  }}
  onclickRow(val: any): void{
    console.log(val);
    
  }
  editid: any;
  edittarj: any;
  editcvv: any;

  modifClick(id: any, tarj: any, civv: any): void{
    this.editid = id;
    this.edittarj = tarj
    this.editcvv = civv;
  }


  putModifTar(datam: any){
    console.warn("DATOSSS: "+ datam);
    console.log(datam);
    const id_tarjeta = datam.idtarjm;
    var ModifTarjeta = 
    {
        "id_tarjeta": datam.idtarjm,
        "fechaexp": datam.fechaexpm,
        "cvv":datam.cvvm,
    };
    console.log("Modificar tarj: "+ModifTarjeta);
    this.http.put('https://localhost:44330/api/Cardlists/'+id_tarjeta, ModifTarjeta).subscribe(Response => {
      window.location.reload();
    })
  }
}

