import Home from './Home/Home';
import Course from './Course/Course';
import Future from './Future/Future';

export const routes = [

    { path: "/" , name: "accueil" , render: Home , exact: true },
    { path: "/course" , name: "cours" , render: Course , exact: false },
    { path: "/future" , name: "avenir" , render: Future , exact: false }

] ;
