export interface IProject {
    _id: number,
    name: string,
    urlImage: string,
    desc: string,
    category: Array<string>,
    githubLink: string,
    web: {
        isWeb: boolean,
        webLink: string,
        isResponse: boolean
    }
}