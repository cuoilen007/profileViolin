'use strict';
(() => {
  const translations = {
    'Skip to content':'Đến nội dung chính','VIOLINIST':'NGHỆ SĨ VIOLIN','Menu':'Menu','Close':'Đóng',
    'Performances':'Biểu diễn','Services':'Dịch vụ','Gallery':'Thư viện','About':'Giới thiệu','Book a Show':'Đặt lịch biểu diễn',
    'HẠ VY · LIVE VIOLIN · HO CHI MINH CITY':'HẠ VY · BIỂU DIỄN VIOLIN · TP. HỒ CHÍ MINH',
    'Make the moment':'Để từng khoảnh khắc','unforgettable.':'trở nên đáng nhớ.',
    'Live violin for weddings, corporate events and private celebrations.':'Violin cho tiệc cưới, sự kiện doanh nghiệp và tiệc riêng.',
    'Watch performances':'Xem biểu diễn','WEDDINGS':'TIỆC CƯỚI','CORPORATE':'DOANH NGHIỆP','PRIVATE EVENTS':'TIỆC RIÊNG',
    'THE ART OF A LIVE MOMENT':'CẢM XÚC TỪ ÂM NHẠC TRỰC TIẾP',
    'SELECTED VENUES & BRANDS FROM PAST PERFORMANCES':'MỘT SỐ ĐỊA ĐIỂM & THƯƠNG HIỆU TỪ CÁC BUỔI BIỂU DIỄN',
    'HEAR THE DIFFERENCE':'LẮNG NGHE & CẢM NHẬN','Experience the':'Cảm nhận','music.':'âm nhạc.',
    'A glimpse of the sound, the setting':'Một chút âm thanh, không gian','and the feeling of a live performance.':'và cảm xúc từ những buổi biểu diễn.',
    'A wedding at JW Marriott':'Tiệc cưới tại JW Marriott','An evening at Rose Villa':'Một buổi tối tại Rose Villa',
    'Your browser does not support video.':'Trình duyệt của bạn không hỗ trợ video.','Open the performance video':'Mở video biểu diễn','Open video':'Mở video',
    'WEDDING PERFORMANCE':'BIỂU DIỄN TIỆC CƯỚI','PRIVATE CELEBRATION':'TIỆC RIÊNG','TELEVISION · ENSEMBLE PERFORMANCE':'TRUYỀN HÌNH · HÒA TẤU','TELEVISION PERFORMANCE':'BIỂU DIỄN TRUYỀN HÌNH',
    'MUSIC FOR YOUR OCCASION':'ÂM NHẠC CHO SỰ KIỆN CỦA BẠN','A setting. A feeling.':'Không gian. Cảm xúc.','Your kind of music.':'Âm nhạc dành riêng cho bạn.',
    'From an intimate solo to a fuller ensemble,':'Từ độc tấu gần gũi đến hòa tấu cùng ban nhạc,','let’s shape the performance around your event.':'cùng chọn hình thức phù hợp với sự kiện của bạn.',
    'Weddings':'Tiệc cưới','Romantic music for your wedding day.':'Giai điệu lãng mạn cho ngày cưới.',
    'Ceremony & bridal entrance':'Lễ thành hôn & đón cô dâu','Welcome reception & dinner':'Đón khách & dùng tiệc','Discuss your meaningful song choices':'Tư vấn những bản nhạc ý nghĩa với bạn','Plan your wedding music':'Tư vấn âm nhạc tiệc cưới',
    'Corporate events':'Sự kiện doanh nghiệp','Elegant live music for your brand.':'Âm nhạc tinh tế cho sự kiện thương hiệu.',
    'Brand launches & showroom events':'Ra mắt thương hiệu & sự kiện showroom','Gala dinners & year-end parties':'Tiệc gala & tiệc cuối năm','Solo violin or ensemble options':'Lựa chọn độc tấu hoặc hòa tấu','Discuss your event':'Trao đổi về sự kiện',
    'Private celebrations':'Tiệc riêng','Intimate music for your private celebration.':'Âm nhạc gần gũi cho những buổi tiệc riêng.',
    'Private dinners & villa parties':'Tiệc tối riêng & tiệc tại villa','Anniversaries & intimate celebrations':'Kỷ niệm & những dịp sum họp','A mood and format tailored to you':'Phong cách phù hợp với buổi tiệc','Create your private moment':'Tư vấn cho buổi tiệc riêng',
    'Repertoire, duration and performance arrangements are tailored to your event.':'Bài nhạc, thời lượng và hình thức biểu diễn được tư vấn theo từng sự kiện.',
    'SELECTED MOMENTS':'NHỮNG KHOẢNH KHẮC NỔI BẬT','Music meets':'Khi âm nhạc','the occasion.':'hòa cùng khoảnh khắc.','Explore the full gallery':'Xem toàn bộ thư viện',
    'Violin for a private event':'Violin tại sự kiện riêng','Live violin in a showroom setting':'Biểu diễn violin tại showroom','Wedding ensemble':'Hòa tấu tiệc cưới','Violin, piano and cello':'Violin, piano và cello',
    'Also on stage for':'Các sự kiện khác',
    'MEET THE ARTIST':'GẶP GỠ NGHỆ SĨ','A love for every note.':'Gửi tình yêu vào từng nốt nhạc.',
    'I’m Hạ Vy, a violinist in Ho Chi Minh City. I bring warmth and elegance to weddings, events and private celebrations.':'Hạ Vy là nghệ sĩ violin tại TP. Hồ Chí Minh, mang âm nhạc tinh tế và giàu cảm xúc đến tiệc cưới, sự kiện và tiệc riêng.',
    'Whether performing solo or alongside other musicians, I bring care, feeling and a personal touch to each occasion.':'Dù độc tấu hay hòa tấu cùng các nhạc công, Vy luôn dành sự chỉn chu và cảm xúc cho từng buổi biểu diễn.',
    'Let’s talk about your event':'Chia sẻ về sự kiện của bạn','LET’S SET THE TONE':'CÙNG TẠO NÊN CẢM XÚC','Your occasion.':'Sự kiện của bạn.','A beautiful soundtrack.':'Một dấu ấn âm nhạc.',
    'Share your date, venue and the mood you have in mind. Hạ Vy will help you choose the music.':'Gửi Vy ngày tổ chức, địa điểm và không khí bạn mong muốn. Vy sẽ tư vấn phần âm nhạc phù hợp.',
    'BOOKINGS & ENQUIRIES':'ĐẶT LỊCH & TƯ VẤN','Get a Quote on Zalo':'Nhận báo giá qua Zalo','Based in Ho Chi Minh City':'Hoạt động tại TP. Hồ Chí Minh','Availability and pricing confirmed for each event.':'Lịch trống và chi phí được xác nhận theo từng sự kiện.',
    'Live music. Lasting memories.':'Âm nhạc ngân vang. Kỷ niệm ở lại.','Call Hạ Vy':'Gọi Hạ Vy','Chat on Zalo':'Nhắn Zalo',
    'THE PERFORMANCE JOURNAL':'NHẬT KÝ BIỂU DIỄN','Real occasions.':'Những sự kiện thật.','Lasting impressions.':'Những dấu ấn khó quên.',
    'Weddings, brand events and private celebrations through Hạ Vy’s music.':'Tiệc cưới, sự kiện thương hiệu và tiệc riêng qua những buổi biểu diễn của Hạ Vy.',
    'Enquire about your event':'Tư vấn cho sự kiện của bạn','Watch the':'Xem các','performances.':'buổi biểu diễn.',
    'Wedding performance':'Biểu diễn tiệc cưới','A live violin moment on stage':'Khoảnh khắc violin trên sân khấu','Private event':'Sự kiện riêng','Showroom performance':'Biểu diễn tại showroom','Event ensemble':'Hòa tấu sự kiện','Live event performance':'Biểu diễn tại sự kiện','Violin and cello performance':'Hòa tấu violin và cello','Private celebration':'Tiệc riêng','Wedding celebration':'Tiệc cưới','A floral setting for live music':'Âm nhạc giữa không gian hoa','Television ensemble performance':'Hòa tấu trên truyền hình','Outdoor celebration':'Tiệc ngoài trời','Live music in an open-air setting':'Âm nhạc trong không gian ngoài trời','A closer look at the performance':'Cận cảnh buổi biểu diễn','Rooftop performance':'Biểu diễn trên sân thượng','Live violin after dark':'Violin khi đêm xuống','Christmas event':'Sự kiện Giáng sinh','Music for the festive season':'Âm nhạc mùa lễ hội','An event in the highlands':'Sự kiện ở cao nguyên',
    'A love for every note':'Tình yêu trong từng nốt nhạc','A close-up of violin playing':'Cận cảnh chơi violin','An elegant stage':'Sân khấu tinh tế','Live violin among flowers and chandeliers':'Biểu diễn giữa hoa và đèn chùm','Wedding music, together':'Hòa nhạc trong ngày cưới','Violin, piano and vocals at a wedding celebration':'Violin, piano và giọng hát trong tiệc cưới','Music at the table':'Âm nhạc bên bàn tiệc','Live violin in a warm dining setting':'Violin trong không gian tiệc ấm cúng','An evening above the city':'Buổi tối giữa ánh đèn thành phố','Violin with a rooftop skyline backdrop':'Violin trên sân thượng nhìn ra thành phố','Before the performance':'Trước giờ biểu diễn','Rehearsing with the string ensemble':'Tập luyện cùng dàn dây','Behind the scenes':'Chuyện hậu trường','A backstage moment at the Sun Song mini concert':'Khoảnh khắc hậu trường tại mini concert Sun Song',
    'Hạ Vy Violin home':'Trang chủ Hạ Vy Violin','Main navigation':'Điều hướng chính','Quick booking':'Liên hệ nhanh','Performance photographs':'Ảnh biểu diễn','Selected venues and brands from past performances':'Một số địa điểm và thương hiệu từ các buổi biểu diễn',
    'Hạ Vy performing violin in a black evening dress on a softly lit stage':'Hạ Vy biểu diễn violin trong váy đen trên sân khấu ánh sáng dịu','Hạ Vy playing violin alongside other string musicians':'Hạ Vy chơi violin cùng các nhạc công dàn dây',
    'Hạ Vy Violin | Wedding & Event Violinist in Ho Chi Minh City':'Hạ Vy Violin | Biểu diễn violin tiệc cưới & sự kiện tại TP. Hồ Chí Minh',
    'Performance Gallery | Hạ Vy Violin':'Thư viện biểu diễn | Hạ Vy Violin',
    'Book Hạ Vy for live violin at weddings, corporate events and private celebrations. Watch performances and enquire directly via Zalo or phone.':'Đặt lịch Hạ Vy biểu diễn violin cho tiệc cưới, sự kiện doanh nghiệp và tiệc riêng. Xem video và liên hệ qua Zalo hoặc điện thoại.',
    'Explore Hạ Vy’s live violin performances at weddings, Park Hyatt, Volvo, Chubb Life, Vincom and private events.':'Khám phá các buổi biểu diễn violin của Hạ Vy tại tiệc cưới, Park Hyatt, Volvo, Chubb Life, Vincom và sự kiện riêng.'
  };
  const translate = value => {
    if (translations[value]) return translations[value];
    if (value.startsWith('View full image: ')) return 'Xem ảnh đầy đủ: ' + translate(value.slice(17));
    if (value.includes(' — ')) return value.split(' — ').map(translate).join(' — ');
    return value;
  };
  const nodes=[];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
    const node=walker.currentNode;
    if(node.parentElement.closest('script, style, .language-switch, [data-year]'))continue;
    const original=node.textContent;
    if(original.trim()) nodes.push({node,original});
  }
  const attributes=[];
  document.querySelectorAll('[alt],[aria-label]').forEach(element=>{
    if(element.closest('.language-switch'))return;
    ['alt','aria-label'].forEach(name=>{if(element.hasAttribute(name)) attributes.push({element,name,original:element.getAttribute(name)});});
  });
  const title=document.title;
  const meta=document.querySelector('meta[name="description"]');
  const description=meta?.content;
  const buttons=document.querySelectorAll('[data-language]');
  const setLanguage = language => {
    const vi=language==='vi';
    document.documentElement.lang=vi?'vi':'en';
    nodes.forEach(({node,original})=>{
      if(node.parentElement?.classList.contains('menu-toggle'))return;
      node.textContent=vi?original.replace(original.trim(),translate(original.trim())):original;
    });
    attributes.forEach(({element,name,original})=>element.setAttribute(name,vi?translate(original):original));
    document.title=vi?translate(title):title;
    if(meta)meta.content=vi?translate(description):description;
    buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
    const menu=document.querySelector('.menu-toggle');
    if(menu)menu.textContent=menu.getAttribute('aria-expanded')==='true'?(vi?'Đóng':'Close'):'Menu';
    try{localStorage.setItem('havy-language',language);}catch{}
  };
  buttons.forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  let language='vi';
  try{const saved=localStorage.getItem('havy-language');if(saved==='en'||saved==='vi')language=saved;}catch{}
  setLanguage(language);
})();
