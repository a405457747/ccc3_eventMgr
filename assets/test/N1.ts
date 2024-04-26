import { _decorator, Component, Node } from 'cc';
import { EventMgr } from '../EventMgr/EventMgr';
const { ccclass, property } = _decorator;

@ccclass('N1')
export class N1 extends Component {
    start() {
        EventMgr.Inst.addEvent("wok",this.wok,this);
    }

    wok(obj){
        console.log("n1 wok"+JSON.stringify(obj));
    }

    update(deltaTime: number) {
        
    }
}


