/* eslint-disable react/no-unescaped-entities */
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'
import DemoComponentApi from '@/components/docs/DemoComponentApi'

const Authentication = () => {
    return (
        <>
            <p>
                This guide provides an overview of the authentication system
                implemented in the template
            </p>
            <div className="mt-10" id="useAuth">
                <h5>useAuth</h5>
                <p className="mt-1">
                    The authentication system is managed through the{' '}
                    <code>AuthProvider</code> component, which should wrap your
                    application or relevant parts of it. It manages auth states
                    and provides the following methods via the{' '}
                    <code>useAuth</code> hook:
                </p>
                <DemoComponentApi
                    hideApiTitle
                    keyText="properties"
                    api={[
                        {
                            api: [
                                {
                                    propName: 'authenticated',
                                    type: `<code>boolean</code>`,
                                    default: `-`,
                                    desc: 'A boolean indicating whether the user is currently authenticated.',
                                },
                                {
                                    propName: 'user',
                                    type: `<code>{
        userId: string
        userName: string
        authority: string[]
        avatar: string
        email: string
    }</code>`,
                                    default: `-`,
                                    desc: `An object containing the user's details, such as <code>userName</code>, <code>email</code>, and <code>authority</code>`,
                                },
                                {
                                    propName: 'signIn',
                                    type: `<code>(values: {email: string, password: string}) => Promise<{status: 'success' | 'failed', message: string}></code>`,
                                    default: `-`,
                                    desc: `A method to sign in a user with their credentials </p>`,
                                },
                                {
                                    propName: 'signUp',
                                    type: `<code>(values: {userName: string, email: string, password: string}) => Promise<{status: 'success' | 'failed', message: string}></code>`,
                                    default: `-`,
                                    desc: `A method to register a new user`,
                                },
                                {
                                    propName: 'signOut',
                                    type: `<code>() => void</code>`,
                                    default: `-`,
                                    desc: `A method to sign out the current user`,
                                },
                                {
                                    propName: 'oAuthSignIn',
                                    type: `<code>callback: (payload: {
    onSignIn: (tokens: Token, user?: User) => void
    redirect: () => void
}) => void</code>`,
                                    default: `-`,
                                    desc: `A method to handle OAuth sign-in callbacks for third-party authentication providers.</p>`,
                                },
                            ],
                        },
                    ]}
                />
                <p>Here's how you can use the useAuth hook in components:</p>
                <SyntaxHighlighter language="tsx">{`import { useAuth } from '@/auth'

const YourComponent = () => {
    const { signIn, signOut, user, authenticated } = useAuth();

    const handleLogin = async () => {
        const credentials = { email: 'user@example.com', password: 'password' };
        const result = await signIn(credentials);
        if (result?.status === 'success') {
            console.log('Logged in successfully');
        }
        if (result?.status === 'failed') {
            console.error('Failed to login')
        }
    };

    const handleLogout = () => {
        signOut();
    };

    return (
        <div>
            {authenticated ? <p>Welcome, {user.userName}</p> : <p>Please log in</p>}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="OAuth">
                <h5>OAuth Sign-In</h5>
                <p className="mt-1">
                    If you're implementing OAuth with third-party providers, the{' '}
                    <code>oAuthSignIn</code> method will be essential. You can
                    use it within your OAuth callback to complete the sign-in
                    process and manage tokens.
                </p>
                <SyntaxHighlighter language="tsx">{`import { useAuth } from '@/auth'
import SomeOauthSdkSignInMethod from 'SomeOauthSdk'

const YourComponent = () => {
    const { oAuthSignIn } = useAuth();

    const handleOAuthSignIn = () => {

        oAuthSignIn(async ({redirect, onSignIn}) => {
            try {
                const resp = await SomeOauthSdkSignInMethod()
                if (resp) {
                    /** extract token & user information for the response */ 
                    const { token, user } = resp
                    onSignIn({accessToken: token}, user)
                    redirect()
                }
            } catch (error) {
                console.error('Failed to login')
            }
        })
    }

    const handleLogout = () => {
        signOut();
    };

    return (
        <button onClick={handleOAuthSignIn}>Login with OAuth</button>
    );
};
`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="customizing-data-model">
                <h5>Customizing the Data Models</h5>
                <p className="mt-1">
                    Since not all applications having the same data model, you
                    can customize the data structures in{' '}
                    <code>@/types/auth.ts</code> and{' '}
                    <code>@/auth/AuthProvider.ts</code> to suit your needs.
                    Adjust the types and interfaces defined for{' '}
                    <code>User</code>, <code>Token</code>, and other
                    authentication-related entities according to your
                    application's requirements.
                </p>
                <SyntaxHighlighter language="ts">{`// Example: Modifying the User type
export type User = {
    userId?: string | null
    avatar?: string | null
    userName?: string | null
    email?: string | null
    authority?: string[]
    // Add your custom fields here
    role?: string | null
};
`}</SyntaxHighlighter>
                <div className="mt-10" id="useAuth">
                    <h5>Diving into AuthProvider</h5>
                    <p className="mt-1">
                        If the default authentication implementation doesn't
                        meet your needs, feel free to dive into the{' '}
                        <code>AuthProvider</code> to make any necessary
                        modifications. This component handles the core logic for
                        authentication, including token management, session
                        handling, and more. Customizing this logic can help you
                        better align the authentication system with your
                        application's specific requirements.
                    </p>
                    <SyntaxHighlighter language="tsx">{`...
import { apiSignIn, apiSignOut, apiSignUp } from '@/services/AuthService'

function AuthProvider({ children }: AuthProviderProps) {
    
    ...

    const handleSignIn = (...) => {
        ... /** Your implementation here */
    }

    const handleSignOut = () => {
        ... /** Your implementation here */
    }

    const signIn = async (values: SignInCredential): AuthResult => {
        try {
            const resp = await apiSignIn(values)
            if (resp) {
                handleSignIn(...)
            }
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const signOut = async () => {
        try {
            await apiSignOut()
        } finally {
            handleSignOut()
            navigate(appConfig.unAuthenticatedEntryPath)
        }
    }
    ...   
    
    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            ...
        }}>
            {children}
        </AuthContext.Provider>
    )
}
`}</SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}

export default Authentication
