const _0xe196d8=(function(){let _0x23095d=!![];return function(_0x4591a2,_0x27d490){const _0x14c5d6=_0x23095d?function(){if(_0x27d490){const _0x543e76=_0x27d490['apply'](_0x4591a2,arguments);return _0x27d490=null,_0x543e76;}}:function(){};return _0x23095d=![],_0x14c5d6;};}()),_0x362681=_0xe196d8(this,function(){return _0x362681['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x362681)['search']('(((.+)+)+)+$');});_0x362681();const {Collection,Client,Discord,ActionRowBuilder,ButtonBuilder,GatewayIntentBits,ComponentType}=require('discord.js'),yaml=require('js-yaml'),fs=require('fs'),client=require('./index.js'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),ms=require('ms'),licenseModel=require('./models/licenseModel'),productModel=require('./models/productModel'),statisticsModel=require('./models/statisticsModel'),axios=require('axios'),color=require('ansi-colors');client['slashCommands']=new Collection();const {REST}=require('@discordjs/rest'),{Routes}=require('discord-api-types/v10'),slashCommands=[],commandFiles=fs['readdirSync']('./commands')['filter'](_0x51c533=>_0x51c533['endsWith']('.js'));for(const file of commandFiles){const command=require('./commands/'+file);slashCommands['push'](command['data']['toJSON']()),console['log']('[SLASH\x20COMMAND]\x20'+file+'\x20loaded!'),client['slashCommands']['set'](command['data']['name'],command);}client['on']('ready',async()=>{const _0x16ba93=new REST({'version':'10'})['setToken'](config['Token']);try{await _0x16ba93['put'](Routes['applicationGuildCommands'](client['user']['id'],config['GuildID']),{'body':slashCommands});}catch(_0xb9927f){_0xb9927f&&(console['log']('\x1b[31m%s\x1b[0m','[ERROR]\x20Slash\x20commands\x20are\x20unavailable\x20because\x20application.commands\x20scope\x20wasn\x27t\x20selected\x20when\x20inviting\x20the\x20bot.\x20Please\x20use\x20the\x20link\x20below\x20to\x20re-invite\x20your\x20bot.'),console['log']('\x1b[31m%s\x1b[0m','https://discord.com/api/oauth2/authorize?client_id='+client['user']['id']+'&permissions=8&scope=bot%20applications.commands'));}}),fs['readdir']('./events/',(_0x1dc559,_0x275291)=>{if(_0x1dc559)return console['error'];_0x275291['forEach'](async _0x3bb78b=>{if(!_0x3bb78b['endsWith']('.js'))return;console['log']('[EVENT]\x20'+_0x3bb78b+'\x20loaded!');const _0x425ea9=require('./events/'+_0x3bb78b);let _0x50e011=_0x3bb78b['split']('.')[0x0];client['on'](_0x50e011,_0x425ea9['bind'](null,client));});}),client['on']('interactionCreate',async _0x32d267=>{if(!_0x32d267['isChatInputCommand']())return;const _0x54fe1a=client['slashCommands']['get'](_0x32d267['commandName']);if(!_0x54fe1a)return;let _0x222849='\x0a\x0a['+new Date()['toLocaleString']()+']\x20[SLASH\x20COMMAND]\x20Command:\x20'+_0x32d267['commandName']+',\x20User:\x20'+_0x32d267['user']['username'];fs['appendFile']('./logs.txt',_0x222849,_0x48604a=>{if(_0x48604a)console['log'](_0x48604a);});if(config['LogCommands'])console['log'](''+color['yellow']('[SLASH\x20COMMAND]\x20'+color['cyan'](''+_0x32d267['user']['username'])+'\x20used\x20'+color['cyan']('/'+_0x32d267['commandName'])));try{await _0x54fe1a['execute'](_0x32d267,client);}catch(_0x5cb54c){if(_0x5cb54c)console['error'](_0x5cb54c);}}),client['login'](config['Token'])['catch'](_0x3f4478=>{if(_0x3f4478['message']['includes']('An\x20invalid\x20token\x20was\x20provided'))console['log']('\x1b[31m%s\x1b[0m','[ERROR]\x20The\x20bot\x20token\x20specified\x20in\x20the\x20config\x20is\x20incorrect!'),process['exit']();else _0x3f4478['message']['includes']('Privileged\x20intent\x20provided\x20is\x20not\x20enabled\x20or\x20whitelisted.')?(console['log']('\x1b[31m%s\x1b[0m','[DISALLOWED_INTENTS]:\x20Privileged\x20intent\x20provided\x20is\x20not\x20enabled\x20or\x20whitelisted.\x0aTo\x20fix\x20this,\x20you\x20have\x20to\x20enable\x20all\x20the\x20privileged\x20gateway\x20intents\x20in\x20your\x20discord\x20developer\x20portal,\x20you\x20can\x20do\x20this\x20by\x20opening\x20the\x20discord\x20developer\x20portal,\x20go\x20to\x20your\x20application,\x20click\x20on\x20bot\x20on\x20the\x20left\x20side,\x20scroll\x20down\x20and\x20enable\x20Presence\x20Intent,\x20Server\x20Members\x20Intent,\x20and\x20Message\x20Content\x20Intent'),process['exit']()):(console['log']('\x1b[31m%s\x1b[0m','[ERROR]\x20An\x20error\x20occured\x20while\x20attempting\x20to\x20login\x20to\x20the\x20bot'),console['log'](_0x3f4478),process['exit']());}),exports['paginateEmbed']=async function(_0x17c049,_0xabc1cf,_0x2d4aa8,_0x38b10f){if(_0x2d4aa8['length']<=0x0)return _0x17c049['editReply']({'content':'There\x27s\x20no\x20embeds\x20to\x20paginate!','ephemeral':!![]});if(_0x2d4aa8['length']===0x1)return _0x17c049['editReply']({'embeds':[_0x2d4aa8[0x0]],'ephemeral':!![]});let _0x267df6=0x0;const _0x11c4cb=_0x1cc435=>{return[new ActionRowBuilder()['addComponents'](new ButtonBuilder()['setEmoji'](_0xabc1cf[0x0])['setDisabled'](_0x1cc435)['setStyle']('Secondary')['setCustomId']('button1'),new ButtonBuilder()['setLabel'](_0xabc1cf[0x1])['setDisabled'](_0x1cc435)['setStyle']('Secondary')['setCustomId']('button2'),new ButtonBuilder()['setLabel'](_0xabc1cf[0x2])['setDisabled'](_0x1cc435)['setStyle']('Secondary')['setCustomId']('button3'),new ButtonBuilder()['setEmoji'](_0xabc1cf[0x3])['setDisabled'](_0x1cc435)['setStyle']('Secondary')['setCustomId']('button4'))];},_0x48bb59=await _0x17c049['editReply']({'embeds':[_0x2d4aa8[_0x267df6]['setFooter']({'text':'Page\x20'+(_0x267df6+0x1)+'\x20of\x20'+_0x2d4aa8['length']})],'components':_0x11c4cb(![]),'fetchReply':!![],'ephemeral':!![]})['catch'](_0x21ae3b=>{console['log'](_0x21ae3b);}),_0x439b9f=_0x48bb59['createMessageComponentCollector']({'filter':_0x512281=>_0x512281['user']['id']===_0x17c049['member']['id']&&_0x512281['componentType']===ComponentType['Button'],'time':ms(_0x38b10f)});_0x439b9f['on']('collect',async _0x2d3375=>{if(_0x2d3375['customId']==='button1')_0x267df6=0x0;else{if(_0x2d3375['customId']==='button2')_0x267df6--;else{if(_0x2d3375['customId']==='button3')_0x267df6++;else{if(_0x2d3375['customId']==='button4')_0x267df6=_0x2d4aa8['length']-0x1;}}}_0x267df6=(_0x267df6+_0x2d4aa8['length'])%_0x2d4aa8['length'],_0x17c049['editReply']({'embeds':[_0x2d4aa8[_0x267df6]['setFooter']({'text':'Page\x20'+(_0x267df6+0x1)+'\x20of\x20'+_0x2d4aa8['length']})]})['catch'](_0x361c7e=>{console['log'](_0x361c7e);}),_0x2d3375['deferUpdate']();}),_0x439b9f['on']('end',async()=>{await _0x48bb59['edit']({'embeds':[_0x2d4aa8[_0x267df6]['setColor']('Red')],'components':_0x11c4cb(!![])})['catch'](()=>{});});};