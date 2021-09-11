import React from 'react';
import { View, Epic,Tabbar,TabbarItem, Group } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import Top from './panels/top/top.js';
import Ad from './panels/ad/ad.js';
import Transfer from './panels/transfer/transfer.js';
import History from './panels/history/history.js';
import Ref from './panels/ref/ref.js';


import { Icon56Users3Outline } from '@vkontakte/icons';
import { Icon56HideOutline } from '@vkontakte/icons';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { Icon56ArchiveOutline } from '@vkontakte/icons';
import { Icon56UserAddOutline } from '@vkontakte/icons';

bridge.send('VKWebAppInit', {});

let color1 = '#808080';
let color2 = '#008000';
let color3 = '#808080';
let color4 = '#808080';
let color5 = '#808080';
let active = 'ad';

function ggggg1() {
active = 'top';
color1 = '#008000';
color2 = '#808080';
color3 = '#808080';
color4 = '#808080';
color5 = '#808080';
};

function ggggg2() {
active = 'ad';
color1 = '#808080';
color2 = '#008000';
color3 = '#808080';
color4 = '#808080';
color5 = '#808080';
};

function ggggg3() {
active = 'transfer';
color1 = '#808080';
color2 = '#808080';
color3 = '#008000';
color4 = '#808080';
color5 = '#808080';
};

function ggggg4() {
active = 'history';
color1 = '#808080';
color2 = '#808080';
color3 = '#808080';
color4 = '#008000';
color5 = '#808080';
};

function ggggg5() {
active = 'ref';
color1 = '#808080';
color2 = '#808080';
color3 = '#808080';
color4 = '#808080';
color5 = '#008000';
};

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
        activePanel: 'ad'     
        }
    }

    render() {
        return (
        <Group>
        
        <View activePanel={active}>
        <Top id="top"/>
        <Ad id="ad"/>
        <Transfer id="transfer"/>
        <History id="history"/>
        <Ref id="ref"/>
        </View>
        
        <Epic>
        <Tabbar>
        
        <TabbarItem onClick={() => ggggg1()} text="Топ">
        <Icon56Users3Outline width={28} height={28} style={{color: color1}}/>
        </TabbarItem>
        
        <TabbarItem onClick={() => ggggg2()} text='Майнинг'>
        <Icon56HideOutline width={28} height={28} style={{color: color2}}/>
        </TabbarItem>
        
        <TabbarItem onClick={() => ggggg3()} text="Переводы">
        <Icon56MoneyTransferOutline width={28} height={28} style={{color: color3}}/>
        </TabbarItem>
        
        <TabbarItem onClick={() => ggggg4()}  text="История">
        <Icon56ArchiveOutline width={28} height={28} style={{color: color4}}/>
        </TabbarItem>
        
        <TabbarItem onClick={() => ggggg5()} text="Рефералка">
        <Icon56UserAddOutline width={28} height={28} style={{color: color5}}/>
        </TabbarItem>
        
        </Tabbar>
        </Epic>
        </Group>
        )
    }
}
export default App;