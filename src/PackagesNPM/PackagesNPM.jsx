import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;
import NavItems from './../NavItems/NavItems' ;
import './PackagesNPM.css';
import {Theme} from './../Theme' ;

export default class PackagesNPM extends React.Component {

    static contextType = Theme;

    render() {

        return (
            <DocumentTitle title="packages">

                <>
                    <Header />

                    <Main
                        route="/"
                        anchors={
                            [
                                // anchors format
                                // { path: "/#nav-items", name:"get started" } ,
                            ]
                        }
                    >

                        {/* navigable element banner */}
                        <NavItems />

                        <section className={`${this.context.theme} package-header`}>
                            <h1>
                                NPM Packages develop and maintener
                            </h1>

                            <h2>
                                Express middlewares
                            </h2>
                        </section>

                        <ul className={`${this.context.theme} packages-list`}>

                            <li>
                                <section>
                                    <h1>
                                        <a href="https://www.npmjs.com/package/express-live-reloading">
                                            express-live-reloading
                                        </a>
                                    </h1>
                                    <h2>
                                        live reloading middleware express for fast dev .
                                    </h2>
                                    <ul>
                                        <li>npm install express-live-reloading --save-dev</li>
                                        <li>yarn add express-live-realoading --dev</li>
                                    </ul>
                                    <h3>
                                        <a href="https://github.com/Orivoir/express-live-reloading">
                                            git contribute
                                        </a>
                                    </h3>
                                </section>
                            </li>

                            <li>
                                <section>
                                    <h1>
                                        <a href="https://www.npmjs.com/package/express-session-synchronize-socket.io">
                                            express-session-synchronize-socket.io
                                        </a>
                                    </h1>
                                    <h2>
                                        express middleware session can use with socket.io have synchronizer session method and micro-service get session HTTP
                                    </h2>
                                    <ul>
                                        <li>npm install express-session-synchronize-socket.io --save</li>
                                        <li>yarn add express-session-synchronize-socket.io</li>
                                    </ul>
                                    <h3>
                                        <a href="https://github.com/Orivoir/express-session-synchronize-socket.io">
                                            git contribute
                                        </a>
                                    </h3>
                                </section>
                            </li>

                            <li>
                                <section>
                                    <h1>
                                        <a href="https://www.npmjs.com/package/express-langs">
                                            express-langs
                                        </a>
                                    </h1>
                                    <h2>
                                        resolve langagues accept in header request get array langagues with request.langs
                                    </h2>
                                    <ul>
                                        <li>npm install express-langs --save</li>
                                        <li>yarn add express-langs</li>
                                    </ul>
                                    <h3>
                                        <a href="https://github.com/Orivoir/express-langs">
                                            git contribute
                                        </a>
                                    </h3>
                                </section>
                            </li>

                        </ul>


                    </Main>
                </>

            </DocumentTitle>
        ) ;
    }
};
