import crypto from "crypto";

function _Encode( message : string ) {
    const hmac = crypto.createHmac( 'sha3-256', "dd04f494146594a879fbb02ee011bc95887b8b5a01645fd23f1ceaf0b7a163c7" );
    hmac.update( Buffer.from( String( message ), 'utf-8' ) );
    return hmac.digest("hex")
}

function _Compare( message:string , encryptedMessage:string ) {
    return _Encode( message ) == encryptedMessage;
}

export default { _Compare, _Encode }
