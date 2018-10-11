/** ******************************************************************************************************
 *
 *  auth.login.component.ts
 *
 *  © 2018 ch4tp4ck
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 *  LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 *  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 *  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 ******************************************************************************************************* */

import { Location }                   from "@angular/common";
import { Component }                  from "@angular/core";
import { Router }                     from "@angular/router";

import { AuthenticationService }      from "../services/auth.service";
import { DefineService }              from "../services/define.service";

// Webpack: loader will replace import
import "./auth.login.component.scss";

const EMPTY = "";

const ERROR_MANDATORY  = "mandatory field";
const ERROR_ACCEPTANCE = "acceptance required";

const FILENAME_IMPRINT = "/imprint.html";
const FILENAME_TOS     = "/tos.html";
const FILENAME_COOKIE  = "/cookie.html";
const FILENAME_PPOLICY = "/privacypolicy.html";

export class LocalLoginData {
  /** id (username/email) data */
  public id: string = null;
  /** errormessage for id field */
  public iderror: string = null;

  /** password data */
  public password: string = null;
  /** errormessage for id field */
  public passworderror: string = null;

  /** accept cookies flag */
  public cookies: boolean = false;
  /** errormessage for cookies checkbox */
  public cookieserror: string = null;

  /** accept tos flag */
  public tos: boolean = false;
  /** errormessage for tos checkbox */
  public toserror: string = null;

  /** values injected via webpack.DefinePlugin */
  private defines: DefineService = null;

  /** constructor */
  constructor( defines: DefineService ) {
    this.defines = defines;
    console.dir( defines );
  }
  
  /**
   *  Returns true, if last line which holds links and 
   *  accepts should be displayed.
   */
  public displayLastLine(): boolean {
    let retval: boolean = this.defines.link_imprint           ||
                          this.defines.link_ppolicy           ||
                          this.defines.link_tos               ||
                          this.defines.require_accept_cookies ||
                          this.defines.require_accept_tos;
    return retval;
  }

  /**
   *  Returns true, if imprint link should be displayed.
   */
  public displayImprint(): boolean {
    return this.defines.link_imprint;
  }

  /**
   *  Returns true, if privacy policy link should be displayed.
   */
  public displayPrivacyPolicy(): boolean {
    return this.defines.link_ppolicy;
  }

  /**
   *  Returns true, if imprint link should be displayed.
   */
  public displayTOS(): boolean {
    return this.defines.link_tos;
  }

  /**
   *  Returns true, if cookies must be accepted.
   */
  public requireAcceptCookies(): boolean {
    return this.defines.require_accept_cookies;
  }

  /**
   *  Returns true, if tos must be accepted.
   */
  public requireAcceptTOS(): boolean {
    return this.defines.require_accept_tos;
  }

  /**
   *  Send valid data to server
   *  Note: not accessible by view!
   */
  private send(): void {
    if ( this.formIsValid()) {
         // TODO: request login
    }
    else return;
  }

  /** on change login editfield */
  public validateLogin(): void {
    this.iderror = null;
    if ( ! this.id ) {
         this.iderror = ERROR_MANDATORY;
    }
  }

  /** on change password editfield */
  public validatePassword(): void {
    this.passworderror = null;
    if ( ! this.password ) {
         this.passworderror = ERROR_MANDATORY;
    }
  }

  /** on change cookies checkbox */
  public validateCookies(): void {
    this.cookieserror = null;
    if ( ! this.cookies ) {
         this.cookieserror = ERROR_ACCEPTANCE;
    }
    this.send();
  }

  /** on change tos checkbox */
  public validateTOS(): void {
    this.toserror = null;
    if ( ! this.tos ) {
         this.toserror = ERROR_ACCEPTANCE;
    }
    this.send();
  }

  /** on click login button */
  public onLocalLogin(): void {
    this.validateLogin();
    this.validatePassword();
    this.validateCookies();
    this.validateTOS();
    this.send();
  }

  /** validate form login data */
  public formIsValid(): boolean {
    return (( ! this.iderror )       &&
            ( ! this.passworderror ) &&
            ( ! this.cookieserror )  &&
            ( ! this.toserror ));
  }

}


@Component({
  selector:      "auth-login",                            // replace "auth-login" by template content (never used)
  template:      require( "./auth.login.component.html" ) // require resolves relative to current directory/file
                                                          // Webpack: loader will replace require statement
})
export class LoginComponent { 
  
  /** sozial connectors - to login via fb, google, ... */
  public connectors: Array<String> = null;

  /** prepare for i18n pipe optimization */
  // Webpack: loader will replace require statment
  public static i18n = { "de-DE": require( "./auth.login.component.de-DE.json" ) };

  /** save credentials and validate local login form */
  public login: any = null;
 
  constructor( private router: Router,
               private location: Location,
               private authservice: AuthenticationService,
               private defines: DefineService ) { 

    this.connectors = authservice.getConnectors();

    this.login = new LocalLoginData( this.defines );
  }
  
  /** transform path to a valid url segment */
  public toURL( path: string ): string {
    return this.location.prepareExternalUrl( path );
  }

  /** returns the URL to the imprint page */
  public imprintURL(): string {
    let path = this.defines.url_path_imprint || EMPTY;
    let file = this.defines.filename_imprint || FILENAME_IMPRINT;
    return this.toURL( path + file );
  }

  /** returns the URL to the tos page */
  public tosURL(): string {
    let path = this.defines.url_path_tos || EMPTY;
    let file = this.defines.filename_tos || FILENAME_TOS;
    return this.toURL( path + file );
  }

  /** returns the URL to the cookie page */
  public cookieURL(): string {
    let path = this.defines.url_path_cookies || EMPTY;
    let file = this.defines.filename_cookies || FILENAME_COOKIE;
    return this.toURL( path + file );
  }

  /** returns the URL to the private policy page */
  public privatepolicyURL(): string {
    let path = this.defines.url_path_ppolicy || EMPTY;
    let file = this.defines.filename_ppolicy || FILENAME_PPOLICY;
    return this.toURL( path + file  );
  }

  public signIn( service: string ): void {
    this.authservice.signIn( service );
  }

  public signOut(): void {
    this.authservice.signOut();
  }
}