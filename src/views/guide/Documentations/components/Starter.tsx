/* eslint-disable react/no-unescaped-entities */
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import { NavLink } from 'react-router-dom'

const Starter = () => {
    return (
        <>
            <p>
                As mentioned in the{' '}
                <NavLink to="/docs/documentation/installation">
                    Installation
                </NavLink>{' '}
                section, we've provided a starter version with the essential
                core components and basic functionality setup. We highly
                recommend that developers use this version as the foundation for
                building their apps.
            </p>
            <p>
                When you open the starter pack in your local environment, you'll
                be directed to the login page. You can sign in using the
                credentials <i>user: admin | password: 123Qwe</i>.
            </p>
            <i>
                Note: The starter version has the mock API enabled by default.
                All API calls will point to the mock server. If you want to
                disable this feature or learn more about the mock API, check out
                the{' '}
                <NavLink to="/docs/documentation/mock-api">Mock API</NavLink>{' '}
                documentation.
            </i>
            <div className="mt-10" id="defaultConfig">
                <h5>Default Configurations</h5>
                <p>
                    Below are some of the default configurations for the starter
                    version. You can modify these settings to suit your needs.
                </p>
                <p className="mb-2">
                    <strong>AppConfig</strong> -{' '}
                    <NavLink to="/docs/documentation/app">
                        Documentation
                    </NavLink>
                </p>
                <SyntaxHighlighter language="js">{`const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    accessTokenPersistStrategy: 'cookies',
    enableMock: true,
    activeNavTranslation: false
}
`}</SyntaxHighlighter>
                <p className="mb-2">
                    <strong>ThemeConfig</strong> -{' '}
                    <NavLink to="/docs/documentation/overall-theme-config">
                        Documentation
                    </NavLink>
                </p>
                <SyntaxHighlighter language="js">{`export const themeConfig: ThemeConfig = {
    schema: 'default',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
`}</SyntaxHighlighter>
                <p className="mb-2">
                    <strong>RoutesConfig</strong> -{' '}
                    <NavLink to="/docs/documentation/routing">
                        Documentation
                    </NavLink>
                </p>
                <SyntaxHighlighter language="js">{`const publicRoutes = [
    {
        key: 'signIn',
        path: '/sign-in',
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: '/sign-up',
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: '/forgot-password:id',
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: '/reset-password',
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },
]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
]
`}</SyntaxHighlighter>
                <p className="mb-2">
                    <strong>NavConfig</strong> -{' '}
                    <NavLink to="/docs/documentation/routing">
                        Documentation
                    </NavLink>
                </p>
                <SyntaxHighlighter language="js">{`const navigationConfig = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    }
]
`}</SyntaxHighlighter>
            </div>
        </>
    )
}

export default Starter
