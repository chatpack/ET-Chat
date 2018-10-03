/** ******************************************************************************************************
 *
 *  error.service.ts
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
import { MatSnackBar }              from '@angular/material';

// abstract class Message
export interface Message {
  // action property
  readonly action: string;
  // message property
  readonly message: string;
}

// abstract class AbstractMessage
abstract class AbstractMessage implements Message {
  // action property
  readonly action: string;
  // message
  private _message: string = "";
  // message property
  public get message(): string { return this._message; }
  // Constructor
  constructor( message: string ) { this._message = message; }
}

// class Error
class Error extends AbstractMessage {
  static _action: string = "Error";
  // action property
  public get action(): string { return Error._action; }
  // Constructor
  constructor( message: string ) { super( message ); } 
}

// class Warning
class Warning extends AbstractMessage {
  static _action: string = "Warning";
  // action property
  public get action(): string { return Warning._action; }
  // Constructor
  constructor( message: string ) { super( message ); }  
}

// class Info
class Info extends AbstractMessage {
  static _action: string = "Info";
  // action property
  public get action(): string { return Info._action; }
  // Constructor
  constructor( message: string ) { super( message ); }
}

// class Debug
class Debug extends AbstractMessage {
  static _action: string = "Debug";
  // action property
  public get action(): string { return Debug._action; }
  // Constructor
  constructor( message: string ) { super( message ); }
}

// class Log
export class Log {
  private _messages: Message[] = [] as Message[];
  // constructor
  constructor( public service: ErrorService ) { }
  // log a message to the messages
  private log( message: Message ) { 
    this._messages.push( message );
    this.service.notify( message );
  }
  // log error messages
  public error( message: string ) { this.log( new Error( message )); }
  // log warning messages
  public warning( message: string ) { this.log( new Warning( message )); }
  // log info messages
  public info( message: string ) { this.log( new Info( message )); }
  // log debug messages
  public debug( message: string ) { this.log( new Debug( message )); }
}

/**
 *  Error Service.
 *  Logs and displays messages.
 */
@Injectable()
export class ErrorService {
  // log
  private _log: Log = null;
  //
  public get log(): Log { return this._log; };
  /**
   *  Constructor
   */
  constructor( private _snackbar: MatSnackBar ) { this._log = new Log( this ); }
  /**
   *  Notify the user via the snackbar.
   */
  public notify( message: Message ) {
    this._snackbar.open( message.message, message.action, { duration: 5000 });
  }
}