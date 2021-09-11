import React from 'react';
import {Group, Div, Button, Panel, PanelHeader } from '@vkontakte/vkui';
import { Icon56HideOutline } from '@vkontakte/icons';
import connect from '@vkontakte/vk-bridge';
import './ad.css';


let db ={
    id_польз: {
    balance: 0,
    balanceLVL: 0.000001,
    }
};

setInterval(function() {
  db.id_польз.balance = db.id_польз.balance + db.id_польз.balanceLvL;
},1000);

function balancLvL() {
connect.sendPromise("VKWebAppShowNativeAds", {ad_format: "preloader", })
.then(data => db.id_польз.balanceLvL = db.id_польз.balanceLvL + 0.000001)
}

function balancLvL2() {
connect.sendPromise("VKWebAppGetUserInfo")
.then(data => alert(data.id));
}

connect.sendPromise("VKWebAppGetUserInfo")
.then(data => db.id_польз = data.id);


const Ad = props => (
    <Panel id={props.id}>
        <PanelHeader>Майнинг</PanelHeader>
        <Group style={{ height: '500px' }}>
        <p align="center" class="t1">ВАШ СЧЁТ</p>
        <p align="center" class="t2">{parseFloat(db.id_польз.balance).toFixed(6)} CC</p>
        <p align="center" class="t3">{parseFloat(db.id_польз.balanceLvL).toFixed(6)} CC/сек</p>
        <p align="center" class="t2">ID {parseFloat(db.id_польз).toFixed(0)}</p>
        <Button size="xl" level="2" before={<Icon56HideOutline width={28} height={28}/>} onClick={() => balancLvL()}>Баннерная реклама</Button>
        <Div align="center"></Div>
        <Button size="xl" level="2" before={<Icon56HideOutline width={28} height={28}/>} onClick={() => balancLvL2()}>Медиареклама</Button>
        </Group>
    </Panel>
);

export default Ad;