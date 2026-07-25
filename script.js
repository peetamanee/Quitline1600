// 2 ภาษา (Bilingual Dictionary)
const translationDict = {
  th: {
    nav_home: "หน้าแรก",
    nav_services: "บริการ",
    nav_stress: "วิธีคลายเครียด",
    nav_reviews: "รีวิว",
    nav_faq: "FAQ",
    btn_call: "โทร 1600",
    btn_chat: "ทักแชทปรึกษาฟรี",
    hero_title: "รู้สึกเครียด แต่ไม่อยากพึ่งบุหรี่แล้วใช่ไหม?",
    hero_subtitle: "ให้เราช่วยคุณหาทางออกที่ดีกว่า พื้นที่ตรงนี้พร้อมเป็นเซฟโซนที่โอบรับและไม่มีการตัดสินใดๆ เพื่อให้คุณได้พักผ่อนอย่างสบายใจ",
    btn_stress_now: "รู้สึกเครียดตอนนี้",
    btn_chat_hero: "ทักแชทปรึกษาฟรี",
    sec_services_title: "บริการของเรา",
    
    // Services Title/Desc
    service_1_title: "ของขวัญแด่ตัวคุณเอง",
    service_1_desc: "โฟกัสแค่ในแต่ละวัน เปลี่ยนแปลงความชินทีละนิด เพื่อมอบของขวัญที่งดงามที่สุดให้ตัวเองด้วยความภูมิใจ",
    btn_start: "เริ่ม",
    
    service_3_title: "แบบประเมินความเครียด (ST-5)",
    service_3_desc: "แบบประเมินความเครียดสะสม 5 ข้อ พัฒนาโดยกรมสุขภาพจิต กระทรวงสาธารณสุข เพื่อรับข้อแนะนำกิจกรรมผ่อนคลายด่วน",
    
    service_2_title: "รู้ทัน...กับดักนิโคติน",
    service_2_desc: "นิโคตินไม่ได้ช่วยคลายเครียดจริง แต่สร้างวงจรเสพติดที่ทำให้เครียดง่ายขึ้น มาทำความเข้าใจกลไกและวิธีรับมือกัน",
    btn_read_more: "อ่านเพิ่มเติม",
    
    // Stress Relief Title/Desc
    sec_stress_title: "วิธีคลายเครียดสำหรับคุณ",
    sec_stress_subtitle: "เลือกวิธีที่เหมาะกับคุณในเวลานี้ เพื่อรีเซ็ตร่างกายและจิตใจใน 60-90 วินาที",
    
    method_1_title: "การจิบน้ำเย็นลดความอยาก (Mindful Hydration)",
    method_1_desc: "เมื่อรู้สึกอยากสูบหรือเหงาปาก การจิบน้ำเย็นจัดช้าๆ 5 อึกจะช่วยระงับตัวรับนิโคตินและล้างปุ่มรับรสในช่องปากได้ทันที",
    
    method_2_title: "เสียงบำบัดคลายสมอง (Ambient Audio)",
    method_2_desc: "ปรับคลื่นสมองเป็น Alpha wave (432Hz) หรือฟังเสียงฝนตก/คลื่นทะเล เพื่อลดระดับ Cortisol ปลอบประโลมความตึงเครียด",
    
    method_3_title: "ยืดเส้นยืดสายที่โต๊ะทำงาน (Desk Stretch)",
    method_3_desc: "คลายการเกร็งตัวของกล้ามเนื้อ คอ บ่า ไหล่ และหลัง เพื่อกระตุ้นสาร Endorphin ระบายฮอร์โมนแห่งความเครียด",
    
    calc_section_title: "เครื่องคำนวณเปรียบเทียบเงินออม",
    calc_cigarettes_label: "ปริมาณการสูบเฉลี่ย (มวน/วัน)",
    calc_cigs_unit: "มวน",
    calc_price_label: "ราคาเฉลี่ยต่อซอง (20 มวน)",
    calc_weekly_label: "เงินออมต่อสัปดาห์",
    calc_monthly_label: "เงินออมต่อเดือน",
    calc_milestone_label: "เงินออมสะสมรายปี (12 เดือน)",
    
    sec_reviews_title: "รีวิวจากเพื่อนร่วมทาง",
    sec_reviews_subtitle: "เรื่องราวและกำลังใจจากคนทำงานออฟฟิศที่สามารถก้าวผ่านความเครียดโดยไม่ต้องพึ่งบุหรี่",
    review_1_text: '"ผมเคยคิดว่าบุหรี่คือคำตอบเดียวเวลาเครียดเรื่องงาน แต่พอลองฝึกสมาธิจิบน้ำ 60 วินาทีตอนอยากสูบ มันช่วยให้สมองลืมความอยากบุหรี่ได้สนิทเลยครับ"',
    review_1_name: "ต้น",
    review_1_age: "อายุ 29 ปี (นักวิเคราะห์ระบบ)",
    review_2_text: '"การเปลี่ยนมาเดินยืดเส้นยืดสายและคุยแชตกับสายด่วนแทนการเดินไปสูบบุหรี่ช่วงพักเบรก ทำให้สุขภาพดีขึ้นมาก ไม่เหม็นติดตัวตอนเข้าประชุมด้วยค่ะ"',
    review_2_name: "แพท",
    review_2_age: "อายุ 27 ปี (เจ้าหน้าที่การตลาด)",
    review_3_text: '"การฟังดนตรีบำบัด 432Hz และประเมิน ST-5 ทำให้ผมรู้ว่าความเครียดพุ่งเพราะงานหนัก เว็บบอร์ดนี้เป็นตัวช่วยระบายสติที่ดีเยี่ยมในการลดความอยากสูบ"',
    review_3_name: "อ๊อฟ",
    review_3_age: "อายุ 31 ปี (ผู้จัดการฝ่ายบุคคล)",
    
    sec_faq_title: "คำถามที่พบบ่อย (FAQ)",
    sec_faq_subtitle: "ข้อสงสัยและข้อมูลการใช้งานที่จะช่วยเพิ่มความสบายใจและความอุ่นใจให้คุณตลอดการเข้าใช้บริการ",
    faq_1_q: "เว็บไซต์นี้จะช่วยฉันในระหว่างวันทำงานที่เครียดจัดได้อย่างไรบ้าง?",
    faq_1_a: "เรามีแบบฝึกหัดสั้นๆ ความยาว 60-90 วินาที เช่น การฝึกจิบน้ำบำบัดประสาท หรือการเปิดฟังเสียงธรรมชาติลด Cortisol ซึ่งออกแบบมาให้เหมาะสมกับการขจัดความเหนื่อยล้าทางสมองและความคิดกังวลได้ทันทีที่โต๊ะทำงาน โดยคุณไม่จำเป็นต้องเดินออกไปสูบบุหรี่",
    faq_2_q: "การทำแบบประเมินระดับความเครียดด่วนมีความเป็นส่วนตัวและปลอดภัยไหม?",
    faq_2_a: "ปลอดภัย 100% ครับ ข้อมูลการตอบคำถามประเมินความเครียดและการคำนวณทั้งหมดจะประมวลผลบนบราวเซอร์ของเครื่องคุณโดยไม่มีการบันทึกหรือส่งออกข้อมูลออกภายนอก ทำให้คุณมั่นใจในสิทธิและความเป็นส่วนตัวที่ออฟฟิศได้อย่างเต็มที่",
    faq_3_q: "หากฉันรู้สึกอยากคุยกับคนจริงๆ เพื่อวางแผนการเลิกบุหรี่ สามารถทำได้อย่างไร?",
    faq_3_a: "คุณสามารถเปิดกล่องแชตเพื่อสนทนากับแชตบอตน้องวันใหม่เบื้องต้น หรือหากต้องการคำปรึกษาเพื่อวางแผนร่วมกับผู้เชี่ยวชาญ (นักจิตวิทยาช่วยเลิกบุหรี่) คุณสามารถโทรหาสายด่วนเลิกบุหรี่แห่งชาติ 1600 ได้ฟรีทันทีจากลิงก์บนแถบเมนูด้านบน",
    faq_4_q: "แชตบอตน้องวันใหม่จะช่วยฉันได้อย่างไรในช่วงที่เกิดความอยากบุหรี่รุนแรง?",
    faq_4_a: "น้องวันใหม่เปรียบเสมือนเพื่อนคู่คิด AI (Peer Support) ที่พร้อมโอบรับทุกอารมณ์ คอยให้ข้อมูลวิทยาศาสตร์ แนะนำกิจกรรมเบี่ยงเบนความสนใจในระยะสั้น และให้คำชี้แนะเพื่อดึงสติให้คุณมีพลังเอาชนะความอยากชั่ววูบได้โดยไม่ตัดสินผลลัพธ์ครับ",
    footer_desc: "สนับสนุนและช่วยเหลือสังคมทำงานออฟฟิศในการเลิกบุหรี่อย่างมีประสิทธิภาพและปลอดภัย",
    footer_disclaimer: "สายด่วนเลิกบุหรี่แห่งชาติ โทร 1600 ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
    
    // Modals Gift & ST-5
    modal_gift_title: "ของขวัญแด่ตัวคุณเอง",
    gift_step_1_title: "โฟกัสแค่ทีละวัน",
    gift_step_1_desc: "ไม่ต้องมองไปไกลถึง 1 ปี หรือคิดเรื่อง 365 วันข้างหน้าให้รู้สึกเหนื่อยเลย โฟกัสแค่ 'วันนี้ฉันไม่สูบ' พรุ่งนี้ตื่นมาบอกตัวเองใหม่ ทำแค่วันนี้ให้ดีที่สุดก็พอ",
    gift_step_2_title: "สร้างความเคยชินทีละนิด",
    gift_step_2_desc: "เมื่อรู้สึกอยากสูบ ลองเปลี่ยนมาจิบน้ำเย็นช้าๆ หรือสวมหูฟังคลื่นเสียงธรรมชาติสัก 60 วินาที เพื่อรีเซ็ตอารมณ์ชั่วคราว การทำสิ่งเล็กๆ เหล่านี้จะค่อยๆ เปลี่ยนเป็นความชินโดยที่คุณไม่ต้องพยายามอย่างหักโหม",
    gift_step_3_title: "สะสมสู่ของขวัญชิ้นใหญ่",
    gift_step_3_desc: "เมื่อสะสมวันละนิดไปเรื่อยๆ ก่อนที่คุณจะทันรู้ตัว... คุณจะพบว่าคุณก้าวข้ามผ่านเวลามาได้ครบปี และนั่นจะกลายเป็นของขวัญที่งดงามที่สุดที่คุณมอบให้ตัวเองด้วยความภูมิใจ",
    ftnd_suggestion: "เรามีบริการโทร/ทักแชท ปรึกษาการเลิกบุหรี่ ฟรี",
    
    modal_st5_title: "แบบประเมินความเครียดสะสม (ST-5)",
    modal_st5_desc: "ประเมินสภาวะทางจิตใจและความเครียดสะสมของคุณในช่วง 2-4 สัปดาห์ที่ผ่านมาโดยกระทรวงสาธารณสุข",
    modal_st5_again: "ประเมินอีกครั้ง",
    
    modal_result_btn: "ลองวิธีผ่อนคลายที่แนะนำ",
    modal_trap_title: "รู้ทัน...กับดักนิโคติน",
    trap_step_1_title: "1. ความเครียดสะสมจากงาน",
    trap_step_1_desc: "ความกดดันทำให้ร่างกายหลั่งฮอร์โมนเครียด สมองจึงสั่งการให้หาทางออกแบบเดิมคือการสูบบุหรี่",
    trap_step_2_title: "2. นิโคตินดิ่งฮวบ & เกิดอาการถอน",
    trap_step_2_desc: "หลังจากสูบชั่วครู่ นิโคตินจะสลายตัวอย่างรวดเร็ว ทำให้คุณเกิดอาการหงุดหงิด วิตกกังวล และเครียดง่ายกว่าปกติ",
    trap_step_3_title: "3. กับดักการสูบซ้ำ",
    trap_step_3_desc: "คุณสูบบุหรี่มวนใหม่เพื่อระงับความหงุดหงิด สมองจึงจำว่าบุหรี่ช่วยแก้เครียด ทั้งที่จริงมันแค่ระงับอาการถอนยาชั่วคราว",
    trap_insight: "💡 **ข้อคิดทางวิทยาศาสตร์:** การสูบบุหรี่ไม่ได้ช่วยแก้เครียดจากงาน แต่คือการลดความตึงเครียดที่ตัวบุหรี่สร้างขึ้นเอง! วิธีคลายเครียดตามธรรมชาติจึงเป็นทางออกที่แท้จริง",
    btn_stop_breath: "หยุดกิจกรรม",
    
    // Audio Modal
    audio_modal_title: "เสียงบำบัดคลายสมอง",
    audio_modal_desc: "เลือกฟังเสียงความถี่ผ่อนคลายเพื่อเปลี่ยนสถานะอารมณ์ทันที",
    sound_rain: "🌧️ เสียงฝนตก",
    sound_waves: "🌊 เสียงคลื่นทะเล",
    sound_ambient: "🎵 เสียงเปียโน",
    
    chat_status: "น้องวันใหม่ AI QuitBot! (24 ชั่วโมง)",
    chat_welcome: "สวัสดีค่ะ ยินดีต้อนรับสู่ระบบปรึกษาเลิกบุหรี่ออนไลน์ของ Quitline 1600 หนูชื่อ 'น้องวันใหม่' มีเรื่องไม่สบายใจหรือกำลังอยากบุหรี่ตรงไหนทักปรึกษาหนูได้ฟรีเลยค่ะ",
    chat_opt_1: "เครียดเรื่องงาน อยากสูบบุหรี่ทำไงดี?",
    chat_opt_2: "มีอาการหงุดหงิดหลังหยุดสูบ แก้ยังไง?",
    chat_opt_3: "ต้องการโทรคุยกับเจ้าหน้าที่ 1600",
    chat_placeholder: "เลือกเมนูแชต...",
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_stress: "Stress Relief",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    btn_call: "Call 1600",
    btn_chat: "Chat Free",
    hero_title: "Stressed, but don't want to rely on cigarettes anymore?",
    hero_subtitle: "Let us help you find a better way. This space is a judgment-free safe zone, here to support and comfort you.",
    btn_stress_now: "Feel Stressed Now",
    btn_chat_hero: "Chat Free",
    sec_services_title: "Our Services",
    
    service_1_title: "A Gift to Yourself",
    service_1_desc: "Focus on one day at a time. Build gentle habits to give yourself the most beautiful gift with pride.",
    btn_start: "Start",
    
    service_3_title: "ST-5 Stress Assessment",
    service_3_desc: "A 5-item clinical stress scale developed by the Department of Mental Health to match you with rapid relief tools.",
    
    service_2_title: "Understanding the Nicotine Trap",
    service_2_desc: "Nicotine doesn't actually relieve stress; it creates a withdrawal cycle that increases stress. Learn how it works.",
    btn_read_more: "Read More",
    
    sec_stress_title: "Stress Relief for You",
    sec_stress_subtitle: "Choose the method that suits you right now to reset your body and mind in 60-90 seconds.",
    
    method_1_title: "Mindful Hydration",
    method_1_desc: "When cravings hit or you feel oral fixation, slowly sipping ice water for 5 sips desensitizes nicotine triggers immediately.",
    
    method_2_title: "Calming Ambient Audio",
    method_2_desc: "Listen to Solfeggio frequencies (432Hz) or natural rain/wave beats to lower cortisol and soothe neural tension.",
    
    method_3_title: "Desk Stretching",
    method_3_desc: "Release physical neck, shoulder, and back tension to trigger endorphins and release workplace anxiety.",
    
    calc_section_title: "Savings and Quit Tracker",
    calc_cigarettes_label: "Average smoking amount (cigs/day)",
    calc_cigs_unit: "cigs",
    calc_price_label: "Average price per pack (20 cigs)",
    calc_weekly_label: "Savings per week",
    calc_monthly_label: "Savings per month",
    calc_milestone_label: "Yearly optimized budget (12 months)",
    
    sec_reviews_title: "Reviews from Peers",
    sec_reviews_subtitle: "Stories and encouragement from office workers who successfully navigate work stress without cigarettes.",
    review_1_text: '"I used to think smoking was the only stress relief at work. But taking 60 seconds to sip cold water mindfully completely distracts my mouth cravings."',
    review_1_name: "Ton",
    review_1_age: "Age 29 (System Analyst)",
    review_2_text: '"Switching to a desk stretch and chatting with the support helpline instead of smoke breaks improved my health and kept me smelling fresh for meetings."',
    review_2_name: "Pat",
    review_2_age: "Age 27 (Marketing Specialist)",
    review_3_text: '"Listening to 432Hz ambient audio and taking the ST-5 test helped me realize that work stress was the root cause. This site has been a huge support."',
    review_3_name: "Aof",
    review_3_age: "Age 31 (HR Manager)",
    
    sec_faq_title: "Frequently Asked Questions (FAQ)",
    sec_faq_subtitle: "Answers to common concerns about consulting and receiving quit support with full peace of mind.",
    faq_1_q: "How does this website help me during a highly stressful workday?",
    faq_1_a: "We offer short 60-90 second exercises like guided water sipping and ambient sound therapies, specifically designed to relieve brain fatigue and anxiety right at your desk without needing to step out for a smoke.",
    faq_2_q: "Is the stress assessment secure and private?",
    faq_2_a: "100% secure. All calculations and test answers are processed locally on your browser. No personal data is saved or sent to any external server, guaranteeing your confidentiality at work.",
    faq_3_q: "What if I want to speak to a real person for support?",
    faq_3_a: "You can consult Nong Wanmai chatbot for basic guides, or connect directly with professional psychologists from Quitline 1600 by clicking the 'Call 1600' button in the header.",
    faq_4_q: "How does Nong Wanmai chatbot help during intense craving spikes?",
    faq_4_a: "Nong Wanmai acts as your peer-support AI, offering encouraging prompts, cognitive reframing facts, and quick coping techniques to ride out cravings without judgment.",
    footer_desc: "Supporting the workplace community to quit smoking safely, healthily, and efficiently.",
    footer_disclaimer: "Thailand National Quitline: Call 1600. Free consultation, no charges.",
    
    // Modals Gift & ST-5
    modal_gift_title: "A Gift to Yourself",
    gift_step_1_title: "One Day at a Time",
    gift_step_1_desc: "Don't look at the long road ahead or think about 365 days. Just focus on 'not smoking today'. Wake up tomorrow and do it again. Just do your best today.",
    gift_step_2_title: "Build Gentle Habits",
    gift_step_2_desc: "When cravings hit, sip ice-cold water or listen to calming nature sounds for 60 seconds to reset. These micro-habits will naturally wash the urge away without you having to struggle.",
    gift_step_3_title: "Your Ultimate Reward",
    gift_step_3_desc: "By taking tiny daily steps, before you know it, you will have completed a whole year. This becomes the most beautiful gift you can proudly give to yourself.",
    ftnd_suggestion: "We offer free calling and chatting services for quit counseling.",
    
    modal_st5_title: "ST-5 Stress Assessment",
    modal_st5_desc: "Assess your mental pressure and accumulated stress over the past 2-4 weeks.",
    modal_st5_again: "Take Test Again",
    
    modal_result_btn: "Try Recommended Relaxation",
    modal_trap_title: "Understanding the Nicotine Trap",
    trap_step_1_title: "1. Work-related Stress Trigger",
    trap_step_1_desc: "Work pressure triggers stress hormones, creating a learned reflex to seek a smoke break.",
    trap_step_2_title: "2. Nicotine Drop & Withdrawal",
    trap_step_2_desc: "Shortly after smoking, nicotine levels drop quickly, causing chemical withdrawal that makes you irritable and anxious.",
    trap_step_3_title: "3. The Re-smoking Trap",
    trap_step_3_desc: "You smoke again to relieve withdrawal, tricking your brain into thinking smoking relieves stress when it only cures the craving it made.",
    trap_insight: "💡 **Scientific Summary:** Smoking does not resolve work stress; it only temporarily relieves the chemical stress that the cigarette itself created!",
    btn_stop_breath: "Stop Exercise",
    
    // Audio Modal
    audio_modal_title: "Calming Ambient Sound",
    audio_modal_desc: "Select a natural sound wave to instantly soothe your mind and focus.",
    sound_rain: "🌧️ Rain Sound",
    sound_waves: "🌊 Ocean Waves",
    sound_ambient: "🎵 Piano Sound",
    
    chat_status: "Nong Wanmai AI QuitBot! (24/7 Support)",
    chat_welcome: "Hello! Welcome to Quitline 1600 Online Support. I am 'Nong Wanmai', your AI helper. Feel free to chat with me anytime for free.",
    chat_opt_1: "Stressed at work and wanting to smoke, what should I do?",
    chat_opt_2: "Irritable after quitting smoking, how to manage it?",
    chat_opt_3: "I want to speak with a human counselor on 1600",
    chat_placeholder: "Choose a suggested query...",
  }
};

