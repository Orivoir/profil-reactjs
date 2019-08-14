import React from 'react';
import * as firebase from 'firebase';
import {Theme} from './../Theme' ;
import './Contact.css';
import firebaseConfig from './../firebase.config' ;

export default class Contact extends React.Component {

    static contextType = Theme ;

    state = {

        firebase: {
            db: null ,
            contact: null ,
            data: [] ,
        }

    } ;

    constructor(props) {

        super(props) ;

        this.actionContact = this.actionContact.bind( this ) ;
    }

    /**
     * @bindMethod
     * @param {SyntheticEvent} e
     * @param {string} email
     * @param {string} content
     */
    actionContact( e , email , content ) {

        e.preventDefault() ;

        const { contact } = this.state.firebase ;

        if( !contact ) {

            console.error( 'firebase state null' );

        } else {

            contact.add( {
                email: email , 
                text: content ,
                dateAt: Date.now()
            } ).then( () => {

                // Data save with success ;
            } )
            .catch( e => {

                // Error save date ;
                console.error( 'error save data' , e );
            } )
        }

    }
    
    componentWillMount() {
 
        firebase.initializeApp(firebaseConfig);
        const
            db = firebase.firestore() ,
            contact = db.collection('contact')
        ;

        this.setState( { firebase: {
            db: db ,
            contact: contact
        } } ) ;

    }

    render() {

        return (
            <section
                id="contact"
                className={`contact ${this.context.theme}`}
            >

                <form onSubmit={e => {
                    e.preventDefault() ;
                    this.actionContact( e , e.target['email'].value , e.target['content'].value ) ;
                }  }>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" autoComplete="off" placeholder="sample@gestion.ext" name="email" type="email"/>
                    </div>
                    
                    <div>
                        <label htmlFor="content">contenu</label>
                        <textarea type="text" id="content" name="content" value="Bonjour ..." />
                    </div>

                    <div>
                        <button type="submit">envoyer</button>
                    </div>

                </form>

            </section>
        ) ;
    }
};
