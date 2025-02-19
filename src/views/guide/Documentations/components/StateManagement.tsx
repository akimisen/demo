/* eslint-disable react/no-unescaped-entities */
import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const StateManagement = () => {
    return (
        <>
            <p>
                In this template, we've integrated Zustand for state management.
                Zustand is a small, fast, and scalable state management solution
                that allows you to manage state outside of the React component
                tree, providing a more efficient way to handle global state
                across your application.
            </p>
            <p>
                We use Zustand to manage some of the core states in the
                template, but it's entirely optional for you to continue using
                it in your projects. If you prefer a different state management
                library or even the built-in React state, you can easily switch
                to what best suits your needs.
            </p>
            <div className="mt-10" id="creating-zustand-state">
                <h5>Creating a Zustand State</h5>
                <p>
                    Creating a Zustand store is straightforward. Below is an
                    example of how you can create a global state to manage a
                    simple counter:
                </p>
                <SyntaxHighlighter language="typescript">
                    {`import create from 'zustand'

type CouterState = {
    count: number
}

type CouterAction = {
    increaseCount: () => void
    decreaseCount: () => void
}

// Define the store
const useCounterStore = create<CouterState & CouterAction>((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore`}
                </SyntaxHighlighter>
                <p>
                    In this example, we've created a store with a{' '}
                    <code>count</code> state and two actions:{' '}
                    <code>increaseCount</code> and <code>decreaseCount</code>.
                    These actions update the state by increasing or decreasing
                    the <code>count</code>.
                </p>
            </div>
            <div className="mt-10" id="using-zustand-state">
                <h5>Using Zustand State in a Component</h5>
                <p>
                    Once you've created the store, using it in a component is
                    simple. Here's how you can integrate the{' '}
                    <code>useCounterStore</code> into a React component:
                </p>
                <SyntaxHighlighter language="tsx">
                    {`import useCounterStore from './path/to/store'

const Counter = () => {
    const { count, increaseCount, decreaseCount } = useCounterStore()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}

export default Counter`}
                </SyntaxHighlighter>
                <p>
                    In this component, we use the <code>useCounterStore</code>{' '}
                    hook to access the <code>count</code> state and the two
                    actions. The UI updates automatically whenever the state
                    changes, and the buttons allow the user to interact with the
                    state.
                </p>
            </div>
            <p>
                This is just a basic example to get you started. Zustand is
                flexible and can be used for more complex state management
                scenarios as your application grows. If you want to explore more
                advanced usage, we recommend checking out the official{' '}
                <a
                    href="https://zustand.docs.pmnd.rs/getting-started/introduction"
                    target="_blank"
                    rel="noreferrer"
                >
                    Zustand documentation
                </a>
                .
            </p>
        </>
    )
}

export default StateManagement
