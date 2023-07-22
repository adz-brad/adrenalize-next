import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

export const plans = [
    {
        title: 'Pro',
        price: '79',
        features: [
            'WYSIWYG Visual Site Editor',
            'Live Deployment Previews',
            'Global CDN Delivery',
            'Free SSL Certificates',
            'Modular Integration Ecosystem',
            'Pay-as-you-scale Flexibility',
            'Email Support'
        ]
    },
    {
        title: 'Agency',
        price: '149',
        features: [
            'Pro features, plus:',
            'Unlimited Teams',
            'Unlimited Users',
            'Integrated Project Management',
            'Custom User Roles & Permissions',
            'Dedicated Support Channel',
            'Discounted Integration Rates'
        ]
    },
    {
        title: 'Custom',
        price: 'Custom',
        features: [
            'Website or Web App Development',
            'Native or Hybrid App Development',
            'SaaS or API Integrations',
            'Cross-Platform Software Solutions'
        ]
    },
]

export const services = [
    'Web Development',
    'App Development',
    'SaaS Products',
    'API Integrations',
    'Solutions Architecture',
    'Consultations'
]

export const navLinks = [
    {
        title: 'Services',
        href: '/services',
        subMenu: [
            {
                title: 'Web Development',
                href: '/services/web-development'
            },
            {
                title: 'App Development',
                href: '/services/app-development'
            },
            {
                title: 'SaaS Products',
                href: '/services/saas-products'
            },
            {
                title: 'API Integrations',
                href: '/services/api-integrations'
            },
            {
                title: 'Solutions Architecture',
                href: '/services/solutions-architecture'
            },
            {
                title: 'Consultations',
                href: '/services/consultations'
            },
        ]
    },
    {
        title: 'Resources',
        href: '/resources',
        subMenu: [
            {
                title: 'Portfolio',
                href: '/resources/portfolio'
            },
            {
                title: 'Case Studies',
                href: '/resources/case-studies'
            },
            {
                title: 'Blog',
                href: '/resources/blog'
            },
            {
                title: 'FAQ',
                href: '/resources/frequently-asked-questions'
            },
        ]
    },
    {
        title: 'About Adrenalize',
        href: '/about'
    },
    {
        title: 'Contact Us',
        href: '/contact'
    }
]

export const socialLinks = [
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/adrenalizedigital',
        icon: <BiLogoFacebookCircle />
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/adrenalizedigital',
        icon: <BiLogoInstagram />
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/adrenalizedigital',
        icon: <BiLogoLinkedin />
    }
]