// APPLICATION STATE
let currentLang = 'th';

// ST-5 Questions matching PDF Page 10 exactly
const st5Questions = {
  th: [
    { q: "1. มีปัญหาการนอนหลับ นอนไม่หลับหรือนอนมากเกินไป", opts: ["แทบไม่มีเลย", "เป็นบางครั้ง", "เป็นบ่อยๆ", "เป็นประจำ"] },
    { q: "2. มีสมาธิน้อยลง", opts: ["แทบไม่มีเลย", "เป็นบางครั้ง", "เป็นบ่อยๆ", "เป็นประจำ"] },
    { q: "3. หงุดหงิด / กระวนกระวาย / ว้าวุ่นใจ", opts: ["แทบไม่มีเลย", "เป็นบางครั้ง", "เป็นบ่อยๆ", "เป็นประจำ"] },
    { q: "4. รู้สึกเบื่อ เซ็ง", opts: ["แทบไม่มีเลย", "เป็นบางครั้ง", "เป็นบ่อยๆ", "เป็นประจำ"] },
    { q: "5. ไม่อยากพบปะผู้คน", opts: ["แทบไม่มีเลย", "เป็นบางครั้ง", "เป็นบ่อยๆ", "เป็นประจำ"] }
  ],
  en: [
    { q: "1. Sleeping problems (insomnia or sleeping too much)", opts: ["Almost never", "Sometimes", "Often", "Always"] },
    { q: "2. Reduced concentration", opts: ["Almost never", "Sometimes", "Often", "Always"] },
    { q: "3. Feeling irritable, agitated, or anxious", opts: ["Almost never", "Sometimes", "Often", "Always"] },
    { q: "4. Feeling bored, depressed", opts: ["Almost never", "Sometimes", "Often", "Always"] },
    { q: "5. Social withdrawal (not wanting to meet people)", opts: ["Almost never", "Sometimes", "Often", "Always"] }
  ]
};

