const models = [
  [
    {question:"من هو مكتشف قانون الجاذبية؟", options:["نيوتن","أينشتاين","غاليليو","كوبرنيكوس"], answer:0}, // علوم
    {question:"ما هي عاصمة فرنسا؟", options:["مدريد","باريس","روما","برلين"], answer:1}, // جغرافيا
    {question:"أكبر عضو في جسم الإنسان؟", options:["القلب","الكبد","الرئة","المعدة"], answer:1}, // علوم
    {question:"من هو مؤلف رواية 1984؟", options:["جورج أورويل","تولستوي","دوستويفسكي","هيمنغواي"], answer:0}, // أدب
    {question:"كم عدد قلوب الأخطبوط؟", options:["1","2","3","4"], answer:2}, // علوم
    {question:"أول رئيس للولايات المتحدة؟", options:["لينكولن","واشنطن","روزفلت","أوباما"], answer:1}, // تاريخ
    {question:"ما نتيجة 12 × 8؟", options:["96","108","88","86"], answer:0}, // رياضيات
    {question:"من هو مؤلف مسرحية هاملت؟", options:["شكسبير","دانتي","هوميروس","فيرجيل"], answer:0}, // أدب
    {question:"أول من اخترع الهاتف؟", options:["جراهام بيل","أديسون","تسلا","فاراداي"], answer:0}, // اختراعات
    {question:"أطول نهر في العالم؟", options:["الأمازون","النيل","اليانغتسي","الدانوب"], answer:1} // جغرافيا
  ],
  [
    {question:"عدد ألوان قوس قزح؟", options:["5","6","7","8"], answer:2}, // علوم
    {question:"من هو مؤلف الكوميديا الإلهية؟", options:["دانتي","هوميروس","فيرجيل","شكسبير"], answer:0}, // أدب
    {question:"أكبر قارة من حيث عدد السكان؟", options:["أفريقيا","آسيا","أوروبا","أمريكا"], answer:1}, // جغرافيا
    {question:"أول من صعد إلى القمر؟", options:["نيل آرمسترونغ","يوري جاجارين","باز ألدرين","مايكل كولينز"], answer:0}, // تاريخ/علوم
    {question:"أكبر دولة عربية من حيث المساحة؟", options:["السعودية","الجزائر","السودان","مصر"], answer:1}, // جغرافيا
    {question:"من هو مكتشف الدورة الدموية؟", options:["ابن النفيس","ابن سينا","باستور","فليمنغ"], answer:0}, // علوم
    {question:"ما نتيجة 15 ÷ 3؟", options:["3","4","5","6"], answer:2}, // رياضيات
    {question:"من هو مؤلف الإلياذة؟", options:["هوميروس","فيرجيل","دانتي","شكسبير"], answer:0}, // أدب
    {question:"أول من اخترع الطائرة؟", options:["الأخوان رايت","تسلا","أديسون","بيل"], answer:0}, // اختراعات
    {question:"أكبر جبل في العالم؟", options:["إيفرست","كي2","مون بلان","ماكالو"], answer:0} // جغرافيا
  ],
  [
    {question:"أول من وضع جدول العناصر الكيميائية؟", options:["مندليف","نيوتن","أينشتاين","فليمنغ"], answer:0}, // علوم
    {question:"أول من اخترع المصباح الكهربائي؟", options:["أديسون","تسلا","بيل","فاراداي"], answer:0}, // اختراعات
    {question:"ما هي عاصمة ألمانيا؟", options:["برلين","ميونخ","فرانكفورت","هامبورغ"], answer:0}, // جغرافيا
    {question:"أول من اكتشف الذرة؟", options:["ديموقريطس","نيوتن","أينشتاين","غاليليو"], answer:0}, // علوم
    {question:"من هو مؤلف رواية الحرب والسلام؟", options:["تولستوي","دوستويفسكي","أوسكار وايلد","شكسبير"], answer:0}, // أدب
    {question:"أكبر دولة في أمريكا الجنوبية؟", options:["الأرجنتين","البرازيل","تشيلي","بيرو"], answer:1}, // جغرافيا
    {question:"ما نتيجة 9 × 9؟", options:["81","72","99","90"], answer:0}, // رياضيات
    {question:"أول من اخترع السيارة؟", options:["كارل بنز","فورد","تسلا","أديسون"], answer:0}, // اختراعات
    {question:"أول من اخترع الكاميرا؟", options:["ابن الهيثم","أديسون","بيل","تسلا"], answer:0}, // اختراعات
    {question:"أكبر دولة أوروبية؟", options:["فرنسا","ألمانيا","روسيا","إيطاليا"], answer:2} // جغرافيا
  ],
  [
    {question:"ما هي عاصمة مصر؟", options:["الإسكندرية","القاهرة","الجيزة","الأقصر"], answer:1}, // جغرافيا
    {question:"أكبر دولة في العالم الإسلامي؟", options:["إندونيسيا","السعودية","باكستان","تركيا"], answer:0}, // جغرافيا
    {question:"من هو مؤلف الإلياذة؟", options:["هوميروس","فيرجيل","دانتي","شكسبير"], answer:0}, // أدب
    {question:"أول من اخترع الطابعة؟", options:["غوتنبرغ","أديسون","بيل","تسلا"], answer:0}, // اختراعات
    {question:"أول من اخترع التلفاز؟", options:["جون بيرد","أديسون","بيل","تسلا"], answer:0}, // اختراعات
    {question:"من هو مكتشف البنسلين؟", options:["ألكسندر فليمنغ","لويس باستور","داروين","نيوتن"], answer:0}, // علوم
    {question:"ما نتيجة 100 ÷ 25؟", options:["2","3","4","5"], answer:3}, // رياضيات
    {question:"أول من اخترع الرادار؟", options:["واتسون وات","أديسون","بيل","تسلا"], answer:0}, // اختراعات
    {question:"أول من اخترع الديناميت؟", options:["نوبل","تسلا","أديسون","بيل"], answer:0}, // اختراعات
    {question:"أكبر دولة في أوروبا الشرقية؟", options:["بولندا","أوكرانيا","روسيا","رومانيا"], answer:2} // جغرافيا
  ],
  [
    {question:"ما هي عاصمة السعودية؟", options:["الرياض","جدة","مكة","الدمام"], answer:0}, // جغرافيا
    {question:"أكبر دولة في الخليج العربي؟", options:["الكويت","السعودية","الإمارات","قطر"], answer:1}, // جغرافيا
    {question:"أول من اخترع الغواصة؟", options:["كورنيليوس فان دريبل","أديسون","بيل","تسلا"], answer:0}, // اختراعات
    {question:"أول من اخترع الميكروسكوب؟", options:["زانسن","أديسون","بيل","تسلا"], answer:0}, // اختراعات
    {question:"من هو مؤلف الكوميديا الإلهية؟", options:["دانتي","هوميروس","فيرجيل","شكسبير"], answer:0}, // أدب
    {question:"من هو مكتشف الدورة الدموية؟", options:["ابن النفيس","ابن سينا","باستور","فليمنغ"], answer:0}, // علوم
    {question:"ما نتيجة 7 × 12؟", options:["72","84","96","108"], answer:1}, // رياضيات
    {question:"أول من اخترع المصعد؟", options:["إليشا أوتيس","أديسون","بيل","تسلا"], answer:0}, // اختراعات
    {question:"أول من اخترع البطارية؟", options:["فولت","أديسون","بيل","تسلا"], answer:0}, // اختراعات
     {question:"أكبر دولة في غرب أفريقيا؟", options:["نيجيريا","غانا","السنغال","مالي"], answer:0},
];
let currentQuestion = 0;
let score = 0;
let wrong = 0;
let currentModel = 0;

document.getElementById("startBtn").addEventListener("click", showModels);

function showModels() {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("modelSelector").style.display = "block";
  let modelsDiv = document.getElementById("models");
  modelsDiv.innerHTML = "";
  for (let i = 0; i < models.length; i++) {
    modelsDiv.innerHTML += `<button class="modelBtn" onclick="startQuiz(${i})">النموذج ${i+1}</button>`;
  }
}

function startQuiz(modelIndex) {
  currentModel = modelIndex;
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  document.getElementById("modelSelector").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  showQuestion();
}

function showQuestion() {
  let quizContainer = document.getElementById("quizContainer");
  let q = models[currentModel][currentQuestion];
  quizContainer.innerHTML = `
    <div class="question">${q.question}</div>
    ${q.options.map((opt, i) => 
      `<button class="option" onclick="checkAnswer(${i})">${i+1}. ${opt}</button>`
    ).join("")}
    <div id="feedback"></div>
  `;
}

function checkAnswer(selected) {
  let q = models[currentModel][currentQuestion];
  let feedback = document.getElementById("feedback");
  if (selected === q.answer) {
    score++;
    feedback.innerHTML = `<p class="correct">إجابة صحيحة!</p>`;
  } else {
    wrong++;
    feedback.innerHTML = `<p class="wrong">إجابة خاطئة! الصحيح هو: ${q.options[q.answer]}</p>`;
  }
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < models[currentModel].length) {
      showQuestion();
    } else {
      document.getElementById("quizContainer").innerHTML = `
        <h2>انتهى النموذج!</h2>
        <p class="result">إجابات صحيحة: ${score}</p>
        <p class="result">إجابات خاطئة: ${wrong}</p>
        <button onclick="showModels()">اختر نموذج آخر</button>
      `;
    }
  }, 1500);
  } 
alert("تم تحميل السكربت بنجاح!");
