/** ******************************************************************************************************
 *
 *  foreward.service.ts
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

import { Injectable }             from "@angular/core";
import { CanActivate }            from "@angular/router";
import { CanLoad }                from "@angular/router";
import { Router }                 from "@angular/router";

import { AuthenticationService }  from "./auth.service";

@Injectable()
export class RoutingForewardService implements CanActivate, CanLoad {

  constructor( private router: Router,
               private authservice: AuthenticationService ) {}

  canActivate(): boolean {
    console.log( "RoutingForewardService::canActivate - auth required:    '" + this.authservice.isAuthenticationRequired() + "' " +
                                                       "is authenticated: '" + this.authservice.isAuthenticated()          + "' " );

    let foreward = [ "dashboard" ];
    console.log( "RoutingForewardService::canActivate - foreward to:   '" + foreward + "'" );
    this.router.navigate( foreward );
    return false;
  }

  canLoad(): boolean {
    console.log( "RoutingForewardService::canLoad - auth required:    '" + this.authservice.isAuthenticationRequired() + "' " +
                                                   "is authenticated: '" + this.authservice.isAuthenticated()          + "' " );

    let foreward = [ "dashboard" ];
    console.log( "RoutingForewardService::canLoad - foreward to:   '" + foreward + "'" );
    this.router.navigate( foreward );
    return false;
  }
}