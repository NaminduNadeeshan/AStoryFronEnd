export interface IUser {
    autherId: number;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
    phoneNumber: string;
    address: string;
    email: string;
}

export interface IUserResponse {
    autherId: number;
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
    phoneNumber: string;
    address: string;
    email: string;
    isSuperAUther: boolean;
}