// ST-5 States
let st5Scores = [];
let st5QIdx = 0;

// Hydration and stretching timer state
let exerciseTimer = null;
let exerciseInterval = null;
let currentExerciseType = "hydration";

// Web Audio API Synthesis Engine State
let audioCtx = null;
let audioPlaying = false;
let audioTimerVal = 60;
let audioInterval = null;
let selectedSound = "rain";

// Audio nodes
let rainNode = null;
let wavesNode = null;
let synthInterval = null;

// Breathing visualizer inside Audio Modal state
let audioBreathingInterval = null;

document.addEventListener('DOMContentLoaded', function() {
  // Init bindings
  setupLanguageToggle();
  setupModals();
  setupGift30Mission();
  setupST5Test();
  setupBreathingExercise();
  setupAudioPlayer();
  setupSavingsCalculator();
  setupChatbot();
  setupFaqAccordion();
  setupNicotineModal();
  
  // Initial draw
  renderContent();
});

// RENDER ALL DATA TRANSLATES
function renderContent() {
  const currentDict = translationDict[currentLang];

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (currentDict[key]) {
      el.innerHTML = currentDict[key];
    }
  });

  // Set placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (currentDict[key]) {
      el.placeholder = currentDict[key];
    }
  });

  // Update calculator
  updateCalculatorResults();

  if (document.getElementById('st5-result').style.display === 'block') {
    renderST5Result();
  }
}

