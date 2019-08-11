import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;
import {Theme} from './../Theme' ;

export default class Home extends React.Component {

    static contextType = Theme ;

    render() {

        return (
            <DocumentTitle title="home">
                
                <>
                    <Header />

                    <Main
                        // Factory anchors
                        anchors={
                            [
                                { path: "#abc", name:"abc" },
                                { path: "#def", name: "def ijk" }
                            ]
                        }
                    >
                    
                        {/* Write home content here */}

                        {/* factory data for test anchors */}
                        <section id="abc">
                            <h2>ABC</h2>
                            <p>Et et laboris magna magna sunt ea labore ad magna ut veniam tempor aliquip.</p>
                            <p>Culpa adipisicing commodo nostrud quis tempor dolor consectetur duis est ullamco incididunt ut nisi esse.</p>
                            <p>Exercitation aliquip anim dolore in dolor.</p>
                            <p>Ullamco cupidatat esse esse excepteur.</p>
                            <p>Tempor ad incididunt officia laborum elit quis ad duis esse cupidatat aliqua officia cillum enim.</p>
                            <p>Ipsum adipisicing enim dolore reprehenderit consequat.</p>
                            <p>Aliqua aliquip consectetur et commodo exercitation minim.</p>
                            <p>Laboris veniam irure ex fugiat aliqua ea dolor ad labore.</p>
                            <p>Eu ea exercitation non qui excepteur reprehenderit esse nisi mollit dolor.</p>
                            <p>Nulla do esse mollit magna do culpa et quis sunt amet voluptate commodo aliquip.</p>
                            <p>Exercitation in ut sint magna sunt dolore duis elit consectetur aliquip.</p>
                            <p>Ut eiusmod est veniam est commodo dolor ea et ullamco cillum irure.</p>
                            <p>Fugiat aute sunt consequat labore quis cupidatat sit ut aliquip voluptate nulla ullamco in duis.</p>
                            <p>Minim ipsum minim mollit occaecat eiusmod sint ullamco laboris culpa occaecat.</p>
                            <p>Culpa reprehenderit veniam quis sint do.</p>
                            <p>Eiusmod laboris eu commodo pariatur esse minim.</p>
                            <p>Non id commodo Lorem enim pariatur sunt amet occaecat quis ex officia consectetur adipisicing.</p>
                            <p>Deserunt enim do commodo duis sit esse eiusmod laborum velit officia Lorem.</p>
                            <p>Elit voluptate aliqua reprehenderit eu occaecat eiusmod esse veniam deserunt Lorem.</p>
                            <p>Nulla sunt aliqua pariatur eiusmod commodo officia sit esse quis.</p>
                            <p>Est aliquip eiusmod ullamco ipsum cupidatat pariatur occaecat est.</p>
                            <p>Laborum ad nisi et elit est excepteur amet in anim nostrud dolor.</p>
                            <p>Laborum est minim aute incididunt voluptate aliqua ut fugiat esse sint exercitation ut.</p>
                            <p>Enim nulla ex aute amet culpa non proident anim.</p>
                            <p>Nulla mollit enim pariatur anim ad incididunt aute velit fugiat quis qui aliqua consequat officia.</p>
                            <p>Irure ullamco commodo adipisicing enim minim duis magna dolore pariatur duis ut ex laboris.</p>
                            <p>Laborum pariatur do occaecat in proident nisi non voluptate pariatur velit duis ex voluptate sit.</p>
                            <p>Enim incididunt culpa aute aliquip elit pariatur sit aliquip.</p>
                            <p>Deserunt sint Lorem culpa dolore consequat culpa exercitation excepteur adipisicing nostrud nulla.</p>
                            <p>Lorem laboris veniam elit ea velit adipisicing ea velit nisi.</p>
                            <p>Ullamco laborum velit eu sit qui nisi veniam proident irure aliquip non enim eiusmod qui.</p>
                            <p>Eu quis veniam officia velit sit laborum aliquip mollit et dolore duis voluptate.</p>
                            <p>Deserunt eiusmod deserunt non aute nostrud pariatur eiusmod duis pariatur amet.</p>
                            <p>Proident culpa fugiat consectetur consectetur velit voluptate nostrud eu.</p>
                            <p>Sit dolore adipisicing veniam eu irure nulla ea laboris.</p>
                            <p>Ullamco tempor pariatur quis tempor enim velit officia dolor dolore.</p>
                            <p>Magna veniam qui ut velit Lorem anim.</p>
                            <p>Tempor dolor ullamco enim consectetur incididunt laboris nisi mollit Lorem.</p>
                            <p>Proident sunt sint consectetur ullamco quis.</p>
                            <p>Non tempor reprehenderit fugiat dolor excepteur.</p>
                        </section>

                        <section id="def">
                            <h2>DEF IJK</h2>
                            <p>Et et laboris magna magna sunt ea labore ad magna ut veniam tempor aliquip.</p>
                            <p>Culpa adipisicing commodo nostrud quis tempor dolor consectetur duis est ullamco incididunt ut nisi esse.</p>
                            <p>Exercitation aliquip anim dolore in dolor.</p>
                            <p>Ullamco cupidatat esse esse excepteur.</p>
                            <p>Tempor ad incididunt officia laborum elit quis ad duis esse cupidatat aliqua officia cillum enim.</p>
                            <p>Ipsum adipisicing enim dolore reprehenderit consequat.</p>
                            <p>Aliqua aliquip consectetur et commodo exercitation minim.</p>
                            <p>Laboris veniam irure ex fugiat aliqua ea dolor ad labore.</p>
                            <p>Eu ea exercitation non qui excepteur reprehenderit esse nisi mollit dolor.</p>
                            <p>Nulla do esse mollit magna do culpa et quis sunt amet voluptate commodo aliquip.</p>
                            <p>Exercitation in ut sint magna sunt dolore duis elit consectetur aliquip.</p>
                            <p>Ut eiusmod est veniam est commodo dolor ea et ullamco cillum irure.</p>
                            <p>Fugiat aute sunt consequat labore quis cupidatat sit ut aliquip voluptate nulla ullamco in duis.</p>
                            <p>Minim ipsum minim mollit occaecat eiusmod sint ullamco laboris culpa occaecat.</p>
                            <p>Culpa reprehenderit veniam quis sint do.</p>
                            <p>Eiusmod laboris eu commodo pariatur esse minim.</p>
                            <p>Non id commodo Lorem enim pariatur sunt amet occaecat quis ex officia consectetur adipisicing.</p>
                            <p>Deserunt enim do commodo duis sit esse eiusmod laborum velit officia Lorem.</p>
                            <p>Elit voluptate aliqua reprehenderit eu occaecat eiusmod esse veniam deserunt Lorem.</p>
                            <p>Nulla sunt aliqua pariatur eiusmod commodo officia sit esse quis.</p>
                            <p>Est aliquip eiusmod ullamco ipsum cupidatat pariatur occaecat est.</p>
                            <p>Laborum ad nisi et elit est excepteur amet in anim nostrud dolor.</p>
                            <p>Laborum est minim aute incididunt voluptate aliqua ut fugiat esse sint exercitation ut.</p>
                            <p>Enim nulla ex aute amet culpa non proident anim.</p>
                            <p>Nulla mollit enim pariatur anim ad incididunt aute velit fugiat quis qui aliqua consequat officia.</p>
                            <p>Irure ullamco commodo adipisicing enim minim duis magna dolore pariatur duis ut ex laboris.</p>
                            <p>Laborum pariatur do occaecat in proident nisi non voluptate pariatur velit duis ex voluptate sit.</p>
                            <p>Enim incididunt culpa aute aliquip elit pariatur sit aliquip.</p>
                            <p>Deserunt sint Lorem culpa dolore consequat culpa exercitation excepteur adipisicing nostrud nulla.</p>
                            <p>Lorem laboris veniam elit ea velit adipisicing ea velit nisi.</p>
                            <p>Ullamco laborum velit eu sit qui nisi veniam proident irure aliquip non enim eiusmod qui.</p>
                            <p>Eu quis veniam officia velit sit laborum aliquip mollit et dolore duis voluptate.</p>
                            <p>Deserunt eiusmod deserunt non aute nostrud pariatur eiusmod duis pariatur amet.</p>
                            <p>Proident culpa fugiat consectetur consectetur velit voluptate nostrud eu.</p>
                            <p>Sit dolore adipisicing veniam eu irure nulla ea laboris.</p>
                            <p>Ullamco tempor pariatur quis tempor enim velit officia dolor dolore.</p>
                            <p>Magna veniam qui ut velit Lorem anim.</p>
                            <p>Tempor dolor ullamco enim consectetur incididunt laboris nisi mollit Lorem.</p>
                            <p>Proident sunt sint consectetur ullamco quis.</p>
                            <p>Non tempor reprehenderit fugiat dolor excepteur.</p>
                        </section>
                    
                    </Main>
                </>

            </DocumentTitle>
        ) ;
    }
};
