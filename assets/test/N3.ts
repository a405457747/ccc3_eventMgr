import { _decorator, Component, Node } from 'cc';
import { EventMgr } from '../EventMgr/EventMgr';
const { ccclass, property } = _decorator;

@ccclass('N3')
export class N3 extends Component {
    start() {

    }

    update(deltaTime: number) {
        EventMgr.Inst.sendEvent("wok",{a:33});
        this.enabled=false;
    }
}


