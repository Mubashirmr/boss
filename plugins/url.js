const _0x4a4829=_0x47d9;(function(_0x12a836,_0x9986ad){const _0x283b01=_0x47d9,_0x2aaa65=_0x12a836();while(!![]){try{const _0x38f7ae=-parseInt(_0x283b01(0x1f4))/0x1+-parseInt(_0x283b01(0x1f3))/0x2+parseInt(_0x283b01(0x1ea))/0x3+-parseInt(_0x283b01(0x1f5))/0x4+-parseInt(_0x283b01(0x1e3))/0x5+-parseInt(_0x283b01(0x1d8))/0x6+parseInt(_0x283b01(0x1ef))/0x7;if(_0x38f7ae===_0x9986ad)break;else _0x2aaa65['push'](_0x2aaa65['shift']());}catch(_0x40c8a1){_0x2aaa65['push'](_0x2aaa65['shift']());}}}(_0x5075,0x57256));const {MODE,IMGBB_KEY}=require(_0x4a4829(0x1dc));async function webpUpload(_0x2b9cda){return new Promise(async _0x115132=>{const _0x2ee464=_0x47d9,_0x12a65a=require('imgbb-uploader');for(let _0x20ca39 of IMGBB_KEY){const _0x32cf60={'apiKey':_0x20ca39,'imagePath':_0x2b9cda};var _0x1a02bd=await _0x12a65a(_0x32cf60);if(_0x1a02bd[_0x2ee464(0x1e7)])return _0x115132(_0x1a02bd[_0x2ee464(0x1e7)]);}});}function _0x47d9(_0xb12530,_0x50b3db){const _0x5075c2=_0x5075();return _0x47d9=function(_0x47d9d3,_0x273af5){_0x47d9d3=_0x47d9d3-0x1d4;let _0x1b93a9=_0x5075c2[_0x47d9d3];return _0x1b93a9;},_0x47d9(_0xb12530,_0x50b3db);}const {Module}=require(_0x4a4829(0x1e4)),ffmpeg=require('fluent-ffmpeg'),{upload}=require(_0x4a4829(0x1f1));let a=MODE==_0x4a4829(0x1db)?![]:!![];function _0x5075(){const _0x2a4614=['998524dlfZRH','512809BujgBG','1046792LPXRlt','video','client','_Failed\x20to\x20upload\x20file!_','reply_message','_ᴍᴀᴋɪɴɢ..ᴛᴏ..ᴜʀʟ..._','3327726ICBgPt','[vid]','image','public','../config','download','sendReply','_Audio\x20too\x20large.\x20Try\x20below\x2090\x20seconds!_','duration','link','sticker','1745965EoRBdQ','../main','quoted','*_Reply\x20to\x20image|video|audio|sticker_*','url','[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]','url\x20?(.*)','218607XLwUlK','outputOptions','jid','-filter_complex','output.mp4','17231648JgojbA','end','abu-bot','sendMessage'];_0x5075=function(){return _0x2a4614;};return _0x5075();}Module({'pattern':_0x4a4829(0x1e9),'fromMe':a,'use':'utility','desc':'Uploads\x20image\x20to\x20imgur.com'},async _0x1b696d=>{const _0x3e7b77=_0x4a4829;if(_0x1b696d[_0x3e7b77(0x1d6)][_0x3e7b77(0x1e2)])return await _0x1b696d['client'][_0x3e7b77(0x1f2)](_0x1b696d[_0x3e7b77(0x1ec)],{'text':'_'+await webpUpload(await _0x1b696d[_0x3e7b77(0x1d6)][_0x3e7b77(0x1dd)]())+'_'},{'quoted':_0x1b696d[_0x3e7b77(0x1e5)]});else{if(_0x1b696d['reply_message']['audio']){if(_0x1b696d[_0x3e7b77(0x1d6)][_0x3e7b77(0x1e0)]>0x5a)return await _0x1b696d[_0x3e7b77(0x1d4)][_0x3e7b77(0x1f2)](_0x1b696d['jid'],{'text':_0x3e7b77(0x1df)},{'quoted':_0x1b696d[_0x3e7b77(0x1e5)]});var _0x431859=await _0x1b696d[_0x3e7b77(0x1d6)][_0x3e7b77(0x1dd)]();await _0x1b696d['sendReply'](_0x3e7b77(0x1d7)),ffmpeg(_0x431859)[_0x3e7b77(0x1eb)](['-y',_0x3e7b77(0x1ed),_0x3e7b77(0x1e8),'-map',_0x3e7b77(0x1d9),'-map\x200:a'])['save'](_0x3e7b77(0x1ee))['on'](_0x3e7b77(0x1f0),async()=>{const _0x1bedf1=_0x3e7b77;try{var _0x1dd851=await upload(_0x1bedf1(0x1ee));}catch{return await _0x1b696d[_0x1bedf1(0x1d4)]['sendMessage'](_0x1b696d['jid'],{'text':_0x1bedf1(0x1d5)},{'quoted':_0x1b696d[_0x1bedf1(0x1e5)]});}return await _0x1b696d[_0x1bedf1(0x1d4)][_0x1bedf1(0x1f2)](_0x1b696d[_0x1bedf1(0x1ec)],{'text':'_'+_0x1dd851[_0x1bedf1(0x1e1)]+'_'},{'quoted':_0x1b696d[_0x1bedf1(0x1e5)]});});}else{if(_0x1b696d[_0x3e7b77(0x1d6)][_0x3e7b77(0x1da)]||_0x1b696d[_0x3e7b77(0x1d6)][_0x3e7b77(0x1f6)])try{await _0x1b696d[_0x3e7b77(0x1d4)][_0x3e7b77(0x1f2)](_0x1b696d['jid'],{'text':'_'+(await upload(await _0x1b696d[_0x3e7b77(0x1d6)][_0x3e7b77(0x1dd)]()))['link']+'_'},{'quoted':_0x1b696d[_0x3e7b77(0x1e5)]});}catch{return await _0x1b696d['client'][_0x3e7b77(0x1f2)](_0x1b696d[_0x3e7b77(0x1ec)],{'text':_0x3e7b77(0x1d5)},{'quoted':_0x1b696d[_0x3e7b77(0x1e5)]});}else return await _0x1b696d[_0x3e7b77(0x1de)](_0x3e7b77(0x1e6));}}});
