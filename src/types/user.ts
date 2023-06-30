export interface UserDetails {
    user: {
        displayName: {
            first: string,
            last: string
        },
        username: string,
        email:string,
        password: string,
        topics: string[],
        photoURL: string,
        uid: string,
        emailVerified: boolean
    }
}