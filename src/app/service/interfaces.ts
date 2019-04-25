//返回数据格式
export interface ResponseData {
    Error;
    data: Data;
}
export interface Error {
    errCode: number;
    errMsg: string;
}
export interface Data {
    [key: string]: any;
}

//用户信息
export interface Userinfo {
    token: string;
    account: string;
    uuid: string;
    email: string;
    nickname: string;
    sex: number
    name: string;
    avatarUrl: string;
    signature: string;
    country: string;
    province: string;
    city: string;
    avaliable: number;
    level: number;
}