import Home from './Home/Home';
import Course from './Course/Course';
import Future from './Future/Future';

export const routes = [

    { path: "/" , name: "accueil" , render: Home , active:'home' , exact: true },
    { path: "/course" , name: "hackathon" , render: Course  , active:'course', exact: false },
    { path: "/future" , name: "web étudiant" , render: Future , active: 'future' , exact: false }

] ;