// LANGUAGE HANDLERS
function setupLanguageToggle() {
  const thBtn = document.getElementById('lang-btn-th');
  const enBtn = document.getElementById('lang-btn-en');

  thBtn.addEventListener('click', () => {
    currentLang = 'th';
    thBtn.classList.add('active');
    enBtn.classList.remove('active');
    renderContent();
  });

  enBtn.addEventListener('click', () => {
    currentLang = 'en';
    enBtn.classList.add('active');
    thBtn.classList.remove('active');
    renderContent();
  });
}

// MODALS BASE
function setupModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close, .modal-close-chat');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal.id));
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  // Mobile toggle menu
  const navToggle = document.getElementById('nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu-list');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.querySelector('.hamburger').classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.querySelector('.hamburger').classList.remove('active');
      });
    });
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const close = modal.querySelector('.modal-close, .modal-close-chat');
    if (close) close.focus();
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (id === 'breathing-modal') stopExercise();
    if (id === 'audio-modal') stopAudio();
  }
}

// FAQ ACCORDION HANDLERS
function setupFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  
  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Collapse all
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-content').style.maxHeight = null;
        otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });
      
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// -------------------------------------------------------------
// GIFT TO YOURSELF MODAL SETUP
// -------------------------------------------------------------
function setupGift30Mission() {
  const startBtn = document.getElementById('start-gift-30-btn');
  const closeBtn = document.getElementById('close-gift-30-modal');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      openModal('gift-30-modal');
    });
  }
}

