const _0x32ffe7=(function(){let _0x4022c2=!![];return function(_0x43e98d,_0x3b1328){const _0x5e033a=_0x4022c2?function(){if(_0x3b1328){const _0x19b582=_0x3b1328['apply'](_0x43e98d,arguments);return _0x3b1328=null,_0x19b582;}}:function(){};return _0x4022c2=![],_0x5e033a;};}()),_0x49ef94=_0x32ffe7(this,function(){return _0x49ef94['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x49ef94)['search']('(((.+)+)+)+$');});_0x49ef94();const {SlashCommandBuilder}=require('@discordjs/builders'),Discord=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),productModel=require('../models/productModel'),licenseModel=require('../models/licenseModel'),statisticsModel=require('../models/statisticsModel'),utils=require('../utils.js');module['exports']={'data':new SlashCommandBuilder()['setName']('product')['setDescription']('Manage\x20products')['addSubcommand'](_0x22e0ae=>_0x22e0ae['setName']('create')['setDescription']('Create\x20a\x20new\x20product')['addStringOption'](_0x3e652d=>_0x3e652d['setName']('name')['setDescription']('The\x20name\x20of\x20the\x20product\x20(No\x20spaces)')['setRequired'](!![]))['addRoleOption'](_0xcaded1=>_0xcaded1['setName']('role')['setDescription']('The\x20customer\x20role\x20for\x20this\x20product')['setRequired'](config['LicenseSettings']['GiveCustomerRole'])))['addSubcommand'](_0x46da13=>_0x46da13['setName']('delete')['setDescription']('Delete\x20a\x20specific\x20product')['addStringOption'](_0x46248b=>_0x46248b['setName']('name')['setDescription']('The\x20name\x20of\x20the\x20product\x20(No\x20spaces)')['setRequired'](!![])))['addSubcommand'](_0x18cdd9=>_0x18cdd9['setName']('list')['setDescription']('Get\x20a\x20list\x20of\x20all\x20products-')),async 'execute'(_0x271748,_0x28ac09){await _0x271748['deferReply']({'ephemeral':!![]});let _0x726803;if(config['WebhookLogsSettings']['Enabled']&&config['WebhookLogsSettings']['CommandsWebhookURL'])_0x726803=new Discord['WebhookClient']({'url':config['WebhookLogsSettings']['CommandsWebhookURL']});let _0x33efc9=_0x271748['options']['getSubcommand']();if(_0x33efc9==='create'){if(config['product_create']['Enabled']===![])return _0x271748['editReply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x5aa8f9=config['product_create']['AllowedRoles']['some'](_0x3a1826=>{const _0x19a211=_0x271748['guild']['roles']['cache']['get'](_0x3a1826);return _0x19a211&&_0x271748['member']['roles']['cache']['has'](_0x3a1826);});if(!config['DevMode']&&!_0x5aa8f9)return _0x271748['editReply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});const _0x489b1e=_0x271748['options']['getString']('name'),_0x52f136=_0x271748['options']['getRole']('role');let _0x2bc8de;if(!_0x52f136)_0x2bc8de='';if(_0x52f136)_0x2bc8de=_0x52f136['id'];if(_0x489b1e['match'](/\s/g))return _0x271748['editReply']({'content':'🔴\x20|\x20A\x20product\x20name\x20can\x27t\x20contain\x20spaces!','ephemeral':!![]});const _0x28f6de=await productModel['findOne']({'name':_0x489b1e});if(_0x28f6de)return _0x271748['editReply']({'content':'🔴\x20|\x20A\x20product\x20with\x20that\x20name\x20already\x20exists!','ephemeral':!![]});const _0x1e927b=new productModel({'name':_0x489b1e,'customerRoleID':_0x2bc8de,'createdBy':_0x271748['user']['id'],'createdAt':Date['now'](),'updatedAt':Date['now']()});await _0x1e927b['save']();try{if(_0x726803){let _0x1663ce=new Discord['EmbedBuilder']();_0x1663ce['setAuthor']({'name':'🟢\x20Product\x20Created'}),_0x1663ce['setColor']('Green'),_0x1663ce['addFields']({'name':'•\x20Product\x20Information:','value':'>\x20Product\x20Name:\x20``'+_0x489b1e+'``\x0a>\x20Created\x20at:\x20<t:'+(Date['now']()/0x3e8|0x0)+':R>'}),_0x1663ce['addFields']({'name':'•\x20Created\x20by:','value':'>\x20User:\x20<@!'+_0x271748['user']['id']+'>\x20('+_0x271748['user']['username']+')\x0a>\x20User\x20ID:\x20``'+_0x271748['user']['id']+'``'}),_0x1663ce['setTimestamp'](),_0x726803['send']({'embeds':[_0x1663ce]});}}catch(_0x2ea032){console['error'](_0x2ea032);}return _0x271748['editReply']({'content':'🟢\x20|\x20You\x20successfully\x20created\x20a\x20new\x20product!\x20``('+_0x489b1e+')``\x0a\x0a⚠️\x20|\x20Make\x20sure\x20to\x20always\x20use\x20the\x20exact\x20same\x20product\x20name\x20when\x20setting\x20up\x20the\x20authentication\x20for\x20your\x20product.'});}if(_0x33efc9==='delete'){if(config['product_delete']['Enabled']===![])return _0x271748['editReply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x5f0b5d=config['product_delete']['AllowedRoles']['some'](_0x424fdf=>{const _0x317809=_0x271748['guild']['roles']['cache']['get'](_0x424fdf);return _0x317809&&_0x271748['member']['roles']['cache']['has'](_0x424fdf);});if(!config['DevMode']&&!_0x5f0b5d)return _0x271748['editReply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});const _0x59e76e=_0x271748['options']['getString']('name');if(_0x59e76e['match'](/\s/g))return _0x271748['editReply']({'content':'🔴\x20|\x20A\x20product\x20name\x20can\x27t\x20contain\x20spaces!','ephemeral':!![]});const _0x37c09d=await productModel['findOne']({'name':_0x59e76e});if(!_0x37c09d)return _0x271748['editReply']({'content':'🔴\x20|\x20A\x20product\x20with\x20that\x20name\x20doesn\x27t\x20exist!','ephemeral':!![]});try{if(_0x726803){let _0x5ccbf9=new Discord['EmbedBuilder']();_0x5ccbf9['setAuthor']({'name':'🔴\x20Product\x20Deleted'}),_0x5ccbf9['setColor']('Red'),_0x5ccbf9['addFields']({'name':'•\x20Product\x20Information:','value':'>\x20Product\x20Name:\x20``'+_0x59e76e+'``'}),_0x5ccbf9['addFields']({'name':'•\x20Deleted\x20by:','value':'>\x20User:\x20<@!'+_0x271748['user']['id']+'>\x20('+_0x271748['user']['username']+')\x0a>\x20User\x20ID:\x20``'+_0x271748['user']['id']+'``'}),_0x5ccbf9['setTimestamp'](),_0x726803['send']({'embeds':[_0x5ccbf9]});}}catch(_0x4aae05){console['error'](_0x4aae05);}return await productModel['findOneAndDelete']({'name':_0x59e76e}),_0x271748['editReply']({'content':'🟢\x20|\x20You\x20successfully\x20deleted\x20a\x20product!\x20``('+_0x59e76e+')``'});}if(_0x33efc9==='list'){if(config['product_list']['Enabled']===![])return _0x271748['editReply']({'content':'🔴\x20|\x20This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});const _0x4d9a11=config['product_list']['AllowedRoles']['some'](_0x385e31=>{const _0x17b423=_0x271748['guild']['roles']['cache']['get'](_0x385e31);return _0x17b423&&_0x271748['member']['roles']['cache']['has'](_0x385e31);});if(!config['DevMode']&&!_0x4d9a11)return _0x271748['editReply']({'content':'🔴\x20|\x20'+config['Locale']['NoPermsMessage'],'ephemeral':!![]});const _0x3494b0=await productModel['find']();if(!_0x3494b0||_0x3494b0?.['length']==0x0)return _0x271748['editReply']({'content':'🔴\x20|\x20There\x27s\x20no\x20products\x20yet!','ephemeral':!![]});let _0x68761a=[];for(let _0x49e57d=0x0;_0x49e57d<_0x3494b0['length'];_0x49e57d++){const _0x554bbe=_0x3494b0[_0x49e57d];let _0x9c13d0;if(_0x554bbe['customerRoleID'])_0x9c13d0=_0x554bbe['customerRoleID'];if(!_0x554bbe['customerRoleID'])_0x9c13d0='None';let _0x857066=new Discord['EmbedBuilder']();_0x857066['setAuthor']({'name':'📦\x20Total\x20Products:\x20'+_0x3494b0['length']}),_0x857066['setColor'](config['EmbedColors']),_0x857066['addFields']({'name':'•\x20Product\x20Information:','value':'>\x20Product\x20Name:\x20``'+_0x554bbe['name']+'``\x0a>\x20Customer\x20Role:\x20``'+_0x9c13d0+'``\x0a>\x20Created\x20at:\x20<t:'+(_0x554bbe['createdAt']/0x3e8|0x0)+':R>'}),_0x857066['setTimestamp'](),_0x68761a['push'](_0x857066);}utils['paginateEmbed'](_0x271748,['⏪','Previous','Next','⏩'],_0x68761a,'3m');}}};