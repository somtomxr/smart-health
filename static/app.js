"use strict";

/* ═══════════════════════════════════════════════════════════════════
   SMART HEALTH – DISTRICT HEALTH COMMAND CENTER
   Enterprise Frontend Engine (100% CSP Compliant, Zero innerHTML)
   ═══════════════════════════════════════════════════════════════════ */

// ── 1. COMPREHENSIVE MULTILINGUAL DICTIONARY ─────────────────────
const T = {
  en: {
    page_title: "Smart Health – District Command Center",
    site_title: "Smart Health",
    site_sub: "District Health Intelligence & Crisis Command • Bengaluru Rural",
    live_telemetry: "LIVE 24/7 TELEMETRY",
    lbl_token: "Admin Token",
    lbl_refresh: "Sync",
    status_sync: "Status:",
    status_connected: "Connected to District Telemetry Grid",
    status_loading: "Fetching real-time district telemetry…",
    status_error: "Telemetry connection error. Retrying…",
    refresh_in: "Next sync in",
    incident_scanning: "Scanning 12 Health Facilities…",
    incident_active: "{crit} CRITICAL OUTAGES • {att} UNDER OBSERVATION",
    incident_optimal: "ALL 12 FACILITIES WITHIN OPTIMAL THRESHOLDS",
    tag_overview: "DISTRICT TELEMETRY",
    lbl_kpi_heading: "District Overview & Vital Statistics",
    centres_monitored: "12 Facilities Active (10 PHCs • 2 CHCs)",
    lbl_map_card: "District Intelligence GIS Map",
    lbl_flagged: "Centres Requiring Urgent Intervention",
    flagged_sub: "Automated deficiency detection across doctors, bed availability, stock-out risk, and lab tests.",
    lbl_forecast: "14-Day Holt-Winters Demand Forecast",
    lbl_redis: "AI Supply Chain Redistribution Matrix",
    redis_sub: "Optimal nearest-donor algorithm ensuring surplus facilities supply stock-out risks without falling below 14-day reserves.",
    lbl_centres_sec: "All 12 District Health Facilities (Live Telemetry)",
    lbl_esc: "District Administrative Escalations",
    esc_sub: "Audit trail of critical interventions dispatched to District Chief Medical Officer (CMO).",
    lbl_ask: "District Health AI Copilot",
    lbl_ask_sr: "Ask the District Health Copilot",
    quick_prompts_lbl: "Quick Queries:",
    lbl_centre: "Facility",
    lbl_medicine: "Medicine",
    search_placeholder: "Filter facilities by name or type…",
    
    // KPIs
    k_stock: "Critical Stock-out Risks",
    k_foot: "Total Patients Today",
    k_beds: "Beds Unavailable",
    k_doc: "Clinical Attendance Rate",
    k_tests: "Diagnostic Tests Deficit",
    trend_crit: "ACTION REQ",
    trend_stable: "STABLE",
    trend_live: "LIVE",

    // Map & HUD
    filter_all: "All (12)",
    filter_crit: "🚨 Critical",
    filter_warn: "⚠️ Attention",
    filter_good: "✅ Optimal",
    hud_prompt: "Select any facility on map to view live telemetry",
    hud_doc: "Doctor Attendance",
    hud_beds: "Free Beds",
    hud_stock: "Min Stock Cover",
    hud_btn_forecast: "📈 View Demand Forecast",
    hud_btn_escalate: "⚡ Escalate to CMO",
    leg_good: "Optimal Status",
    leg_att: "Attention Required",
    leg_crit: "Critical Alert",
    leg_chc: "CHC (Community)",
    leg_phc: "PHC (Primary)",

    // Flags & Reasons
    r_stock_out: "Medicine stock-out risk",
    r_low_doctors: "Low doctor attendance",
    r_no_beds: "No free beds",
    r_tests: "Diagnostic test gap",
    escalate_btn: "Escalate to CMO",
    escalated_btn: "Escalated ✓",
    resolve_btn: "Resolve",
    resolved_btn: "Resolved ✓",

    // Table
    c_name: "Facility Name",
    c_type: "Type",
    c_score: "Readiness Score",
    c_status: "Status",
    c_stock: "Min Stock Cover",
    c_beds: "Free Beds",
    c_doc: "Doctors",
    c_tests: "Lab Tests",
    c_action: "Action",
    inspect: "Inspect",
    days_unit: "d",

    // Redistribution
    from_lbl: "From Donor",
    to_lbl: "To Recipient",
    qty_lbl: "Transfer Qty",
    dist_lbl: "Distance",
    cover_left_lbl: "Stock Left",
    redis_empty: "All facilities currently maintain safe 14-day medicine reserves.",
    transfers_badge: "Transfers Required",

    // AI Copilot
    bot_greeting: "Greetings, Administrator. I am monitoring all 12 PHCs and CHCs in Bengaluru Rural District in real-time. I can evaluate medicine stock-outs, doctor deficits, bed vacancy, or calculate optimal inter-facility supply transfers. Click any query above or ask a specific question.",
    q1: "Which centres have critical medicine stock-outs?",
    q2: "Show doctor attendance deficits across centres",
    q3: "Which centres have zero free beds?",
    q4: "Summarize recommended medicine transfers",
    chat_ph: "Ask about medicine stock, beds, doctors, transfers…",
    send_lbl: "Send",
    thinking: "Analyzing district health telemetry…",
    via_gemini: "via Gemini Pro LLM",
    via_rules: "via Algorithmic Intelligence Engine",

    // Toasts
    toast_token_req: "Admin token required to perform this action.",
    toast_escalated: "Dispatched escalation ticket to District CMO ✓",
    toast_resolved: "Escalation ticket marked as resolved ✓",
    toast_refreshed: "District telemetry synchronized successfully ✓",
    toast_lang_changed: "Language switched to English",
  },

  hi: {
    page_title: "स्मार्ट हेल्थ – जिला कमांड सेंटर",
    site_title: "स्मार्ट हेल्थ",
    site_sub: "जिला स्वास्थ्य इंटेलिजेंस एवं क्राइसिस कमांड • बेंगलुरु ग्रामीण",
    live_telemetry: "लाइव 24/7 टेलीमेट्री",
    lbl_token: "प्रशासक टोकन",
    lbl_refresh: "सिंक करें",
    status_sync: "स्थिति:",
    status_connected: "जिला टेलीमेट्री ग्रिड से जुड़ा हुआ है",
    status_loading: "वास्तविक समय का डेटा लोड हो रहा है…",
    status_error: "कनेक्शन त्रुटि। पुनः प्रयास जारी…",
    refresh_in: "अगला सिंक",
    incident_scanning: "12 स्वास्थ्य केंद्रों की जांच जारी…",
    incident_active: "{crit} गंभीर अलर्ट • {att} निगरानी में",
    incident_optimal: "सभी 12 केंद्र सामान्य सीमा में हैं",
    tag_overview: "जिला टेलीमेट्री",
    lbl_kpi_heading: "जिला अवलोकन एवं महत्वपूर्ण आंकड़े",
    centres_monitored: "12 स्वास्थ्य केंद्र सक्रिय (10 PHC • 2 CHC)",
    lbl_map_card: "जिला इंटेलिजेंस जीआईएस मानचित्र",
    lbl_flagged: "तत्काल हस्तक्षेप की आवश्यकता वाले केंद्र",
    flagged_sub: "डॉक्टर, बेड, दवा स्टॉक और लैब जांच में कमियों का स्वचालित विश्लेषण।",
    lbl_forecast: "14 दिन की मांग का पूर्वानुमान (होल्ट-विंटर्स)",
    lbl_redis: "एआई आपूर्ति श्रृंखला पुनर्वितरण मैट्रिक्स",
    redis_sub: "निकटतम अधिशेष केंद्रों से जरूरतमंद केंद्रों में दवा आपूर्ति का सुरक्षित एल्गोरिथम।",
    lbl_centres_sec: "सभी 12 जिला स्वास्थ्य केंद्र (लाइव टेलीमेट्री)",
    lbl_esc: "जिला प्रशासनिक मामले एवं ऑडिट",
    esc_sub: "मुख्य चिकित्सा अधिकारी (CMO) को भेजे गए गंभीर मामलों का विवरण।",
    lbl_ask: "जिला स्वास्थ्य एआई कोपायलट",
    lbl_ask_sr: "जिला स्वास्थ्य एआई से पूछें",
    quick_prompts_lbl: "त्वरित प्रश्न:",
    lbl_centre: "केंद्र",
    lbl_medicine: "दवा",
    search_placeholder: "नाम या प्रकार से केंद्र खोजें…",

    // KPIs
    k_stock: "गंभीर स्टॉक-आउट जोखिम",
    k_foot: "आज के कुल मरीज",
    k_beds: "अनुपलब्ध बेड",
    k_doc: "डॉक्टर उपस्थिति दर",
    k_tests: "जांच उपलब्धता में कमी",
    trend_crit: "कार्रवाई जरूरी",
    trend_stable: "स्थिर",
    trend_live: "लाइव",

    // Map & HUD
    filter_all: "सभी (12)",
    filter_crit: "🚨 गंभीर",
    filter_warn: "⚠️ ध्यान दें",
    filter_good: "✅ सामान्य",
    hud_prompt: "मानचित्र पर किसी भी केंद्र का चयन करें",
    hud_doc: "डॉक्टर उपस्थिति",
    hud_beds: "खाली बेड",
    hud_stock: "न्यूनतम स्टॉक",
    hud_btn_forecast: "📈 मांग पूर्वानुमान देखें",
    hud_btn_escalate: "⚡ सीएमओ को भेजें",
    leg_good: "सामान्य स्थिति",
    leg_att: "ध्यान देने योग्य",
    leg_crit: "गंभीर अलर्ट",
    leg_chc: "सीएचसी (सामुदायिक)",
    leg_phc: "पीएचसी (प्राथमिक)",

    // Flags & Reasons
    r_stock_out: "दवा खत्म होने का जोखिम",
    r_low_doctors: "डॉक्टर उपस्थिति कम",
    r_no_beds: "कोई खाली बेड नहीं",
    r_tests: "जांच उपलब्धता में कमी",
    escalate_btn: "सीएमओ को भेजें",
    escalated_btn: "भेज दिया ✓",
    resolve_btn: "निपटाएं",
    resolved_btn: "निपटा दिया ✓",

    // Table
    c_name: "केंद्र का नाम",
    c_type: "प्रकार",
    c_score: "तत्परता स्कोर",
    c_status: "स्थिति",
    c_stock: "न्यूनतम स्टॉक",
    c_beds: "खाली बेड",
    c_doc: "डॉक्टर",
    c_tests: "लैब जांचें",
    c_action: "कार्रवाई",
    inspect: "देखें",
    days_unit: "दिन",

    // Redistribution
    from_lbl: "दाता केंद्र",
    to_lbl: "प्राप्तकर्ता केंद्र",
    qty_lbl: "मात्रा",
    dist_lbl: "दूरी",
    cover_left_lbl: "बचा हुआ स्टॉक",
    redis_empty: "वर्तमान में सभी केंद्रों के पास पर्याप्त 14 दिन का दवा स्टॉक है।",
    transfers_badge: "ट्रांसफर की आवश्यकता",

    // AI Copilot
    bot_greeting: "नमस्ते प्रशासक। मैं वास्तविक समय में बेंगलुरु ग्रामीण जिले के सभी 12 प्राथमिक एवं सामुदायिक स्वास्थ्य केंद्रों की निगरानी कर रहा हूँ। आप दवा की कमी, डॉक्टर उपस्थिति, बेड रिक्ति या आपातकालीन पुनर्वितरण के बारे में पूछ सकते हैं।",
    q1: "किन केंद्रों में दवा खत्म होने का गंभीर जोखिम है?",
    q2: "सभी केंद्रों में डॉक्टर उपस्थिति की स्थिति दिखाएं",
    q3: "किन केंद्रों में शून्य खाली बेड हैं?",
    q4: "दवा पुनर्वितरण का सारांश बताएं",
    chat_ph: "स्टॉक, बेड, डॉक्टर या ट्रांसफर के बारे में पूछें…",
    send_lbl: "भेजें",
    thinking: "स्वास्थ्य डेटा का विश्लेषण हो रहा है…",
    via_gemini: "वाया जेमिनी प्रो एआई",
    via_rules: "वाया एनालिटिक्स इंजन",

    // Toasts
    toast_token_req: "इस कार्रवाई के लिए व्यवस्थापक टोकन आवश्यक है।",
    toast_escalated: "मामला मुख्य चिकित्सा अधिकारी (CMO) को भेज दिया गया ✓",
    toast_resolved: "मामला सफलतापूर्वक निपटा दिया गया ✓",
    toast_refreshed: "टेलीमेट्री डेटा सफलतापूर्वक सिंक किया गया ✓",
    toast_lang_changed: "भाषा बदलकर हिन्दी कर दी गई",
  },

  kn: {
    page_title: "ಸ್ಮಾರ್ಟ್ ಹೆಲ್ತ್ – ಜಿಲ್ಲಾ ಕಮಾಂಡ್ ಸೆಂಟರ್",
    site_title: "ಸ್ಮಾರ್ಟ್ ಹೆಲ್ತ್",
    site_sub: "ಜಿಲ್ಲಾ ಆರೋಗ್ಯ ಇಂಟೆಲಿಜೆನ್ಸ್ ಮತ್ತು ತುರ್ತು ಕಮಾಂಡ್ • ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
    live_telemetry: "ಲೈವ್ 24/7 ಟೆಲಿಮೆಟ್ರಿ",
    lbl_token: "ಆಡಳಿತ ಟೋಕನ್",
    lbl_refresh: "ಸಿಂಕ್",
    status_sync: "ಸ್ಥಿತಿ:",
    status_connected: "ಜಿಲ್ಲಾ ಟೆಲಿಮೆಟ್ರಿ ಗ್ರಿಡ್‌ಗೆ ಸಂಪರ್ಕಗೊಂಡಿದೆ",
    status_loading: "ನೈಜ ಸಮಯದ ಡೇಟಾ ಲೋಡ್ ಆಗುತ್ತಿದೆ…",
    status_error: "ಸಂಪರ್ಕ ದೋಷ. ಮರುಪ್ರಯತ್ನಿಸಲಾಗುತ್ತಿದೆ…",
    refresh_in: "ಮುಂದಿನ ಸಿಂಕ್",
    incident_scanning: "12 ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳ ತಪಾಸಣೆ…",
    incident_active: "{crit} ಗಂಭೀರ ಎಚ್ಚರಿಕೆ • {att} ನಿಗಾದಲ್ಲಿ",
    incident_optimal: "ಎಲ್ಲಾ 12 ಕೇಂದ್ರಗಳು ಸಾಮಾನ್ಯ ಮಿತಿಯಲ್ಲಿದೆ",
    tag_overview: "ಜಿಲ್ಲಾ ಟೆಲಿಮೆಟ್ರಿ",
    lbl_kpi_heading: "ಜಿಲ್ಲಾ ಅವಲೋಕನ ಮತ್ತು ಪ್ರಮುಖ ಅಂಕಿಅಂಶಗಳು",
    centres_monitored: "12 ಕೇಂದ್ರಗಳು ಸಕ್ರಿಯ (10 PHC • 2 CHC)",
    lbl_map_card: "ಜಿಲ್ಲಾ ಇಂಟೆಲಿಜೆನ್ಸ್ ಜಿಐಎಸ್ ನಕ್ಷೆ",
    lbl_flagged: "ತುರ್ತು ಮಧ್ಯಪ್ರವೇಶ ಅಗತ್ಯವಿರುವ ಕೇಂದ್ರಗಳು",
    flagged_sub: "ವೈದ್ಯರು, ಹಾಸಿಗೆ ಲಭ್ಯತೆ, ಔಷಧ ಕೊರತೆ ಮತ್ತು ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳ ಸ್ವಯಂಚಾಲಿತ ವಿಶ್ಲೇಷಣೆ.",
    lbl_forecast: "14 ದಿನಗಳ ಬೇಡಿಕೆ ಮುನ್ಸೂಚನೆ (ಹೋಲ್ಟ್-ವಿಂಟರ್ಸ್)",
    lbl_redis: "ಎಐ ಸರಬರಾಜು ಮರುಹಂಚಿಕೆ ಮ್ಯಾಟ್ರಿಕ್ಸ್",
    redis_sub: "ಹೆಚ್ಚುವರಿ ಕೇಂದ್ರಗಳಿಂದ ಕೊರತೆಯಿರುವ ಕೇಂದ್ರಗಳಿಗೆ ಔಷಧಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಮರುಹಂಚುವ ವ್ಯವಸ್ಥೆ.",
    lbl_centres_sec: "ಎಲ್ಲಾ 12 ಜಿಲ್ಲಾ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು (ಲೈವ್ ಟೆಲಿಮೆಟ್ರಿ)",
    lbl_esc: "ಜಿಲ್ಲಾ ಆಡಳಿತಾತ್ಮಕ ಪ್ರಕರಣಗಳು",
    esc_sub: "ಮುಖ್ಯ ವೈದ್ಯಾಧಿಕಾರಿಗಳಿಗೆ (CMO) ರವಾನಿಸಲಾದ ತುರ್ತು ಪ್ರಕರಣಗಳ ದಾಖಲೆ.",
    lbl_ask: "ಜಿಲ್ಲಾ ಆರೋಗ್ಯ ಎಐ ಸಹಾಯಕ",
    lbl_ask_sr: "ಆರೋಗ್ಯ ಸಹಾಯಕರನ್ನು ಕೇಳಿ",
    quick_prompts_lbl: "ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು:",
    lbl_centre: "ಕೇಂದ್ರ",
    lbl_medicine: "ಔಷಧ",
    search_placeholder: "ಹೆಸರು ಅಥವಾ ಪ್ರಕಾರದಿಂದ ಕೇಂದ್ರ ಹುಡುಕಿ…",

    // KPIs
    k_stock: "ಗಂಭೀರ ಸ್ಟಾಕ್ ಖಾಲಿ ಅಪಾಯ",
    k_foot: "ಇಂದಿನ ಒಟ್ಟು ರೋಗಿಗಳು",
    k_beds: "ಲಭ್ಯವಿಲ್ಲದ ಹಾಸಿಗೆಗಳು",
    k_doc: "ವೈದ್ಯರ ಹಾಜರಾತಿ ದರ",
    k_tests: "ಪರೀಕ್ಷಾ ಲಭ್ಯತೆಯ ಕೊರತೆ",
    trend_crit: "ಕ್ರಮ ಅಗತ್ಯ",
    trend_stable: "ಸ್ಥಿರ",
    trend_live: "ಲೈವ್",

    // Map & HUD
    filter_all: "ಎಲ್ಲಾ (12)",
    filter_crit: "🚨 ಗಂಭೀರ",
    filter_warn: "⚠️ ಗಮನ ಅಗತ್ಯ",
    filter_good: "✅ ಸಾಮಾನ್ಯ",
    hud_prompt: "ಲೈವ್ ಟೆಲಿಮೆಟ್ರಿ ವೀಕ್ಷಿಸಲು ನಕ್ಷೆಯಲ್ಲಿ ಕೇಂದ್ರ ಆಯ್ಕೆಮಾಡಿ",
    hud_doc: "ವೈದ್ಯರ ಹಾಜರಾತಿ",
    hud_beds: "ಖಾಲಿ ಹಾಸಿಗೆಗಳು",
    hud_stock: "ಕನಿಷ್ಠ ಸ್ಟಾಕ್",
    hud_btn_forecast: "📈 ಬೇಡಿಕೆ ಮುನ್ಸೂಚನೆ",
    hud_btn_escalate: "⚡ ಸಿಎಂಒಗೆ ಕಳುಹಿಸಿ",
    leg_good: "ಸಾಮಾನ್ಯ ಸ್ಥಿತಿ",
    leg_att: "ಗಮನ ಅಗತ್ಯ",
    leg_crit: "ಗಂಭೀರ ಎಚ್ಚರಿಕೆ",
    leg_chc: "ಸಿಹೆಚ್‌ಸಿ (ಸಮುದಾಯ)",
    leg_phc: "ಪಿಹೆಚ್‌ಸಿ (ಪ್ರಾಥಮಿಕ)",

    // Flags & Reasons
    r_stock_out: "ಔಷಧ ಖಾಲಿಯಾಗುವ ಅಪಾಯ",
    r_low_doctors: "ವೈದ್ಯರ ಹಾಜರಾತಿ ಕಡಿಮೆ",
    r_no_beds: "ಖಾಲಿ ಹಾಸಿಗೆ ಇಲ್ಲ",
    r_tests: "ಪರೀಕ್ಷಾ ಲಭ್ಯತೆ ಕೊರತೆ",
    escalate_btn: "ಸಿಎಂಒಗೆ ಕಳುಹಿಸಿ",
    escalated_btn: "ಕಳುಹಿಸಲಾಗಿದೆ ✓",
    resolve_btn: "ಪರಿಹರಿಸಿ",
    resolved_btn: "ಪರಿಹರಿಸಲಾಗಿದೆ ✓",

    // Table
    c_name: "ಕೇಂದ್ರದ ಹೆಸರು",
    c_type: "ಪ್ರಕಾರ",
    c_score: "ಸಿದ್ಧತೆ ಸ್ಕೋರ್",
    c_status: "ಸ್ಥಿತಿ",
    c_stock: "ಕನಿಷ್ಠ ಸ್ಟಾಕ್",
    c_beds: "ಖಾಲಿ ಹಾಸಿಗೆ",
    c_doc: "ವೈದ್ಯರು",
    c_tests: "ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳು",
    c_action: "ಕ್ರಮ",
    inspect: "ನೋಡಿ",
    days_unit: "ದಿ",

    // Redistribution
    from_lbl: "ದಾನಿ ಕೇಂದ್ರ",
    to_lbl: "ಸ್ವೀಕರಿಸುವ ಕೇಂದ್ರ",
    qty_lbl: "ಪ್ರಮಾಣ",
    dist_lbl: "ದೂರ",
    cover_left_lbl: "ಉಳಿದ ಸ್ಟಾಕ್",
    redis_empty: "ಪ್ರಸ್ತುತ ಎಲ್ಲಾ ಕೇಂದ್ರಗಳಲ್ಲಿ ಸಾಕಷ್ಟು 14 ದಿನಗಳ ಔಷಧ ದಾಸ್ತಾನು ಇದೆ.",
    transfers_badge: "ವರ್ಗಾವಣೆ ಅಗತ್ಯವಿದೆ",

    // AI Copilot
    bot_greeting: "ನಮಸ್ಕಾರ ಆಡಳಿತಾಧಿಕಾರಿಗಳೇ. ನಾನು ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ ಜಿಲ್ಲೆಯ ಎಲ್ಲಾ 12 ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳನ್ನು ನೈಜ ಸಮಯದಲ್ಲಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತಿದ್ದೇನೆ. ಔಷಧ ಕೊರತೆ, ವೈದ್ಯರ ಕೊರತೆ, ಹಾಸಿಗೆಗಳು ಅಥವಾ ಮರುಹಂಚಿಕೆ ಬಗ್ಗೆ ಕೇಳಬಹುದು.",
    q1: "ಯಾವ ಕೇಂದ್ರಗಳಲ್ಲಿ ಔಷಧ ಖಾಲಿಯಾಗುವ ಅಪಾಯವಿದೆ?",
    q2: "ಎಲ್ಲಾ ಕೇಂದ್ರಗಳಲ್ಲಿ ವೈದ್ಯರ ಹಾಜರಾತಿ ತೋರಿಸಿ",
    q3: "ಯಾವ ಕೇಂದ್ರಗಳಲ್ಲಿ ಖಾಲಿ ಹಾಸಿಗೆಗಳಿಲ್ಲ?",
    q4: "ಔಷಧ ಮರುಹಂಚಿಕೆಯ ಸಾರಾಂಶ ನೀಡಿ",
    chat_ph: "ಔಷಧ, ಹಾಸಿಗೆ, ವೈದ್ಯರು, ವರ್ಗಾವಣೆ ಬಗ್ಗೆ ಕೇಳಿ…",
    send_lbl: "ಕಳುಹಿಸಿ",
    thinking: "ಡೇಟಾ ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ…",
    via_gemini: "ಜೆಮಿನಿ ಪ್ರೊ ಎಐ ಮೂಲಕ",
    via_rules: "ವಿಶ್ಲೇಷಣಾ ಇಂಜಿನ್ ಮೂಲಕ",

    // Toasts
    toast_token_req: "ಈ ಕ್ರಮಕ್ಕಾಗಿ ಆಡಳಿತ ಟೋಕನ್ ಅಗತ್ಯವಿದೆ.",
    toast_escalated: "ಪ್ರಕರಣವನ್ನು ಮುಖ್ಯ ವೈದ್ಯಾಧಿಕಾರಿಗಳಿಗೆ (CMO) ರವಾನಿಸಲಾಗಿದೆ ✓",
    toast_resolved: "ಪ್ರಕರಣವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪರಿಹರಿಸಲಾಗಿದೆ ✓",
    toast_refreshed: "ಟೆಲಿಮೆಟ್ರಿ ಡೇಟಾ ಯಶಸ್ವಿಯಾಗಿ ಸಿಂಕ್ ಆಗಿದೆ ✓",
    toast_lang_changed: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ",
  }
};

