/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { Platform, LoadingController, ToastController, AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from './Lib/ngx-translate/public_api';
import { Fun } from './Config/Fun';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
    platform: Platform,
    _loadingCtrl: LoadingController,
    _toastCtrl: ToastController,
    _alertCtrl: AlertController,
    _translate: TranslateService,
    _modalCtrl: ModalController,
    private localeService: BsLocaleService,

  ) {
    Fun.Init(_loadingCtrl, _toastCtrl, platform, _alertCtrl, _translate, _modalCtrl);
    this.localeService.use('zh-cn');

  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
