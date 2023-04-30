(function () {
  var partnerInfo = null;
  var validationObj = {
    1: {
      active: true,
      active: true,
      educated: true,
      rich: true,
      impartial: true,
      chic: true,
      romantic: true,
      sociable: true,
      travelLover: true,
      serious: true,
      comic: true,
      patient: true,
      dealingWithPeople: true,
      goodTalker: true,
      dealingWithChildren: true,
      lithe: true,
      handsome: true,
    },
    2: {
      lazy: true,
      notEducated: true,
      introverted: true,
      anger: true,
      notFit: true,
      poor: true,
      notComic: true,
      notChic: true,
      stingy: true,
      doesntLikeWork: true,
      lavish: true,
      parentControl: true,
      unemployed: true,
      lowLevelJob: true,
      noCertificate: true,
      livesInFamilyHome: true,
      livesInRuralArea: true,
      unromantic: true,
      doesntLikeOutAndTravel: true,
    },
    3: {
      pretty: true,
      graceful: true,
      active: true,
      skilledInKitchen: true,
      economical: true,
      shy: true,
      sociable: true,
      travelAndBeAroundLover: true,
      educated: true,
      expertWithKids: true,
      rich: true,
      ancientFamily: true,
      chic: true,
      cleaning: true,
      patient: true,
      serious: true,
      comedic: true,
      travelLover: true,
    },
    4: {
      lazy: true,
      uneducated: true,
      introverted: true,
      stingy: true,
      notPretty: true,
      notGraceful: true,
      poorFamily: true,
      anger: true,
      noTasteInClothes: true,
      dontCareAboutCleaningTooMuch: true,
      notComical: true,
      badInKitchen: true,
      wasteful: true,
      parentControl: true,
      notTooShy: true,
    },
  };

  var dataArray = [
    {
      id: 1,
      title: {
        female: {
          en: "Wife Desires",
          ar: "رغبات الزوجة",
          tr: "karısının arzuları",
        },
        male: {
          en: "Characteristics of the husband",
          ar: "مميزات الزوج",
          tr: "kocanın özellikleri",
        },
      },
      desc: {
        female: {
          en: "Choose the top 5 qualities you want in your husband",
          ar: "اختاري افضل 5 صفات تريدها فى زوجك",
          tr: "Kocanızda olmasını istediğiniz ilk 5 özelliği seçin",
        },
        male: {
          en: "Choose your top 5 qualities",
          ar: "اختار افضل 5 صفات فيك",
          tr: "En iyi 5 özelliğinizi seçin",
        },
      },
      items: [
        { en: "Active", ar: "نشيط", tr: "aktif", code: "active" },
        { en: "Educated and knowledgeable", ar: "مثقف ومطلع", tr: "Eğitimli ve bilgili", code: "educated" },
        { en: "Rich", ar: "غنى", tr: "zengin", code: "rich" },
        { en: "Impartial", ar: "نزيه", tr: "tarafsız", code: "impartial" },
        { en: "Chic", ar: "شيك", tr: "şık", code: "chic" },
        { en: "Romantic", ar: "رومانسى", tr: "romantik", code: "romantic" },
        { en: "Sociable", ar: "اجتماعى", tr: "sosyal", code: "sociable" },
        { en: "Lover of travel and adventures", ar: "محب للسفر والمغامرات", tr: "Seyahat ve macera aşığı", code: "travelLover" },
        { en: "Serious", ar: "جاد", tr: "ciddi", code: "serious" },
        { en: "Comic and funny", ar: "كوميدى ومرح", tr: "Komedi ve eğlence", code: "comic" },
        { en: "Patient and understanding", ar: "صبور ومتفاهم", tr: "sabırlı ve anlayışlı", code: "patient" },
        { en: "An expert in dealing with people", ar: "خبير بالتعامل مع الناس", tr: "İnsanlarla ilişkilerde uzman", code: "dealingWithPeople" },
        { en: "Tactful and a good talker", ar: "لبق ومتحدث جيد", tr: "Kibar ve iyi bir konuşmacı", code: "goodTalker" },
        { en: "An expert in dealing with children", ar: "خبير بالتعامل مع الاطفال", tr: "Çocuklarla ilişkilerde uzman", code: "dealingWithChildren" },
        { en: "Lithe", ar: "رشيق القوام", tr: "kıvrımlı", code: "lithe" },
        { en: "Handsome", ar: "وسيم", tr: "güzel", code: "handsome" },
      ],
    },
    {
      id: 2,
      title: {
        female: {
          en: "Acceptable to the wife",
          ar: "المقبول لدى الزوجة",
          tr: "karısı için kabul edilebilir",
        },
        male: {
          en: "Defects of the husband",
          ar: "عيوب الزوج",
          tr: "kocanın eksiklikleri",
        },
      },
      desc: {
        female: {
          en: "Choose the 5 most flaws you can accept in your husband",
          ar: "اختارى اكثر 5 عيوب يمكن ان تتقبليهم فى زوجك",
          tr: "Kocanızda kabul edebileceğiniz en büyük 5 kusuru seçin",
        },
        male: {
          en: "Choose your top 5 flaws",
          ar: "اختر اكثر 5 عيوب فيك",
          tr: "İlk 5 kusurunuzu seçin",
        },
      },
      items: [
        { en: "lazy", ar: "كسول", tr: "tembel", code: "lazy" },
        { en: "not educated", ar: "غير مثقف", tr: "eğitimli değil", code: "notEducated" },
        { en: "Introverted and not sociable", ar: "انطوائى وغير اجتماعى", tr: "İçine kapanık ve sosyal değil", code: "introverted" },
        { en: "Nervous and quick to anger", ar: "عصبى وسريع الغضب", tr: "Gergin ve çabuk öfkelenen", code: "anger" },
        { en: "not graceful", ar: "غير رشيق", tr: "kıvrak değil", code: "notFit" },
        { en: "poor", ar: "فقير", tr: "fakir", code: "poor" },
        { en: "Not comic", ar: "غير كوميدى", tr: "komik değil", code: "notComic" },
        { en: "Not chic or well-groomed", ar: "ليس شيك او مهندم", tr: "Ne şık ne de bakımlı", code: "notChic" },
        { en: "stingy", ar: "بخيل", tr: "paragöz", code: "stingy" },
        { en: "He doesn't like to work", ar: "لايحب العمل", tr: "çalışmayı sevmiyor", code: "doesntLikeWork" },
        { en: "lavish", ar: "مسرف", tr: "müsrif", code: "lavish" },
        { en: "There is control or interference from the parents in it", ar: "هناك تحكم او تدخل من الاهل فيه", tr: "İçinde ebeveynlerin kontrolü veya müdahalesi var", code: "parentControl" },
        { en: "Not working now", ar: "لايعمل حاليا", tr: "şimdi çalışmıyor", code: "unemployed" },
        { en: "Works at a low level job", ar: "يعمل فى وظيفة بمستوى قليل", tr: "Düşük seviyeli bir işte çalışıyor", code: "lowLevelJob" },
        { en: "Does not hold a university degree", ar: "لايحمل شهادة جامعية", tr: "Üniversite diplomasına sahip değil", code: "noCertificate" },
        { en: "He lives in a family home", ar: "يسكن فى بيت عيلة", tr: "Aile evinde yaşıyor", code: "livesInFamilyHome" },
        { en: "He lives in a rural area", ar: "يسكن فى منطقة ريفية", tr: "Kırsal bir bölgede yaşıyor", code: "livesInRuralArea" },
        { en: "Unromantic", ar: "غير رومانسى", tr: "romantik olmayan", code: "unromantic" },
        { en: "does not like to go out and travel a lot", ar: "لايحب الخروج والسفر كثيرا", tr: "Dışarı çıkmayı ve çok seyahat etmeyi sevmez.", code: "doesntLikeOutAndTravel" },
      ],
    },
    {
      id: 3,
      title: {
        female: {
          en: "Characteristics of the wife",
          ar: "مميزات الزوجة",
          tr: "karısının özellikleri",
        },
        male: {
          en: "The desires of the husband",
          ar: "رغبات الزوج",
          tr: "kocanın istekleri",
        },
      },
      desc: {
        female: {
          en: "Choose your top 5 qualities",
          ar: "اختارى افضل 5 صفات فيكى",
          tr: "En iyi 5 özelliğinizi seçin",
        },
        male: {
          en: "Choose the top 5 qualities you want in your wife",
          ar: "اختار افضل 5 صفات تريدها فى زوجتك",
          tr: "Eşinizde olmasını istediğiniz ilk 5 özelliği seçin",
        },
      },
      items: [
        { en: "beautiful", ar: "جميلة", tr: "Güzel", code: "pretty" },
        { en: "graceful", ar: "رشيقة", tr: "çevik", code: "graceful" },
        { en: "active", ar: "نشيطة", tr: "aktif", code: "active" },
        { en: "Skilled in the kitchen", ar: "ماهرة فى المطبخ", tr: "mutfakta yetenekli", code: "skilledInKitchen" },
        { en: "Economical and improve home management", ar: "اقتصادية وتحسن ادارة البيت", tr: "Ekonomiktir ve ev yönetimini geliştirir", code: "economical" },
        { en: "Shy and modest", ar: "خجولة وذات حياء", tr: "Utangaç", code: "shy" },
        { en: "Sociable", ar: "اجتماعية", tr: "sosyal", code: "sociable" },
        { en: "loves to travel and be around", ar: "تحب السفر والترحال", tr: "Gezmeyi ve gezmeyi çok seviyor", code: "travelAndBeAroundLover" },
        { en: "Educated and knowledgeable", ar: "مثقفة ومطلعة", tr: "Eğitimli ve bilgili", code: "educated" },
        { en: "An expert in raising children", ar: "خبيرة بتربية الابناء", tr: "çocuk yetiştirme uzmanı", code: "expertWithKids" },
        { en: "Rich", ar: "غنية", tr: "Zengin", code: "rich" },
        { en: "From an ancient family", ar: "من اسرة عريقة", tr: "Eski bir aileden", code: "ancientFamily" },
        { en: "Chic and has good taste in clothes", ar: "شيك وذات ذوق جيد فى الملابس", tr: "Şık ve giyim zevki iyidir", code: "chic" },
        { en: "Takes great care of cleanliness", ar: "تهتم بالنظافة اهتمام كبير", tr: "Temizliğe çok önem verir", code: "cleaning" },
        { en: "patient", ar: "صبورة", tr: "sabırlı", code: "patient" },
        { en: "serious", ar: "جادة", tr: "Cadde", code: "serious" },
        { en: "comedic", ar: "كوميدية", tr: "komik", code: "comedic" },
        { en: "Travel lover", ar: "محبة للسفر", tr: "Seyahat etmeyi", code: "travelLover" },
      ],
    },
    {
      id: 4,
      title: {
        female: {
          en: "wife's faults",
          ar: "عيوب الزوجة",
          tr: "karısının eksiklikleri",
        },
        male: {
          en: "acceptable to the husband",
          ar: "المقبول لدى الزوج",
          tr: "koca için kabul edilebilir",
        },
      },
      desc: {
        female: {
          en: "Choose the 5 most flaws in you",
          ar: "اختارى اكثر 5 عيوب فيكى",
          tr: "Kendinizdeki en fazla 5 kusuru seçin",
        },
        male: {
          en: "Choose the 5 most common faults that you accept in your wife",
          ar: "اختار اكثر 5 عيوب تقبلهم فى زوجتك",
          tr: "Eşinizde kabul ettiğiniz en yaygın 5 kusuru seçin",
        },
      },
      items: [
        { en: "lazy", ar: "كسولة", tr: "tembel", code: "lazy" },
        { en: "Uneducated", ar: "غير مثقفة", tr: "eğitimsiz", code: "uneducated" },
        { en: "Introverted and antisocial", ar: "انطوائية وغير اجتماعية", tr: "İçe dönük ve asosyal", code: "introverted" },
        { en: "stingy", ar: "بخيلة", tr: "cimri bir şekilde", code: "stingy" },
        { en: "Not pretty", ar: "ليست جميلة", tr: "Güzel değil", code: "notPretty" },
        { en: "not graceful", ar: "ليست رشيقة", tr: "çevik değil", code: "notGraceful" },
        { en: "From a poor family", ar: "من اسرة فقيرة", tr: "fakir bir aileden", code: "poorFamily" },
        { en: "Nervous and quick to anger", ar: "عصبية وسريعة الغضب", tr: "Gergin ve çabuk öfkelenen", code: "anger" },
        { en: "has no taste in clothes", ar: "ليس لها ذوق فى الملابس", tr: "Onun kıyafet zevki yok", code: "noTasteInClothes" },
        { en: "Don't care too much about cleanliness", ar: "لاتهتم بشكل مبالغ فية فى النظافة", tr: "Temizliğe çok önem verme", code: "dontCareAboutCleaningTooMuch" },
        { en: "Not comical", ar: "ليست كوميدية", tr: "komik değil", code: "notComical" },
        { en: "Bad in the kitchen", ar: "سيئة فى المطبخ", tr: "mutfakta kötü", code: "badInKitchen" },
        { en: "Wasteful", ar: "مسرفة", tr: "müsrif", code: "wasteful" },
        { en: "Her family intervened in her life", ar: "تدخل اهلها فى حياتها", tr: "Ailesi hayatına müdahale etti", code: "parentControl" },
        { en: "Not very shy", ar: "ليست ذات خجل كبير", tr: "çok utangaç değil", code: "notTooShy" },
      ],
    },
  ];

  // console.log(dataArray);

  var wrapper = document.getElementsByTagName("main")[0];
  var manifest = {
    lang: "en",
    gender: "female",
    name: null,
    age: null,
  };

  var submitBtn = {
    en: "Submit",
    ar: "أرسل",
    tr: "Gönder",
  };

  var responseHint = {
    en: "Form {{id}} is done",
    ar: "اكتمل النموذج {{id}}",
    tr: "{{id}}. form bitti",
  };

  var formHint = {
    en: "Please choose only 5 items",
    ar: "الرجاء اختيار 5 عناصر فقط",
    tr: "Lütfen sadece 5 ürün seçin",
  };

  function displayForms() {
    dataArray.forEach(function (form) {
      var items = form.items
        .map(function (item) {
          return (
            '<div class="item-wrap">' +
            '<label for="' +
            item.code +
            "_form_" +
            form.id +
            '">' +
            "<p>" +
            item[manifest.lang] +
            "</p>" +
            '<input type="checkbox" id="' +
            item.code +
            "_form_" +
            form.id +
            '" />' +
            '<span class="checkmark"></span>' +
            "</label>" +
            "</div>"
          );
        })
        .join("");
      var table =
        '<form id="form_' +
        form.id +
        '">' +
        "<div>" +
        "<h3>" +
        "Form " +
        form.id +
        ": " +
        form.title[manifest.gender][manifest.lang] +
        "</h3>" +
        "<p class='desc'>" +
        form.desc[manifest.gender][manifest.lang] +
        "</p>" +
        "<p class='hint'></p>" +
        "</div>" +
        "<div>" +
        items +
        "</div>" +
        "<button class='o-btn blue' type='submit'>" +
        submitBtn[manifest.lang] +
        "</button>" +
        "</form>";
      wrapper.insertAdjacentHTML("beforeend", table);
    });
    console.log("displayed forms");
    run();
  }

  function run() {
    var forms = document.getElementsByTagName("form");
    for (var i = 0; i < forms.length; i++) {
      forms[i].onsubmit = handleSubmit;
    }
    console.log("ran logic");
  }

  function handleSubmit(e) {
    e.preventDefault();
    var id = +e.target.id.split("_")[1];
    var items = e.target.getElementsByClassName("item-wrap");
    var hint = e.target.getElementsByClassName("hint")[0];
    hint.innerHTML = "";
    // console.warn("id:", id, "total:", items.length);

    var checkedItems = [];
    for (var i = 0; i < items.length; i++) {
      var input = items[i].getElementsByTagName("input")[0];
      var isChecked = input.checked;
      var character = input.id.split("_")[0];
      if (isChecked) checkedItems.push({ id: id, index: i, isChecked: isChecked, character: character });
    }
    if (checkedItems.length !== 5) return warn(e.target);
    save(checkedItems, e.target);
  }

  function warn(item) {
    if (!item) return;
    var hint = item.getElementsByClassName("hint")[0];
    hint.textContent = formHint[manifest.lang];
    item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    // focus to 1st input
    var input = item.getElementsByTagName("input")[0];
    if (input) input.focus();
  }

  var finalResult = { manifest: manifest };
  function save(arr, form) {
    var response = document.createElement("div");
    response.className = "response";
    response.textContent = responseHint[manifest.lang].replace(/{{id}}/g, arr[0].id);
    form.replaceWith(response);
    response.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    finalResult[arr[0].id] = arr;
    // console.warn(finalResult);
    shareLinkForPartner();
  }

  function shareLinkForPartner() {
    var forms = document.getElementsByTagName("form");
    if (forms.length === 0) {
      if (partnerInfo) return; // validate both current (finalDate) and partner
      function getString(key) {
        return (
          key +
          "=" +
          finalResult[key]
            .map(function (item) {
              return item.character + ".";
            })
            .join("")
            .slice(0, -1)
        );
      }
      var manifestString = "age=" + finalResult.manifest.age + "&name=" + finalResult.manifest.name + "&gender=" + finalResult.manifest.gender;
      var link = window.location.origin + "/compatibility/?info=true&" + manifestString + "&" + getString(1) + "&" + getString(2) + "&" + getString(3) + "&" + getString(4);

      let linkTemp =
        '<div id="sharedLink">' +
        "<h3>Send this link to your possible partner," +
        "<br />So that he/she can fill out his/here own test," +
        "<br />Your partner should tell you the compatibility percentage between you and him/her" +
        "</h3>" +
        "<form>" +
        "<div>" +
        '<input id="inputLink" type="text" required class="o-input" placeholder="Your partner link.." value="' +
        link +
        '">' +
        '   <button type="submit" class="o-btn blue">Copy</button>' +
        "</div>" +
        "</form>" +
        "</div>";
      wrapper.innerHTML = linkTemp;
      handleCopyToClipboard(link);
    }
  }

  function handleCopyToClipboard(link) {
    var form = document.getElementsByTagName("form")[0];
    var button = document.getElementsByTagName("button")[0];
    form.onsubmit = function (e) {
      e.preventDefault();
      copy("inputLink", link);
      button.textContent = "Copied!";
      setTimeout(function () {
        button.textContent = "Copy";
      }, 3000);
    };
  }

  function copy(elementId, link) {
    var input = document.getElementById(elementId);
    input.value = link;
    var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

    if (isiOSDevice) {
      var editable = input.contentEditable;
      var readOnly = input.readOnly;

      input.contentEditable = true;
      input.readOnly = false;

      var range = document.createRange();
      range.selectNodeContents(input);

      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      input.setSelectionRange(0, 999999);
      input.contentEditable = editable;
      input.readOnly = readOnly;
    } else {
      input.select();
    }

    document.execCommand("copy");
    console.log("copied link");
  }

  function getManifest() {
    var identifier = document.getElementById("identifier");
    var form = document.getElementsByTagName("form")[0];
    form.onsubmit = function (e) {
      e.preventDefault();

      var name = document.getElementById("name");
      var age = document.getElementById("age");
      var genders = document.getElementsByName("gender");
      var languages = document.getElementsByName("lang");

      manifest.name = name.value;
      manifest.age = age.value;

      for (var i = 0; i < genders.length; i++) {
        var gender = genders[i];
        if (gender.checked) manifest.gender = gender.value;
      }
      for (var i = 0; i < languages.length; i++) {
        var lang = languages[i];
        if (lang.checked) manifest.lang = lang.value;
      }
      console.log(manifest);
      identifier.remove();
      displayForms();
    };
  }

  function getPartnerInfo() {
    var query = new URLSearchParams(window.location.search);
    if (!query.get("info")) return console.log("No partner data!");

    partnerInfo = {};
    partnerInfo.name = query.get("name");
    partnerInfo.age = query.get("age");
    partnerInfo.gender = query.get("gender");

    function bindItems(key) {
      partnerInfo[key] = {};
      query
        .get(key)
        .split(".")
        .map(function (item) {
          partnerInfo[key][item] = true;
        });
    }
    bindItems(1);
    bindItems(2);
    bindItems(3);
    bindItems(4);
    console.log("partner:", partnerInfo);
  }

  getPartnerInfo();
  getManifest();
})();
