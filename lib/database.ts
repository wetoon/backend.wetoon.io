import firebase from "firebase-admin";
import { uuidv7 } from "uuidv7";

type FirebaseServiceAccount = {
    project_id: string;
    databaseURL: string;
    private_key: string;
    client_email: string;
}

function InitializeApplication( service:FirebaseServiceAccount ) {
    if ( firebase.apps.length !== 0 ) return firebase.app();
    return firebase.initializeApp({
        databaseURL: service.databaseURL,
        credential: firebase.credential.cert({
            projectId: service.project_id,
            privateKey: service.private_key,
            clientEmail: service.client_email,
        })
    })
}

class Collection {

    private CollectionName : string;
    public constructor( name:string ) {
        this.CollectionName = name;
    }

    public async create( metadata:object[] ) : Promise<void> {
        return firebase.database().ref( '/'.concat( this.CollectionName , '/' , uuidv7() ) ).set( metadata )
    }

    public async findAll() : Promise<object[]> {
        return firebase.database().ref( '/'.concat( this.CollectionName ) ).get().then( collections => {
            const result = new Array();
            if ( collections.exists() ) {
                const response = collections.val();
                for ( const collection of Object.keys( response ) ) {
                    result.push({
                        __id: collection,
                        ...response[collection]
                    })
                }
            }
            return result
        })
    }
    
}

export { InitializeApplication as InitializeFirebase , Collection }
