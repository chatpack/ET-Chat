/** ******************************************************************************************************
 *
 *  pipe.i18n.ts
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

import { Inject }             from "@angular/core";
import { LOCALE_ID }          from "@angular/core";
import { Pipe }               from "@angular/core";
import { PipeTransform }      from "@angular/core";

import { ActivatedRoute }     from "@angular/router";

@Pipe({
    name: "i18n",
    pure: true    // don't use property change detection
})
export class I18nPipe implements PipeTransform {
    // Note:  pipes must be included in the declarations array of the AppModule.

    /** locale string for use with all i18n instaces */
    private static locale: string;
    
    /** name of the current component */
    private component: string | any = null;

    /** read only for injection */
    @Inject( LOCALE_ID ) 
    public _locale: string;

    constructor( /* private i18nService: I18nService, */
                 private route: ActivatedRoute ) {
      
      this.component = this.route.component;
      this.validateLocale();
    }

    /**
     *  Validate the locale for existence and correctness.
     *  Pattern example: de-DE
     */
    private validateLocale(): void {
      if ( ! I18nPipe.locale ) {
           
           if ( ! this._locale ) {
                let dfltlocale = "en";
                I18nPipe.locale = ( window ? ( window.navigator ? ( window.navigator.language ? window.navigator.language : dfltlocale ) : dfltlocale) : dfltlocale );
           } // else there is some injected locale => use it.
           else I18nPipe.locale = this._locale;

           if ( I18nPipe.locale.length === 2 ) {
                I18nPipe.locale = I18nPipe.locale + "-" + I18nPipe.locale.toUpperCase();
           } // else ensure locale is like "de-DE" and NOT "de-de""
           else I18nPipe.locale = I18nPipe.locale.substring( 0, 2 ) + "-" + I18nPipe.locale.substring( 3 );
      }    
    }

    private format( format: string, args?: any ) {
      args = args || [];
      return format.replace( /{(\d+)}/g, function( match, number ) { 
        return typeof args[ number ] != 'undefined' ? args[ number ] : match;
      });
    }

    /**
     *  Returns the current locale.
     */
    public getLocale(): string { return I18nPipe.locale; }

    /**
     *  Pipe::transform( phrase: any, args?: any ): any
     *
     *  Override of interface method.
     */
    public transform( phrase: any, args?: any ): any {
        if (( this.component ) && ( this.component.i18n ) && 
            ( this.component.i18n[ this.getLocale()]))     {
              try {
                let retval = this.component.i18n[ this.getLocale()][ phrase ];
                // console.log( "Request to transform: '" + phrase + "' - retval: '" + retval + "' (1)" );
                    retval = (!retval) ? phrase : this.format( retval, args );
                // console.log( "                      '" + phrase + "' - retval: '" + retval + "' (2)" );
                return retval;
              }
              catch ( err ) { console.error( "Pipe:i18n::transform( ... ) - " + err ); }
        }
        return phrase;
    }
}