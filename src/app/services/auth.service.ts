/** ******************************************************************************************************
 *
 *  auth.service.ts
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

import { Injectable }               from '@angular/core';

import { AuthService }              from "angular-6-social-login-temp";
import { FacebookLoginProvider }    from "angular-6-social-login-temp";
import { GoogleLoginProvider }      from "angular-6-social-login-temp";
import { LinkedInLoginProvider }    from "angular-6-social-login-temp";

/**
 *  Error Service.
 *  Logs and displays messages.
 */
@Injectable()
export class AuthenticationService {
  /** String constant "facebook" */
  public static FACEBOOK = "facebook";

  /** String constant "google" */
  public static GOOGLE = "google";

  /** String constant "linkedin" */
  public static LINKEDIN = "linkedin";

  /** Cache the service used to authenticate. */
  private currentauthservice: any = null;

  /** Authenticated user data */
  private authdata: any = null;

  /**
   *  Constructor
   */
  constructor( private remoteauthservice: AuthService ) { 
    this.remoteauthservice.authState.subscribe((user) => {
      this.authdata = { user: user };
    });
  }
  
  /**
   *  Returns a list of available social connectors.
   *  TODO: make returned list configurable...
   */
  public getConnectors(): Array<String> {
    return [ AuthenticationService.FACEBOOK,
             AuthenticationService.GOOGLE,
             AuthenticationService.LINKEDIN ];
  }

  /**
   *  Returns true if the app is run by an authenticated user.
   */
  public isAuthenticated(): boolean { return false; }
  
  /**
   *  Returns true if the app require authentication.
   */
  public isAuthenticationRequired(): boolean { return true; }

  /**
   *  Called to sign in - authenticate against Google/Facebook/LinkedIn
   */
  signIn( service: string ): void {
    if ( ! service ) {
         throw new Error( "Authenticationservice: '" + service + "' not yet supported." ); 
    }
    else if ( this.currentauthservice ) {
              throw new Error( "Authenticationservice: already signed in." ); 
    }
    else if ( service === AuthenticationService.FACEBOOK ) {
              this.currentauthservice = this.remoteauthservice;
              this.currentauthservice.signIn( FacebookLoginProvider.PROVIDER_ID );
    }
    else if ( service === AuthenticationService.GOOGLE ) {
              this.currentauthservice = this.remoteauthservice;
              this.currentauthservice.signIn( GoogleLoginProvider.PROVIDER_ID );
    }
    else if ( service === AuthenticationService.LINKEDIN ) {
              this.currentauthservice = this.remoteauthservice;
              this.currentauthservice.signIn( LinkedInLoginProvider.PROVIDER_ID );
    }
    else throw new Error( "Authenticationservice: '" + service + "' unsupported." );    
  }

  /**
   *  Called to sign out (from Google/Facebook/LinkedIn)
   */
  signOut(): void {
    if ( this.currentauthservice ) {
         try { this.currentauthservice.signOut(); }
         finally {
               // TODO: log error using errorserice
               this.currentauthservice = null;
         }
    }
  }
}