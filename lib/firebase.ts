#!/usr/bin/env node

import firebase from "firebase-admin";
import { uuidv7 } from "uuidv7";

type firebaseServiceAccount = {
    type?: string
    project_id: string
    private_key_id?: string
    private_key: string
    client_email: string
    client_id?: string
    auth_uri?: string
    token_uri?: string
    auth_provider_x509_cert_url?: string
    client_x509_cert_url?: string
    universe_domain?: string
}

interface firebaseResult {
    __id?: string,
    [ key:string ]: any
}

function FirebaseInitializeApp( databaseURL : string , { project_id, private_key, client_email } : firebaseServiceAccount ) : firebase.app.App {
    return ( firebase.apps.length !== 0 ) ? firebase.app() : firebase.initializeApp({
        databaseURL, credential: firebase.credential.cert({
            projectId: project_id, privateKey: private_key, clientEmail: client_email
        })
    })
}

class Collection {

    private name : string;
    public constructor( CollectionName : string ) {
        this.name = CollectionName;
    }

    public async create( metadata : object ) : Promise< void > {
        return firebase.database().ref( ''.concat( '/' , this.name , '/' , uuidv7() ) ).set( metadata );
    }

    public async findAll() : Promise< firebaseResult[] > {
        return firebase.database().ref( '/'.concat( this.name ) ).get().then( snapshot => {
            const results = new Array;
            if ( snapshot.exists() ) {
                const collections = snapshot.val();
                for ( const collection of Object.keys( collections ) ) {
                    results.push({
                        __id: collection,
                        ...collections[collection]
                    })
                }
            }
            return results;
        })
    }

    public async find( search : { [ key:string ] : any } ) : Promise< firebaseResult | undefined > {
        return this.findAll().then( collections => {
            return collections.find( item => {
                for ( const key in search ) {
                    if ( search.hasOwnProperty(key) && item[key] !== search[key] ) {
                        return false;
                    }
                }
                return true;
            })
        })
    }

    public async removeAll() : Promise< void > {
        return firebase.database().ref( '/'.concat( this.name ) ).remove()
    }

    public async remove( filter : { [ key:string ] : any } ) : Promise< void > {
        const { __id } = await this.find( filter ) as { __id?:string };
        if ( !__id ) return;
        return firebase.database().ref( '/'.concat( this.name , '/' , __id ) ).remove();
    }

    public async update( __id : string , metadata : { [ key:string ] : any } ) {
        if ( metadata.__id ) {
            delete metadata.__id;
        }
        return firebase.database().ref( '/'.concat( this.name , '/' , __id ) ).update( metadata );
    }

}

async function firebaseExportsDatabase( parseJSON : boolean = true ) {
    const data = ( await firebase.database().ref('/').get() ).toJSON();
    return parseJSON ? JSON.stringify( data ) : data
}

export default { InitializeApplication : FirebaseInitializeApp , useExports : firebaseExportsDatabase , Collection }
export { FirebaseInitializeApp as InitializeApplication };
export { firebaseExportsDatabase as useExports }
export { Collection }