// ── 2. APPLICATION STATE ──────────────────────────────────────────
let currentLang = localStorage.getItem("smart_health_lang") || "en";
if (!T[currentLang]) currentLang = "en";

let snap = null;
let snapEsc = [];
let adminToken = "";
let countdownSeconds = 30;
let refreshIntervalTimer = null;
let countdownTimer = null;
let activeMapFilter = "all";
let selectedFacilityId = null;
let forecastDays = [];
let forecastDemand = [];
let tableSearchQuery = "";

const t = (k) => T[currentLang][k] ?? T.en[k] ?? k;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ── 3. DOM HELPERS (100% XSS SAFE - ZERO innerHTML) ───────────────
function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k.startsWith("on") && typeof v === "function") {
      el.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (v != null) {
      el.setAttribute(k, v);
    }
  }
  for (const child of children.flat()) {
    if (child != null) el.append(child);
  }
  return el;
}

function svg(tag, attrs = {}, ...children) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v != null) el.setAttribute(k, v);
  }
  for (const child of children.flat()) {
    if (child != null) el.append(child);
  }
  return el;
}

// ── 4. API ENGINE ─────────────────────────────────────────────────
async function apiCall(endpoint, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(adminToken ? { "X-Admin-Token": adminToken } : {}),
  };
  const res = await fetch(endpoint, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const errorMsg = typeof data.detail === "string" ? data.detail : "API Request Failed";
    throw new Error(errorMsg);
  }
  return data;
}

