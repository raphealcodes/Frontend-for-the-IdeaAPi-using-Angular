import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';



export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;

}


export class CustomSerilazer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
 serialize(routerState: RouterStateSnapshot) {
 const {url} = routerState;
 const {queryParams} = routerState.root;
 let state: ActivatedRouteSnapshot = routerState.root;
 while (state.firstChild) {
     state = state.firstChild;
 }
 const {params} = state;
 return {url, queryParams, params };
 }

}
