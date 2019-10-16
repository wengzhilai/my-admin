import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FileItem, ParsedResponseHeaders, FileUploader } from '../../Lib/ng2-file-upload';
import { Variables } from '../../Config/Variables';

@Component({
  selector: 'ngx-up-single-pic',
  templateUrl: './up-single-pic.component.html',
  styleUrls: ['./up-single-pic.component.scss']
})
export class UpSinglePicComponent {
  @Input()
  CanEdit: boolean = true

  @Output()
  ChangeFileJson: EventEmitter<any> = new EventEmitter<any>();


  /**
  * 自定义model变量
  */
 private _myModel;
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

  uploader: FileUploader = new FileUploader({
    url: Variables.Api_Upfile,
    method: "POST",
    itemAlias: "file",
    autoUpload: true,
    allowedFileType: ["image", "xls", "txt"],
  });
  /**
   * 返回的信息列表
   */
  _reMsgList: Array<any> = [];
  constructor(
  ) {
    console.log("UpFileComponent")
    this.init();
  }

  init() {
    console.log('ionViewDidLoad UpFileComponent');
    //上传一个文件成功的回调 
    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
      console.log(item)
      console.log(filter)
      console.log(options)
      console.log('选择文件类型不允许')
      console.log('该文件类型无效：[' + item.name + '] 只允许上传[' + options.allowedFileType.join(',') + ']')
    }

    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false
    })
    this.uploader.onCompleteAll = () => {
      console.log('上传完成')
      this.ReturnJson();
    };
    this.uploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      console.log("成功一个")
      console.log(response)

      let tempRes = JSON.parse(response);
      if (tempRes.IsSuccess) {
        this._reMsgList.push(tempRes.Data)
      }
      console.log(tempRes)
    };
    this.uploader.onAfterAddingAll = (fileItems: any) => {
      console.log("添加完所有的")
      console.log(fileItems)
    }

  }

  ReturnJson() {
    console.log('返回值')
    //所有列表，包括没有成功的，和没有上传的
    let tmpMsgList = []
    // console.log(this.uploader.queue)
    this.uploader.queue.forEach(e => {
      console.log(e)
      if (e.isSuccess) {
        for (var index = 0; index < this._reMsgList.length; index++) {
          var msg = this._reMsgList[index];
          if (msg.NAME == e.file.name) {
            tmpMsgList.push(msg)
            break;
          }
        }
      }
    })
    this._reMsgList = tmpMsgList;
    // console.log(this._reMsgList)
    this.ChangeFileJson.next(tmpMsgList)
  }
}