// ── 5. TOAST NOTIFICATION HUB ─────────────────────────────────────
function showToast(message, type = "ok") {
  const container = $("#toast-container");
  if (!container) return;

  const icons = { ok: "✅", err: "❌", warn: "⚠️" };
  const toastEl = h("div", { class: `toast-msg ${type}`, role: "alert" },
    h("span", { class: "toast-icon", "aria-hidden": "true" }, icons[type] || "ℹ️"),
    h("span", { class: "toast-body" }, message)
  );

  container.append(toastEl);
  setTimeout(() => {
    toastEl.classList.add("dismissing");
    setTimeout(() => toastEl.remove(), 250);
  }, 3800);
}

// ── 6. NUMBER FORMATTING ──────────────────────────────────────────
function formatNumber(num) {
  const locale = currentLang === "en" ? "en-IN" : currentLang + "-IN";
  return new Intl.NumberFormat(locale).format(num);
}

function animateNumber(element, targetVal, suffix = "") {
  if (!element) return;
  const startVal = parseInt(element.dataset.curr || "0", 10);
  const duration = 650;
  const startTime = performance.now();

  function updateStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.round(startVal + (targetVal - startVal) * easeProgress);
    element.textContent = formatNumber(currentVal) + suffix;
    element.dataset.curr = String(currentVal);

    if (progress < 1) {
      requestAnimationFrame(updateStep);
    } else {
      element.textContent = formatNumber(targetVal) + suffix;
      element.dataset.curr = String(targetVal);
    }
  }
  requestAnimationFrame(updateStep);
}

