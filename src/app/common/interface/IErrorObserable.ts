import { HttpParams } from "@angular/common/http";

export interface IErrorObserable {
    errors?: any;
    callback?: Function;
    method?: string;
    url?: string;
    params?: HttpParams;
    data?: any;
}
