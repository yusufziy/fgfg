const _0x39e1e0=(function(){let _0xb38b7c=!![];return function(_0x51664e,_0x14c5c8){const _0x485c76=_0xb38b7c?function(){if(_0x14c5c8){const _0x45a841=_0x14c5c8['apply'](_0x51664e,arguments);return _0x14c5c8=null,_0x45a841;}}:function(){};return _0xb38b7c=![],_0x485c76;};}()),_0x1d9df1=_0x39e1e0(this,function(){return _0x1d9df1['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x1d9df1)['search']('(((.+)+)+)+$');});_0x1d9df1();const {SlashCommandBuilder}=require('@discordjs/builders'),Discord=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),productModel=require('../models/productModel'),licenseModel=require('../models/licenseModel'),statisticsModel=require('../models/statisticsModel'),utils=require('../utils.js');module['exports']={'data':new SlashCommandBuilder()['setName']('license')['setDescription']('Manage\x20licenses')['addSubcommand'](_0x358e83=>_0x358e83['setName']('create')['setDescription']('Create\x20a\x20new\x20license\x20key')['addUserOption'](_0x23fea1=>_0x23fea1['setName']('user')['setDescription']('User')['setRequired'](!![]))['addStringOption'](_0x1a3dea=>_0x1a3dea['setName']('product')['setDescription']('The\x20product\x20to\x20create\x20the\x20license\x20for\x20(Name)')['setRequired'](!![]))['addNumberOption'](_0x5a9a74=>_0x5a9a74['setName']('builtbybituserid')['setDescription']('The\x20user\x27s\x20BuiltByBit\x20user\x20ID')['setRequired'](config['LicenseSettings']['RequireBuiltByBitUserID'])))['addSubcommand'](_0x4a8bcb=>_0x4a8bcb['setName']('delete')['setDescription']('Delete\x20a\x20specific\x20license\x20key')['addStringOption'](_0x22e7bf=>_0x22e7bf['setName']('licensekey')['setDescription']('The\x20license\x20key\x20to\x20delete')['setRequired'](!![])))['addSubcommand'](_0x164293=>_0x164293['setName']('list')['setDescription']('Get\x20a\x20list\x20of\x20all\x20license\x20keys'))['addSubcommand'](_0x40f561=>_0x40f561['setName']('get')['setDescription']('Get\x20information\x20about\x20a\x20specific\x20license\x20key')['addStringOption'](_0x3205cf=>_0x3205cf['setName']('query')['setDescription']('The\x20query\x20to\x20search\x20for\x20(license\x20key,\x20user\x20id,\x20builtbybit\x20user\x20id)')['setRequired'](!![])))['addSubcommand'](_0x491d96=>_0x491d96['setName']('cleardata')['setDescription']('Clear\x20IP\x20or\x20HWID\x20data\x20of\x20a\x20specific\x20license\x20key')['addStringOption'](_0x5f2fd9=>_0x5f2fd9['setName']('data')['setDescription']('Data\x20to\x20clear')['addChoices']({'name':'IP','value':'IP'},{'name':'HWID','value':'HWID'})['setRequired'](!![]))['addStringOption'](_0x291837=>_0x291837['setName']('licensekey')['setDescription']('The\x20query\x20to\x20search\x20for\x20(license\x20key,\x20user\x20id,\x20builtbybit\x20user\x20id)')['setRequired'](!![]))),async 'execute'(_0x67a592,_0x779a91){let _0xf93528=_0x67a592['options']['getSubcommand'](),_0x8377fb;if(config['WebhookLogsSettings']['Enabled']&&config['WebhookLogsSettings']['CommandsWebhookURL'])_0x8377fb=new Discord['WebhookClient']({'url':config['WebhookLogsSettings']['CommandsWebhookURL']});if(_0xf93528==='create'){if(config['license_create']['Enabled']===![])return _0x67a592['reply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x1a7589=config['license_create']['AllowedRoles']['some'](_0x4127d5=>{const _0x6f0484=_0x67a592['guild']['roles']['cache']['get'](_0x4127d5);return _0x6f0484&&_0x67a592['member']['roles']['cache']['has'](_0x4127d5);});if(!config['DevMode']&&!_0x1a7589)return _0x67a592['reply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});let _0x3d3bec=_0x67a592['options']['getUser']('user'),_0x58cee0=_0x67a592['options']['getString']('product'),_0x5dd518=_0x67a592['options']['getNumber']('builtbybituserid');if(!_0x5dd518)_0x5dd518='Unknown';const _0x4dca89=await productModel['findOne']({'name':_0x58cee0});if(!_0x4dca89||_0x4dca89?.['length']==0x0)return _0x67a592['reply']({'content':'🔴\x20|\x20A\x20product\x20with\x20that\x20name\x20doesn\x27t\x20exist!','ephemeral':!![]});await _0x67a592['deferReply']({'ephemeral':!![]});const _0x387d5b=new Discord['ButtonBuilder']()['setCustomId']('yes')['setLabel']('Yes')['setStyle']('Primary')['setEmoji']('👍'),_0x118502=new Discord['ButtonBuilder']()['setCustomId']('no')['setLabel']('No')['setStyle']('Secondary')['setEmoji']('👎');let _0x4c72e4=new Discord['ActionRowBuilder']()['addComponents'](_0x387d5b,_0x118502);const _0x4fe00c=await licenseModel['find']({'discordUserID':_0x3d3bec['id'],'productName':_0x58cee0});if(_0x4fe00c&&_0x4fe00c['length']>0x0)return _0x67a592['editReply']({'content':'🔴\x20|\x20This\x20user\x20already\x20has\x20a\x20license\x20key\x20for\x20**'+_0x58cee0+'**!\x20Are\x20you\x20sure\x20you\x20want\x20to\x20create\x20another\x20key?','components':[_0x4c72e4],'ephemeral':!![],'fetchReply':!![]})['then'](async _0x3916e6=>{const _0x2e9f63=_0x3916e6['createMessageComponentCollector']({'time':0x493e0});_0x2e9f63['on']('collect',async _0x1f5dbb=>{if(_0x1f5dbb['customId']==='yes'){await _0x1f5dbb['deferUpdate'](),await _0x67a592['deleteReply']();let _0x243880=_0x779a91['users']['cache']['get'](_0x3d3bec['id']),_0x36a6ed,_0x3d92e3;if(!_0x243880)_0x36a6ed='⚠️\x20Unknown';if(!_0x243880)_0x3d92e3='Unknown';if(_0x243880)_0x36a6ed='<@!'+_0x243880['id']+'>';if(_0x243880)_0x3d92e3=''+_0x243880['username'];const _0x14cd88=new Discord['ButtonBuilder']()['setCustomId']('create')['setLabel']('Create')['setStyle']('Primary'),_0x47f580=new Discord['ButtonBuilder']()['setCustomId']('cancel')['setLabel']('Cancel')['setStyle']('Secondary');let _0x5b7440=new Discord['ActionRowBuilder']()['addComponents'](_0x14cd88,_0x47f580),_0x451ad4=new Discord['EmbedBuilder']();_0x451ad4['setAuthor']({'name':'🟠\x20Confirm\x20License\x20Information'}),_0x451ad4['setColor']('Orange'),_0x451ad4['addFields']({'name':'•\x20License\x20Information:','value':'>\x20Product:\x20``'+_0x58cee0+'``'}),_0x451ad4['addFields']({'name':'•\x20License\x20User\x20Information:','value':'>\x20User:\x20'+_0x36a6ed+'\x20('+_0x3d92e3+')\x0a>\x20User\x20ID:\x20``'+_0x243880['id']+'``\x0a>\x20[BuiltByBit\x20User\x20ID:](https://builtbybit.com/members/swqpping.'+_0x5dd518+'/)\x20``'+_0x5dd518+'``'}),_0x451ad4['addFields']({'name':'•\x20Created\x20by:','value':'>\x20User:\x20<@!'+_0x67a592['user']['id']+'>\x20('+_0x67a592['user']['username']+')\x0a>\x20User\x20ID:\x20``'+_0x67a592['user']['id']+'``'}),_0x451ad4['setTimestamp'](),await _0x67a592['followUp']({'embeds':[_0x451ad4],'components':[_0x5b7440],'ephemeral':!![],'fetchReply':!![]})['then'](async _0x374cfc=>{const _0x463c73=_0x374cfc['createMessageComponentCollector']({'time':0x493e0});_0x463c73['on']('collect',async _0x1a9b72=>{_0x1a9b72['customId']==='create'&&(await _0x1a9b72['deferUpdate'](),await _0x1a9b72['deleteReply'](),await _0x779a91['emit']('createLicenseKey',_0x67a592,_0x58cee0,_0x3d3bec,_0x5dd518)),_0x1a9b72['customId']==='cancel'&&(await _0x1a9b72['deferUpdate'](),await _0x67a592['deleteReply']());});});}_0x1f5dbb['customId']==='no'&&(await _0x1f5dbb['deferUpdate'](),await _0x67a592['deleteReply']());}),_0x2e9f63['on']('end',_0x2b543=>{if(_0x2b543['msg']&&_0x67a592)_0x67a592['deleteReply']();});});let _0x2f94f=_0x779a91['users']['cache']['get'](_0x3d3bec['id']),_0x21a291,_0x392796;if(!_0x2f94f)_0x21a291='⚠️\x20Unknown';if(!_0x2f94f)_0x392796='Unknown';if(_0x2f94f)_0x21a291='<@!'+_0x2f94f['id']+'>';if(_0x2f94f)_0x392796=''+_0x2f94f['username'];const _0x3c91fc=new Discord['ButtonBuilder']()['setCustomId']('create')['setLabel']('Create')['setStyle']('Primary'),_0x4406ff=new Discord['ButtonBuilder']()['setCustomId']('cancel')['setLabel']('Cancel')['setStyle']('Secondary');let _0x4c61a5=new Discord['ActionRowBuilder']()['addComponents'](_0x3c91fc,_0x4406ff),_0x2d570f=new Discord['EmbedBuilder']();_0x2d570f['setAuthor']({'name':'🟠\x20Confirm\x20License\x20Information'}),_0x2d570f['setColor']('Orange'),_0x2d570f['addFields']({'name':'•\x20License\x20Information:','value':'>\x20Product:\x20``'+_0x58cee0+'``'}),_0x2d570f['addFields']({'name':'•\x20License\x20User\x20Information:','value':'>\x20User:\x20'+_0x21a291+'\x20('+_0x392796+')\x0a>\x20User\x20ID:\x20``'+_0x2f94f['id']+'``\x0a>\x20[BuiltByBit\x20User\x20ID:](https://builtbybit.com/members/swqpping.'+_0x5dd518+'/)\x20``'+_0x5dd518+'``'}),_0x2d570f['addFields']({'name':'•\x20Created\x20by:','value':'>\x20User:\x20<@!'+_0x67a592['user']['id']+'>\x20('+_0x67a592['user']['username']+')\x0a>\x20User\x20ID:\x20``'+_0x67a592['user']['id']+'``'}),_0x2d570f['setTimestamp'](),await _0x67a592['followUp']({'embeds':[_0x2d570f],'components':[_0x4c61a5],'ephemeral':!![],'fetchReply':!![]})['then'](async _0x4da711=>{const _0x356edb=_0x4da711['createMessageComponentCollector']({'time':0x493e0});_0x356edb['on']('collect',async _0x21b254=>{_0x21b254['customId']==='create'&&(await _0x21b254['deferUpdate'](),await _0x21b254['deleteReply'](),await _0x779a91['emit']('createLicenseKey',_0x67a592,_0x58cee0,_0x3d3bec,_0x5dd518)),_0x21b254['customId']==='cancel'&&(await _0x21b254['deferUpdate'](),await _0x67a592['deleteReply']());});});}if(_0xf93528==='list'){if(config['license_list']['Enabled']===![])return _0x67a592['reply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x36bf47=config['license_list']['AllowedRoles']['some'](_0x374a9b=>{const _0x5b21da=_0x67a592['guild']['roles']['cache']['get'](_0x374a9b);return _0x5b21da&&_0x67a592['member']['roles']['cache']['has'](_0x374a9b);});if(!config['DevMode']&&!_0x36bf47)return _0x67a592['reply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});await _0x67a592['deferReply']({'ephemeral':!![]});const _0x231ea8=await licenseModel['find']();if(!_0x231ea8||_0x231ea8?.['length']==0x0)return _0x67a592['editReply']({'content':'🔴\x20|\x20There\x27s\x20no\x20license\x20keys\x20yet!','ephemeral':!![]});let _0x2a9acf=[];for(let _0x2aca31=0x0;_0x2aca31<_0x231ea8['length'];_0x2aca31++){const _0x3babb0=_0x231ea8[_0x2aca31];if(!_0x3babb0['latestIP'])_0x3babb0['latestIP']='Unknown';if(!_0x3babb0['latestHWID'])_0x3babb0['latestHWID']='Unknown';if(!_0x3babb0['totalRequests'])_0x3babb0['totalRequests']=0x0;let _0x44979b=_0x779a91['users']['cache']['get'](_0x3babb0['discordUserID']),_0x4fefed,_0x1385f3;if(!_0x44979b)_0x4fefed='⚠️\x20Unknown';if(!_0x44979b)_0x1385f3='Unknown';if(_0x44979b)_0x4fefed='<@!'+_0x44979b['id']+'>';if(_0x44979b)_0x1385f3=''+_0x44979b['username'];let _0x599858=new Discord['EmbedBuilder']();_0x599858['setAuthor']({'name':'🔑\x20Total\x20License\x20Keys:\x20'+_0x231ea8['length']}),_0x599858['setColor'](config['EmbedColors']),_0x599858['addFields']({'name':'•\x20License\x20Information:','value':'>\x20License\x20Key:\x20``'+_0x3babb0['licenseKey']+'``\x0a>\x20Product:\x20``'+_0x3babb0['productName']+'``\x0a>\x20Total\x20Requests:\x20``'+_0x3babb0['totalRequests']+'``\x0a>\x20Latest\x20IP:\x20``'+_0x3babb0['latestIP']+'``\x0a>\x20Latest\x20HWID:\x20``'+_0x3babb0['latestHWID']+'``\x0a>\x20Created\x20at:\x20<t:'+(_0x3babb0['createdAt']/0x3e8|0x0)+':R>'}),_0x599858['addFields']({'name':'•\x20User\x20Information:','value':'>\x20User:\x20'+_0x4fefed+'\x20('+_0x1385f3+')\x0a>\x20User\x20ID:\x20``'+_0x3babb0['discordUserID']+'``\x0a>\x20[BuiltByBit\x20User\x20ID:](https://builtbybit.com/members/swqpping.'+_0x3babb0['builtbybitUserID']+'/)\x20``'+_0x3babb0['builtbybitUserID']+'``'}),_0x599858['setTimestamp'](),_0x2a9acf['push'](_0x599858);}utils['paginateEmbed'](_0x67a592,['⏪','Previous','Next','⏩'],_0x2a9acf,'3m');}if(_0xf93528==='delete'){if(config['license_delete']['Enabled']===![])return _0x67a592['reply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x48dce7=config['license_delete']['AllowedRoles']['some'](_0x8142a=>{const _0x1ba8af=_0x67a592['guild']['roles']['cache']['get'](_0x8142a);return _0x1ba8af&&_0x67a592['member']['roles']['cache']['has'](_0x8142a);});if(!config['DevMode']&&!_0x48dce7)return _0x67a592['reply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});await _0x67a592['deferReply']({'ephemeral':!![]});let _0x587537=_0x67a592['options']['getString']('licensekey');const _0x1d1efa=await licenseModel['findOne']({'licenseKey':_0x587537});if(!_0x1d1efa)return _0x67a592['editReply']({'content':'🔴\x20|\x20This\x20license\x20key\x20does\x20not\x20exist!\x20``('+_0x587537+')``'});await licenseModel['findOneAndDelete']({'licenseKey':_0x587537});const _0x1ee8b2=await statisticsModel['findOne']({'name':'Statistics'});_0x1ee8b2['totalLicenses']--,await _0x1ee8b2['save']();try{if(_0x8377fb){let _0x3dd595=_0x779a91['users']['cache']['get'](_0x1d1efa['discordUserID']),_0x38fd30,_0x3c8259;if(!_0x3dd595)_0x38fd30='⚠️\x20Unknown';if(!_0x3dd595)_0x3c8259='Unknown';if(_0x3dd595)_0x38fd30='<@!'+_0x3dd595['id']+'>';if(_0x3dd595)_0x3c8259=''+_0x3dd595['username'];if(!_0x1d1efa['builtbybitUserID'])_0x1d1efa['builtbybitUserID']='Unknown';let _0x17e875=new Discord['EmbedBuilder']();_0x17e875['setAuthor']({'name':'🔴\x20License\x20Deleted'}),_0x17e875['setColor']('Red'),_0x17e875['addFields']({'name':'•\x20License\x20Information:','value':'>\x20License\x20Key:\x20``'+_0x587537+'``\x0a>\x20Product:\x20``'+_0x1d1efa['productName']+'``\x0a>\x20Created\x20at:\x20<t:'+(_0x1d1efa['createdAt']/0x3e8|0x0)+':R>'}),_0x17e875['addFields']({'name':'•\x20License\x20User\x20Information:','value':'>\x20User:\x20'+_0x38fd30+'\x20('+_0x3c8259+')\x0a>\x20User\x20ID:\x20``'+_0x3dd595['id']+'``\x0a>\x20[BuiltByBit\x20User\x20ID:](https://builtbybit.com/members/swqpping.'+_0x1d1efa['builtbybitUserID']+'/)\x20``'+_0x1d1efa['builtbybitUserID']+'``'}),_0x17e875['addFields']({'name':'•\x20Deleted\x20by:','value':'>\x20User:\x20<@!'+_0x67a592['user']['id']+'>\x20('+_0x67a592['user']['username']+')\x0a>\x20User\x20ID:\x20``'+_0x67a592['user']['id']+'``'}),_0x17e875['setTimestamp'](),_0x8377fb['send']({'embeds':[_0x17e875]});}}catch(_0x1c670a){console['error'](_0x1c670a);}return _0x67a592['editReply']({'content':'🟢\x20|\x20You\x20successfully\x20deleted\x20this\x20license\x20key!\x20``('+_0x587537+')``'});}if(_0xf93528==='get'){if(config['license_get']['Enabled']===![])return _0x67a592['reply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x3ab5aa=config['license_get']['AllowedRoles']['some'](_0x1f9cab=>{const _0x2f6e61=_0x67a592['guild']['roles']['cache']['get'](_0x1f9cab);return _0x2f6e61&&_0x67a592['member']['roles']['cache']['has'](_0x1f9cab);});if(!config['DevMode']&&!_0x3ab5aa)return _0x67a592['reply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});await _0x67a592['deferReply']({'ephemeral':!![]});let _0x19d377=_0x67a592['options']['getString']('query');const _0x53b510=await licenseModel['find'](_0x19d377?{'$or':[{'licenseKey':_0x19d377},{'discordUserID':_0x19d377},{'builtbybitUserID':_0x19d377}]}:{});if(!_0x53b510||_0x53b510['length']==0x0)return _0x67a592['editReply']('🔴\x20|\x20No\x20license\x20key\x20with\x20that\x20value\x20found!\x20``('+_0x19d377+')``');let _0xb74797=[];for(let _0x5933d3=0x0;_0x5933d3<_0x53b510['length'];_0x5933d3++){const _0x49dba4=_0x53b510[_0x5933d3];if(!_0x49dba4['latestIP'])_0x49dba4['latestIP']='Unknown';if(!_0x49dba4['latestHWID'])_0x49dba4['latestHWID']='Unknown';if(!_0x49dba4['totalRequests'])_0x49dba4['totalRequests']=0x0;let _0x55adc5=_0x779a91['users']['cache']['get'](_0x49dba4['discordUserID']),_0x41dd9d,_0x5ebdb1;if(!_0x55adc5)_0x41dd9d='⚠️\x20Unknown';if(!_0x55adc5)_0x5ebdb1='Unknown';if(_0x55adc5)_0x41dd9d='<@!'+_0x55adc5['id']+'>';if(_0x55adc5)_0x5ebdb1=''+_0x55adc5['username'];let _0x575835=new Discord['EmbedBuilder']();_0x575835['setAuthor']({'name':'🔑\x20License\x20Keys\x20Found:\x20'+_0x53b510['length']}),_0x575835['setColor'](config['EmbedColors']),_0x575835['addFields']({'name':'•\x20License\x20Information:','value':'>\x20License\x20Key:\x20``'+_0x49dba4['licenseKey']+'``\x0a>\x20Product:\x20``'+_0x49dba4['productName']+'``\x0a>\x20Total\x20Requests:\x20``'+_0x49dba4['totalRequests']+'``\x0a>\x20Latest\x20IP:\x20``'+_0x49dba4['latestIP']+'``\x0a>\x20Latest\x20HWID:\x20``'+_0x49dba4['latestHWID']+'``\x0a>\x20Created\x20at:\x20<t:'+(_0x49dba4['createdAt']/0x3e8|0x0)+':R>'}),_0x575835['addFields']({'name':'•\x20User\x20Information:','value':'>\x20User:\x20'+_0x41dd9d+'\x20('+_0x5ebdb1+')\x0a>\x20User\x20ID:\x20``'+_0x49dba4['discordUserID']+'``\x0a>\x20[BuiltByBit\x20User\x20ID:](https://builtbybit.com/members/swqpping.'+_0x49dba4['builtbybitUserID']+'/)\x20``'+_0x49dba4['builtbybitUserID']+'``'}),_0x575835['setTimestamp'](),_0xb74797['push'](_0x575835);};if(_0xb74797['length']==0x1)return _0x67a592['editReply']({'embeds':_0xb74797});utils['paginateEmbed'](_0x67a592,['⏪','Previous','Next','⏩'],_0xb74797,'3m');}if(_0xf93528==='cleardata'){if(config['license_cleardata']['Enabled']===![])return _0x67a592['reply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x3c3517=config['license_cleardata']['AllowedRoles']['some'](_0x3c8b6d=>{const _0x247275=_0x67a592['guild']['roles']['cache']['get'](_0x3c8b6d);return _0x247275&&_0x67a592['member']['roles']['cache']['has'](_0x3c8b6d);});if(!config['DevMode']&&!_0x3c3517)return _0x67a592['reply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});await _0x67a592['deferReply']({'ephemeral':!![]});let _0x2ca92c=_0x67a592['options']['getString']('licensekey'),_0x399e83=_0x67a592['options']['getString']('data');const _0x1f45eb=await licenseModel['findOne']({'licenseKey':_0x2ca92c});if(!_0x1f45eb)return _0x67a592['editReply']({'content':'🔴\x20|\x20This\x20license\x20key\x20does\x20not\x20exist!\x20``('+_0x2ca92c+')``'});_0x399e83==='IP'&&(await _0x1f45eb['updateOne']({'ipList':[]}),await _0x67a592['editReply']({'content':'🟢\x20|\x20You\x20successfully\x20deleted\x20the\x20IP\x20data\x20of\x20this\x20license\x20key!\x20``('+_0x2ca92c+')``'}));_0x399e83==='HWID'&&(await _0x1f45eb['updateOne']({'hwidList':[]}),await _0x67a592['editReply']({'content':'🟢\x20|\x20You\x20successfully\x20deleted\x20the\x20HWID\x20data\x20of\x20this\x20license\x20key!\x20``('+_0x2ca92c+')``'}));try{if(_0x8377fb){let _0x3f0455=_0x779a91['users']['cache']['get'](_0x1f45eb['discordUserID']),_0x588bd1,_0x10a7d2;if(!_0x3f0455)_0x588bd1='⚠️\x20Unknown';if(!_0x3f0455)_0x10a7d2='Unknown';if(_0x3f0455)_0x588bd1='<@!'+_0x3f0455['id']+'>';if(_0x3f0455)_0x10a7d2=''+_0x3f0455['username'];if(!_0x1f45eb['builtbybitUserID'])_0x1f45eb['builtbybitUserID']='Unknown';let _0xaa521e=new Discord['EmbedBuilder']();_0xaa521e['setAuthor']({'name':'🟠\x20License\x20Data\x20Cleared\x20('+_0x399e83+')'}),_0xaa521e['setColor']('Orange'),_0xaa521e['addFields']({'name':'•\x20License\x20Information:','value':'>\x20License\x20Key:\x20``'+_0x2ca92c+'``\x0a>\x20Product:\x20``'+_0x1f45eb['productName']+'``\x0a>\x20Created\x20at:\x20<t:'+(_0x1f45eb['createdAt']/0x3e8|0x0)+':R>'}),_0xaa521e['addFields']({'name':'•\x20License\x20User\x20Information:','value':'>\x20User:\x20'+_0x588bd1+'\x20('+_0x10a7d2+')\x0a>\x20User\x20ID:\x20``'+_0x3f0455['id']+'``\x0a>\x20[BuiltByBit\x20User\x20ID:](https://builtbybit.com/members/swqpping.'+_0x1f45eb['builtbybitUserID']+'/)\x20``'+_0x1f45eb['builtbybitUserID']+'``'}),_0xaa521e['addFields']({'name':'•\x20Cleared\x20by:','value':'>\x20User:\x20<@!'+_0x67a592['user']['id']+'>\x20('+_0x67a592['user']['username']+')\x0a>\x20User\x20ID:\x20``'+_0x67a592['user']['id']+'``'}),_0xaa521e['setTimestamp'](),_0x8377fb['send']({'embeds':[_0xaa521e]});}}catch(_0x2bfbe7){console['error'](_0x2bfbe7);}}}};