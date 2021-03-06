import { LocalStorageHelper } from './LocalStorageHelper';

export class CookiesHelper  extends LocalStorageHelper {

	// /**
	//  * Gets a  cookie by it's name
	//  *
	//  * @param  {string} cookieName Name/ID of cookie
	//  * @returns Cookies value
	//  */
  // public static GetCookie(cookieName: string): string {

  //   let cookieExists = this.Exists(cookieName);

  //   if (cookieExists) {
  //     cookieName = encodeURIComponent(cookieName);

  //     let regexp = new RegExp('(?:^' + cookieName + '|;\\s*' + cookieName + ')=(.*?)(?:;|$)', 'g');
  //     // console.log(document.cookie)
  //     let cookies = regexp.exec(document.cookie);
  //     // console.log(cookies)
  //     let restr=decodeURIComponent(cookies[1]);
  //     if (restr == null  || restr == ""|| restr == "null") {
  //       return '';
  //     }
  //     return restr;
  //   }
  //   else {
  //     return '';
  //   }
  // }

	// /**
	//  * Sets the Cookie by name
	//  *
	//  * @param  {string} cookieName Name/ID of cookie
	//  * @param  {string} value cookie value
	//  * @param  {number} validity expiration date of cookie (default is minutes).
	//  * @param  {string} validityType Unit for specifying validity time: days || hours . If left blank, default validity is in minutes
	//  * @param  {string} domain Set a specific domain for the cookie to be reachable at
	//  * @param  {string} path Path relative to domain
	//  * @param  {boolean} needsSecureConnection true/false if cookie can only be accessed through secure
	//  */
  // public static SetCookie(cookieName: string, value: string, validity?: number, validityType?: string, domain?: string, path?: string, needsSecureConnection?: boolean) {

  //   let cookieStr = encodeURIComponent(cookieName) + '=' + encodeURIComponent(value) + ';';

	// 	/**
	// 	 * Sets validity of cookie
	// 	 */
  //   if (validity) {

  //     let fullValidity = validity * 1000 * 60;

  //     if (validityType == 'days') {
  //       fullValidity *= (60 * 24);
  //     }
  //     else if (validityType == 'hours') {
  //       fullValidity *= 60;
  //     }

  //     let daysValid = new Date(new Date().getTime() + fullValidity);

  //     cookieStr += 'expires=' + daysValid.toUTCString() + ';';
  //   }

  //   if (path) {
  //     cookieStr += 'path=' + path + ';';
  //   }

  //   if (domain) {
  //     cookieStr += 'domain=' + domain + ';';
  //   }

  //   if (needsSecureConnection) {
  //     cookieStr += 'secure;';
  //   }
  //   console.log('删除cookie')
  //   console.log(cookieStr)
  //   document.cookie = cookieStr;
  // }

  // public static GetObjectCookie(cookieName: string): object {
  //   let restr = this.GetCookie(cookieName)
  //   if (restr == null  || restr == ""|| restr == "null") {
  //     return null;
  //   }
  //   return JSON.parse(restr)
  // }

	// /**
	//  * Sets the Cookie by name
	//  *
	//  * @param  {string} cookieName Name/ID of cookie
	//  * @param  {string} value cookie value
	//  * @param  {number} validity expiration date of cookie (default is minutes).
	//  * @param  {string} validityType Unit for specifying validity time: days || hours . If left blank, default validity is in minutes
	//  * @param  {string} domain Set a specific domain for the cookie to be reachable at
	//  * @param  {string} path Path relative to domain
	//  * @param  {boolean} needsSecureConnection true/false if cookie can only be accessed through secure
	//  */
  // public static SetObjectCookie(cookieName: string, obj: object, validity?: number, validityType?: string, domain?: string, path?: string, needsSecureConnection?: boolean) {
  //   let value: string = JSON.stringify(obj);
  //   this.SetCookie(cookieName, value, validity, validityType, domain, path, needsSecureConnection)
  // }

	// /**
	//  * Deletes a specific cookie
	//  *
	//  * @param  {string} cookieName Name/ID of cookie
	//  * @param  {string} domain Set a specific domain for the cookie to be reachable at
	//  * @param  {string} path Path relative to domain
	//  */
  // public static DeleteCookie(cookieName: string, domain?: string, path?: string) {
    
  //   for (let index = 0; index < 5; index++) {
  //     let cookieExists = this.Exists(cookieName);
  //     if (!cookieExists) {
  //       break;
  //     }
  //     this.SetCookie(cookieName, '', -1, domain, path);
  //   }
  // }

	// /**
	//  * Checks if the cookie exists
	//  * @param  {string} cookieName Name/ID of cookie
	//  * @returns existence of the cookie
	//  */
  // public static Exists(cookieName: string): boolean {

  //   cookieName = encodeURIComponent(cookieName);

  //   let regexp = new RegExp('(?:^' + cookieName + '|;\\s*' + cookieName + ')=(.*?)(?:;|$)', 'g');
  //   let exists = regexp.test(document.cookie);

  //   return exists;
  // }

}