// -------------------------------------------------------------
// NICOTINE TRAP MODAL OPENING HANDLER
// -------------------------------------------------------------
function setupNicotineModal() {
  const readMoreBtn = document.getElementById('read-more-btn');
  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', () => {
      openModal('nicotine-modal');
    });
  }
}

// -------------------------------------------------------------
// ST-5 TEST HANDLERS (PDF Page 10 Scoring)
// -------------------------------------------------------------
function setupST5Test() {
  const startBtn = document.getElementById('start-st5-btn');
  const startQuestionsBtn = document.getElementById('start-st5-questions-btn');
  const restartBtn = document.getElementById('restart-st5-btn');
  const recBtn = document.getElementById('recommendation-st5-btn');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      document.getElementById('st5-intro').style.display = 'block';
      document.getElementById('st5-result').style.display = 'none';
      document.getElementById('st5-question-container').style.display = 'none';
      openModal('st5-test-modal');
    });
  }

  startQuestionsBtn.addEventListener('click', startST5Questions);
  restartBtn.addEventListener('click', startST5Questions);

  recBtn.addEventListener('click', () => {
    closeModal('st5-test-modal');
    const sum = st5Scores.reduce((a, b) => a + b, 0);
    if (sum >= 10) openModal('chat-modal');
    else if (sum >= 8) openExercise('box');
    else if (sum >= 5) openAudioPlayer();
    else openExercise('stretch');
  });
}

function startST5Questions() {
  st5Scores = [];
  st5QIdx = 0;
  document.getElementById('st5-intro').style.display = 'none';
  document.getElementById('st5-result').style.display = 'none';
  document.getElementById('st5-question-container').style.display = 'block';
  showST5Question();
}

function showST5Question() {
  const qList = st5Questions[currentLang];
  const qObj = qList[st5QIdx];

  document.getElementById('st5-current-q').innerText = st5QIdx + 1;
  document.getElementById('st5-question-text').innerText = qObj.q;

  const container = document.getElementById('st5-question-options');
  container.innerHTML = '';

  qObj.opts.forEach((optText, val) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = optText;
    btn.addEventListener('click', () => {
      st5Scores.push(val);
      st5QIdx++;
      if (st5QIdx < 5) {
        showST5Question();
      } else {
        renderST5Result();
      }
    });
    container.appendChild(btn);
  });
}

function renderST5Result() {
  document.getElementById('st5-question-container').style.display = 'none';
  document.getElementById('st5-result').style.display = 'block';

  const sum = st5Scores.reduce((a, b) => a + b, 0);
  const badge = document.getElementById('st5-badge');
  const sugg = document.getElementById('st5-suggestion');

  badge.className = 'result-badge';

  if (sum >= 10) {
    badge.classList.add('high');
    badge.innerText = currentLang === 'th' ? "เครียดมากที่สุด" : "Severe Stress";
    sugg.innerText = currentLang === 'th'
      ? `คะแนนความเครียดสะสม ${sum}/15 คะแนน (ระดับเครียดมากที่สุด) แนะนำให้รีบพักสมอง หรือปรึกษาผู้เชี่ยวชาญจากสายด่วนทันที`
      : `Score: ${sum}/15 (Severe Stress). We advise a brief work suspension and immediate helpline consultation.`;
  } else if (sum >= 8) {
    badge.classList.add('high');
    badge.innerText = currentLang === 'th' ? "เครียดมาก" : "High Stress";
    sugg.innerText = currentLang === 'th'
      ? `คะแนนความเครียดสะสม ${sum}/15 คะแนน (ระดับเครียดมาก) แนะนำให้ใช้เครื่องมือปรับลมหายใจผ่อนคลายความกดดันในทันที`
      : `Score: ${sum}/15 (High Stress). We suggest launching a brief breathing or stretch guide to reduce physical tension.`;
  } else if (sum >= 5) {
    badge.classList.add('med');
    badge.innerText = currentLang === 'th' ? "เครียดปานกลาง" : "Moderate Stress";
    sugg.innerText = currentLang === 'th'
      ? `คะแนนความเครียดสะสม ${sum}/15 คะแนน (ระดับเครียดปานกลาง) แนะนำให้จิบน้ำเพื่อเติมความสดชื่นหรือสวมหูฟังดนตรีผ่อนคลาย`
      : `Score: ${sum}/15 (Moderate Stress). Try sipping cool water mindfully or turning on ambient audio.`;
  } else {
    badge.classList.add('low');
    badge.innerText = currentLang === 'th' ? "เครียดน้อย" : "Low Stress";
    sugg.innerText = currentLang === 'th'
      ? `คะแนนความเครียดสะสม ${sum}/15 คะแนน (ระดับเครียดน้อย) คุณรักษาระดับอารมณ์ได้ดี แนะนำให้ยืดเส้นยืดสาย Desk Stretch เพื่อคลายกล้ามเนื้อ`
      : `Score: ${sum}/15 (Low Stress). You are managing stress well! A quick desk stretch can keep you loose.`;
  }
}

// -------------------------------------------------------------
// DIVERSE EXERCISE TIMER (Hydration, Stretch)
// -------------------------------------------------------------
function setupBreathingExercise() {
  const startBtn = document.getElementById('start-breathing-btn');
  const stopBtn = document.getElementById('stop-breathing-btn');

  startBtn.addEventListener('click', startExercise);
  stopBtn.addEventListener('click', stopExercise);

  document.querySelectorAll('.practice-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const method = this.getAttribute('data-method');
      if (method === 'audio') {
        openAudioPlayer();
      } else {
        openExercise(method);
      }
    });
  });
}

