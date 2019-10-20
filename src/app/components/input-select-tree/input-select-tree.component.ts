import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpHelper } from '../../Helper/HttpHelper';
import { DtoResultObj } from '../../Model/DtoRec/DtoResult';
import { Fun } from '../../Config/Fun';
import { TreeComponent, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'input-select-tree',
  templateUrl: './input-select-tree.component.html',
  styleUrls: ['./input-select-tree.component.scss']
})
export class InputSelectTreeComponent implements OnInit {
  
  @ViewChild('tree', { static: false }) tree: TreeComponent;

  /**
   * 接口地址
   */
  @Input()
  ApiUrl: string


  @Input()
  PostEnt: any

  /** 菜单 */
  nodes = [];
  /** 配置 */
  @Input()
  options: ITreeOptions = {
  };

  /**
   * 当前绑定的配置
   */
  thisOptions: ITreeOptions = {
  };



  /**
   * 当前选中的ID列表
   */
  selectList=[];
  /**
  * 自定义model变量
  */
  private _myModel:string;
  /**
   * 返回父组件变化后的值
   */
  @Input()
  get myModel() {
    return this._myModel;
  }

  /**
   * 组件值产生变化后父组件改变
   * @param value
   */
  set myModel(value) {
    this._myModel = value;
    this.myModelChange.emit(value);
  }
  @Output()
  myModelChange: EventEmitter<any> = new EventEmitter();

  ListData: any;
  constructor(
    public httpHelper: HttpHelper,
  ) { 

  }

  ngOnInit() {
    console.log("input-select-tree的参数")
    console.log("ApiUrl："+this.ApiUrl);
    console.log("options:"+this.options);
    this.thisOptions=null;
    this.thisOptions=this.options;

    this.LoadNodes();
    
  }

  LoadNodes() {
    console.log(this._myModel)
    Fun.ShowLoading();
    
    this.httpHelper.Post(this.ApiUrl, this.PostEnt).then((x: DtoResultObj<any>) => {
      Fun.HideLoading();

      console.log(x.dataList)
      
      this.nodes =Fun.makeTreeJson(x.dataList,"parentId","id","children",null);
      console.log(this.nodes)
      console.log(this.myModel)
      if (this.myModel != null) {
        this.selectList=this.myModel.toString().split(',')
        console.log(this.selectList)
        this.selectList.forEach(element => {
          // this.tree.treeModel.setActiveNode(this.tree.treeModel.nodes[0],true)
        });
      }
    });
  }

  onSelect(obj) {
    // console.log(obj)
    // console.log(this.tree);
    // var tmp = this.tree.treeModel.selectedLeafNodeIds;
    // console.log(tmp)
    // this.selectList = []
    // for (const key in tmp) {
    //   if (tmp[key]) {
    //     this.selectList.push(key);
    //   }
    // }
    // this.myModel=this.selectList.join(",");
  }

  activateChange(obj) {
    // console.log(obj)
    // console.log(this.tree);
    var tmp = this.tree.treeModel.getActiveNode();
    // console.log(tmp)

    this.myModel=tmp.data.id;
  }

}
