/* HỒ SƠ 1991 – trò chơi tĩnh cho GitHub Pages. Không gửi dữ liệu đi đâu. */
'use strict';
const $ = (selector, root=document) => root.querySelector(selector);
const app = $('#app');
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = (name, cls='') => `<svg class="ico ${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
const stages = [
  {
    topic:'KINH TẾ',icon:'factory', title:'Cỗ máy kế hoạch hóa', label:'03.1 · HẠN CHẾ KINH TẾ',
    desc:'Vì sao cơ chế từng hỗ trợ công nghiệp hóa lại dần trở thành lực cản khi nền kinh tế thay đổi?',
    pieces:[
      ['01','Giai đoạn đầu','Kế hoạch hóa tập trung giúp huy động nguồn lực để phát triển công nghiệp nặng, hạ tầng và tái thiết.'],
      ['02','Vấn đề vận hành','Cơ quan nhà nước ấn định nhiều chỉ tiêu; doanh nghiệp thiếu tự chủ và động lực đổi mới.'],
      ['03','Hệ quả lâu dài','Hiệu quả thấp, thiếu hàng tiêu dùng, tăng trưởng chậm và khó thích ứng với công nghệ mới.']
    ],
    insight:'Bài học lý luận: quan hệ sản xuất và cơ chế quản lý cần phù hợp với trình độ phát triển của lực lượng sản xuất.',
    puzzle:'Khôi phục chuỗi nguyên nhân – hệ quả',
    instruction:'Chạm vào bốn mảnh tài liệu theo thứ tự hợp lý, từ đặc điểm cơ chế đến hệ quả lâu dài.',
    reveal:'Cơ chế kiểm soát chỉ tiêu tập trung hạn chế quyền tự chủ; động lực đổi mới giảm, kéo theo hiệu quả và khả năng thích ứng thấp. Đó là một quá trình, không phải sự kiện xảy ra ngay lập tức.'
  },
  {
    topic:'CHÍNH TRỊ',icon:'landmark',title:'Những tín hiệu không được lắng nghe',label:'03.2 · HỆ THỐNG CHÍNH TRỊ',
    desc:'Khủng hoảng kinh tế tác động đến niềm tin xã hội như thế nào khi bộ máy quản lý phản ứng chậm?',
    pieces:[
      ['01','Cơ cấu quản lý','Tập trung quyền lực và quan liêu khiến khả năng giám sát, kiểm soát quyền lực còn hạn chế.'],
      ['02','Quan hệ với người dân','Một số yêu cầu cải cách, phản ánh của nhân dân không được tiếp nhận và giải quyết kịp thời.'],
      ['03','Tác động chính trị','Khó khăn đời sống kéo dài cùng với bất cập quản lý làm suy giảm niềm tin xã hội ở nhiều nơi.']
    ],
    insight:'Ở Đông Âu, các phong trào xã hội và yêu cầu cải cách chính trị còn chịu tác động từ thay đổi chính sách của Liên Xô.',
    puzzle:'Tìm đúng ba chứng cứ chính trị',
    instruction:'Giữa sáu mẩu tài liệu, hãy chọn đúng 3 chứng cứ thuộc nhóm hạn chế của hệ thống chính trị, không nhầm với nguyên nhân kinh tế và quốc tế.',
    reveal:'Ba dấu hiệu tiêu biểu là tình trạng quan liêu, thiếu cơ chế giám sát hiệu quả và chậm đáp ứng yêu cầu cải cách. Chúng tương tác với khó khăn kinh tế, không tồn tại riêng lẻ.'
  },
  {
    topic:'CẢI TỔ',icon:'reform',title:'Những mắt xích cải tổ',label:'03.3 · QUÁ TRÌNH CẢI TỔ',
    desc:'Cải tổ có mục tiêu khắc phục trì trệ, nhưng vì sao quá trình triển khai lại không ngăn được khủng hoảng?',
    pieces:[
      ['01','Bối cảnh','Từ năm 1985, Mikhail Gorbachev khởi xướng cải tổ để khắc phục trì trệ kinh tế – xã hội.'],
      ['02','Thiếu đồng bộ','Cải cách kinh tế chưa tạo cơ chế vận hành ổn định, trong khi biến động chính trị diễn ra nhanh chóng.'],
      ['03','Khủng hoảng mở rộng','Các thiết chế suy yếu cùng với mâu thuẫn giữa trung ương và các nước cộng hòa làm bất ổn tăng lên.']
    ],
    insight:'Cải cách là yêu cầu xuất phát từ những khó khăn có thật; vấn đề nằm ở quá trình tổ chức, mức độ đồng bộ và khả năng xử lý hệ quả.',
    puzzle:'Ghép ba mắt xích của cải tổ',
    instruction:'Chọn một thẻ NGUYÊN NHÂN ở cột trái, rồi chọn HỆ QUẢ phù hợp ở cột phải. Hoàn thành đủ ba cặp.',
    reveal:'Kinh tế cải cách thiếu đồng bộ → vận hành không ổn định; biến động chính trị nhanh → thiết chế suy yếu; mâu thuẫn trung ương – cộng hòa → tranh chấp quyền lực và chủ quyền gia tăng.'
  },
  {
    topic:'QUỐC TẾ',icon:'globe',title:'Sức ép hai phía',label:'03.4 · MÔI TRƯỜNG QUỐC TẾ',
    desc:'Chạy đua vũ trang và cạnh tranh công nghệ làm các hạn chế nội tại bộc lộ rõ hơn ra sao?',
    pieces:[
      ['01','Chiến tranh lạnh','Cạnh tranh quân sự với Hoa Kỳ và đồng minh đòi hỏi nguồn lực lớn trong thời gian dài.'],
      ['02','Đánh đổi nguồn lực','Chi quốc phòng cao gây áp lực lên các nhu cầu dân sinh, sản xuất và nghiên cứu công nghệ.'],
      ['03','Phân biệt nguyên nhân','Sức ép bên ngoài làm tình hình nghiêm trọng hơn nhưng không đủ để giải thích mọi hạn chế nội tại.']
    ],
    insight:'Bảng ngân sách sau là tình huống giả định để hiểu đánh đổi nguồn lực, KHÔNG phải số liệu ngân sách lịch sử của Liên Xô.',
    puzzle:'Phòng điều phối ngân sách',
    instruction:'Bạn có 10 đơn vị giả lập; nhu cầu của ba lĩnh vực là 6, 5 và 4 đơn vị. Phân bổ đủ 10 đơn vị rồi xác định lĩnh vực bị thiếu hụt nhiều nhất so với nhu cầu.',
    reveal:'Tổng nhu cầu giả định là 15 trong khi chỉ có 10 đơn vị. Dù phân bổ theo cách nào, luôn tồn tại đánh đổi. Đây là minh họa cho gánh nặng cạnh tranh quốc tế, không phải một công thức phân bổ tối ưu của Liên Xô.'
  },
  {
    topic:'TỔNG HỢP',icon:'network',title:'Bức tranh toàn cảnh',label:'03.5 · TỔNG HỢP NGUYÊN NHÂN',
    desc:'Sự tan rã không xuất phát từ một nguyên nhân duy nhất. Hãy phục dựng những mối liên hệ tác động qua lại.',
    pieces:[
      ['01','Hạn chế nội tại','Bất cập kinh tế và chính trị tạo ra khó khăn kéo dài, làm suy giảm khả năng tự điều chỉnh.'],
      ['02','Tác nhân gia tăng','Cải tổ thiếu đồng bộ làm khủng hoảng sâu sắc hơn; sức ép quốc tế tăng gánh nặng nguồn lực.'],
      ['03','Kết luận phân tích','Nguyên nhân kinh tế, chính trị, cải tổ và quốc tế có quan hệ với nhau, không thể quy về một yếu tố duy nhất.']
    ],
    insight:'Hãy tìm mối liên hệ có thể giải thích bằng lý luận và thực tiễn, thay vì cho rằng một nguyên nhân riêng lẻ tạo nên toàn bộ kết quả.',
    puzzle:'Lập bản đồ bốn nguyên nhân',
    instruction:'Chọn một nút làm nguyên nhân, sau đó chọn nút chịu tác động để tạo MŨI TÊN. Hãy lập đúng bốn liên hệ có căn cứ từ bài giảng.',
    reveal:'Sức ép quốc tế tăng gánh nặng kinh tế; khó khăn kinh tế thúc đẩy yêu cầu cải tổ và làm suy giảm niềm tin chính trị; cải tổ thiếu đồng bộ tiếp tục gây bất ổn chính trị. Sơ đồ chỉ minh họa một số quan hệ, không phải lời giải thích đầy đủ cho toàn bộ lịch sử.'
  }
];
const econOptions=[{id:'eff',text:'Hiệu quả và khả năng thích ứng suy giảm'},{id:'direct',text:'Nhà nước ấn định nhiều chỉ tiêu sản xuất'},{id:'innov',text:'Động lực đổi mới công nghệ giảm'},{id:'auto',text:'Doanh nghiệp thiếu quyền tự chủ'}];
const econCorrect=['direct','auto','innov','eff'];
const evidence=[{id:'bureau',text:'Tình trạng quan liêu, quyền lực tập trung'},{id:'army',text:'Áp lực chạy đua vũ trang'},{id:'inspect',text:'Thiếu cơ chế giám sát hiệu quả'},{id:'factory',text:'Doanh nghiệp thiếu tự chủ sản xuất'},{id:'respond',text:'Chậm đáp ứng các yêu cầu cải cách'},{id:'tech',text:'Chậm thích ứng với công nghệ mới'}];
const evidenceCorrect=['bureau','inspect','respond'];
const reformLeft=[{id:'a',text:'Cải cách kinh tế thiếu đồng bộ'},{id:'b',text:'Thay đổi chính trị diễn ra nhanh'},{id:'c',text:'Mâu thuẫn trung ương – cộng hòa gia tăng'}];
const reformRight=[{id:'y',text:'Thiết chế quản lý hiện có bị suy yếu'},{id:'z',text:'Tranh chấp quyền lực và chủ quyền leo thang'},{id:'x',text:'Cơ chế vận hành thiếu ổn định'}];
const reformCorrect={a:'x',b:'y',c:'z'};
const budgetCategories=[{id:'defense',name:'Quốc phòng',need:6},{id:'people',name:'Dân sinh – sản xuất',need:5},{id:'science',name:'Khoa học – công nghệ',need:4}];
const finalNodes=[{id:'international',name:'Sức ép quốc tế',ico:'globe'},{id:'economy',name:'Hạn chế kinh tế',ico:'factory'},{id:'politics',name:'Khủng hoảng chính trị',ico:'landmark'},{id:'reform',name:'Cải tổ thiếu đồng bộ',ico:'reform'}];
const finalCorrect=['international>economy','economy>politics','economy>reform','reform>politics'];
const initPuzzle = ()=>({sequence:[], evidence:[], pairs:{}, pairSource:null, budget:{defense:0,people:0,science:0},budgetSelected:null,edges:[],edgeSource:null});
const loadStore=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key));return v??fallback}catch{return fallback}};
const saveStore=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
let scores=loadStore('hoso1991_scores',[]);
let state={mode:'home',name:'',stage:0,phase:'lesson',attempts:0,points:[],puzzle:initPuzzle(),error:'',hostTab:'leaderboard',lectureStage:0,winner:null,spinning:false};
const remembered=loadStore('hoso1991_current',null);
if(remembered?.name && Number.isInteger(remembered.stage) && remembered.stage>=0 && remembered.stage<=5){
  Object.assign(state,{...remembered,mode:'home',hostTab:'leaderboard',winner:null,spinning:false});
}
const saveCurrent=()=>saveStore('hoso1991_current',{name:state.name,stage:state.stage,phase:state.phase,attempts:state.attempts,points:state.points,puzzle:state.puzzle});
const totalPoints=()=>state.points.reduce((s,n)=>s+n,0);
function render(){
  const views={home:homeView,join:joinView,play:gameView,finish:finishView,host:hostView,lecture:lectureView};
  app.innerHTML=(views[state.mode]||homeView)();
  window.scrollTo({top:0,behavior:'instant'});
}
function toHome(){state.mode='home';state.error='';render()}
function homeView(){return `<section class="hero">
  <div><div class="eyebrow">HỒ SƠ TUYỆT MẬT • 1985—1991</div><h1>HỒ SƠ<br><span>1991</span></h1>
  <p class="hero-subtitle">Giải mã những nguyên nhân của một biến cố lịch sử.</p>
  <p class="hero-copy">Mở năm tập hồ sơ về kinh tế, chính trị, cải tổ, sức ép quốc tế và sự tác động qua lại. Mỗi hồ sơ là một bài giảng ngắn và một nhiệm vụ giải đố khác nhau.</p>
  <div class="hero-actions"><button class="btn primary" data-act="join">${icon('archive')} THAM GIA GIẢI MÃ ${icon('arrow','small')}</button><button class="btn outline" data-act="host">${icon('trophy')} BẢNG ĐIỀU PHỐI</button></div>
  ${state.name?`<button class="text-button" style="margin-top:20px" data-act="resume">↗ Tiếp tục hồ sơ của ${esc(state.name)} (${state.points.length}/5)</button>`:''}
  <div class="hero-meta"><div class="meta-item"><strong>05</strong><span>HỒ SƠ</span></div><div class="meta-item"><strong>500</strong><span>ĐIỂM TỐI ĐA</span></div><div class="meta-item"><strong>01</strong><span>PHẦN THƯỞNG</span></div></div></div>
  <div class="hero-visual"><div class="orbit"></div><div class="orbit two"></div><div class="orbit three"></div><div class="compass">✦</div><div class="float-note a">ARCHIVE / 91 – AUTHORIZED</div><div class="float-note b">HISTORY IS NEVER SIMPLE</div><div class="dossier"><div class="dossier-kicker">ARCHIVE OF HISTORICAL EVENTS</div><div class="dossier-stamp">TOP<br>SECRET</div><div class="dossier-bottom">FILE NO. <strong>1991 / 05</strong><br>STATUS: <strong>READY TO DECLASSIFY</strong><br>SUBJECT: <strong>HISTORICAL CAUSES</strong></div></div></div>
  </section>`}
function joinView(){return `<div class="screen-width"><div class="section-top"><div><div class="eyebrow">THỦ TỤC TRUY CẬP</div><h1 class="section-title">Đăng ký điều tra viên</h1><p class="section-desc">Đây là cuộc điều tra mô phỏng. Hãy nhập tên trước khi mở hồ sơ đầu tiên.</p></div><button class="btn tiny outline" data-act="home">${icon('back','small')} Quay lại</button></div><div class="split-join"><section class="panel corner"><form id="joinForm"><label class="input-label" for="playerName">Tên hiển thị</label><input class="name-input" name="playerName" id="playerName" required maxlength="30" autocomplete="nickname" placeholder="VD: Minh Anh" value="${esc(state.name||'')}"/><div class="notice">Mỗi hồ sơ: 01 bài học ngắn + 01 thử thách. Đúng lần đầu: 100 điểm. Mỗi lần sai giảm 35 điểm; sau 3 lần sai, hồ sơ tự mở với 0 điểm.</div><button class="btn primary" style="margin-top:22px;width:100%" type="submit">MỞ HỒ SƠ ĐẦU TIÊN ${icon('arrow','small')}</button></form></section><aside class="panel"><div class="eyebrow" style="margin-bottom:20px">QUY TẮC THAM GIA</div><ol class="rule-list"><li><b>01</b><span>Đọc tư liệu và theo dõi phần thuyết trình ở từng chương.</span></li><li><b>02</b><span>Giải nhiệm vụ bằng thao tác tương tác, không chỉ chọn đáp án A/B/C/D.</span></li><li><b>03</b><span>Chụp màn hình điểm tổng kết và báo cho người điều phối để vào bảng xếp hạng.</span></li></ol></aside></div></div>`}
function navHtml(){return `<aside class="mission-nav"><div class="nav-head">DANH MỤC HỒ SƠ</div>${stages.map((s,i)=>`<div class="mission-step ${i===state.stage?'active':''} ${i<state.points.length?'done':''}"><span class="step-index">${i<state.points.length?'✓':String(i+1).padStart(2,'0')}</span><span><strong>${s.topic}</strong><small>${i<state.points.length?'ĐÃ GIẢI MÃ':i===state.stage?'ĐANG TRUY CẬP':'CHƯA MỞ KHÓA'}</small></span></div>`).join('')}<div class="mission-progress"><div class="bar"><span style="width:${state.points.length/5*100}%"></span></div><div class="progress-label"><span>${state.points.length}/5 hồ sơ hoàn thành</span><span>${totalPoints()}/500 điểm</span></div></div></aside>`}
function stageHeading(i){const s=stages[i];return `<div class="chapter-heading"><div class="chapter-flag">${icon(s.icon,'small')} ${s.label}</div><h2>${s.title}</h2><p>${s.desc}</p></div>`}
function lessonContent(i){const s=stages[i];return `${stageHeading(i)}<div class="learning-cards">${s.pieces.map(p=>`<article class="learn-card"><span class="learn-num">${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p></article>`).join('')}</div><div class="insight">${icon('light')}<span>${s.insight}</span></div><div class="tag-group"><span class="topic-tag">TRÍCH TỪ NỘI DUNG NHÓM · MỤC ${s.label.slice(0,4)}</span><span class="topic-tag">TƯ LIỆU HỌC TẬP</span></div>`}
function gameView(){if(state.stage>=5)return finishView();const s=stages[state.stage];const section = state.phase==='lesson'?`${lessonContent(state.stage)}<div class="action-row"><button class="btn primary" data-act="challenge">ĐÃ HIỂU – MỞ THỬ THÁCH ${icon('arrow','small')}</button></div>`:state.phase==='challenge'?`${stageHeading(state.stage)}${challengeView(state.stage)}`:resultView();return `<div class="mission-layout">${navHtml()}<section class="mission-content"><div class="section-top"><div class="eyebrow">ĐIỀU TRA VIÊN: ${esc(state.name.toUpperCase())}</div><button class="btn tiny outline" data-act="home">Lưu & thoát</button></div>${section}</section></div>`}
function challengeView(i){const s=stages[i];return `<section class="challenge-panel"><div class="challenge-heading"><span class="number">${icon('lock','small')} THỬ THÁCH ${String(i+1).padStart(2,'0')} / 05</span><span class="attempts">Lần thử ${state.attempts+1}/3 · còn ${Math.max(0,100-state.attempts*35)} điểm</span></div><h3 class="puzzle-title">${s.puzzle}</h3><p class="puzzle-instruction">${s.instruction}</p><div class="puzzle-surface">${puzzleHtml(i)}</div>${state.error?`<div class="feedback" role="alert">${esc(state.error)}</div>`:''}<div class="check-row"><span class="hint">${icon('light','small')} Có thể sửa lựa chọn trước khi nộp.</span><button class="btn primary" data-act="check">KIỂM TRA HỒ SƠ ${icon('arrow','small')}</button></div></section>`}
function puzzleHtml(i){const p=state.puzzle;
 if(i===0)return `<p class="choice-instruction">CHUỖI PHÂN TÍCH CỦA BẠN · chạm ô đã chọn để tháo ra</p><div class="sequence-area">${[0,1,2,3].map(idx=>`<button class="sequence-slot ${p.sequence[idx]?'filled':''}" data-act="remove-sequence" data-index="${idx}" type="button"><small>${idx+1}</small><span>${p.sequence[idx]?esc(econOptions.find(x=>x.id===p.sequence[idx]).text):'CHỜ TÀI LIỆU'}</span></button>`).join('')}</div><p class="choice-instruction">CÁC MẢNH TÀI LIỆU</p><div class="choice-row">${econOptions.map(c=>`<button class="puzzle-card ${p.sequence.includes(c.id)?'completed':''}" data-act="add-sequence" data-id="${c.id}" ${p.sequence.includes(c.id)?'disabled':''}>${esc(c.text)}</button>`).join('')}</div>`;
 if(i===1)return `<p class="choice-instruction">ĐÃ CHỌN: ${p.evidence.length}/3</p><div class="cards-grid">${evidence.map(c=>`<button class="puzzle-card evidence-card ${p.evidence.includes(c.id)?'selected':''}" data-act="evidence" data-id="${c.id}"><span class="mark">${p.evidence.includes(c.id)?'✓':'+'}</span><span>${esc(c.text)}</span></button>`).join('')}</div>`;
 if(i===2)return `<div class="pair-cols"><div><div class="pair-col-title">NGUYÊN NHÂN</div><div class="pair-list">${reformLeft.map(c=>`<button class="puzzle-card pair-card ${p.pairSource===c.id?'selected':''} ${p.pairs[c.id]?'used':''}" data-act="pair-source" data-id="${c.id}" ${p.pairs[c.id]?'disabled':''}>${esc(c.text)}</button>`).join('')}</div></div><div><div class="pair-col-title">HỆ QUẢ</div><div class="pair-list">${reformRight.map(c=>`<button class="puzzle-card pair-card ${Object.values(p.pairs).includes(c.id)?'used':''}" data-act="pair-target" data-id="${c.id}" ${Object.values(p.pairs).includes(c.id)?'disabled':''}>${esc(c.text)}</button>`).join('')}</div></div></div><div class="match-list">${Object.entries(p.pairs).map(([a,b])=>`<div class="match-pill">${esc(reformLeft.find(x=>x.id===a).text)} → ${esc(reformRight.find(x=>x.id===b).text)}<button data-act="remove-pair" data-id="${a}" aria-label="Xóa liên hệ">✕</button></div>`).join('')||'<p class="choice-instruction">Chưa có cặp nào được ghép.</p>'}</div>`;
 if(i===3){const spent=Object.values(p.budget).reduce((a,b)=>a+b,0);return `<div class="budget-grid">${budgetCategories.map(c=>`<div class="budget-item"><div><h4>${c.name}</h4><p>Nhu cầu giả lập: ${c.need}</p></div><div class="budget-controls"><button data-act="budget-minus" data-id="${c.id}" aria-label="Giảm">−</button><b>${p.budget[c.id]}</b><button data-act="budget-plus" data-id="${c.id}" aria-label="Tăng">+</button></div></div>`).join('')}</div><div class="budget-meter"><span>Đã phân bổ</span><strong>${spent} / 10</strong></div><div class="bar"><span style="width:${spent*10}%"></span></div><p class="choice-instruction" style="margin-top:18px">SAU KHI PHÂN BỔ, LĨNH VỰC NÀO THIẾU NHIỀU NHẤT SO VỚI NHU CẦU?</p><div class="sector-select">${budgetCategories.map(c=>`<button class="${p.budgetSelected===c.id?'selected':''}" data-act="select-sector" data-id="${c.id}">${c.name}</button>`).join('')}</div><p class="small-note">* Các con số chỉ phục vụ mô phỏng tính đánh đổi nguồn lực, không phải dữ liệu lịch sử.</p>`}
 if(i===4)return `<p class="choice-instruction">${p.edgeSource?'ĐÃ CHỌN NGUYÊN NHÂN – HÃY CHỌN YẾU TỐ CHỊU TÁC ĐỘNG':'CHỌN NGUYÊN NHÂN TRƯỚC, SAU ĐÓ CHỌN YẾU TỐ CHỊU TÁC ĐỘNG'}</p><div class="node-grid">${finalNodes.map(c=>`<button class="puzzle-card causal-node ${p.edgeSource===c.id?'selected':''}" data-act="edge-node" data-id="${c.id}">${icon(c.ico,'small')} ${c.name}</button>`).join('')}</div><div class="causal-note">${p.edges.length}/4 liên hệ đã được thiết lập · chạm ✕ để bỏ liên hệ.</div><div class="match-list">${p.edges.map(key=>{const [a,b]=key.split('>');return `<div class="match-pill">${esc(finalNodes.find(n=>n.id===a).name)} → ${esc(finalNodes.find(n=>n.id===b).name)}<button data-act="remove-edge" data-id="${key}" aria-label="Xóa liên hệ">✕</button></div>`}).join('')||'<div class="choice-instruction">Bản đồ chứng cứ đang trống.</div>'}</div>`;
 return '';
}
function validate(){const p=state.puzzle;switch(state.stage){
 case 0: if(p.sequence.length<4)return {ready:false,message:'Cần xếp đủ bốn mảnh tài liệu trước khi kiểm tra.'};return {ready:true,pass:p.sequence.every((x,i)=>x===econCorrect[i])};
 case 1:if(p.evidence.length!==3)return {ready:false,message:'Hãy chọn đúng 3 chứng cứ trước khi kiểm tra.'};return {ready:true,pass:[...p.evidence].sort().join(',')===[...evidenceCorrect].sort().join(',')};
 case 2:if(Object.keys(p.pairs).length!==3)return {ready:false,message:'Cần ghép đủ 3 cặp nguyên nhân – hệ quả.'};return {ready:true,pass:Object.entries(reformCorrect).every(([a,b])=>p.pairs[a]===b)};
 case 3:{const spent=Object.values(p.budget).reduce((a,b)=>a+b,0);if(spent!==10||!p.budgetSelected)return {ready:false,message:'Cần phân bổ đủ 10 đơn vị và chọn lĩnh vực thiếu hụt nhiều nhất.'};const shortages=budgetCategories.map(c=>({id:c.id,gap:Math.max(0,c.need-p.budget[c.id])}));const largest=Math.max(...shortages.map(x=>x.gap));return {ready:true,pass:shortages.some(x=>x.id===p.budgetSelected&&x.gap===largest)};}
 case 4:if(p.edges.length!==4)return {ready:false,message:'Cần tạo đủ 4 mối liên hệ trước khi kiểm tra.'};return {ready:true,pass:[...p.edges].sort().join(',')===[...finalCorrect].sort().join(',')};
 default:return {ready:false,message:'Hồ sơ không hợp lệ.'}
}}
function resultView(){const s=stages[state.stage], pts=state.points[state.stage]??0;return `<div class="result-screen"><div class="eyebrow">HỒ SƠ ĐÃ ĐƯỢC GIẢI MÃ</div><div class="result-seal">${pts?'PASSED':'OPEN'}</div><h2>${s.title}</h2><div class="result-points">+${pts} ĐIỂM</div><p>Thành tích hiện tại của ${esc(state.name)}: <strong>${totalPoints()}/500</strong> điểm.</p><article class="result-reveal"><h3>${icon('light','small')} Đúc kết từ chứng cứ</h3><p>${s.reveal}</p></article><div class="result-actions"><button class="btn primary" data-act="next">${state.stage===4?'XEM KẾT QUẢ CUỐI CÙNG':'TIẾP TỤC HỒ SƠ '+String(state.stage+2).padStart(2,'0')} ${icon('arrow','small')}</button></div></div>`}
function finishView(){const sum=totalPoints();return `<div class="screen-width result-screen"><div class="eyebrow">HOÀN THÀNH CẢ NĂM HỒ SƠ</div><h1 class="section-title">Báo cáo điều tra cuối cùng</h1><p>Bạn đã đi qua bốn nhóm nguyên nhân và dựng sơ đồ tổng hợp. Sự tan rã của Liên Xô và Đông Âu gắn với nhiều yếu tố kinh tế, chính trị, cải tổ và quốc tế tác động qua lại.</p><div class="score-card" id="scorecard"><header>HỒ SƠ 1991 · PHIẾU KẾT QUẢ</header><h2>Điều tra viên: ${esc(state.name)}</h2><div class="huge">${sum}<span style="font-size:25px"> / 500</span></div><div>ĐIỂM TÍCH LŨY SAU NĂM THỬ THÁCH</div><div class="mini-scores">${state.points.map((n,i)=>`<b>HỒ SƠ ${i+1}: ${n}</b>`).join('')}</div><div style="font-size:11px;max-width:440px">Chụp ảnh phiếu này và gửi cho người điều phối để ghi điểm vào bảng xếp hạng chung.</div></div><div class="notice" style="max-width:660px;margin:15px auto;text-align:left">Lưu ý: Bản GitHub Pages không tự đồng bộ điểm giữa nhiều điện thoại. Người điều phối nhập điểm dựa trên phiếu kết quả. Nếu đồng hạng cao nhất, hệ thống chọn ngẫu nhiên một người nhận bonus.</div><div class="result-actions"><button class="btn outline" data-act="home">VỀ TRANG CHỦ</button><button class="btn primary" data-act="host">XEM BẢNG ĐIỀU PHỐI ${icon('arrow','small')}</button></div></div>`}
function hostView(){const tab=state.hostTab;return `<div class="screen-width"><div class="section-top"><div><div class="eyebrow">TRUNG TÂM ĐIỀU PHỐI</div><h1 class="section-title">Bàn điều khiển lớp học</h1><p class="section-desc">Trình bày kiến thức trên màn chiếu hoặc ghi điểm từ phiếu kết quả của từng bạn để chọn người nhận bonus.</p></div><button class="btn tiny outline" data-act="home">${icon('back','small')} Trang chủ</button></div><div class="host-tabs"><button data-act="host-tab" data-id="leaderboard" class="${tab==='leaderboard'?'active':''}">${icon('trophy','small')} XẾP HẠNG & BONUS</button><button data-act="host-tab" data-id="lecture" class="${tab==='lecture'?'active':''}">${icon('eye','small')} TRÌNH CHIẾU LÝ THUYẾT</button></div>${tab==='leaderboard'?leaderboardView():lectureSelectorView()}</div>`}
function leaderboardView(){const ranked=[...scores].sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name,'vi'));let leaders=ranked.filter(x=>x.score===ranked[0]?.score);return `<section class="panel corner"><div class="eyebrow">THÀNH TÍCH ĐIỀU TRA</div><h2 class="section-title" style="font-size:32px">Bảng xếp hạng</h2><p class="small-note">Mỗi người chụp màn hình điểm cuối game; người dẫn nhập điểm vào đây. Chỉ người có điểm cao nhất được xét bonus.</p><form id="hostAddForm" class="add-row"><input required maxlength="30" class="name-input" name="hostName" placeholder="Tên người chơi" aria-label="Tên người chơi"/><input required type="number" min="0" max="500" step="5" class="number-input" name="hostScore" placeholder="0–500" aria-label="Điểm"/><button class="btn primary" type="submit">+ THÊM ĐIỂM</button></form><div style="overflow-x:auto"><table class="host-table"><thead><tr><th>HẠNG</th><th>ĐIỀU TRA VIÊN</th><th>ĐIỂM</th><th></th></tr></thead><tbody>${ranked.map((p,i)=>`<tr><td>${String(i+1).padStart(2,'0')}</td><td>${esc(p.name)}</td><td class="points">${p.score}</td><td><button class="delete-button" data-act="delete-score" data-id="${esc(p.id)}">XÓA</button></td></tr>`).join('')||'<tr><td colspan="4" class="muted">Chưa có người chơi nào được nhập điểm.</td></tr>'}</tbody></table></div><div class="action-row"><button class="btn primary" data-act="choose-winner" ${ranked.length===0?'disabled':''}>${icon('trophy')} ${leaders.length>1?'QUAY CHỌN NGƯỜI ĐỒNG HẠNG':'CÔNG BỐ NGƯỜI NHẬN BONUS'}</button><button class="btn outline" data-act="clear-scores" ${ranked.length===0?'disabled':''}>XÓA BẢNG ĐIỂM</button></div>${state.winner?`<div class="winner-box" role="status"><div class="winner-label">★ PHẦN THƯỞNG BONUS ★</div><h3>${esc(state.winner)}</h3><p>${leaders.length>1?'Được chọn ngẫu nhiên trong số người đồng hạng cao nhất.':'Người đạt điểm cao nhất trong bảng xếp hạng.'}</p></div>`:''}<div class="notice">Bản này lưu bảng xếp hạng trên trình duyệt của máy điều phối (localStorage). Nó không thu điểm tự động qua mạng và không chống gian lận; phù hợp dùng trong lớp với bonus nhỏ.</div></section>`}
function lectureSelectorView(){return `<div class="panel corner"><div class="eyebrow">BÀI GIẢNG TƯƠNG TÁC</div><h2 class="section-title" style="font-size:32px">Mở chương để trình chiếu</h2><p class="small-note">Chọn một chương để chiếu 3 nội dung lý thuyết lên màn hình lớn. Sau khi giảng, các bạn có thể giải nhiệm vụ tương ứng trên điện thoại.</p><div class="lecture-grid">${stages.map((s,i)=>`<button class="lecture-tile" data-act="lecture-open" data-index="${i}"><span>0${i+1}</span><strong>${s.topic}<br>${s.title}</strong></button>`).join('')}</div></div>`}
function lectureView(){const i=state.lectureStage;return `<div class="screen-width"><div class="section-top"><div class="eyebrow">CHẾ ĐỘ TRÌNH CHIẾU · CHƯƠNG ${i+1}/5</div><button class="btn tiny outline" data-act="host">${icon('back','small')} Bảng điều phối</button></div>${lessonContent(i)}<div class="panel" style="margin-top:22px"><div class="eyebrow">NHIỆM VỤ SẮP MỞ</div><h2 style="font-family:Georgia,serif;font-size:28px;margin:7px 0">${stages[i].puzzle}</h2><p class="muted">${stages[i].instruction}</p><div class="action-row"><button class="btn outline" data-act="lecture-prev" ${i===0?'disabled':''}>${icon('back','small')} Chương trước</button><button class="btn primary" data-act="lecture-next" ${i===4?'disabled':''}>Chương tiếp theo ${icon('arrow','small')}</button></div></div></div>`}
function nextStage(){state.stage++;state.phase='lesson';state.attempts=0;state.puzzle=initPuzzle();state.error='';if(state.stage>=5)state.mode='finish';saveCurrent();render()}
function checkAnswer(){const verdict=validate();if(!verdict.ready){state.error=verdict.message;render();return}if(verdict.pass){state.points[state.stage]=Math.max(0,100-state.attempts*35);state.phase='result';state.error=''}else{state.attempts++;if(state.attempts>=3){state.points[state.stage]=0;state.phase='result';state.error=''}else{state.error=`Chứng cứ chưa chính xác. Bạn còn ${3-state.attempts} lần thử; hãy đọc lại các mối liên hệ và điều chỉnh.`}}saveCurrent();render()}
function uniqueId(){try{return crypto.randomUUID()}catch{return `${Date.now()}_${Math.random().toString(36).slice(2,8)}`}}
function randomInt(max){if(globalThis.crypto?.getRandomValues){const arr=new Uint32Array(1);crypto.getRandomValues(arr);return arr[0]%max}return Math.floor(Math.random()*max)}
function winnerPick(){const rank=[...scores].sort((a,b)=>b.score-a.score);const best=rank.filter(x=>x.score===rank[0]?.score);if(best.length===0)return;state.winner=null;if(best.length===1){state.winner=best[0].name;render();return}let ticks=0;const container=$('.winner-box');const section=$('.panel');const banner=document.createElement('div');banner.className='winner-box';banner.innerHTML='<div class="winner-label">ĐANG QUAY CHỌN NGẪU NHIÊN</div><h3>...</h3><p>Chỉ những người đồng hạng cao nhất được tham gia</p>';section.appendChild(banner);const loop=setInterval(()=>{const pick=best[randomInt(best.length)];$('h3',banner).textContent=pick.name;ticks++;if(ticks>=20){clearInterval(loop);state.winner=best[randomInt(best.length)].name;render()}},100)}
function eventAction(e){const btn=e.target.closest('[data-act]');if(!btn)return;const act=btn.dataset.act,id=btn.dataset.id,index=Number(btn.dataset.index);const p=state.puzzle;switch(act){
 case 'home':toHome();return;
 case 'join':state.mode='join';render();return;
 case 'resume':state.mode=state.stage>=5?'finish':'play';render();return;
 case 'host':state.mode='host';state.hostTab='leaderboard';render();return;
 case 'host-tab':state.hostTab=id;state.winner=null;render();return;
 case 'challenge':state.phase='challenge';state.error='';saveCurrent();render();return;
 case 'check':checkAnswer();return;
 case 'next':nextStage();return;
 case 'add-sequence':if(!p.sequence.includes(id)&&p.sequence.length<4)p.sequence.push(id);break;
 case 'remove-sequence':p.sequence.splice(index,1);break;
 case 'evidence':p.evidence=p.evidence.includes(id)?p.evidence.filter(x=>x!==id):p.evidence.length<3?[...p.evidence,id]:p.evidence;break;
 case 'pair-source':p.pairSource=p.pairSource===id?null:id;break;
 case 'pair-target':if(p.pairSource&&!Object.values(p.pairs).includes(id)){p.pairs[p.pairSource]=id;p.pairSource=null}break;
 case 'remove-pair':delete p.pairs[id];p.pairSource=null;break;
 case 'budget-minus':p.budget[id]=Math.max(0,p.budget[id]-1);break;
 case 'budget-plus':if(Object.values(p.budget).reduce((a,b)=>a+b,0)<10)p.budget[id]++;break;
 case 'select-sector':p.budgetSelected=id;break;
 case 'edge-node':if(!p.edgeSource){p.edgeSource=id}else if(p.edgeSource===id){p.edgeSource=null}else{const link=`${p.edgeSource}>${id}`;if(!p.edges.includes(link)&&p.edges.length<4)p.edges.push(link);p.edgeSource=null}break;
 case 'remove-edge':p.edges=p.edges.filter(x=>x!==id);p.edgeSource=null;break;
 case 'delete-score':scores=scores.filter(x=>x.id!==id);saveStore('hoso1991_scores',scores);state.winner=null;render();return;
 case 'clear-scores':if(confirm('Bạn muốn xóa toàn bộ bảng điểm trên máy này?')){scores=[];saveStore('hoso1991_scores',scores);state.winner=null;render()}return;
 case 'choose-winner':winnerPick();return;
 case 'lecture-open':state.mode='lecture';state.lectureStage=index;render();return;
 case 'lecture-prev':state.lectureStage=Math.max(0,state.lectureStage-1);render();return;
 case 'lecture-next':state.lectureStage=Math.min(4,state.lectureStage+1);render();return;
 default:return;
 }state.error='';saveCurrent();render();}
app.addEventListener('click',eventAction);
app.addEventListener('submit',e=>{if(e.target.id==='joinForm'){e.preventDefault();const name=String(new FormData(e.target).get('playerName')||'').trim();if(!name)return;state.name=name.slice(0,30);state.stage=0;state.phase='lesson';state.attempts=0;state.points=[];state.puzzle=initPuzzle();state.error='';state.mode='play';saveCurrent();render()}
 if(e.target.id==='hostAddForm'){e.preventDefault();const form=new FormData(e.target),name=String(form.get('hostName')||'').trim(),score=Number(form.get('hostScore'));if(!name||!Number.isFinite(score)||score<0||score>500)return;const old=scores.find(x=>x.name.toLocaleLowerCase('vi')===name.toLocaleLowerCase('vi'));if(old){old.score=score}else{scores.push({id:uniqueId(),name:name.slice(0,30),score})}saveStore('hoso1991_scores',scores);state.winner=null;render()}});
$('#brandHome').addEventListener('click',toHome);
$('#homeButton').addEventListener('click',toHome);
render();
