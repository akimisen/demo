/* eslint-disable react/no-unescaped-entities */
const Updating = () => {
    return (
        <>
            <p>
                Since the platform doesn't include a built-in version control
                system, updating your templates can be challenging. However,
                here are some tips to help you keep your templates up to date
                more easily.
            </p>
            <ul>
                <li>
                    Before starting a new project, consider hosting the original
                    template in your own repository.
                </li>
                <li>
                    Create a branch from the repository to use as your
                    workspace.
                </li>
                <li>
                    When a new update is released, push the latest version's
                    content to your repository.
                </li>
                <li>
                    Merge your workspace branch with the original branch to
                    incorporate the latest changes.
                </li>
            </ul>
        </>
    )
}

export default Updating