function openExercise(type) {
  currentExerciseType = type;
  stopExercise();
  openModal('breathing-modal');

  const title = document.getElementById('breathing-exercise-title');
  const desc = document.getElementById('breathing-exercise-desc');
  const timer = document.getElementById('breathing-time-left');

  if (type === 'hydration') {
    title.innerText = currentLang === 'th' ? "วางเรื่องเครียดลงแป๊บ แล้วมาเติมความสดชื่นไปด้วยกันนะ" : "Put down stress for a moment, let's refresh together";
    desc.innerText = currentLang === 'th' ? "จิบน้ำช้าๆ 5 อึกเพื่อสยบความยากบุหรี่" : "Slowly take 5 sips of cold water to defeat cravings";
    timer.innerText = "60s";
  } else if (type === 'box') {
    title.innerText = currentLang === 'th' ? "แบบฝึกหายใจสี่เหลี่ยม (Box Breathing)" : "Box Breathing";
    desc.innerText = currentLang === 'th' ? "หายใจเข้า 4วิ → กลั้น 4วิ → หายใจออก 4วิ → กลั้น 4วิ" : "Inhale 4s → Hold 4s → Exhale 4s → Hold 4s";
    timer.innerText = "60s";
  } else {
    title.innerText = currentLang === 'th' ? "ยืดเส้นยืดสายที่โต๊ะทำงาน" : "Desk Ergonomic Stretch";
    desc.innerText = currentLang === 'th' ? "เปลี่ยนท่าทาง ยืดกล้ามเนื้อตึงล้าใน 1.5 นาที" : "Modify physical posture, stretch tense muscles in 1.5 min";
    timer.innerText = "90s";
  }
}

function startExercise() {
  const startBtn = document.getElementById('start-breathing-btn');
  const stopBtn = document.getElementById('stop-breathing-btn');
  const timer = document.getElementById('breathing-time-left');
  const fill = document.getElementById('breathing-progress');
  const circle = document.getElementById('breathing-circle');
  const instruction = document.getElementById('breathing-instruction-text');

  startBtn.style.display = 'none';
  stopBtn.style.display = 'block';

  let totalSeconds = currentExerciseType === 'stretch' ? 90 : 60;
  let leftSeconds = totalSeconds;
  let tick = 0;

  timer.innerText = `${leftSeconds}s`;
  fill.style.width = '0%';
  
  runExerciseVisualStep(tick, instruction, circle);

  exerciseInterval = setInterval(() => {
    leftSeconds--;
    tick++;
    timer.innerText = `${leftSeconds}s`;
    fill.style.width = `${((totalSeconds - leftSeconds) / totalSeconds) * 100}%`;

    runExerciseVisualStep(tick, instruction, circle);

    if (leftSeconds <= 0) {
      clearInterval(exerciseInterval);
      exerciseInterval = null;
      stopExercise();
      
      if (currentExerciseType === 'hydration') {
        instruction.innerHTML = currentLang === 'th'
          ? "ความอยากบุหรี่เมื่อกี้ คุณผ่านมันมาได้แล้วนะ ภูมิใจในตัวเองได้เลย!<br><span style='font-size:0.95rem; color:var(--accent-sage-dark); font-weight:700;'>ขอบคุณความพยายามของคุณที่เลือกดื่มน้ำแทนการหยิบบุหรี่ในวันนี้นะ</span>"
          : "The craving has passed! Be proud of yourself.<br><span style='font-size:0.95rem; color:var(--accent-sage-dark); font-weight:700;'>Thank you for choosing water over cigarettes today.</span>";
      } else {
        instruction.innerText = currentLang === 'th' 
          ? "🌟 เสร็จสิ้น! คุณเบี่ยงเบนความสนใจจากบุหรี่สำเร็จแล้ว" 
          : "🌟 Finished! You successfully bypassed the craving trigger.";
      }
    }
  }, 1000);
}

function runExerciseVisualStep(tick, instr, circle) {
  circle.className = 'breathing-circle-inner';

  if (currentExerciseType === 'hydration') {
    const sipNum = Math.floor(tick / 12) + 1;
    const stage = tick % 12;

    if (sipNum <= 5) {
      const thSips = [
        "เริ่มต้นได้ดีมาก แก้วแรกผ่านไปแล้ว!",
        "เก่งมากเลย คุณเพิ่งปฏิเสธบุหรี่ไปได้อีกหนึ่งช่วงเวลาแล้วนะ",
        "จิบน้ำช้าๆ ให้ใจได้พัก... เราอยู่ข้างๆ คุณเสมอ",
        "ครึ่งทางแล้วนะ ร่างกายคุณต้องกำลังขอบคุณน้ำแก้วนี้อยู่แน่ๆ",
        "ความอยากบุหรี่เมื่อกี้ คุณผ่านมันมาได้แล้วนะ ภูมิใจในตัวเองได้เลย!"
      ];
      
      const enSips = [
        "Great start! The first glass is down!",
        "Well done! You just skipped another smoking trigger.",
        "Sip water slowly, let your mind rest... We're always here beside you.",
        "Halfway there! Your body is surely thanking you for this water.",
        "You've survived that craving! Be proud of yourself!"
      ];

      instr.innerText = currentLang === 'th' ? `${thSips[sipNum - 1]}` : `${enSips[sipNum - 1]}`;
      
      if (stage < 4) {
        circle.classList.add('inhale');
      } else if (stage < 8) {
        circle.classList.add('hold');
      } else {
        circle.classList.add('exhale');
      }
    }
  } else if (currentExerciseType === 'box') {
    const step = tick % 16;
    if (step < 4) {
      instr.innerText = currentLang === 'th' ? "หายใจเข้าช้าๆ..." : "Inhale slowly...";
      circle.classList.add('inhale');
    } else if (step < 8) {
      instr.innerText = currentLang === 'th' ? "กลั้นหายใจนิ่งๆ..." : "Hold your breath...";
      circle.classList.add('hold');
    } else if (step < 12) {
      instr.innerText = currentLang === 'th' ? "หายใจออกช้าๆ..." : "Exhale slowly...";
      circle.classList.add('exhale');
    } else {
      instr.innerText = currentLang === 'th' ? "กลั้นนิ่งผ่อนคลาย..." : "Hold and relax...";
      circle.classList.add('exhale');
    }
  } else {
    // Stretching
    const phase = Math.floor(tick / 15) % 6;
    if (phase === 0) {
      instr.innerText = currentLang === 'th' ? "เอียงศีรษะไปทางซ้ายช้าๆ" : "Slowly tilt neck to the left";
      circle.classList.add('inhale');
    } else if (phase === 1) {
      instr.innerText = currentLang === 'th' ? "เอียงศีรษะไปทางขวาช้าๆ" : "Slowly tilt neck to the right";
      circle.classList.add('exhale');
    } else if (phase === 2) {
      instr.innerText = currentLang === 'th' ? "ก้มศีรษะดึงคอเบาๆ" : "Gently tuck chin down";
      circle.classList.add('inhale');
    } else if (phase === 3) {
      instr.innerText = currentLang === 'th' ? "ยกบ่าชิดใบหูค้างไว้แล้วปล่อย" : "Shrug shoulders, hold, release";
      circle.classList.add('exhale');
    } else if (phase === 4) {
      instr.innerText = currentLang === 'th' ? "บิดลำตัวท่อนบนซ้ายขวาสลับกัน" : "Twist upper body left and right";
      circle.classList.add('inhale');
    } else {
      instr.innerText = currentLang === 'th' ? "กำนิ้วประสานข้อมือและหมุนเบาๆ" : "Clench fists, rotate wrists";
      circle.classList.add('exhale');
    }
  }
}

