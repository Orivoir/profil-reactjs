import Home from './Home/Home';
import Course from './Course/Course';
import Future from './Future/Future';
import PackagesNPM from './PackagesNPM/PackagesNPM';

export const routes = [

    { path: "/" , name: "accueil" , render: Home , active:'home' , exact: true },
    { path: "/course" , name: "hackathon" , render: Course  , active:'hackathon', exact: false },
    { path: "/future" , name: "web étudiant" , render: Future , active: 'web étudiant' , exact: false },
    { path: "/packages" , name: "NPM Packages" , render: PackagesNPM , active: 'packages npm' , exact: false },

] ;
