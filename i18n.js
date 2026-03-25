const i18n = {
    "en": {
        "nav.logo": "HERO<span class=\"accent\">MOTIVES</span>",
        "nav.about": "About Hiro",
        "nav.content": "Content",
        "nav.youtube": "YouTube",
        "nav.instagram": "Instagram",
        
        "hero.title": "Build, Drive, <br><span class=\"accent\">Understand Better.</span>",
        "hero.subtitle": "ASE Master & Honda Certified Technician sharing S2000 builds, tuning setups, and DIY repair tutorials from Arizona. <strong>Soon offering local workshop services!</strong>",
        "hero.btn.learn": "Learn More",
        "hero.btn.youtube": "YouTube Channel",
        "hero.btn.instagram": "Follow @hhhjdm",
        "hero.btn.book": "Book Appointment (Coming Soon)",
        
        "about.badge": "Master Tech",
        "about.title": "Meet Hiro",
        "about.quote": "\"Do you see someone skilled in their work? They will serve before kings.\" – Proverbs 22:29",
        "about.p1": "Hi, I’m Hiro — ASE Master & Honda Certified Technician, and Toyota Expert Certified. On this channel, I share Honda S2000 builds, K24 swap tuning, Link G4X ECU setup, and track racing content from Arizona.",
        "about.p2": "You’ll also find DIY repair tutorials, diagnostics, and mechanic tips based on real shop experience. My goal is to help enthusiasts and aspiring mechanics understand, build, and drive better. <br><br><b>Good news for locals:</b> I am also preparing to offer hands-on tuning and repair services within Arizona very soon!",
        "about.topics.title": "Core Topics",
        
        "content.title": "Channel Content",
        "card1.title": "Track Racing & S2000",
        "card1.desc": "Taking the S2000 to the track, testing suspension set-ups, and sharing on-board footage from Arizona raceways.",
        "card2.title": "K24 Swaps & Tuning",
        "card2.desc": "In-depth guides on K-series engine swaps, standalone ECU configurations like Link G4X, and dyno tuning.",
        "card3.title": "DIY Repair & Diagnostics",
        "card3.desc": "Real-world mechanic tips, step-by-step repair guides, and deep dives into diagnosing modern vehicle issues.",
        "card4.title": "Motorsports Engineering",
        "card4.desc": "Breaking down complex automotive systems, aerodynamics, and performance JDM build blueprints.",
        
        "footer.motto": "Understanding, Building, and Driving Better.",
        "footer.social": "Social & Contact",
        "footer.specialties": "Specialties"
    },
    "jp": {
        "nav.logo": "ヒロモー<span class=\"accent\">ティブ</span>",
        "nav.about": "自己紹介",
        "nav.content": "動画コンテンツ",
        "nav.youtube": "YouTube",
        "nav.instagram": "Instagram",
        
        "hero.title": "走りを極め、<br><span class=\"accent\">理解を深める。</span>",
        "hero.subtitle": "アリゾナから、ASE認定マスターテキスト＆ホンダ認定整備士がS2000のビルド、チューニング、実践的なDIY修理チュートリアルをお届けします。<strong>※近々アリゾナ州内でのローカル出張整備サービスも開始予定！</strong>",
        "hero.btn.learn": "詳細を見る",
        "hero.btn.youtube": "YouTubeチャンネル",
        "hero.btn.instagram": "Instagramをフォロー",
        "hero.btn.book": "予約する (準備中)",
        
        "about.badge": "マスターテック",
        "about.title": "メカニック紹介",
        "about.quote": "「自分の仕事に熟練した人を見よ。その人は王たちの前に立つ。」 – 箴言 22:29",
        "about.p1": "こんにちは、Hiroです。ASEマスター、ホンダ認定整備士、そしてトヨタのエキスパート認定資格を持っています。このチャンネルでは、アメリカのアリゾナ州から愛車のS2000ビルド、K24エンジンスワップ、Link G4X ECUのセッティング、そしてリアルなサーキット走行の様子を配信しています。",
        "about.p2": "さらに、実際の現場での経験に基づいたDIY修理のチュートリアル、トラブルシューティング、メカニック向けのプロのヒントを紹介しています。車好きな方や整備士を目指す方々が、より深く仕組みを理解し、最高の一台を造り上げ、走りを極めるサポートをするのが私の目標です。<br><br><b>【お知らせ】</b> まもなくアリゾナ州内にお住まいの方向けに、実車でのチューニングや整備サービスも開始予定です！",
        "about.topics.title": "配信トピック",
        
        "content.title": "配信コンテンツ",
        "card1.title": "サーキット走行 ＆ S2000",
        "card1.desc": "愛車S2000でのサーキット走行、足回りセッティングのテスト、そしてアリゾナのサーキットからの迫力ある車載映像をお届けします。",
        "card2.title": "K24スワップ ＆ チューニング",
        "card2.desc": "Kシリーズ・エンジンスワップの徹底解説、Link G4X等のフルコン（スタンドアローンECU）のセットアップ、ダイノでの現車合わせチューニング。",
        "card3.title": "DIY修理 ＆ 故障診断",
        "card3.desc": "実践的なメカニックの知恵、ステップバイステップで学べる修理ガイド、そして現代の車の複雑なトラブル診断を深掘りします。",
        "card4.title": "モータースポーツ・エンジニアリング",
        "card4.desc": "複雑な自動車システムの仕組み、エアロダイナミクス、パフォーマンスを究めるJDMビルドの設計思想を分かりやすく解説します。",
        
        "footer.motto": "深く理解し、最高の一台を造り、走りを極める。",
        "footer.social": "SNS ＆ お問い合わせ",
        "footer.specialties": "専門分野"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'jp' : 'en');
}

// Initialize translation on load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
