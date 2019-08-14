import React from 'react';
import * as firebase from 'firebase';
import {Theme} from './../Theme' ;
import './Contact.css';
import firebaseImg from './firebase.png';
import firebaseConfig from './../firebase.config' ;

export default class Contact extends React.Component {

    static contextType = Theme ;

    state = {

        textarea: "Bonjour ..." ,
        firebase: {
            db: null ,
            contact: null ,
            data: [] ,
            status: null
        }

    } ;

    constructor(props) {

        super(props) ;

        this.actionContact = this.actionContact.bind( this ) ;
        this.textareaChange = this.textareaChange.bind( this ) ; 
    }

    
    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e
     */
    textareaChange(e) {

        this.setState( { textarea: e.target.value } ) ;
    }

    /**
     * @bindMethod [constructor]
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

                this.setState({firebase: {
                    status: (<div className="send-status success">
                        <p>
                          message envoyé avec succés stocké sur&nbsp;
                          <a  href="https://fr.wikipedia.org/wiki/Firebase">
                              <img
                                src={firebaseImg}
                                width="25"
                                height="25"
                                alt="logo firebase"
                              />&nbsp;
                              firebase
                          </a>
                        </p>
                    </div>)
                }
            }) ;
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

                <h2>Me Contacté</h2>

                <form
                    className={`${this.state.firebase.status ? 'hide' : ''}`} 
                    onSubmit={e => {
                        e.preventDefault() ;
                        this.actionContact( e , e.target['email'].value , e.target['content'].value ) ;
                    }  }
                >

                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" autoComplete="off" placeholder="sample@gestion.ext" name="email" type="email"/>
                    </div>
                    
                    <div>
                        <label htmlFor="content">contenu</label>
                        <textarea
                            type="text"
                            id="content"
                            name="content"
                            value={this.state.textarea}
                            onChange={this.textareaChange}    
                        />
                    </div>

                    <div>
                        <button type="submit">envoyer</button>
                    </div>


                </form>
                {this.state.firebase.status}

            </section>
        ) ;
    }
};
