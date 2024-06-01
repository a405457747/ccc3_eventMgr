import { _decorator, Component, Node } from 'cc';
import { EventMgr } from '../EventMgr/EventMgr';
const { ccclass, property } = _decorator;

@ccclass('N1')
export class N1 extends Component {
    protected onLoad(): void {
      //  console.log("n1 onload");
    }
    start() {
        EventMgr.Inst.addEvent("wok",this.wok,this);
        //EventMgr.Inst.removeEvent("wok",this.wok,this);
    }

    wok(obj,obj2){
        console.log("n1 wok"+obj.name);
    }
     onDisable(): void {
       // console.log("onEnable");
        EventMgr.Inst.sendEvent("wok",this);
    }    

    update(deltaTime: number) {
        
    }
}


