interface Article {
    title: string,
    description: string,
    href?: string,
}

const articlesData: Article[] = [
    {
        title: 'Safe reflection using TypeScript',
        description: `Advanced TypeScript technique using reflection to safely access object properties`,
        href: 'https://dev.to/jcarloscandela/safe-reflection-using-typescript-3lgk',
    },
    {
        title: 'How to translate web page titles with Angular',
        description: `Learn how to translate your Angular app's title using a Resolver`,

        href: 'https://dev.to/jcarloscandela/how-to-translate-angular-title-4ibn',
    },
    {
        title: 'Managing Public and Private Repositories in a Project',
        description: `Managing public and private repositories in a project using Git and GitHub`,

        href: 'https://dev.to/jcarloscandela/managing-public-and-private-repositories-in-a-project-d6p',
    },
]

export default articlesData
