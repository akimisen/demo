export const featuresList: {
    id: string
    description: Record<string, string>
}[] = [
    {
        id: 'taskManagement',
        description: {
            basic: 'Task management',
            standard: 'Task management',
            pro: 'Task management',
        },
    },
    {
        id: 'managementTools',
        description: {
            basic: 'Basic management tools',
            standard: 'Advance management tools',
            pro: 'Advance management tools',
        },
    },
    {
        id: 'reporting',
        description: {
            basic: 'Report generator',
            standard: 'Report generator',
            pro: 'Detailed report generator',
        },
    },
    {
        id: 'support',
        description: {
            basic: 'Email support',
            standard: 'Chat & email support',
            pro: '24/7 chat & email support',
        },
    },
    {
        id: 'fileSharing',
        description: {
            basic: 'Files sharing',
            standard: 'Files sharing',
            pro: 'Files sharing',
        },
    },
    {
        id: 'advancedSecurity',
        description: {
            basic: 'Advanced security protocols',
            standard: 'Advanced security protocols',
            pro: 'Advanced security protocols',
        },
    },
    {
        id: 'customIntegrations',
        description: {
            basic: 'Third party service integration',
            standard: 'Third party service integration',
            pro: 'Third party service integration',
        },
    },
]

export const questionList: Record<
    string,
    {
        title: string
        content: string
        defaultExpand: boolean
    }[]
> = {
    subscription: [
        {
            title: 'How do I sign up for a subscription?',
            content:
                'Select the plan above with your preferred subscription plan, and follow the on-screen instructions to create an account and enter your payment details.',
            defaultExpand: true,
        },
        {
            title: 'Can I cancel my subscription?',
            content:
                'Yes, you have the flexibility to cancel your subscription at any time. To cancel, simply log in to your account, navigate to the "Subscription" section, and follow the instructions to cancel your plan. Your cancellation will take effect at the end of your current billing cycle.',
            defaultExpand: false,
        },

        {
            title: 'Can I switch my subscription plan?',
            content:
                'Absolutely, you can switch between the monthly and annual plans at any time. To change your subscription plan, log in to your account, go to the "Subscription" section, select the plan you want to switch to, and follow the instructions. Your new plan will take effect immediately.',
            defaultExpand: false,
        },
        {
            title: 'Do you offer a free trial?',
            content:
                'Yes, we provide a 14-day free trial for new users. During this period, you can access all the features of our subscription plan. If you continue after the trial, you will be charged based on the plan you selected.',
            defaultExpand: false,
        },
        {
            title: 'How do I know when my subscription is about to renew?',
            content:
                'You will receive an email notification a few days before your subscription is set to renew, reminding you of the upcoming charge and providing an option to make any necessary changes.',
            defaultExpand: false,
        },
        {
            title: 'Are there any discounts for students or non-profits?',
            content:
                'Yes, we offer special discounts for students and non-profits. Please contact our support team with the relevant documentation to apply for these discounts.',
            defaultExpand: false,
        },
    ],
    billing: [
        {
            title: 'What payment methods do you accept?',
            content:
                'We strive to make the payment process as convenient as possible by accepting a variety of payment methods. These include major credit and debit cards such as Visa, MasterCard, and American Express, as well as PayPal. Depending on your location, additional regional payment methods may also be available.',
            defaultExpand: true,
        },
        {
            title: 'What happens if my payment fails?',
            content:
                'If your payment fails, we will notify you via email. You will then have a grace period of 7 days to update your payment information. If the payment issue is not resolved within this period, your subscription will be temporarily suspended until the payment is successfully processed.',
            defaultExpand: false,
        },
        {
            title: 'How do I update my payment information?',
            content:
                'To update your payment information, log in to your account, go to the "Billing" section, and enter your new payment details. Make sure to save the changes to ensure continuous service.',
            defaultExpand: false,
        },
        {
            title: 'Will I get a refund if I cancel my subscription?',
            content:
                'Refund policies vary depending on your subscription type. For our Monthly Plan, we do not offer refunds. However, for the Annual Plan, you may be eligible for a prorated refund if you cancel within the first 30 days of your subscription. Please contact our support team for assistance with this process.',
            defaultExpand: false,
        },
    ],
    others: [
        {
            title: 'How do I contact customer support?',
            content:
                'Our customer support team is here to help with any questions or issues you may have. You can reach us by emailing support@ecme.com, calling our support line at 1-800-123-4567, or using the live chat feature on our website. We are committed to providing you with prompt and effective assistance.',
            defaultExpand: true,
        },
        {
            title: 'How do I change my account details?',
            content:
                'To update your account details, log in to your account, navigate to the "Security" section, and make the necessary changes. Be sure to save your updates.',
            defaultExpand: false,
        },
        {
            title: 'Is my personal information secure?',
            content:
                'Yes, we prioritize the security of your personal information. Our site uses industry-standard encryption and security measures. Please refer to our Privacy Policy for more details on how we protect your data.',
            defaultExpand: false,
        },
    ],
}

export const questionCategory: Record<string, string> = {
    subscription: 'Subscription details',
    billing: 'Billing and payments',
    others: 'Other',
}
