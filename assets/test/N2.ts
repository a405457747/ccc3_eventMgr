import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { EventMgr } from '../EventMgr/EventMgr';
@ccclass('N2')
export class N2 extends Component {
    start() {
        EventMgr.Inst.addEvent("wok",this.wok2,this);
        //EventMgr.Inst.removeEvent("wok",this.wok2,this);
        EventMgr.Inst.delEvent("wok");
    }

    wok2(obj){
        console.log("n2 wok2"+JSON.stringify(obj));
    }
}


