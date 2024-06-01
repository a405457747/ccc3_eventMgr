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
    eventDict2:{}={};
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

            this.eventDict2[type]+=1;
        }else {
            let obj = new EventTarget();
            obj.on(type,func,target);
            this.eventDict[type]=obj;

            this.eventDict2[type]=1;
        }
    }

    public removeEvent(type,func,target){
        if(type in this.eventDict){
            this.eventDict[type].off(type,func,target);

            this.eventDict2[type]-=1;
        }else {
            console.log("WAR: removeEvent don't have the event type");
        }
    }

    public delEvent(type){
        if(type in this.eventDict){
           delete this.eventDict[type];

           delete this.eventDict2[type];
        }
    }

    public clearEvent(){
        this.eventDict={};
        this.eventDict2={};
    }
    
    debugDict(type?:string){
        /*
        console.log("debugDict:"+type);
        for(let key in this.eventDict){
            console.log("key:"+key);
            console.log("value:"+this.eventDict[key]);
        }
        */
       console.log(JSON.stringify(this.eventDict2));
    }

    public sendEvent(type,...arg){

        if(type in this.eventDict){
            this.eventDict[type].emit(type,...arg);
        }
    }
}


