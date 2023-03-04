let options = document.getElementById("options");
   let optionList = [

   "DÜZCE",
   "OSMANİYE",
   "KİLİS",
   "KARABÜK",
   "YALOVA",
   "IĞDIR",
   "ARDAHAN",
   "BARTIN",
   "ŞIRNAK",	
   "BATMAN",
   "KIRIKKALE",	
   "KARAMAN",
   "BAYBURT",
   "AKSARAY",
   "ZONGULDAK",
   "YOZGAT",
   "VAN",
   "UŞAK",
   "ŞANLIURFA",
   "TUNCELİ",	
   "TRABZON",
   "TOKAT",
   "TEKİRDAĞ",
   "SİVAS",
   "SİNOP",
   "SİİRT",	
   "SAMSUN",
   "SAKARYA",
   "RİZE",
   "ORDU",
   "NİĞDE",
   "NEVŞEHİR",
   "MUŞ",
   "MUĞLA",
   "MARDİN",
   "KAHRAMANMARAŞ",
   "MANİSA",
   "MALATYA",
   "KÜTAHYA",
   "KONYA",
   "KOCAELİ",
   "KIRŞEHİR",	
   "KIRKLARELİ",
   "KAYSERİ",
   "KASTAMONU",
   "KARS",
   "İZMİR",
   "İSTANBUL",
   "MERSİN",
   "ISPARTA",	
   "HATAY",	
   "HAKKARİ",
   "GÜMÜŞHANE",
   "GİRESUN",
   "GAZİANTEP",
   "ESKİŞEHİR",
   "ERZURUM",
   "ERZİNCAN",
   "ELAZIĞ",	
   "EDİRNE",	
   "DİYARBAKIR",
   "DENİZLİ",
   "ÇORUM",
   "ÇANKIRI",
   "ÇANAKKALE",
   "BURSA",
   "BURDUR",
   "BOLU",
   "BİTLİS",
   "BİNGÖL",
   "BİLECİK",
   "BALIKESİR",
   "AYDIN",
   "ARTVİN",
   "ANTALYA",
   "ANKARA",
   "AMASYA",
   "AĞRI",
   "AFYONKARAHİSAR",
   "ADIYAMAN",
   "ADANA",
   ];
   
   let button = document.getElementById("button");
   
   let isOpen = false;
   
   button.addEventListener("click", getMessage);
   options.addEventListener("click", addToUIOptions);
   
   function getMessage() {
       let message = document.createElement("div");
       message.className = "message";
   
       if (options.firstElementChild.classList.contains("hide-option")) {
           message.classList.add("danger");
           message.textContent = "Oh no! It is cannot be blank";
   
           document.body.appendChild(message);
   
           deleteMessage(message);
       }
       else {
           message.classList.add("success");
           message.textContent = "Thanks for completing :)";
   
           document.body.appendChild(message);
   
           deleteMessage(message);
       }
   
   }
   
   function deleteMessage(el) {
       setTimeout(() => {
           document.body.removeChild(el);
       }, 6000);
   }
   
   function addToUIOptions(e) {
       if (e.target.classList.contains("hide-option")) {
           controlOptions(e);
       }
       else {
           const pickedOption = e.target;
   
           if (options.firstElementChild.classList.contains("hide-option")) {
               options.removeChild(options.firstElementChild);
           }
           options.insertAdjacentElement("afterbegin", pickedOption);
   
           deleteOptions();
           controlOptions(e);
       }
   }
   
   function controlOptions(e) {
       if (isOpen === false) {
           createOptions();
           options.classList.add("opened");
           isOpen = true;
       }
       else {
           deleteOptions();
           options.classList.remove("opened");
           isOpen = false;
       }
   }
   
   function deleteOptions() {
       while (options.childElementCount > 1) {
           options.removeChild(options.lastElementChild);
       }
   }
   
   function createOptions() {
       optionList.forEach(element => {
           if (options.firstElementChild.textContent !== element) {
               let option = document.createElement("div");
               option.className = "option";
               option.textContent = element;
   
               options.firstElementChild.insertAdjacentElement("afterend", option);
           }
       });
   };



   
   function slideRight() {
       if (currentPosition != 0) {
           slider.style.marginLeft = currentMargin + (90 / slidesPerPage) + '%';
           currentMargin += (90 / slidesPerPage);
           currentPosition--;
       };
       if (currentPosition === 0) {
           buttons[0].classList.add('inactive');
       }
       if (currentPosition < slidesCount) {
           buttons[1].classList.remove('inactive');
       }
   };
   
   function slideLeft() {
       if (currentPosition != slidesCount) {
           slider.style.marginLeft = currentMargin - (90 / slidesPerPage) + '%';
           currentMargin -= (90 / slidesPerPage);
           currentPosition++;
       };
       if (currentPosition == slidesCount) {
           buttons[1].classList.add('inactive');
       }
       if (currentPosition > 0) {
           buttons[0].classList.remove('inactive');
       }
   };
