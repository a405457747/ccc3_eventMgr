import { _decorator, Component, Node,EventTarget } from 'cc';
const { ccclass, property ,executionOrder} = _decorator;

@ccclass('EventMgr')
@executionOrder(-1)
export class EventMgr extends Component {

    @property isDebug:boolean=false;

    private static inst: EventMgr = null;

    static get Inst() {
        return EventMgr.inst;
    }

    eventDict:{[key:string]:EventTarget}={}
    protected onLoad(): void {
        if (EventMgr.inst === null) {
            EventMgr.inst = this;
            console.log("eventMgr onload");
        }
    }


    public addEvent(type,func,target){

        /*
        if(type==="GAME_START"){
            console.log("addEvent and game start");
        }*/

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

    public clearEvent(){
        this.eventDict={};
    }
    
    debugDict(type:string){
        console.log("debugDict:"+type);
        for(let key in this.eventDict){
            console.log("key:"+key);
            console.log("value:"+this.eventDict[key]);
        }
    }

    public sendEvent(type,...arg){
        if(this.isDebug){
        //    this.debugDict(type);
        }

        if(type in this.eventDict){
            this.eventDict[type].emit(type,...arg);
        }
    }
}


