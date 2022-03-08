professors = {
    "Cj_lin": ["林智仁", "Chih-Jen Lin", "Machine Learning Lab"],
    "Sd_lin": ["林守德", "Shou-De Lin", "Machine Discovery and Social Network Mining Lab"],
    "St_chen": ["陳尚澤", "Shang-Tse Chen", "Machine Learning and Security"],
    "Cs_fuh": ["傅楸善", "Chiou-Shann Fuh", "Digital Camera and Computer Vision Lab"],
    "Sh_hung": ["洪士灝", "Shih-Hao Hung", "Performance, Application and Security Lab"],
    "Cs_shih": ["施吉昇", "Chi-Sheng Shih", "Logic Laboratory, Embedded System and Wireless Networking Lab"],
    "Cw_lin": ["林忠緯", "Chung-Wei Lin", "Cyber-Physical Systems Lab"],
    "Pf_liu": ["劉邦鋒", "Pangfeng Liu", "Parallel and Distributed Processing Lab"],
    "Tony_tan": ["陳偉松", "Tony Tan", "Logic and database lab"],
    "J_hsiang": ["項潔", "Jieh Hsiang", "Automated Reasoning Laboratory"],
    "Tw_kuo": ["郭大維", "Tei-Wei Kuo", "Embedded System and Wireless Networking Lab"],
    "Ac_pang": ["逄愛君", "Ai-Chun Pang", "Embedded System and Wireless Networking Lab"],
    "Ht_lin": ["林軒田", "Hsuan-Tien Lin", "Computational Learning Lab"],
    "Yn_chen": ["陳縕儂", "Yun-Nung Chen", "Machine Intelligence and Understanding"],
    "Yp_hung": ["洪一平", "Yi-Ping Hung", "Image and Vision Lab"],
    "Yh_li": ["李彥寰", "Yen-Huan Li", "Laboratory for Learning Theory and Optimization Methods"],
    "Cs_chen": ["陳祝嵩", "Chu-Song Chen", "AI Application and Integration (AI^2) Lab"],
    "Hh_chen": ["陳信希", "Hsin-Hsi Chen", "Natural Language Processing Lab"],
    "Cl_yang": ["楊佳玲", "Chia-Lin Yang", "Embedded Computing Lab"],
    "Cw_hsueh": ["薛智文", "Chih-Wen Hsueh", "Embedded System and Wireless Networking Lab"],
    "Yy_chuang": ["莊永裕", "Yung-Yu Chuang", "Communication and Multimedia Lab"],
    "Lp_cheng": ["鄭龍磻", "Lung-Pan Cheng", "Human Computer Interaction Lab"],
    "P_lin": ["林風", "Phone Lin", "Mobile Communication Networking Lab"],
    "Yj_hsu": ["許永真", "Jane Yung-Jen Hsu", "Intelligent Agents Lab"],
    "Cf_chou": ["周承復", "Cheng-Fu Chou", "Communication and Multimedia Lab"],
    "Lc_fu": ["傅立成", "Li-Chen Fu", "Intelligent Robotics and Automation Lab"],
    "Hc_hsiao": ["蕭旭君", "Hsu-Chun Hsiao", "Network Security Lab"],
    "Yf_tseng": ["曾宇鳳", "Yu-Feng Tseng", "Bioinformatics and Cheminformatics Lab"]
    // "": ["", "", ""],
}

// const fs = require("fs");

// data = "---\nauthor: 蔡仲恩\n---\n"

// for(var key in professors) {
//     fs.writeFile("_posts/2021-05-04-" + key + ".md", data, (err) => {
//         // In case of a error throw err.
//         if (err) throw err;
//     })
// }

window.addEventListener('load', function () {
    console.log("It's loaded!");
    var sections = document.getElementsByClassName("name_section");

    for(let i = 0; i < sections.length; ++i) {

        let id = sections[i].id;
        console.log(id);
        // Change professor information according to json
        sections[i].children[0].innerHTML = professors[id][0];
        sections[i].children[1].innerHTML = professors[id][1];
        sections[i].children[2].innerHTML = professors[id][2].toUpperCase();
    }
})