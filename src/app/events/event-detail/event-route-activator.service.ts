import { CanActivate} from "@angular/router/src/utils/preactivation";
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EventRouteActivator {
    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        
        if (!eventExists)
        this.router.navigate(['/404'])
        return eventExists
    }

    
}