// ── 7. LANGUAGE SWITCHING ENGINE ──────────────────────────────────
function setLanguage(langCode) {
  if (!T[langCode]) langCode = "en";
  currentLang = langCode;
  localStorage.setItem("smart_health_lang", currentLang);
  document.documentElement.lang = currentLang;
  document.title = t("page_title");

  // Update segmented control buttons
  ["en", "hi", "kn"].forEach((code) => {
    const btn = $(`#lang-${code}`);
    if (btn) {
      const isActive = code === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  });

  // Translate all static texts
  applyTranslations();

  // Re-render dynamic sections with new language strings
  if (snap) {
    renderKPIs();
    renderMap();
    renderFlaggedCentres();
    renderMasterTable();
    renderRedistribution();
    renderEscalations();
    renderForecastSelects();
    loadForecastData();
  }

  showToast(t("toast_lang_changed"), "ok");
}

function applyTranslations() {
  const map = {
    "site-title": "site_title",
    "site-sub": "site_sub",
    "live-text": "live_telemetry",
    "lbl-token": "lbl_token",
    "lbl-refresh": "lbl_refresh",
    "lbl-status-sync": "status_sync",
    "lbl-refresh-in": "refresh_in",
    "tag-overview": "tag_overview",
    "lbl-kpi-heading": "lbl_kpi_heading",
    "lbl-centres-monitored": "centres_monitored",
    "lbl-map-card": "lbl_map_card",
    "filter-all": "filter_all",
    "filter-crit": "filter_crit",
    "filter-warn": "filter_warn",
    "filter-good": "filter_good",
    "leg-good": "leg_good",
    "leg-att": "leg_att",
    "leg-crit": "leg_crit",
    "leg-chc": "leg_chc",
    "leg-phc": "leg_phc",
    "lbl-flagged": "lbl_flagged",
    "flagged-sub-banner": "flagged_sub",
    "lbl-forecast": "lbl_forecast",
    "lbl-centre": "lbl_centre",
    "lbl-medicine": "lbl_medicine",
    "lbl-redis": "lbl_redis",
    "redis-sub-banner": "redis_sub",
    "lbl-centres-sec": "lbl_centres_sec",
    "lbl-esc": "lbl_esc",
    "esc-sub-banner": "esc_sub",
    "lbl-ask": "lbl_ask",
    "lbl-ask-sr": "lbl_ask_sr",
    "lbl-quick-prompts": "quick_prompts_lbl",
    "hud-lbl-doc": "hud_doc",
    "hud-lbl-beds": "hud_beds",
    "hud-lbl-stock": "hud_stock",
    "hud-btn-forecast": "hud_btn_forecast",
    "hud-btn-escalate": "hud_btn_escalate",
  };

  for (const [id, key] of Object.entries(map)) {
    const el = $(`#${id}`);
    if (el) el.textContent = t(key);
  }

  const searchInput = $("#table-search");
  if (searchInput) searchInput.placeholder = t("search_placeholder");

  const queryInput = $("#q");
  if (queryInput) queryInput.placeholder = t("chat_ph");

  // Re-translate quick query prompt chips
  const promptButtons = $$(".chip-query");
  if (promptButtons.length >= 4) {
    promptButtons[0].textContent = "🚨 " + t("q1").split(" ")[0] + " " + t("k_stock");
    promptButtons[0].dataset.q = t("q1");
    promptButtons[1].textContent = "👨‍⚕️ " + t("hud_doc");
    promptButtons[1].dataset.q = t("q2");
    promptButtons[2].textContent = "🛏️ " + t("hud_beds");
    promptButtons[2].dataset.q = t("q3");
    promptButtons[3].textContent = "🔄 " + t("transfers_badge");
    promptButtons[3].dataset.q = t("q4");
  }
}

// ── 8. HERO KPIS RENDERER ─────────────────────────────────────────
function renderKPIs() {
  if (!snap || !snap.kpis) return;
  const k = snap.kpis;

  const cardsData = [
    {
      key: "k_stock",
      val: k.stockout_alerts,
      icon: "⚠️",
      cls: k.stockout_alerts > 0 ? "bad" : "good",
      trend: k.stockout_alerts > 0 ? t("trend_crit") : t("trend_stable"),
    },
    {
      key: "k_foot",
      val: k.footfall,
      icon: "👥",
      cls: "neu",
      trend: t("trend_live"),
    },
    {
      key: "k_beds",
      val: k.beds_unavailable,
      icon: "🛏️",
      cls: k.beds_unavailable > 0 ? "bad" : "good",
      trend: k.beds_unavailable > 0 ? t("trend_crit") : t("trend_stable"),
    },
    {
      key: "k_doc",
      val: Math.round(k.doctor_attendance),
      icon: "👨‍⚕️",
      cls: k.doctor_attendance < 75 ? "warn" : "good",
      trend: `${Math.round(k.doctor_attendance)}%`,
      suffix: "%",
    },
    {
      key: "k_tests",
      val: k.tests_shortage,
      icon: "🧪",
      cls: k.tests_shortage > 0 ? "warn" : "good",
      trend: k.tests_shortage > 0 ? t("trend_crit") : t("trend_stable"),
    },
  ];

  const grid = $("#kpis");
  if (!grid) return;

  const existingCards = grid.children;
  if (existingCards.length === cardsData.length) {
    cardsData.forEach(({ key, val, cls, trend, suffix = "" }, i) => {
      const card = existingCards[i];
      card.className = `kpi-card ${cls}`;
      const valEl = card.querySelector(".kpi-val");
      const lblEl = card.querySelector(".kpi-label");
      const trendEl = card.querySelector(".kpi-trend-tag");
      if (lblEl) lblEl.textContent = t(key);
      if (trendEl) trendEl.textContent = trend;
      if (valEl) animateNumber(valEl, val, suffix);
    });
    return;
  }

  grid.replaceChildren(
    ...cardsData.map(({ key, val, icon, cls, trend, suffix = "" }) => {
      const valEl = h("span", { class: "kpi-val", "data-curr": "0" }, "0" + suffix);
      const card = h("div", { class: `kpi-card ${cls}`, role: "figure", "aria-label": t(key) },
        h("div", { class: "kpi-top" },
          h("div", { class: "kpi-icon-wrap", "aria-hidden": "true" }, icon),
          h("span", { class: "kpi-trend-tag" }, trend)
        ),
        valEl,
        h("div", { class: "kpi-label" }, t(key)),
        h("div", { class: "kpi-accent-bar" })
      );
      setTimeout(() => animateNumber(valEl, val, suffix), 50);
      return card;
    })
  );

  // Update Status Incident Ticker
  const critCount = snap.centres.filter((c) => c.status === "critical").length;
  const attCount = snap.centres.filter((c) => c.status === "attention").length;
  const incidentEl = $("#incident-text");
  if (incidentEl) {
    if (critCount > 0 || attCount > 0) {
      incidentEl.textContent = t("incident_active").replace("{crit}", String(critCount)).replace("{att}", String(attCount));
    } else {
      incidentEl.textContent = t("incident_optimal");
    }
  }
}

// ── 9. TACTICAL GIS MAP RENDERER ──────────────────────────────────
function renderMap() {
  if (!snap || !snap.centres) return;
  const container = $("#map");
  if (!container) return;

  const centres = snap.centres;
  const W = 560;
  const H = 380;

  // Geographic bounds of Bengaluru Rural facilities
  // Lat: 13.02 to 13.30, Lon: 77.39 to 77.80
  const minLat = 13.00, maxLat = 13.33;
  const minLon = 77.37, maxLon = 77.83;

  const padX = 42;
  const padY = 32;

  const projX = (lon) => padX + ((lon - minLon) / (maxLon - minLon)) * (W - padX * 2);
  const projY = (lat) => H - padY - ((lat - minLat) / (maxLat - minLat)) * (H - padY * 2);

  // 1. Background Grid & Coordinates
  const bgElements = [
    svg("rect", { x: 0, y: 0, width: W, height: H, fill: "#040810", rx: 12 }),
  ];

  // Coordinate lines
  for (let lat = 13.05; lat <= 13.30; lat += 0.08) {
    const y = projY(lat);
    bgElements.push(
      svg("line", { x1: padX - 10, y1: y, x2: W - padX + 10, y2: y, class: "map-bg-grid" }),
      svg("text", { x: 8, y: y + 3, class: "map-coord-label" }, `${lat.toFixed(2)}°N`)
    );
  }
  for (let lon = 77.40; lon <= 77.80; lon += 0.10) {
    const x = projX(lon);
    bgElements.push(
      svg("line", { x1: x, y1: padY - 10, x2: x, y2: H - padY + 10, class: "map-bg-grid" }),
      svg("text", { x: x - 12, y: H - 10, class: "map-coord-label" }, `${lon.toFixed(2)}°E`)
    );
  }

  // 2. Stylized District Boundary Polygon
  const boundaryPoints = [
    [77.40, 13.31], [77.56, 13.32], [77.74, 13.28], [77.82, 13.14],
    [77.81, 13.05], [77.65, 13.01], [77.52, 13.00], [77.38, 13.08],
    [77.38, 13.26]
  ].map(([lo, la]) => `${projX(lo).toFixed(1)},${projY(la).toFixed(1)}`).join(" ");

  bgElements.push(
    svg("polygon", { points: boundaryPoints, class: "map-district-boundary" }),
    svg("text", { x: W / 2 - 75, y: 38, fill: "rgba(59,130,246,0.18)", "font-size": "10", "font-weight": "800", "letter-spacing": "2px" }, "BENGALURU RURAL SECTOR 4")
  );

  // 3. Highway & Supply Route Corridors
  const highways = [
    // NH-44 Corridor: Karanpur -> Hosahalli -> Channarayapatna -> Devanahalli
    [[77.55, 13.02], [77.62, 13.06], [77.64, 13.18], [77.71, 13.25]],
    // SH-9: Nelamangala -> Rampur -> Hesaraghatta -> Doddaballapur -> Tubagere
    [[77.39, 13.10], [77.48, 13.10], [77.46, 13.14], [77.54, 13.30], [77.42, 13.28]],
    // East Arterial: Devanahalli -> Sulibele -> Vijayapura
    [[77.71, 13.25], [77.78, 13.15], [77.80, 13.08]],
    // Cross-link: Kundana -> Channarayapatna
    [[77.60, 13.20], [77.64, 13.18]],
  ];

  highways.forEach((route) => {
    const d = route.map(([lo, la], idx) => `${idx === 0 ? "M" : "L"} ${projX(lo).toFixed(1)} ${projY(la).toFixed(1)}`).join(" ");
    bgElements.push(svg("path", { d, class: "map-highway", fill: "none" }));
  });

  // 4. Custom Label Placement Offsets to guarantee ZERO OVERLAP
  const labelOffsets = {
    "PHC Doddaballapur": { dx: 0, dy: -14, anchor: "middle" },
    "PHC Tubagere": { dx: -15, dy: 3, anchor: "end" },
    "PHC Devanahalli": { dx: 15, dy: 4, anchor: "start" },
    "PHC Kundana": { dx: -14, dy: -8, anchor: "end" },
    "PHC Channarayapatna": { dx: 15, dy: 14, anchor: "start" },
    "CHC Sulibele": { dx: 16, dy: 3, anchor: "start" },
    "PHC Hesaraghatta": { dx: -15, dy: -6, anchor: "end" },
    "PHC Nelamangala": { dx: -15, dy: 3, anchor: "end" },
    "PHC Rampur": { dx: 16, dy: 4, anchor: "start" },
    "PHC Vijayapura": { dx: -14, dy: 14, anchor: "end" },
    "PHC Hosahalli": { dx: 0, dy: 18, anchor: "middle" },
    "CHC Karanpur": { dx: 0, dy: 18, anchor: "middle" },
  };

  // 5. Facility Marker Nodes
  const nodes = centres.map((c) => {
    const cx = projX(c.lon);
    const cy = projY(c.lat);
    const isCHC = c.type === "CHC";
    const status = c.status; // 'good' | 'attention' | 'critical'
    const isSelected = selectedFacilityId === c.id;
    const isDimmed = activeMapFilter !== "all" && status !== activeMapFilter;

    const group = svg("g", {
      class: `map-node ${isDimmed ? "dimmed" : ""} ${isSelected ? "selected" : ""}`,
      "data-id": String(c.id),
      "data-status": status,
      role: "button",
      tabindex: "0",
      "aria-label": `${c.name} (${c.type}): ${t(status)}`,
    });

    // Radar pulse wave for Critical or Attention nodes
    if (status === "critical") {
      group.append(
        svg("circle", { cx, cy, r: 8, class: "radar-pulse-crit" }),
        svg("circle", { cx, cy, r: 16, class: "radar-pulse-crit", style: "animation-delay: 1s;" })
      );
    } else if (status === "attention") {
      group.append(svg("circle", { cx, cy, r: 8, class: "radar-pulse-warn" }));
    }

    // Node Marker Geometry
    if (isCHC) {
      // Hexagonal tactical crest for CHC
      const r = 11;
      const hexPts = [0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return `${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`;
      }).join(" ");

      group.append(
        svg("polygon", { points: hexPts, class: `node-${status}`, stroke: "#fff", "stroke-width": isSelected ? "2.5" : "1" }),
        // Medical cross
        svg("line", { x1: cx - 4, y1: cy, x2: cx + 4, y2: cy, stroke: "#fff", "stroke-width": "2" }),
        svg("line", { x1: cx, y1: cy - 4, x2: cx, y2: cy + 4, stroke: "#fff", "stroke-width": "2" })
      );
    } else {
      // Circular radar beacon for PHC
      group.append(
        svg("circle", { cx, cy, r: 8, class: `node-${status}`, stroke: "#fff", "stroke-width": isSelected ? "2.5" : "1" }),
        svg("circle", { cx, cy, r: 2.5, fill: "#fff" })
      );
    }

    // Label Badge
    const cfg = labelOffsets[c.name] || { dx: 14, dy: 4, anchor: "start" };
    const lx = cx + cfg.dx;
    const ly = cy + cfg.dy;

    const shortName = c.name.replace(/^(PHC|CHC) /, "");
    const textLen = shortName.length * 6 + 12;
    const rectX = cfg.anchor === "end" ? lx - textLen : cfg.anchor === "middle" ? lx - textLen / 2 : lx - 2;

    group.append(
      svg("rect", { x: rectX, y: ly - 8, width: textLen, height: 13, class: "map-label-bg" }),
      svg("text", { x: lx, y: ly + 2, "text-anchor": cfg.anchor, class: "map-label-text" }, shortName)
    );

    // Click handler to activate Telemetry HUD
    group.addEventListener("click", () => selectFacility(c));
    group.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectFacility(c);
      }
    });

    return group;
  });

  const fullSvg = svg("svg", {
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": t("lbl_map_card"),
  }, ...bgElements, ...nodes);

  container.replaceChildren(fullSvg);

  // If a facility is already selected, update HUD
  if (selectedFacilityId) {
    const activeFacility = centres.find((c) => c.id === selectedFacilityId);
    if (activeFacility) selectFacility(activeFacility, false);
  } else {
    // Default select highest priority facility (e.g. Rampur)
    const priority = centres.find((c) => c.status === "critical") || centres[0];
    if (priority) selectFacility(priority, false);
  }
}