function stopExercise() {
  if (exerciseInterval) {
    clearInterval(exerciseInterval);
    exerciseInterval = null;
  }
  const startBtn = document.getElementById('start-breathing-btn');
  const stopBtn = document.getElementById('stop-breathing-btn');
  const circle = document.getElementById('breathing-circle');
  const fill = document.getElementById('breathing-progress');
  const instruction = document.getElementById('breathing-instruction-text');

  if (startBtn) startBtn.style.display = 'block';
  if (stopBtn) stopBtn.style.display = 'none';
  if (circle) circle.className = 'breathing-circle-inner';
  if (fill) fill.style.width = '0%';
  if (instruction) instruction.innerText = currentLang === 'th' ? "เตรียมตัว..." : "Get ready...";
}

// -------------------------------------------------------------
// WEB AUDIO API REAL SYNTHESIS ENGINE
// -------------------------------------------------------------
function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Generate Noise Buffer (Used for Rain & Waves)
function createNoiseBuffer() {
  const bufferSize = 2 * audioCtx.sampleRate;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
}

// Play Synthesized Soft Rain
function startRainSynth() {
  const noise = audioCtx.createBufferSource();
  noise.buffer = createNoiseBuffer();
  noise.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(700, audioCtx.currentTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.12, audioCtx.currentTime);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start();
  rainNode = { source: noise, gain: gain };
}

// Play Synthesized Ocean Waves
function startWavesSynth() {
  const noise = audioCtx.createBufferSource();
  noise.buffer = createNoiseBuffer();
  noise.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(350, audioCtx.currentTime);
  filter.Q.setValueAtTime(0.8, audioCtx.currentTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.04, audioCtx.currentTime);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start();

  let waveTick = 0;
  const wavesModulator = setInterval(() => {
    if (!audioPlaying) {
      clearInterval(wavesModulator);
      return;
    }
    waveTick += 0.04;
    const currentGain = 0.05 + Math.sin(waveTick) * 0.04;
    gain.gain.setValueAtTime(currentGain, audioCtx.currentTime);
    const currentFreq = 400 + Math.sin(waveTick) * 200;
    filter.frequency.setValueAtTime(currentFreq, audioCtx.currentTime);
  }, 50);

  wavesNode = { source: noise, gain: gain, interval: wavesModulator };
}

// Play Soft Pentatonic Ambient Piano Chimes
function startPianoSynth() {
  const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
  
  function triggerPianoNote() {
    if (!audioPlaying) return;
    const freq = scale[Math.floor(Math.random() * scale.length)];
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.2); 
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.5);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 2.7);
  }

  triggerPianoNote();
  synthInterval = setInterval(triggerPianoNote, 1600);
}

function stopAudioEngine() {
  if (rainNode) {
    try { rainNode.source.stop(); } catch(e) {}
    rainNode = null;
  }
  if (wavesNode) {
    try { wavesNode.source.stop(); } catch(e) {}
    if (wavesNode.interval) clearInterval(wavesNode.interval);
    wavesNode = null;
  }
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

// -------------------------------------------------------------
// AUDIO PLAYER INTERACTION WITH INTEGRATED BREATHING GUIDE
// -------------------------------------------------------------
function setupAudioPlayer() {
  const playBtn = document.getElementById('audio-play-btn');
  const closeBtn = document.getElementById('close-audio-confirm-btn');
  const soundBtns = document.querySelectorAll('.sound-btn');

  playBtn.addEventListener('click', toggleAudioPlayback);
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal('audio-modal'));
  }

  soundBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      soundBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedSound = this.getAttribute('data-sound');
      
      if (audioPlaying) {
        stopAudioEngine();
        playSelectedSynth();
      }
    });
  });
}

function openAudioPlayer() {
  stopAudio();
  openModal('audio-modal');
}

function playSelectedSynth() {
  initAudioContext();
  if (selectedSound === 'rain') {
    startRainSynth();
  } else if (selectedSound === 'waves') {
    startWavesSynth();
  } else {
    startPianoSynth();
  }
}

function toggleAudioPlayback() {
  const playBtn = document.getElementById('audio-play-btn');
  
  if (!audioPlaying) {
    audioPlaying = true;
    playBtn.innerText = "⏸";
    
    playSelectedSynth();
    startAudioBreathingGuide();

    audioInterval = setInterval(() => {
      audioTimerVal--;
      const mins = Math.floor(audioTimerVal / 60);
      const secs = audioTimerVal % 60;
      document.getElementById('audio-timer').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      
      animateVisualizer();

      if (audioTimerVal <= 0) {
        stopAudio();
      }
    }, 1000);
  } else {
    audioPlaying = false;
    playBtn.innerText = "▶";
    clearInterval(audioInterval);
    stopAudioEngine();
    stopAudioBreathingGuide();
    animateVisualizer();
  }
}

function animateVisualizer() {
  const bars = document.querySelectorAll('.wave-bar');
  bars.forEach(bar => {
    const h = audioPlaying ? Math.floor(Math.random() * 35) + 12 : 10;
    bar.style.height = `${h}px`;
  });
}

function startAudioBreathingGuide() {
  const circle = document.getElementById('audio-breathing-circle');
  const instr = document.getElementById('audio-breathing-instruction');
  let cycleTick = 0;

  if (audioBreathingInterval) clearInterval(audioBreathingInterval);
  
  circle.className = 'breathing-circle-inner';
  instr.innerText = currentLang === 'th' ? "หายใจเข้าช้าๆ..." : "Inhale slowly...";
  circle.classList.add('inhale');

  audioBreathingInterval = setInterval(() => {
    cycleTick++;
    const stage = cycleTick % 8; // 8 seconds breathing loop
    
    circle.className = 'breathing-circle-inner';

    if (stage < 4) {
      instr.innerText = currentLang === 'th' ? "หายใจเข้าช้าๆ..." : "Inhale slowly...";
      circle.classList.add('inhale');
    } else {
      instr.innerText = currentLang === 'th' ? "หายใจออกช้าๆ..." : "Exhale slowly...";
      circle.classList.add('exhale');
    }
  }, 1000);
}

