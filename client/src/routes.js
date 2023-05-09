import {
    HOME_PAGE_ROUTE,
    QUESTION_PAGE_ROUTE,
    NEW_QUESTION_ROUTE,
    PROFILE_ROUTE,
    EDIT_PROFILE_ROUTE, 
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE,
} from './utils/routes_consts';

import HomePageContainer from "./components/HomePage/HomePageContainer";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import Profile from "./components/Profile/Profile";
import EditProfilePage from "./components/Edit/Edit";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import NewQuestion from "./components/NewQuestion/NewQuestion";

export const authRoutes = [
    {
        path: PROFILE_ROUTE + '/:id',
        Component: Profile
    },
    {
        path: EDIT_PROFILE_ROUTE + '/:id',
        Component: EditProfilePage
    },
    {
        path: NEW_QUESTION_ROUTE,
        Component: NewQuestion
    },

];

export const publicRoutes = [
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
        Component: HomePageContainer
    },
    {
        path: QUESTION_PAGE_ROUTE,
        Component: QuestionPage
    }
];