// ── 10. TELEMETRY HUD INSPECTOR ───────────────────────────────────
function selectFacility(c, updateMap = true) {
  selectedFacilityId = c.id;

  const hudTag = $("#hud-type");
  const hudName = $("#hud-name");
  const hudScore = $("#hud-score");
  const hudDoc = $("#hud-doc");
  const hudBeds = $("#hud-beds");
  const hudStock = $("#hud-stock");
  const btnForecast = $("#hud-btn-forecast");
  const btnEscalate = $("#hud-btn-escalate");

  if (hudTag) hudTag.textContent = c.type;
  if (hudName) hudName.textContent = c.name;
  if (hudScore) {
    hudScore.textContent = `Score: ${c.score}/100`;
    hudScore.style.color = c.score >= 75 ? "var(--good)" : c.score >= 50 ? "var(--warn)" : "var(--bad)";
  }
  if (hudDoc) hudDoc.textContent = `${c.doc_present} / ${c.doc_sched} scheduled`;
  if (hudBeds) hudBeds.textContent = `${c.beds_free} / ${c.beds_total} free`;
  if (hudStock) {
    hudStock.textContent = `${c.min_days} ${t("days_unit")} left`;
    hudStock.style.color = c.min_days <= 3 ? "var(--bad)" : c.min_days <= 7 ? "var(--warn)" : "var(--good)";
  }

  // Wire action buttons
  if (btnForecast) {
    btnForecast.onclick = () => {
      const selectC = $("#fc-c");
      if (selectC) {
        selectC.value = String(c.id);
        loadForecastData();
        $("#fc-c").scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
  }

  if (btnEscalate) {
    btnEscalate.onclick = () => triggerEscalate(c);
  }

  if (updateMap) {
    // Update SVG selection highlight
    $$(".map-node").forEach((node) => {
      node.classList.toggle("selected", node.dataset.id === String(c.id));
    });
  }
}

// ── 11. FLAGGED CENTRES (CRISIS INTERVENTION FEED) ────────────────
function renderFlaggedCentres() {
  if (!snap || !snap.centres) return;
  const list = $("#flagged");
  const countEl = $("#flagged-count");
  if (!list) return;

  const flagged = snap.centres.filter((c) => c.reasons && c.reasons.length > 0)
                              .sort((a, b) => a.score - b.score);

  if (countEl) countEl.textContent = `${flagged.length} Active`;

  if (!flagged.length) {
    list.replaceChildren(
      h("li", { class: "flagged-item good" },
        h("div", { class: "flagged-info" },
          h("div", { class: "flagged-name" }, "✅ " + t("incident_optimal"))
        )
      )
    );
    return;
  }

  const openIds = new Set(snapEsc.filter((e) => e.status === "open").map((e) => e.centre_id));

  list.replaceChildren(
    ...flagged.map((c) => {
      const isOpen = openIds.has(c.id);
      const isCritical = c.status === "critical";

      const tags = c.reasons.map((r) => {
        const clsMap = { stock_out: "risk-stock", low_doctors: "risk-staff", no_beds: "risk-beds", tests: "risk-tests" };
        return h("span", { class: `reason-tag ${clsMap[r] || ""}` }, t("r_" + r));
      });

      const actionBtn = h("button", {
        type: "button",
        class: `flagged-action-btn ${isOpen ? "is-open" : "escalate"}`,
        onclick: isOpen ? null : () => triggerEscalate(c),
      }, isOpen ? t("escalated_btn") : t("escalate_btn"));

      return h("li", { class: `flagged-item ${isCritical ? "critical" : "attention"}` },
        h("div", { class: "flagged-info" },
          h("div", { class: "flagged-top-row" },
            h("span", { class: "flagged-name" }, c.name),
            h("span", { class: `status-pill ${c.status}` }, t(c.status))
          ),
          h("div", { class: "flagged-reasons" }, ...tags)
        ),
        actionBtn
      );
    })
  );
}

// ── 12. DEMAND FORECAST & CANVAS CHART ─────────────────────────────
function renderForecastSelects() {
  if (!snap || !snap.centres) return;
  const sc = $("#fc-c");
  const sm = $("#fc-m");
  if (!sc || !sm) return;

  const currentC = sc.value;
  const currentM = sm.value;

  sc.replaceChildren(...snap.centres.map((c) => h("option", { value: String(c.id) }, c.name)));
  if (snap.centres[0] && snap.centres[0].meds) {
    sm.replaceChildren(...snap.centres[0].meds.map((m) => h("option", { value: m.med }, m.med)));
  }

  if (currentC) sc.value = currentC;
  if (currentM) sm.value = currentM;
}

async function loadForecastData() {
  const sc = $("#fc-c");
  const sm = $("#fc-m");
  if (!sc || !sm) return;
  const centreId = sc.value || "1";
  const med = sm.value || "Paracetamol 500mg";

  try {
    const res = await apiCall(`/api/forecast?centre_id=${encodeURIComponent(centreId)}&med=${encodeURIComponent(med)}`);
    forecastDays = res.days;
    forecastDemand = res.demand;
    drawForecastCanvas();
    renderForecastTable();
  } catch {
    // Graceful fallback
  }
}

function drawForecastCanvas() {
  const canvas = $("#forecast-canvas");
  if (!canvas || !forecastDemand.length) return;

  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || 500;
  const H = 220;

  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const pad = { top: 25, right: 25, bottom: 35, left: 45 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  const maxVal = Math.max(...forecastDemand, 10);
  const minVal = 0;

  const getX = (idx) => pad.left + (idx / (forecastDemand.length - 1)) * plotW;
  const getY = (val) => pad.top + plotH - ((val - minVal) / (maxVal - minVal)) * plotH;

  // Clear & background
  ctx.clearRect(0, 0, W, H);

  // Horizontal Gridlines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 1;
  ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
  ctx.font = "10px -apple-system, sans-serif";

  for (let step = 0; step <= 4; step++) {
    const val = minVal + (step / 4) * (maxVal - minVal);
    const y = getY(val);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(W - pad.right, y);
    ctx.stroke();
    ctx.fillText(String(Math.round(val)), 10, y + 3);
  }

  // Gradient area fill
  const gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + plotH);
  gradient.addColorStop(0, "rgba(59, 130, 246, 0.35)");
  gradient.addColorStop(1, "rgba(59, 130, 246, 0.0)");

  ctx.beginPath();
  forecastDemand.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(getX(forecastDemand.length - 1), pad.top + plotH);
  ctx.lineTo(getX(0), pad.top + plotH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Smooth Curve Stroke
  ctx.beginPath();
  forecastDemand.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Point beacons
  forecastDemand.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.strokeStyle = "#1d4ed8";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Day labels along bottom
    if (i % 2 === 0 || i === forecastDemand.length - 1) {
      ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
      ctx.fillText(`D${forecastDays[i]}`, x - 8, H - 12);
    }
  });
}

function renderForecastTable() {
  const container = $("#fc-table");
  if (!container || !forecastDemand.length) return;

  const rows = forecastDays.map((d, i) => {
    return h("tr", {},
      h("td", {}, `${t("lbl_centre")} ${t("days_unit")} ${d}`),
      h("td", { style: "font-family:var(--font-mono);font-weight:700;color:var(--cyan)" }, String(Math.round(forecastDemand[i])))
    );
  });

  container.replaceChildren(
    h("table", { class: "redis-table" },
      h("thead", {},
        h("tr", {},
          h("th", {}, "Projection Horizon"),
          h("th", {}, "Estimated Demand (units)")
        )
      ),
      h("tbody", {}, ...rows)
    )
  );
}

// ── 13. SUPPLY CHAIN REDISTRIBUTION MATRIX ─────────────────────────
function renderRedistribution() {
  if (!snap) return;
  const container = $("#redis");
  const countEl = $("#redis-count");
  if (!container) return;

  const transfers = snap.redistribution || [];

  if (countEl) {
    countEl.textContent = transfers.length ? `${transfers.length} ${t("transfers_badge")}` : t("redis_empty");
  }

  if (!transfers.length) {
    container.replaceChildren(
      h("div", { style: "padding: 30px; text-align: center; color: var(--text-dim);" },
        h("div", { style: "font-size: 32px; margin-bottom: 8px;" }, "✅"),
        h("p", {}, t("redis_empty"))
      )
    );
    return;
  }

  const table = h("table", { class: "redis-table" },
    h("thead", {},
      h("tr", {},
        h("th", {}, t("lbl_medicine")),
        h("th", {}, t("from_lbl")),
        h("th", { "aria-hidden": "true" }, ""),
        h("th", {}, t("to_lbl")),
        h("th", {}, t("qty_lbl")),
        h("th", {}, t("dist_lbl")),
        h("th", {}, t("cover_left_lbl"))
      )
    ),
    h("tbody", {},
      ...transfers.map((x) => {
        const isUrgent = x.days_left <= 3;
        const isModerate = x.days_left <= 7;
        const urgencyClass = isUrgent ? "urgent" : isModerate ? "moderate" : "";

        return h("tr", {},
          h("td", { style: "font-weight:700" }, x.med),
          h("td", { class: "transfer-from" }, x.from),
          h("td", { class: "transfer-arrow" }, "➔"),
          h("td", { class: "transfer-to" }, x.to),
          h("td", {}, h("span", { class: "transfer-qty-pill" }, `+${x.qty}`)),
          h("td", { style: "font-family:var(--font-mono);font-size:11.5px;color:var(--text-muted)" }, `${x.km} km`),
          h("td", {}, h("span", { class: `urgency-badge ${urgencyClass}` }, `${x.days_left} ${t("days_unit")}`))
        );
      })
    )
  );

  container.replaceChildren(table);
}

// ── 14. MASTER HEALTH CENTRES REGISTRY ─────────────────────────────
function renderMasterTable() {
  if (!snap || !snap.centres) return;
  const table = $("#ctable");
  if (!table) return;

  let centres = snap.centres;
  if (tableSearchQuery) {
    const q = tableSearchQuery.toLowerCase();
    centres = centres.filter((c) => c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q));
  }

  const cols = [
    { key: "c_name", label: t("c_name"), render: (c) => h("span", { style: "font-weight:700" }, c.name) },
    { key: "c_type", label: t("c_type"), render: (c) => h("span", { style: `font-size:11px;font-weight:800;color:${c.type==="CHC"?"var(--pri)":"var(--cyan)"}` }, c.type) },
    {
      key: "c_score",
      label: t("c_score"),
      render: (c) => {
        const color = c.score >= 75 ? "var(--good)" : c.score >= 50 ? "var(--warn)" : "var(--bad)";
        return h("div", { class: "score-cell" },
          h("span", { class: "score-num", style: `color:${color}` }, String(c.score)),
          h("div", { class: "score-track" },
            h("div", { class: "score-progress", style: `width:${c.score}%;background:${color}` })
          )
        );
      }
    },
    { key: "c_status", label: t("c_status"), render: (c) => h("span", { class: `status-pill ${c.status}` }, t(c.status)) },
    {
      key: "c_stock",
      label: t("c_stock"),
      render: (c) => {
        const color = c.min_days <= 3 ? "var(--bad)" : c.min_days <= 7 ? "var(--warn)" : "var(--good)";
        return h("span", { style: `font-family:var(--font-mono);font-weight:700;color:${color}` }, `${c.min_days} ${t("days_unit")}`);
      }
    },
    {
      key: "c_beds",
      label: t("c_beds"),
      render: (c) => h("span", { style: c.beds_free === 0 ? "color:var(--bad);font-weight:700" : "" }, `${c.beds_free} / ${c.beds_total}`)
    },
    {
      key: "c_doc",
      label: t("c_doc"),
      render: (c) => {
        const ratio = c.doc_present / Math.max(1, c.doc_sched);
        return h("span", { style: ratio < 0.6 ? "color:var(--warn);font-weight:700" : "" }, `${c.doc_present} / ${c.doc_sched}`);
      }
    },
    {
      key: "c_tests",
      label: t("c_tests"),
      render: (c) => h("span", { style: c.tests_avail < c.tests_total ? "color:var(--warn)" : "" }, `${c.tests_avail} / ${c.tests_total}`)
    },
    {
      key: "c_action",
      label: t("c_action"),
      render: (c) => h("button", {
        type: "button",
        class: "hud-btn primary",
        onclick: () => {
          selectFacility(c);
          $("#map").scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, t("inspect"))
    }
  ];

  const thead = h("thead", {},
    h("tr", {}, ...cols.map((col) => h("th", { scope: "col" }, col.label)))
  );

  const tbody = h("tbody", {},
    ...centres.map((c) =>
      h("tr", {}, ...cols.map((col) => h("td", {}, col.render(c))))
    )
  );

  table.replaceChildren(thead, tbody);
}

// ── 15. ADMINISTRATIVE ESCALATIONS & AUDIT ────────────────────────
async function loadEscalations() {
  try {
    snapEsc = await apiCall("/api/escalations");
    renderEscalations();
    renderFlaggedCentres();
  } catch {
    // Ignore fetch error
  }
}

function renderEscalations() {
  const container = $("#esc");
  const countEl = $("#esc-open-count");
  if (!container) return;

  const openTickets = snapEsc.filter((e) => e.status === "open");
  if (countEl) countEl.textContent = `${openTickets.length} Open`;

  if (!snapEsc.length) {
    container.replaceChildren(
      h("li", { style: "padding: 24px; text-align: center; color: var(--text-dim);" }, "No escalation tickets found.")
    );
    return;
  }

  container.replaceChildren(
    ...snapEsc.map((e) => {
      const isOpen = e.status === "open";
      const reasons = e.reason ? e.reason.split(",").map((r) => t("r_" + r)).join(" · ") : "General";

      const resolveBtn = isOpen ? h("button", {
        type: "button",
        class: "hud-btn primary",
        onclick: () => triggerResolve(e.id),
      }, `✓ ${t("resolve_btn")}`) : h("span", { class: "status-pill good" }, t("resolved_btn"));

      return h("li", { class: "esc-item" },
        h("div", { class: "esc-details" },
          h("div", { class: "esc-centre" }, e.centre),
          h("div", { class: "esc-reason-text" }, reasons),
          h("div", { class: "esc-timestamp" }, `${e.created} • ` + (e.source === "auto" ? "AUTO ENGINE" : "MANUAL"))
        ),
        h("span", { class: `esc-source-tag ${e.source}` }, e.source),
        resolveBtn
      );
    })
  );
}

// ── 16. ADMIN ACTIONS ─────────────────────────────────────────────
async function triggerEscalate(facility) {
  if (!adminToken) {
    showToast(t("toast_token_req"), "warn");
    $("#tok").focus();
    return;
  }
  try {
    const reasons = facility.reasons ? facility.reasons.join(",") : "manual";
    await apiCall("/api/escalate", {
      method: "POST",
      body: JSON.stringify({ centre_id: facility.id, reason: reasons, note: "Escalated from Command Center" }),
    });
    showToast(t("toast_escalated"), "ok");
    await loadEscalations();
    renderFlaggedCentres();
  } catch (err) {
    showToast(err.message, "err");
  }
}

async function triggerResolve(ticketId) {
  if (!adminToken) {
    showToast(t("toast_token_req"), "warn");
    $("#tok").focus();
    return;
  }
  try {
    await apiCall(`/api/escalations/${ticketId}/resolve`, { method: "POST" });
    showToast(t("toast_resolved"), "ok");
    await loadEscalations();
    renderFlaggedCentres();
  } catch (err) {
    showToast(err.message, "err");
  }
}

// ── 17. MULTILINGUAL AI CLINICAL COPILOT (THE BOT) ────────────────
function initAssistant() {
  const chat = $("#chat");
  if (!chat || chat.children.length > 0) return;

  // Proactive Bot Welcome Message
  appendChatMessage(t("bot_greeting"), "bot", "engine");
}

function appendChatMessage(text, role, source) {
  const chat = $("#chat");
  if (!chat) return;

  const isUser = role === "user";
  const avatarText = isUser ? "U" : "AI";

  const bubble = h("div", { class: "msg-content-bubble" }, text);
  if (source && !isUser) {
    bubble.append(
      h("div", { class: "msg-source-tag" }, source === "gemini" ? t("via_gemini") : t("via_rules"))
    );
  }

  const msg = h("div", { class: `chat-msg ${role}` },
    h("div", { class: "msg-avatar", "aria-hidden": "true" }, avatarText),
    bubble
  );

  chat.append(msg);
  chat.scrollTop = chat.scrollHeight;
  return msg;
}

function showTypingIndicator() {
  const chat = $("#chat");
  if (!chat) return;

  const indicator = h("div", { class: "chat-msg bot", id: "typing-box" },
    h("div", { class: "msg-avatar", "aria-hidden": "true" }, "AI"),
    h("div", { class: "msg-content-bubble" },
      h("div", { class: "typing-dots" },
        h("span", { class: "typing-dot" }),
        h("span", { class: "typing-dot" }),
        h("span", { class: "typing-dot" })
      )
    )
  );
  chat.append(indicator);
  chat.scrollTop = chat.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = $("#typing-box");
  if (indicator) indicator.remove();
}

async function handleAssistantQuery(queryText) {
  const q = queryText.trim();
  if (!q) return;

  appendChatMessage(q, "user");
  const input = $("#q");
  if (input) input.value = "";

  showTypingIndicator();

  try {
    const res = await apiCall("/api/assistant", {
      method: "POST",
      body: JSON.stringify({ q, lang: currentLang }),
    });
    removeTypingIndicator();

    const badge = $("#ai-badge");
    if (badge) {
      badge.textContent = res.source === "gemini" ? "GEMINI 1.5 PRO" : "ALGORITHMIC RULES";
    }

    appendChatMessage(res.answer, "bot", res.source);
  } catch (err) {
    removeTypingIndicator();
    appendChatMessage(`⚠️ ${err.message}`, "bot");
  }
}

// ── 18. MAIN DATA SYNCHRONIZATION ─────────────────────────────────
async function synchronizeTelemetry() {
  const pulse = $("#system-pulse");
  const refreshSvg = $(".refresh-svg");
  if (pulse) pulse.className = "status-indicator-dot loading";
  if (refreshSvg) refreshSvg.classList.add("spinning");

  try {
    snap = await apiCall("/api/analytics");
    await loadEscalations();

    renderKPIs();
    renderMap();
    renderFlaggedCentres();
    renderForecastSelects();
    await loadForecastData();
    renderRedistribution();
    renderMasterTable();

    const now = new Date().toLocaleTimeString(currentLang === "en" ? "en-IN" : currentLang);
    const statusText = $("#status-text");
    if (statusText) statusText.textContent = `${t("status_connected")} (${now})`;
    if (pulse) pulse.className = "status-indicator-dot";

    resetCountdown();
  } catch (err) {
    if (pulse) pulse.className = "status-indicator-dot error";
    const statusText = $("#status-text");
    if (statusText) statusText.textContent = `${t("status_error")} (${err.message})`;
    showToast(t("status_error"), "err");
  } finally {
    if (refreshSvg) refreshSvg.classList.remove("spinning");
  }
}

function resetCountdown() {
  countdownSeconds = 30;
  const badge = $("#countdown");
  if (badge) badge.textContent = `${countdownSeconds}s`;
}

function startAutoRefreshLoop() {
  if (countdownTimer) clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    countdownSeconds--;
    if (countdownSeconds <= 0) {
      synchronizeTelemetry();
    } else {
      const badge = $("#countdown");
      if (badge) badge.textContent = `${countdownSeconds}s`;
    }
  }, 1000);
}