function stopAudioBreathingGuide() {
  if (audioBreathingInterval) {
    clearInterval(audioBreathingInterval);
    audioBreathingInterval = null;
  }
  const circle = document.getElementById('audio-breathing-circle');
  const instr = document.getElementById('audio-breathing-instruction');
  if (circle) circle.className = 'breathing-circle-inner';
  if (instr) instr.innerText = currentLang === 'th' ? "เตรียมตัว..." : "Get ready...";
}

function stopAudio() {
  audioPlaying = false;
  audioTimerVal = 60;
  if (audioInterval) {
    clearInterval(audioInterval);
    audioInterval = null;
  }
  stopAudioEngine();
  stopAudioBreathingGuide();
  const playBtn = document.getElementById('audio-play-btn');
  if (playBtn) playBtn.innerText = "▶";
  const timer = document.getElementById('audio-timer');
  if (timer) timer.innerText = "01:00";
  animateVisualizer();
}

// -------------------------------------------------------------
// INTERACTIVE SYSTEM 3: SAVINGS CALCULATOR (Clean & Consistent)
// -------------------------------------------------------------
function setupSavingsCalculator() {
  const cigsSlider = document.getElementById('cigs-slider');
  const priceSlider = document.getElementById('price-slider');

  cigsSlider.addEventListener('input', function() {
    document.getElementById('cigs-val-display').innerText = this.value;
    updateCalculatorResults();
  });

  priceSlider.addEventListener('input', function() {
    document.getElementById('price-val-display').innerText = this.value;
    updateCalculatorResults();
  });
}

function updateCalculatorResults() {
  const cigs = parseInt(document.getElementById('cigs-slider').value);
  const pricePerPack = parseInt(document.getElementById('price-slider').value);
  const pricePerCig = pricePerPack / 20;
  
  const dailySavings = cigs * pricePerCig;
  const weekly = Math.round(dailySavings * 7);
  const monthly = Math.round(dailySavings * 30);
  const milestone = Math.round(dailySavings * 365);

  document.getElementById('res-weekly').innerText = weekly.toLocaleString();
  document.getElementById('res-monthly').innerText = monthly.toLocaleString();
  document.getElementById('res-milestone').innerText = milestone.toLocaleString();
}

// -------------------------------------------------------------
// INTERACTIVE SYSTEM 4: CHATBOT SIMULATION
// -------------------------------------------------------------
const chatbotResponses = {
  th: {
    opt_stress: {
      user: "เครียดเรื่องงาน อยากสูบบุหรี่ทำไงดี?",
      bot: "ความเครียดสะสมเป็นตัวกระตุ้นหลักเลยค่ะ พี่ต้นลองปิดหน้าน้องวันใหม่แชตบอทนี้แล้วเลื่อนไปที่แถบ **'วิธีผ่อนคลายความเครียดด่วน'** เพื่อเริ่มจิบน้ำบำบัดประสาทหรือเปิดฟังเสียงธรรมชาติคลายสมองดูนะคะ"
    },
    opt_withdrawal: {
      user: "มีอาการหงุดหงิดหลังหยุดสูบ แก้ยังไง?",
      bot: "อาการหงุดหงิด วิตกกังวล เกิดจากสมองขาดสารนิโคตินกระตุ้นค่ะ แนะนำให้จิบน้ำเย็นจัดแบบแบ่งเป็นอึกช้าๆ 5 อึกเพื่อผ่อนคลายตนเอง หรือกดสายด่วนเลิกบุหรี่แห่งชาติโทร **1600** เพื่อพูดคุยปรึกษากับนักจิตวิทยาได้ฟรีเลยค่ะ"
    },
    opt_call: {
      user: "ต้องการโทรคุยกับเจ้าหน้าที่ 1600",
      bot: "บริการสายด่วนเลิกบุหรี่แห่งชาติ โทรคุยปรึกษาฟรีไม่มีค่าใช้จ่ายค่ะ โทร **1600** (จันทร์-ศุกร์ 09.00 - 20.00 น.) ยินดีให้คำปรึกษาดูแลก้าวไปทีละก้าวอย่างปลอดภัยเลยนะคะ"
    }
  },
  en: {
    opt_stress: {
      user: "Stressed at work and wanting to smoke, what should I do?",
      bot: "Job pressure is a major trigger. Close this chatbot and look at **'Quick Stress Relief'** above, then run the 'Mindful Hydration' or 'Ambient Audio' for 60 seconds."
    },
    opt_withdrawal: {
      user: "Irritable after quitting smoking, how to manage it?",
      bot: "Irritability is normal during chemical withdrawal. Try sipping ice-cold water (5 sips guide) or dial **1600** to talk confidentially to our counselors."
    },
    opt_call: {
      user: "I want to speak with a human counselor on 1600",
      bot: "Thailand National Quitline 1600 provides free, private phone counseling. Dial **1600** (Mon-Fri, 9:00 AM - 8:00 PM)."
    }
  }
};

function setupChatbot() {
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const box = document.getElementById('chat-messages-box');
  const shortcuts = document.getElementById('chat-shortcuts');

  document.querySelectorAll('.open-chat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      box.innerHTML = `<div class="message bot-msg"><p>${translationDict[currentLang].chat_welcome}</p></div>`;
      openModal('chat-modal');
    });
  });

  document.querySelectorAll('.chat-suggest-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const key = this.getAttribute('data-msg-key');
      
      shortcuts.style.pointerEvents = 'none';
      shortcuts.style.opacity = '0.5';

      const userBubble = document.createElement('div');
      userBubble.className = 'message user-msg';
      userBubble.innerHTML = `<p>${chatbotResponses[currentLang][key].user}</p>`;
      box.appendChild(userBubble);
      box.scrollTop = box.scrollHeight;

      setTimeout(() => {
        const loadBubble = document.createElement('div');
        loadBubble.className = 'message bot-msg';
        loadBubble.innerHTML = `<p>...</p>`;
        box.appendChild(loadBubble);
        box.scrollTop = box.scrollHeight;

        setTimeout(() => {
          loadBubble.remove();
          
          const botBubble = document.createElement('div');
          botBubble.className = 'message bot-msg';
          botBubble.innerHTML = `<p>${chatbotResponses[currentLang][key].bot}</p>`;
          box.appendChild(botBubble);
          box.scrollTop = box.scrollHeight;

          shortcuts.style.pointerEvents = '';
          shortcuts.style.opacity = '1';
        }, 1200);

      }, 600);

    });
  });
}