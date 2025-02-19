/* eslint-disable react/no-unescaped-entities */
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const FirebaseIntegration = () => {
    return (
        <>
            <p>
                Firebase is a platform developed by Google that provides a wide
                range of tools and services to help you build mobile and web
                applications. It offers backend services like authentication,
                real-time databases, cloud storage, and hosting, making it a
                powerful choice for developers.
            </p>
            <p>
                Our template includes basic Firebase integration out of the box.
                If your application uses Firebase, this guide will help you
                seamlessly incorporate Firebase into the template.
            </p>

            <div className="mt-10" id="prerequisites">
                <h5>Prerequisites</h5>
                <ul className="mt-1">
                    <li>
                        <p>
                            Create a Firebase project in the Firebase Console.
                        </p>
                        <ol>
                            <li>
                                Go to the{' '}
                                <a
                                    target="_new"
                                    href="https://console.firebase.google.com/"
                                >
                                    Firebase Console
                                </a>{' '}
                                and create a new project.
                            </li>
                            <li>
                                Once your project is set up, click the "Web"
                                option to add a web app to your project.
                            </li>
                            <li>
                                Follow the instructions to register the app and
                                obtain your Firebase configuration object.
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>

            <div className="mt-10" id="setup-firebase-config">
                <h5>Set Up Firebase Configuration</h5>
                <ul>
                    <li>
                        <p>
                            Navigate to the <code>firebase.config.ts</code> file
                            in the <code>/configs</code> directory of the
                            template. Place your Firebase configuration details
                            in this file, which you can find in your Firebase
                            Console. For better security, it's recommended to
                            store these values in a <code>.env</code> file.
                        </p>
                        <SyntaxHighlighter language="js">{`const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export default firebaseConfig`}</SyntaxHighlighter>
                    </li>
                    <li>
                        <p>
                            Example firebase cofig in <code>.env</code> file.
                        </p>
                        <SyntaxHighlighter language="js">{`VITE_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxxxxxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxxxxxxxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxxxxxxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxx
VITE_FIREBASE_APP_ID=xxxxxxxxxx
VITE_FIREBASE_MEASUREMENT_ID=G-xxxxxxxxxx`}</SyntaxHighlighter>
                    </li>
                </ul>
            </div>

            <div className="mt-10" id="initialize-firebase">
                <h5>Initialize Firebase</h5>
                <p>
                    We have initialized a basic Firebase instance in{' '}
                    <code>src/services/firebase/FirebaseApp.ts</code>. This
                    initialization serves as a base for setting up other
                    Firebase services like Firebase Authentication and Firebase
                    Firestore. You can add additional Firebase packages as
                    needed.
                </p>
                <SyntaxHighlighter language="ts">{`import { initializeApp } from "firebase/app"

import firebaseConfig from '@/configs/firebase.config';

const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp`}</SyntaxHighlighter>
            </div>

            <div className="mt-10" id="integrating-firebase">
                <h5>Integrate Firebase</h5>
                <p>
                    This section will guide you through examples of signing in
                    with Firebase and retrieving data from Firebase.
                </p>
                <ul>
                    <li>
                        <strong>Sign in with Firebase Oauth</strong>
                        <p>
                            Firebase supports various authentication methods,
                            including passwords, phone numbers, and popular
                            identity providers like Google, Facebook, and
                            Twitter.
                        </p>
                        <p>
                            Below is an example of integrating Google OAuth.
                            First, create a file named{' '}
                            <code>FirebaseGoogleAuth.ts</code> and set up a{' '}
                            <code>signInWithFirebaseGoogle</code> method:
                        </p>
                        <SyntaxHighlighter language="ts">{`import {
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import FirebaseAuth from './FirebaseAuth';

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithFirebaseGoogle = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, googleAuthProvider);
        const token = await resp.user.getIdToken()
        return {
            token,
            user: resp.user
        }
    } catch (error) {
        throw error
    }
}`}</SyntaxHighlighter>
                        <p>
                            Next, import this method into{' '}
                            <code>OAuthService.ts</code> under the{' '}
                            <code>apiGoogleOauthSignIn</code> function:
                        </p>
                        <SyntaxHighlighter language="ts">{`import { signInWithFirebaseGoogle } from './firebase/FirebaseGoogleAuth'

export async function apiGoogleOauthSignIn() {
    return await signInWithFirebaseGoogle()
}`}</SyntaxHighlighter>
                        <p>
                            Now, integrate it with your sign-in button. Ensure
                            that <code>apiGoogleOauthSignIn</code> is called
                            within the <code>oAuthSignIn</code> method from the{' '}
                            <code>useAuth</code> hook to update the state after
                            OAuth login is complete.
                        </p>
                        <SyntaxHighlighter language="tsx">{`import Button from '@/components/ui/Button'
import { useAuth } from '@/auth'
import { apiGoogleOauthSignIn } from '@/services/OAuthServices'

const OauthSignIn = () => {

    const { oAuthSignIn } = useAuth()

    const handleGoogleSignIn = async () => {
        oAuthSignIn(async ({redirect, onSignIn}) => {
            try {
                const resp = await apiGoogleOauthSignIn()
                if (resp) {
                    const { token, user } = resp
                    onSignIn({accessToken: token}, user)
                    redirect()
                }
            } catch (error) {
                console.error(error)
            }
        })
    }

    return (
        <Button className="flex-1" onClick={handleGoogleSignIn} type="button">
            <div className="flex items-center justify-center gap-2">
                <span>Sign in with Google</span>
            </div>
        </Button>
    )
}

export default OauthSignIn`}</SyntaxHighlighter>
                    </li>
                    <li>
                        <strong>Sign in with Firebase Email & Password</strong>
                        <p>
                            If you want to use sign-in with email and password
                            with Firebase, you can use the{' '}
                            <code>signInWithEmailAndPassword</code> method
                            within <code>apiSignIn</code> in{' '}
                            <code>AuthService.ts</code>. Here’s an example:
                        </p>
                        <SyntaxHighlighter language="ts">{`import { signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseAuth from './firebase/FirebaseAuth';

export async function apiSignIn(data: SignInCredential) {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, data.email, data.password);
        const token = await resp.user.getIdToken();
        return {
            token,
            user: resp.user,
        };
    } catch (error) {
        throw new Error('Sign in failed:' + error);
    }
}`}</SyntaxHighlighter>
                    </li>
                    <li>
                        <strong>Retrieve Data from Firebase</strong>
                        <p>
                            Here's an example of how to retrieve data from
                            Firebase Firestore. In this example, we fetch a
                            user's data from the Firestore database and display
                            it in a component.
                        </p>
                        <SyntaxHighlighter language="tsx">{`import { doc, getDoc } from "firebase/firestore"; 
import db from "@/services/firebase/FirebaseDB";
import { useEffect, useState } from "react";

const Example = () => {

    const [data, setData] = useState<{firstName?: string, lastName?: string}>({})

    useEffect(() => {
        const getData = async () => {
            try {
                const docRef = doc(db, "users", "1");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data())
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error('Error fetching document:', error)
            }
        }
        getData()
    }, [])

    return (
        <div>
            {data?.firstName} {data?.lastName} 
        </div>
    )
}

export default Example`}</SyntaxHighlighter>
                    </li>
                </ul>
            </div>
            <div className="mt-10" id="removing-firebase">
                <h5>Removing Firebase</h5>
                <p>
                    If your app does not required firebase, you can delete{' '}
                    <code>firebase.config.ts</code> & the entire{' '}
                    <code>/firebase</code> folder under{' '}
                    <code>src/services</code>
                </p>
            </div>
            <div className="mt-10" id="conclusion">
                <h5>Conclusion</h5>
                <p>
                    You can now leverage Firebase's powerful features to enhance
                    the functionality and user experience of your application.
                </p>
                <p>
                    For more detailed information on using Firebase services, be
                    sure to refer to the{' '}
                    <a target="_new" href="https://firebase.google.com/docs">
                        Firebase documentation
                    </a>
                    .
                </p>
            </div>
        </>
    )
}

export default FirebaseIntegration