// ── 19. EVENT WIRING & INITIALIZATION (DOM CONTENT LOADED) ─────────
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Buttons (No inline onclick - Clean Event Listeners)
  ["en", "hi", "kn"].forEach((code) => {
    const btn = $(`#lang-${code}`);
    if (btn) {
      btn.addEventListener("click", () => setLanguage(code));
    }
  });

  // 2. Admin Token Input
  const tokInput = $("#tok");
  if (tokInput) {
    tokInput.addEventListener("input", (e) => {
      adminToken = e.target.value.trim();
    });
  }

  // 3. Refresh Action Button
  const refreshBtn = $("#refresh-btn");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      showToast(t("toast_refreshed"), "ok");
      synchronizeTelemetry();
    });
  }

  // 4. Map Filter Pills
  $$(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      $$(".filter-chip").forEach((b) => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      activeMapFilter = e.currentTarget.dataset.filter || "all";
      renderMap();
    });
  });

  // 5. Forecast Selects
  const fcC = $("#fc-c");
  const fcM = $("#fc-m");
  if (fcC) fcC.addEventListener("change", loadForecastData);
  if (fcM) fcM.addEventListener("change", loadForecastData);

  // 6. Master Table Search Filter
  const tableSearch = $("#table-search");
  if (tableSearch) {
    tableSearch.addEventListener("input", (e) => {
      tableSearchQuery = e.target.value.trim();
      renderMasterTable();
    });
  }

  // 7. Chat Form Submission
  const askForm = $("#askf");
  if (askForm) {
    askForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $("#q");
      if (input) handleAssistantQuery(input.value);
    });
  }

  // 8. Quick Query Prompt Chips
  $$(".chip-query").forEach((chip) => {
    chip.addEventListener("click", () => {
      const query = chip.dataset.q;
      if (query) handleAssistantQuery(query);
    });
  });

  // 9. Window Resize handler for canvas
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawForecastCanvas();
    }, 150);
  });

  // 10. Initial Language Setup
  setLanguage(currentLang);

  // 11. Initial AI Copilot Welcome Message
  initAssistant();

  // 12. Kick off Telemetry Sync and Auto-refresh timer
  synchronizeTelemetry();
  startAutoRefreshLoop();
});
