import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const Internationalization = () => {
    return (
        <>
            <p>
                Ecme uses{' '}
                <a
                    rel="noopener"
                    target="_new"
                    href="https://react.i18next.com/"
                >
                    <strong>react-i18next</strong>
                </a>{' '}
                for internationalization, making it easy to manage and translate
                text across different languages. The relevant files are located
                in the <code>src/locales/</code> directory.
            </p>
            <div className="mt-10" id="translatingText">
                <h5>Translating text</h5>
                <p className="mt-1">
                    To translate text within your components, you can use the{' '}
                    <code>useTranslation</code> hook provided by Ecme. This hook
                    wraps the standard <code>useTranslation</code> from{' '}
                    <code>react-i18next</code> and allows you to access the
                    translation function <code>t</code> for translating keys
                    defined in your locale files.
                </p>
                <SyntaxHighlighter language="tsx">{`import { useTranslation } from '@/utils/hooks/useTranslation'

const Component = () => {

    const { t } = useTranslation()

    return (
        <div>{t('your.translate.key')}</div>
    )
}

export default Component`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="changingLanguage">
                <h5>Changing language</h5>
                <p className="mt-1">
                    If you need to switch languages dynamically, you can use the{' '}
                    <code>i18n</code> object provided by the{' '}
                    <code>useTranslation</code> hook to change the current
                    language.
                </p>
                <SyntaxHighlighter language="tsx">{`import { useTranslation } from 'react-i18next'

const Component = () => {

    const { i18n } = useTranslation()

    return (
        <button onClick={() => i18n.changeLanguage('fr')}>Change language</button>
    )
}

export default Component`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="addNewLocale">
                <h5>Add new locale</h5>
                <p className="mt-1">
                    We store all the locale data under{' '}
                    <code>src/locales/lang/*</code>. To add a new locale, create
                    a Json file under this directory. For example{' '}
                    <code>fr.json</code>
                </p>
                <SyntaxHighlighter language="json">{`{
    "your": {
        "translate": {
            "key": "votre clé de traduction"
        },
    }
}`}</SyntaxHighlighter>
                <p>
                    Now you can import this file into{' '}
                    <code>src/locales/index.ts</code> & inject them to{' '}
                    <code>resources</code> field, this is the entry file of all
                    locales. Also, create an object to load date locale
                    dynamically from{' '}
                    <a
                        href="https://github.com/iamkun/dayjs/tree/dev/src/locale"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <code>dayjs</code>
                    </a>
                    .
                </p>
                <SyntaxHighlighter language="ts">{`import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './lang/en.json'
import fr from './lang/fr.json'

const resources = {
    en: {
        translation: en
    },
    fr: { // <--- this key will be the value you use on changeLanguage method
        translation: fr
    },
}

// Consistent the key with resource to load relavant locale from day.js
export const dateLocales: {
    [key: string]: () => Promise<ILocale>;
} = {
    en: () => import('dayjs/locale/en'),
    fr: () => import('dayjs/locale/fr'),
}

`}</SyntaxHighlighter>
                <p>And, the new locale is basically set.</p>
            </div>
            <div className="mt-10" id="settingDefaultLanguage">
                <h5>Setting the Default Language</h5>
                <p className="mt-1">
                    To set the default language, you might need to visit{' '}
                    <code>src/configs/app.config.ts</code> and change the{' '}
                    <code>locale</code> field value
                </p>
                <SyntaxHighlighter language="ts">{`export const appConfig: AppConfig = {
    ...
    locale: 'fr'
}`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="turnOnTranslationForNavigation">
                <h5>Turn on translation for navigation</h5>
                <p className="mt-1">
                    We have embeded the translation feature into the navigation,
                    but it is not active by default at starter. To turn it on,
                    you might need to visit{' '}
                    <code>src/configs/app.config.ts</code> and change the{' '}
                    <code>activeNavTranslation</code> field to <code>true</code>
                </p>
                <SyntaxHighlighter language="ts">{`const appConfig: AppConfig = {
    ...
    activeNavTranslation: true
}`}</SyntaxHighlighter>
            </div>
            <div className="mt-10" id="injectLocleToTheApp">
                <h5>Inject locale to the App</h5>
                <p className="mt-1">
                    Now you might need to inject the locale setup to{' '}
                    <code>App.tsx</code>
                </p>
                <SyntaxHighlighter language="ts">{`...
import './locales'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            ...
        </Theme>
    )
}

export default App
`}</SyntaxHighlighter>
            </div>
        </>
    )
}

export default Internationalization
