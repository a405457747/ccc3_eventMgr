import { _decorator, Component, Node,EventTarget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EventMgr')
export class EventMgr extends Component {

    private static inst: EventMgr = null;

    static get Inst() {
        return EventMgr.inst;
    }

    eventDict:{[key:string]:EventTarget}={}
    protected onLoad(): void {
        if (EventMgr.inst === null) {
            EventMgr.inst = this;
        }

    }


    public addEvent(type,func,target){
        if(type in this.eventDict){
            this.eventDict[type].on(type,func,target);
        }else {
            let obj = new EventTarget();
            obj.on(type,func,target);
            this.eventDict[type]=obj;
        }
    }

    public removeEvent(type,func,target){
        if(type in this.eventDict){
            this.eventDict[type].off(type,func,target);
        }else {
            console.log("WAR: removeEvent don't have the event type");
        }
    }

    public delEvent(type){
        if(type in this.eventDict){
           delete this.eventDict[type];
        }
    }

    public sendEvent(type,...arg){
        if(type in this.eventDict){
            this.eventDict[type].emit(type,...arg);
        }
    }
}


