import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpHelper } from '../../Helper/HttpHelper';
import { DtoResultObj } from '../../Model/DtoRec/DtoResult';
import { Fun } from '../../Config/Fun';
import { TreeComponent, ITreeOptions } from 'angular-tree-component';
import { Router } from '@angular/router';

@Component({
  selector: 'Equipment',
  styleUrls: ['./equipment.scss'],
  template: `
    <nb-layout>
      <nb-sidebar>
        <tree-root #tree [nodes]="nodes" 
        (activate)="onSelect($event)"
        [options]="options"></tree-root>
      </nb-sidebar>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>      
  `,
})
export class EquipmentComponent  implements OnInit {
  @ViewChild('tree',{static:true}) tree: TreeComponent;

  menu = [];

    /** 菜单 */
    nodes = [];
    /** 配置 */
    options: ITreeOptions = {
      childrenField: "child",
      displayField: "v",
      idField: "k",
  
    };
  constructor(
      protected router: Router,
      private httpHelper: HttpHelper,
  ) {
  }
  
  ngOnInit() {
    this.LoadModule();
  }

  LoadModule() {
    this.httpHelper.Post("equipment/equipment/getTree", {key:0}).then((x: DtoResultObj<any>) => {
      if(!x.success){
        Fun.Hint(x.msg);
        return;
      }
      this.nodes=x.dataList;

    });
  }

  onSelect(obj) {
    console.log(obj.node.data);
    this.router.navigate(['pages/equipment/list'],{ queryParams: { id: obj.node.data.k} });
  }

}
