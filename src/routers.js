import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SettingPage from './pages/SettingPage/SettingPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ArticleDetailPage from './pages/ArticleDetailPage/ArticleDetailPage';
import NewArticlePage from './pages/NewArticlePage/NewArticlePage';

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/login',
        exact: false,
        main: () => <LoginPage />
    },
    {
        path: '/register',
        exact: false,
        main: () => <RegisterPage />
    },
    {
        path: '/settings',
        exact: false,
        main: () => <SettingPage />
    },
    {
        path: '/article/:slug',
        exact: false,
        main: () => <ArticleDetailPage />
    },
    {
        path: '/editor/:slug',
        exact: false,
        main: () => <NewArticlePage />
    },
    {
        path: '/editor',
        exact: false,
        main: () => <NewArticlePage />
    },
    {
        path: '/editor/:slug',
        exact: false,
        main: () => <NewArticlePage />
    },
    {
        path: '/Profile@:username',
        exact: false,
        main: () => <ProfilePage />
    },
    {
        path: '/@:username',
        exact: false,
        main: () => <ProfilePage />
    },

];

export default routers;