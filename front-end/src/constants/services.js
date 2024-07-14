export const SERVICES = [
  {
    id: 1,
    servicesName: "Fizjoterapia ortopedyczna",
    path: "/fizjoterapia-ortopedyczna",
    servicesList: [
      // {
      //   serviceName: "Wizytka diagnostyczna z USG",
      //   description:
      //     "Wizyta diagnostyczna składa się z:<ul><li>Wywiadu, podczas którego przedstawiony zostanie problem, objawy (lokalizacja, charakter, zachowanie, czynniki ryzyka), mechanizm urazu, historia problemu. Zaznajomię się z badaniami obrazowymi (RTG, TK, MRI) oraz dokumentacją medyczną. Wywiad jest niezbędny do zakwalifikowania pacjenta do dalszego leczenia lub odesłania do innego specjalisty.</li><li>Badania, które polega na ocenie statycznej, ocenie zakresów ruchu, badaniu neurologicznym, badaniu neurodynamicznym, testach mięśniowych, specjalistycznych testach ortopedycznych oraz palpacji.</li><li>Badania USG, dzięki któremu można dokładnie ocenić strukturę mięśni, więzadeł i stawów.</li><li>Opracowania planu dalszego leczenia, edukacja i wyposażenie pacjenta w proste sposoby autoterapii</li><li>Przeprowadzenia wstępnej terapii (terapia manualna i/lub trening medyczny).</li></ul>Informacja dla pacjenta: proszę o zabranie wygodnego stroju, butów zmiennych oraz całej dokumentacji medycznej.",
      //   price: "80,00 zł",
      //   time: "45min",
      // },
      {
        serviceName: "Terapia manualna",
        description:
          "Kolejna wizyta polega na ocenie efektów leczenia oraz kontynuowanie terapii korzystając z całej gamy metod:<ul><li>Terapia manualna w oparciu o koncepcje Maitland®</li><li>Terapia manualna tkanek miękkich: punkty spustowe, masaż tanek głębokich, suche igłowanie, pinoterapia, stretching, tejping</li></ul>",
        price: "130,00 zł",
        time: "50min",
        personId: [1],
      },
      {
        id: 1,
        serviceName: "Trening / RTS",
        description:
          "W ramach treningu oraz RTS (return to sport – powrót do sportu) praca z pacjentem/zawodnikiem polega na progresywnym treningu siłowym i wprowadzaniu elementów dyscypliny, którą uprawia (bieganie, zmiany kierunku ruchów, plyometria), zgodnie z protokołami i wytycznymi.<p>Nasz gabinet wyposażony jest w sprzęt, który pozwoli bezpiecznie i skutecznie wrócić do pełni sprawności po kontuzji.</p>",
        price: "130,00 zł",
        time: "1g",
        personId: [1],
      },
      {
        serviceName: "Wizyta diagnostyczna z terapią wstępną",
        description: "",
        price: "130,00 zł",
        time: "1g",
        personId: [1],
      },
    ],
  },
  {
    id: 2,
    servicesName: "Fizjoterapia dzieci i młodzieży",
    path: "/fizjoterapia-dzieci-i-mlodzieży",
    servicesList: [
      {
        serviceName: "Wizyta diagnostyczna - pierwszorazowa",
        description:
          "Wizyta diagnostyczna fizjoterapeutyczna dziecka to pierwsze spotkanie z fizjoterapeutą, które ma na celu ocenę stanu zdrowia dziecka, zidentyfikowanie ewentualnych problemów ruchowych i opracowanie planu terapeutycznego. Taka wizyta obejmuje kilka kluczowych etapów: <ol> <li>Wywiad z rodzicami</li> <p>Fizjoterapeuta przeprowadza szczegółowy wywiad, który obejmuje:</p> <ul> <li> Historia zdrowia dziecka: Informacje o ciąży, porodzie, wczesnym okresie noworodkowym, chorobach, urazach i wszelkich operacjach. </li> <li> Rozwój dziecka: Pytania dotyczące kamieni milowych w rozwoju (np. siadanie, raczkowanie, chodzenie), problemy z jedzeniem, snem i zachowaniem. </li> <li> Obserwacje rodziców: Spostrzeżenia dotyczące postawy, sposobu poruszania się, preferencji ruchowych i innych niepokojących symptomów. </li> </ul> <li>Badanie fizykalne</li> <p>Fizjoterapeuta przeprowadza badanie, które może obejmować:</p> <ul> <li> Ocena postawy: Sprawdzenie symetrii ciała, ułożenia głowy, kręgosłupa, bioder, nóg i stóp. </li> <li> Ocena napięcia mięśniowego: Badanie tonusu mięśniowego, szukanie asymetrii lub nieprawidłowego napięcia. </li> <li> Ocena zakresu ruchu: Sprawdzenie elastyczności i ruchomości stawów. </li> <li> Ocena koordynacji i równowagi: Obserwacja zdolności dziecka do utrzymania równowagi i koordynacji ruchów. </li> </ul> <li>Testy funkcjonalne</li> <p> W zależności od wieku i problemów dziecka, mogą być przeprowadzone różne testy funkcjonalne, które są dostosowane do problemów zgłaszanych przez rodziców, dziecko lub zauważonych podczas badania. </p> <li>Diagnoza i plan terapii</li> <ul> <p> Po przeprowadzeniu wywiadu i badania fizykalnego, fizjoterapeuta: </p> <li> Diagnoza: Formułuje wstępną diagnozę, identyfikując główne problemy i deficyty. </li> <li> Plan terapii: Opracowuje indywidualny plan terapeutyczny, który może obejmować ćwiczenia do wykonania w domu, sesje terapeutyczne w gabinecie,techniki manualne oraz zalecenia dotyczące codziennych aktywności i opieki nad dzieckiem. </li> <li> Edukacja rodziców: Informuje rodziców o diagnozie, planie terapii i oczekiwanych rezultatach. Rodzice otrzymują także wskazówki dotyczące wspierania rozwoju dziecka na co dzień. </li> </ul> <li>Monitorowanie postępów</li> <p>W kolejnych wizytach fizjoterapeuta:</p> <ul> <li>Ocena postępów: Regularnie ocenia postępy dziecka w terapii.</li> <li> Modyfikacja planu terapii: Dostosowuje plan terapeutyczny w zależności od potrzeb i postępów dziecka. </li> <li> Wsparcie dla rodziców: Kontynuuje edukację i wsparcie dla rodziców, odpowiadając na pytania i dostarczając potrzebnych informacji. </li> <li> Wizyta diagnostyczna fizjoterapeutyczna dziecka jest kluczowym elementem procesu terapeutycznego, zapewniającym indywidualne podejście i skuteczne wsparcie w rozwoju ruchowym i zdrowotnym dziecka. </li> </ul> </ol>",
        price: "80,00 zł",
        time: "45min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia młodych sportowców",
        description: "",
        price: "130,00 zł",
        time: "50min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia młodzieży",
        description: "",
        price: "130,00 zł",
        time: "1g",
        personId: [2],
      },
      {
        serviceName: "Trening funkcjonalny dzieci i młodzieży",
        description: "",
        price: "150,00 zł",
        time: "1g 15min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia dzieci",
        description: "",
        price: "150,00 zł",
        time: "1g 15min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia niemowląt",
        description: "",
        price: "150,00 zł",
        time: "1g 15min",
        personId: [2],
      },
    ],
  },
  {
    id: 3,
    servicesName: "Diagnoza SI dziecka do 4 r.ż.",
    path: "/diagnoza-si-dziecka-do-4-rz",
    servicesList: [
      {
        serviceName: "Część I - Wywiad z rodzicem (bez dziecka)",
        description:
          "<strong>W in.motion Diagnoza Procesów Przetwarzania Sensorycznego</strong> składa się z trzech części, które obejmują: wywiad z rodzicem/prawnym opiekunem, spotkanie diagnostyczne z dzieckiem oraz szczegółowe omówienie wyników przeprowadzonej diagnozy. Termin każdej części ustala się osobno i niezależnie od pozostałych spotkań.",
        price: "80,00 zł",
        time: "45min",
        personId: [3],
      },
      {
        serviceName: "Część II - Obserwacja Kliniczna",
        description:
          "Część II (w przypadku dziecka do 4 r.ż.) obejmuje obserwację dziecka podczas spontanicznej zabawy oraz konkretnych zadań i aktywności. Konieczne jest zapewnienie dziecku wygodnego stroju (spodnie dresowe/getry, koszulka, skarpetki). Spotkanie trwa około 1 godziny.",
        price: "130,00 zł",
        time: "50min",
        personId: [3],
      },
      {
        serviceName: "Część III - Omówienie diagnozy (bez dziecka)",
        description:
          "Część III obejmuje omówienie procesów przetwarzania sensorycznego dziecka, zalecenia do dalszej pracy w warunkach domowych oraz do ewentualnej pracy terapeutycznej. Spotkanie odbywa się bez obecności dziecka, trwa około 30 minut",
        price: "130,00 zł",
        time: "1g",
        personId: [3],
      },
    ],
  },
  {
    id: 3,
    servicesName: "Diagnoza SI dziecka powyżej 4 r.ż.",
    path: "/diagnoza-si-dziecka-powyzej-4-rz",
    servicesList: [
      {
        serviceName: "Część I - Wywiad z rodzicem (bez dziecka)",
        description:
          "W in.motion Diagnoza Procesów Przetwarzania Sensorycznego składa się z trzech części, które obejmują: wywiad z rodzicem/prawnym opiekunem, spotkanie diagnostyczne z dzieckiem oraz szczegółowe omówienie wyników przeprowadzonej diagnozy. Termin każdej części ustala się osobno i niezależnie od pozostałych spotkań. <strong>WAŻNE: termin części III ustalany jest w kontakcie bezpośrednim z diagnostą SI po zakończeniu części II badania.</strong><strong> Część I obejmuje</strong> szczegółowy wywiad z rodzicem/opiekunem prawnym na temat okresu przed narodzeniem dziecka, okresu okołoporodowego oraz czasu po narodzinach. Konieczne jest zabranie ze sobą: książeczki zdrowia dziecka, kompletu ewentualnych badań i konsultacji specjalistycznych oraz opinii wychowawcy ze żłobka lub przedszkola. <strong>Spotkanie odbywa się bez obecności dziecka i trwa około 50 minut.</strong> Na zakończenie spotkania rodzic/opiekun prawny otrzymuje Kwestionariusz Rozwoju Sensomotorycznego dziecka. Wypełniony dokument należy zabrać ze sobą na II część diagnozy SI.</strong>",
        price: "80,00 zł",
        time: "45min",
        personId: [3],
      },
      {
        serviceName: "Część II - Obserwacja Kliniczna + testy",
        description:
          "Część II (w przypadku dziecka powyżej 4 r.ż.) obejmuje  Obserwację Kliniczną (w skład której wchodzi szereg zadań sprawdzających poziom umiejętności planowania ruchowego, koordynacji, reakcji równoważnych, itp.) oraz specjalistyczne testy (sprawdzające m.in. reakcję na polecenia słowne, percepcję dotykową czy wyczucie rytmu). Konieczne jest zapewnienie dziecku wygodnego stroju (spodnie dresowe/getry, koszulka, skarpetki). Spotkanie trwa około 1,5 godziny.",
        price: "130,00 zł",
        time: "50min",
        personId: [3],
      },
      {
        serviceName: "Część III - Omówienie diagnozy (bez dziecka)",
        description:
          "Część III obejmuje  omówienie procesów przetwarzania sensorycznego dziecka, zalecenia do dalszej pracy w warunkach domowych oraz do ewentualnej pracy terapeutycznej. Spotkanie odbywa się bez obecności dziecka, trwa około 30 minut  i kończy się wydaniem pisemnej opinii.",
        price: "130,00 zł",
        time: "1g",
        personId: [3],
      },
    ],
  },
  {
    id: 3,
    servicesName: "Integracja Sensoryczna",
    path: "/integracja-sensoryczna",
    servicesList: [
      {
        serviceName: "Terapia SI",
        description:
          "To proces, którego celem jest poprawa funkcjonowania dziecka w środowisku domowym oraz przedszkolnym/szkolnym. Wykorzystując naturalną potrzebę zabawy i ruchu terapeuta SI dobiera aktywności w taki sposób, by układ nerwowy dziecka był „usatysfakcjonowany”, a reakcja adaptacyjna (czyli odpowiedź na bodziec) stała się adekwatna do sytuacji. Podczas zajęć dziecko korzysta ze specjalistycznego sprzętu jak: hamak, różnego typu huśtawki, deskorolka, piłka rehabilitacyjna czy tor równoważny dlatego konieczne jest zapewnienie mu wygody. Podczas zajęć obowiązuje strój sportowy (dres/spodenki/getry, koszulka i skarpetki) oraz spięte włosy. Terapia SI odbywa się w kontakcie indywidualnym i trwa 50 minut",
        price: "80,00 zł",
        time: "45min",
        personId: [3],
      },
      {
        serviceName: "Wydanie dokumentu",
        description:
          "pisemna ocena rozwoju procesów integracji sensorycznej, informacja na temat postępów dziecka w toku terapii.",
        price: "130,00 zł",
        time: "50min",
        personId: [3],
      },
      {
        serviceName: "Konsultacja",
        description: "",
        price: "130,00 zł",
        time: "1g",
        personId: [3],
      },
    ],
  },
  {
    id: 4,
    servicesName: "Masaż",
    path: "/masaz",
    servicesList: [
      {
        serviceName: "Masaż klasyczny",
        description:
          "Masaż klasyczny to popularna forma masażu, której celem jest zmniejszenie napięcia mięśniowego, poprawa elastyczności skóry i mięśni oraz poprawa krążenia krwi. Masaż ten wykorzystuje techniki łagodne jak i intensywne.",
        price: "80,00 zł",
        time: "45min",
        personId: [1, 4],
      },
      {
        serviceName: "Masaż gorącymi kamieniami",
        description:
          "Masaż wykonywany gorącymi kamieniami bazaltowymi poprawia krążenie, rozszerza naczynia krwionośne, powoduje głębokie roluźnienie mięśni oraz zapewnia poczucie głębokiego relaksu.",
        price: "130,00 zł",
        time: "50min",
        personId: [4],
      },
      {
        serviceName: "Masaż relaksacyjny",
        description: "",
        price: "130,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Masaż tkanek głębokich",
        description:
          "Masaż tkanek głębokich skupia się na głębszych warstwach mięśni i tkanki łącznej. Stosowany jest jako narzędzie do rozwiązywania problemów w obrębie układu mięśniowego.",
        price: "130,00 zł",
        time: "1g",
        personId: [1, 4],
      },
      {
        serviceName: "Masaż leczniczy",
        description:
          "Drenaż limfatyczny wspomaga pracę układu krążenia, redukuję obrzęki, wspiera przepływ limfy w organizmie. Zalecany osobom pracującym w pozycji stojącej oraz z tendencją do pojawiania się obrzęków nóg.",
        price: "130,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Masaż antycellulitow",
        description:
          "Masaż antycellulitowy to zabieg, w którym wykorzystuje się intensywne techniki masażu. Wpływa na poprawę krążenia krwi i limfy. Zmniejsza widoczność cellulitu, ujędrnia skórę i poprawia jej kondycję.",
        price: "130,00 zł",
        time: "1g",
        personId: [4],
      },
    ],
  },
];
