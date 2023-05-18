import {
    HOME_PAGE_ROUTE,
    QUESTION_PAGE_ROUTE,
    NEW_QUESTION_ROUTE,
    PROFILE_ROUTE,
    EDIT_PROFILE_ROUTE, 
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE,
    RULES_PAGE_ROUTE,
    ADMIN_PAGE_ROUTE,
} from './utils/routes_consts';

import Home from "./pages/Home"
import Question from "./pages/Question";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NewQuestion from "./pages/NewQuestion";
import Rules from "./pages/Rules";
import Admin from './pages/Admin';

export const authRoutes = [
 
    {
        path: EDIT_PROFILE_ROUTE + "/:id",
        Component: EditProfile
    },
    {
        path: NEW_QUESTION_ROUTE,
        Component: NewQuestion
    },
    {
        path: ADMIN_PAGE_ROUTE,
        Component: Admin
    }

];

export const publicRoutes = [
    {
        path: PROFILE_ROUTE + "/:id",
        Component: Profile
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: HOME_PAGE_ROUTE,
        Component: Home
    },
    {
        path: QUESTION_PAGE_ROUTE + "/:id",
        Component: Question
    },
    {
        path: RULES_PAGE_ROUTE,
        Component: Rules
    }
];



