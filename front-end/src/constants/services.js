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
        description: `<p>Kolejna wizyta polega na ocenie efektów leczenia oraz kontynuowanie terapii korzystając z całej gamy metod:</p>
          <ul>
            <li>Terapia manualna w oparciu o koncepcje Maitland®</li>
            <li>Terapia manualna tkanek miękkich: punkty spustowe, masaż tanek głębokich, suche igłowanie, pinoterapia, stretching, tejping</li>
          </ul>`,
        price: "130,00 zł",
        time: "50min",
        personId: [1],
      },
      {
        id: 1,
        serviceName: "Trening / RTS",
        description: `<p>W ramach treningu oraz RTS (return to sport – powrót do sportu) praca z pacjentem/zawodnikiem polega na progresywnym treningu siłowym i wprowadzaniu elementów dyscypliny, którą uprawia (bieganie, zmiany kierunku ruchów, plyometria), 
        zgodnie z protokołami i wytycznymi.</p>
        <p>Nasz gabinet wyposażony jest w sprzęt, który pozwoli bezpiecznie i skutecznie wrócić do pełni sprawności po kontuzji.</p>`,
        price: "130,00 zł",
        time: "1g",
        personId: [1],
      },
      {
        serviceName: "Wizyta diagnostyczna z terapią wstępną",
        description: "",
        price: "150,00 zł",
        time: "1g 15min",
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
        description: `<p>Wizyta diagnostyczna fizjoterapeutyczna dziecka to pierwsze spotkanie z fizjoterapeutą, które ma na celu ocenę stanu zdrowia dziecka, zidentyfikowanie ewentualnych problemów ruchowych i opracowanie planu terapeutycznego.</p> 
        <p>Taka wizyta obejmuje kilka kluczowych etapów:</p>
        <ol>
          <strong><li>Wywiad z rodzicami</li></strong>
          <p>Fizjoterapeuta przeprowadza szczegółowy wywiad, który obejmuje:</p>
          <ul>
            <li><strong>Historia zdrowia dziecka:</strong> Informacje o ciąży, porodzie, wczesnym okresie noworodkowym, chorobach, urazach i wszelkich operacjach.</li>
            <li><strong>Rozwój dziecka:</strong> Pytania dotyczące kamieni milowych w rozwoju (np. siadanie, raczkowanie, chodzenie), problemy z jedzeniem, snem i zachowaniem.</li>
            <li><strong>Obserwacje rodziców:</strong> Spostrzeżenia dotyczące postawy, sposobu poruszania się, preferencji ruchowych i innych niepokojących symptomów.</li>
          </ul>
          <strong><li>Badanie fizykalne</li></strong>
          <p>Fizjoterapeuta przeprowadza badanie, które może obejmować:</p>
          <ul>
            <li><strong>Ocena postawy:</strong> Sprawdzenie symetrii ciała, ułożenia głowy, kręgosłupa, bioder, nóg i stóp.</li>
            <li><strong>Ocena napięcia mięśniowego:</strong> Badanie tonusu mięśniowego, szukanie asymetrii lub nieprawidłowego napięcia.</li>
            <li><strong>Ocena zakresu ruchu:</strong> Sprawdzenie elastyczności i ruchomości stawów.</li>
            <li><strong>Ocena koordynacji i równowagi:</strong> Obserwacja zdolności dziecka do utrzymania równowagi i koordynacji ruchów.</li>
          </ul>
          <strong><li>Testy funkcjonalne</li></strong>
          <p>W zależności od wieku i problemów dziecka, mogą być przeprowadzone różne testy funkcjonalne, które są dostosowane do problemów zgłaszanych przez rodziców, dziecko lub zauważonych podczas badania.</p>
          <strong><li>Diagnoza i plan terapii</li></strong>
          <p>Po przeprowadzeniu wywiadu i badania fizykalnego, fizjoterapeuta:</p>
          <ul>
            <li><strong>Diagnoza:</strong> Formułuje wstępną diagnozę, identyfikując główne problemy i deficyty.</li>
            <li><strong>Plan terapii:</strong> Opracowuje indywidualny plan terapeutyczny, który może obejmować ćwiczenia do wykonania w domu, sesje terapeutyczne w gabinecie, techniki manualne oraz zalecenia dotyczące codziennych aktywności i opieki nad dzieckiem.</li>
            <li><strong>Edukacja rodziców:</strong> Informuje rodziców o diagnozie, planie terapii i oczekiwanych rezultatach. Rodzice otrzymują także wskazówki dotyczące wspierania rozwoju dziecka na co dzień.</li>
          </ul>
          <strong><li>Monitorowanie postępów</li></strong>
          <p>W kolejnych wizytach fizjoterapeuta:</p>
          <ul>
            <li><strong>Ocena postępów:</strong> Regularnie ocenia postępy dziecka w terapii.</li>
            <li><strong>Modyfikacja planu terapii:</strong> Dostosowuje plan terapeutyczny w zależności od potrzeb i postępów dziecka.</li>
            <li><strong>Wsparcie dla rodziców:</strong> Kontynuuje edukację i wsparcie dla rodziców, odpowiadając na pytania i dostarczając potrzebnych informacji.</li>
          </ul>
          <p>Wizyta diagnostyczna fizjoterapeutyczna dziecka jest kluczowym elementem procesu terapeutycznego, zapewniającym indywidualne podejście i skuteczne wsparcie w rozwoju ruchowym i zdrowotnym dziecka.</p>
        </ol>
        `,
        price: "150,00 zł",
        time: "1g 15min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia młodych sportowców",
        description: `<p>Fizjoterapia młodych sportowców to specjalistyczna dziedzina, której celem jest prewencja, diagnoza i leczenie urazów oraz optymalizacja zdolności fizycznych młodych osób aktywnie uprawiających sport.Składa się z różnych metod i technik, które są dostosowane do specyficznych potrzeb rozwijającego się organizmu, uwzględniając dynamiczny wzrost i zmiany fizjologiczne.</p>
        <p>Główne cele fizjoterapii młodych sportowców to:</p>
        <ol>
          <li><strong>Prewencja urazów:</strong> Edukacja w zakresie właściwej techniki wykonywania ćwiczeń, prawidłowego rozgrzewania i rozciągania, a także ergonomii treningu.</li>
          <li><strong>Rehabilitacja urazów:</strong> Indywidualne programy terapeutyczne obejmujące ćwiczenia, mobilizacje, terapie manualne i inne techniki wspomagające powrót do pełnej sprawności po kontuzjach.</li>
          <li><strong>Optymalizacja wydolności:</strong> Ćwiczenia i techniki mające na celu poprawę siły, wytrzymałości, elastyczności oraz koordynacji, co może przyczynić się do lepszych wyników sportowych.</li>
          <li><strong>Edukacja:</strong> Informowanie młodych sportowców i ich rodziców o znaczeniu odpowiedniego nawodnienia, odżywiania oraz dbania o równowagę między treningiem a odpoczynkiem.</li>
          <li><strong>Indywidualne podejście:</strong> Każdy młody sportowiec otrzymuje program dostosowany do jego specyficznych potrzeb, rodzaju uprawianego sportu oraz poziomu zaawansowania.</li>
        </ol>
        <p>Fizjoterapia młodych sportowców odgrywa kluczową rolę w zapewnieniu zdrowego i bezpiecznego rozwoju fizycznego, pozwalając na osiąganie lepszych wyników sportowych oraz minimalizując ryzyko długoterminowych urazów.</p>
        `,
        price: "130,00 zł",
        time: "50min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia młodzieży",
        description: `<p>Fizjoterapia młodzieży koncentruje się na diagnozowaniu, leczeniu i zapobieganiu problemom zdrowotnym u młodych ludzi. Ta grupa wiekowa jest szczególnie podatna na różne dolegliwości ze względu na szybki wzrost, zmiany hormonalne i aktywność fizyczną.</p>
        <p>Główne cele fizjoterapii młodzieży to:</p>
        <ol>
          <li><strong>Prewencja urazów i schorzeń:</strong> Edukacja młodzieży w zakresie prawidłowej postawy, ergonomii podczas nauki i pracy oraz zdrowych nawyków ruchowych.</li>
          <li><strong>Leczenie urazów:</strong> Indywidualne programy rehabilitacyjne dla młodzieży, która doznała kontuzji, np. skręceń, złamań, naciągnięć mięśni czy uszkodzeń stawów. Terapie mogą obejmować ćwiczenia wzmacniające, techniki manualne.</li>
          <li><strong>Poprawa sprawności fizycznej:</strong> Ćwiczenia wzmacniające, poprawiające elastyczność, koordynację i wytrzymałość, które mogą przyczynić się do lepszego funkcjonowania młodzieży zarówno w codziennych czynnościach, jak i w aktywnościach sportowych.</li>
          <li><strong>Wsparcie rozwoju fizycznego:</strong> Zapewnienie, że młodzież rozwija się w sposób zdrowy i zrównoważony, uwzględniając indywidualne potrzeby i możliwości fizyczne każdego pacjenta.</li>
          <li><strong>Terapia:</strong> Techniki i metody, które pomagają w łagodzeniu bólu, na przykład bólu pleców, kolan, barków czy innych części ciała, które mogą być obciążone w wyniku aktywności fizycznej, złej postawy lub innych przyczyn.</li>
          <li><strong>Rehabilitacja pooperacyjna:</strong> Wsparcie w powrocie do  pełnej sprawności po zabiegach chirurgicznych, takich jak operacje ortopedyczne, przez indywidualnie dobrane programy rehabilitacyjne.</li>
        </ol>
        <p>Fizjoterapia młodzieży jest kluczowa dla zapewnienia zdrowego rozwoju i zapobiegania problemom zdrowotnym, które mogą wpływać na jakość życia młodych ludzi w przyszłości.</p>
        `,
        price: "130,00 zł",
        time: "1g",
        personId: [2],
      },
      {
        serviceName: "Trening funkcjonalny dzieci i młodzieży",
        description: `<p>Trening funkcjonalny dla dzieci i młodzieży to forma ćwiczeń fizycznych skoncentrowana na poprawie zdolności do wykonywania codziennych czynności i aktywności sportowych.</p>
        <p>Celem jest rozwój siły, elastyczności, koordynacji, równowagi i wytrzymałości w sposób, który jest dostosowany do wieku i zdolności fizycznych młodych osób. Trening funkcjonalny jest holistycznym podejściem, które uwzględnia wszechstronny rozwój motoryczny.</p>
        <p>Korzyści Treningu Funkcjonalnego:</p>
        <ul>
          <li>Poprawa sprawności ogólnej</li>
          <li>Prewencja urazów</li>
          <li>Lepsza postawa</li>
          <li>Zwiększenie pewności siebie</li>
          <li>Zabawa i motywacja</li>
        </ul>
        <p><strong>Dostosowanie do Wiek i Poziomu Zaawansowania</strong></p>
        <ol>
          <li>Indywidualizacja Treningu</li>
          <ul>
            <li><strong>Programy dostosowane do indywidualnych potrzeb:</strong> Trening jest dostosowany do wieku, poziomu zaawansowania i specyficznych potrzeb każdego dziecka.</li>
          </ul>
          <li>Progresywność Ćwiczeń</li>
          <ul>
            <li><strong>Stopniowe zwiększanie intensywności:</strong> Ćwiczenia są stopniowo trudniejsze, aby dostosować się do rosnących możliwości fizycznych dziecka.</li>
          </ul>
        </ol>
        `,
        price: "150,00 zł",
        time: "50min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia dzieci",
        description: `<p>Fizjoterapia dzieci to specjalistyczna dziedzina medycyny, która koncentruje się na diagnozowaniu, leczeniu i zapobieganiu problemom zdrowotnym oraz wspieraniu prawidłowego rozwoju ruchowego i funkcjonalnego dzieci. Celem fizjoterapii dziecięcej jest poprawa jakości życia poprzez wspomaganie rozwijania umiejętności ruchowych, eliminowanie bólu i dysfunkcji oraz wspieranie zdrowego rozwoju. Obejmuje różne techniki i podejścia dostosowane do indywidualnych potrzeb i możliwości dziecka.</p>
        <p>Główne cele fizjoterapii dzieci:</p>
        <ul>
        <li>Poprawa sprawności ruchowej</li>
        <li>Korygowanie wad postawy</li>
        <li>Leczenie i zapobieganie urazom</li>
        <li>Poprawa koordynacji i równowagi</li>
        </ul>
        `,
        price: "130,00 zł",
        time: "50min",
        personId: [2],
      },
      {
        serviceName: "Fizjoterapia niemowląt",
        description: `<p>Fizjoterapia niemowląt koncentruje się na wspieraniu prawidłowego rozwoju ruchowego dzieci od urodzenia do około 12 miesięcy. Celem fizjoterapii niemowląt jest wczesne wykrywanie, diagnozowanie i leczenie wszelkich zaburzeń ruchowych oraz wspomaganie harmonijnego rozwoju dziecka.</p>
        <p>Główne aspekty fizjoterapii niemowląt obejmują:</p>
        <ol>
          <li><strong>Wczesna interwencja:</strong> usprawnianie ruchowe w takich trudnościach jak asymetrie, zaburzenia napięcia mięśniowego, opóźnienia w osiąganiu kamieni milowych rozwoju ruchowego.</li>
          <li><strong>Stymulacja rozwoju ruchowego:</strong> wykorzystanie metody NDT-Bobath, wspieranie rozwoju motorycznego dziecka.</li>
          <li><strong>Wsparcie dla rodziców:</strong> Edukacja rodziców na temat prawidłowej pielęgnacji, noszenia, karmienia oraz stymulacji rozwoju dziecka w codziennych czynnościach. Rodzice uczą się, jak wspierać rozwój swojego dziecka poprzez odpowiednie ćwiczenia i zabawy.</li>
          <li><strong>Ocena rozwoju:</strong> Regularna ocena rozwoju ruchowego niemowlęcia, aby w razie potrzeby modyfikować plan terapii i dostosowywać go do aktualnych potrzeb dziecka.</li>
        </ol>
        <p>Wczesna interwencja może zapobiec późniejszym problemom zdrowotnym i wspomóc dziecko w osiąganiu pełni jego potencjału rozwojowego. Terapeuci współpracują z rodzicami, aby zapewnić spójność i ciągłość opieki, co jest niezbędne dla skutecznej terapii</p>
        `,
        price: "130,00 zł",
        time: "50min",
        personId: [2],
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
        description: `<p>To proces, którego celem jest poprawa funkcjonowania dziecka w środowisku domowym 
        oraz przedszkolnym/szkolnym. Wykorzystując naturalną potrzebę zabawy i ruchu terapeuta SI dobiera aktywności 
        w taki sposób, by układ nerwowy dziecka był „usatysfakcjonowany”, a reakcja adaptacyjna (czyli odpowiedź na bodziec) stała się adekwatna do sytuacji. Podczas zajęć dziecko korzysta ze specjalistycznego sprzętu jak: hamak, różnego typu huśtawki, deskorolka, piłka rehabilitacyjna czy tor równoważny dlatego konieczne jest zapewnienie mu wygody. Podczas zajęć obowiązuje strój sportowy (dres/spodenki/getry i koszulka) oraz spięte włosy. Terapia SI odbywa się w kontakcie indywidualnym i trwa 50 minut.</p>
        <p><strong>WAŻNE: terapią SI może być objęte dziecko posiadające aktualną diagnozę procesów przetwarzania sensorycznego (nie starszą niż 6 miesięcy).</strong></p>`,
        price: "120,00 zł",
        time: "50min",
        personId: [3],
      },
      {
        serviceName: "Wydanie dokumentu",
        description: `<p>Pisemna ocena rozwoju procesów integracji sensorycznej, informacja na temat postępów dziecka w toku terapii.</p>`,
        price: "50,00 zł",
        time: "5min",
        personId: [3],
      },
      {
        serviceName: "Konsultacja SI",
        description: `<p>Konsultacja z terapeutą SI to badanie przesiewowe dedykowane dla wszystkich rodziców, którzy nie mają pewności, czy zaobserwowane trudności dziecka są uwarunkowane deficytami w zakresie przetwarzania sensorycznego. Spotkanie odbywa się w towarzystwie dziecka i obejmuje wywiad z rodzicem/prawnym opiekunem oraz wybrane próby diagnostyczne. Spotkanie kończy się ustną informacją zwrotną na temat zgłaszanego problemu i (w przypadku, gdy wskazane jest przeprowadzenie pełnej diagnozy SI) może być traktowane jako pierwsze spotkanie diagnostyczne.</p>
        <h3>Konsultacja a pełna diagnoza procesów przetwarzania sensorycznego – w czym tkwi różnica?</h3>
        <p><strong>Diagnoza SI</strong> to trwający 3 spotkania proces (patrz: Diagnoza SI), który polega na pełnym badaniu przetwarzania sensorycznego dziecka. Diagnoza kończy się wydaniem pisemnej opinii, szczegółowym jej omówieniem i wyjaśnieniem oraz przekazaniem zaleceń do dalszej pracy.</p>
        <p><strong>Konsultacja SI</strong> to ok. 75min spotkanie przesiewowe z rodzicem/prawnym opiekunem i dzieckiem, podczas którego omawiany jest konkretny problem i „niepokój” rodzica. Konsultacja kończy się ustnym przekazaniem spostrzeżeń i zaleceń do dalszej pracy. Do objęcia dziecka terapią SI konieczne jest przeprowadzenie pełnej diagnozy SI.</p>
        `,
        price: "100,00 zł",
        time: "1g 15min",
        personId: [3],
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
        description: `<p><strong>Część I</strong> obejmuje szczegółowy wywiad z rodzicem/opiekunem prawnym na temat okresu przed narodzeniem dziecka, okresu okołoporodowego oraz czasu po narodzinach. <strong>Konieczne jest zabranie ze sobą: książeczki zdrowia dziecka, kompletu ewentualnych badań i konsultacji specjalistycznych oraz opinii wychowawcy ze żłobka lub przedszkola.</strong> Spotkanie odbywa się bez obecności dziecka i trwa około 50 minut. Na zakończenie spotkania rodzic/opiekun prawny otrzymuje Kwestionariusz Rozwoju Sensomotorycznego dziecka. Wypełniony dokument należy zabrać ze sobą na II część diagnozy SI.</p>
        `,
        price: "50,00 zł",
        time: "50min",
        personId: [3],
      },
      {
        serviceName: "Część II - Obserwacja Kliniczna",
        description: `<p><strong>Część II (w przypadku dziecka do 4 r.ż.)</strong> obejmuje obserwację dziecka podczas spontanicznej zabawy oraz konkretnych zadań i aktywności. Konieczne jest zapewnienie dziecku wygodnego stroju (spodnie dresowe/getry, koszulka). Spotkanie trwa około 1 godziny.</p>`,
        price: "200,00 zł",
        time: "1g",
        personId: [3],
      },
      {
        serviceName: "Część III - Omówienie diagnozy (bez dziecka)",
        description: `<p><strong>Część III</strong> obejmuje omówienie procesów przetwarzania sensorycznego dziecka, zalecenia do dalszej pracy w warunkach domowych oraz do ewentualnej pracy terapeutycznej. Spotkanie odbywa się bez obecności dziecka, trwa około 30 minut i kończy się wydaniem pisemnej opinii.</p>`,
        price: "100,00 zł",
        time: "30min",
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
        description: `<p><strong>Część I</strong> obejmuje szczegółowy wywiad z rodzicem/opiekunem prawnym na temat okresu przed narodzeniem dziecka, okresu okołoporodowego oraz czasu po narodzinach. <strong>Konieczne jest zabranie ze sobą: książeczki zdrowia dziecka, kompletu ewentualnych badań i konsultacji specjalistycznych oraz opinii wychowawcy przedszkola lub szkoły.</strong> Spotkanie odbywa się bez obecności dziecka i trwa około 50 minut. Na zakończenie spotkania rodzic/opiekun prawny otrzymuje Kwestionariusz Rozwoju Sensomotorycznego dziecka. Wypełniony dokument należy zabrać ze sobą na II część diagnozy SI.</p>
        `,
        price: "50,00 zł",
        time: "50min",
        personId: [3],
      },
      {
        serviceName: "Część II - Obserwacja Kliniczna + testy",
        description: `<p><strong>Część II (w przypadku dziecka powyżej 4 r.ż.)</strong> obejmuje Obserwację Kliniczną (w skład której wchodzi szereg zadań sprawdzających poziom umiejętności planowania ruchowego, koordynacji, reakcji równoważnych, itp.) oraz specjalistyczne testy (sprawdzające m.in. reakcję na polecenia słowne, percepcję dotykową czy wyczucie rytmu). Konieczne jest zapewnienie dziecku wygodnego stroju (spodnie dresowe/getry, koszulka, skarpetki). Spotkanie trwa około 1,5 godziny.</p>`,
        price: "200,00 zł",
        time: "1g",
        personId: [3],
      },
      {
        serviceName: "Część III - Omówienie diagnozy (bez dziecka)",
        description: `<p><strong>Część III</strong> obejmuje omówienie procesów przetwarzania sensorycznego dziecka, zalecenia do dalszej pracy w warunkach domowych oraz do ewentualnej pracy terapeutycznej. Spotkanie odbywa się bez obecności dziecka, trwa około 30 minut i kończy się wydaniem pisemnej opinii.</p>`,
        price: "100,00 zł",
        time: "30min",
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
        description: `<p>Masaż klasyczny to popularna forma masażu, której celem jest zmniejszenie napięcia mięśniowego, poprawa elastyczności skóry i mięśni oraz poprawa krążenia krwi. Masaż ten wykorzystuje techniki łagodne jak i intensywne.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [1, 4],
      },
      {
        serviceName: "Masaż gorącymi kamieniami",
        description: `<p>Masaż wykonywany gorącymi kamieniami bazaltowymi poprawia krążenie, rozszerza naczynia krwionośne, powoduje głębokie roluźnienie mięśni oraz zapewnia poczucie głębokiego relaksu.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Masaż relaksacyjny",
        description: `<p>Głównym celem masażu relaksacyjnego jest redukcja stresu i napięcia oraz promowanie ogólnego poczucia odprężenia i spokoju. Masaż ten pomaga w uspokojeniu układu nerwowego, poprawie krążenia krwi, a także może wspomagać lepszy sen i ogólne samopoczucie.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Masaż tkanek głębokich",
        description: `<p>Masaż tkanek głębokich skupia się na głębszych warstwach mięśni i tkanki łącznej. Stosowany jest jako narzędzie do rozwiązywania problemów w obrębie układu mięśniowego.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [1, 4],
      },
      {
        serviceName: "Masaż leczniczy",
        description: `<p>Masaż leczniczy ma na celu łagodzenie bólu, poprawę funkcji mięśni i stawów, poprawę krążenia krwi. Zwiększa elastyczność mięśni i stawów. Stosowany jest w jako wsparcie w terapii wielu dolegliwości zdrowotnych.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Drenaż limfatyczny ",
        description: `<p>Drenaż limfatyczny wspomaga pracę układu krążenia, redukuje obrzęki, wspiera przepływ limfy w organizmie. Zalecany osobom pracującym w pozycji stojącej oraz z tendencją do pojawiania się obrzęków nóg.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Drenaż limfatyczny mechaniczny",
        description: `<p>Drenaż limfatyczny mechaniczny wykonywany jest aparatem Normatec. Pozwala na zmniejszenie obrzęków, redukcje uczucia ciężkich nóg, przyspiesza powrót do sprawności po zabiegach endoprotezy biodra i kolana, rozluźnia mięśnie oraz jest świetnym rozwiązaniem regeneracyjnym po intensywnym treningu.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Masaż antycellulitowy",
        description: `<p>Masaż antycellulitowy to zabieg, w którym wykorzystuje się intensywne techniki masażu. Wpływa na poprawę krążenia krwi i limfy. Zmniejsza widoczność cellulitu, ujędrnia skórę i poprawia jej kondycję.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Masaż pistoletem do masażu",
        description: `<p>Masaż pistoletem do masażu jest nowoczesnym sposobem na radzenie sobie ze wzmożonym napięciem mięśniowym. Wykorzystując pistolet do masażu mamy możliwość precyzyjnego rozluźnienia struktur mięśniowych, co znacząco poprawia skuteczność i zadowolenie</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
      {
        serviceName: "Masaż kobido",
        description: `<p>Japoński lifting twarzy, który ujędrnia skórę, poprawia kontury twarzy i zmniejsza widoczność zmarszczek. Ponadto zmniejsza napięcie mięśniowe i wspomaga krążenie krwi i limfy, co przyczynia się do lepszego dotlenienia i odżywienia skóry.</p>`,
        price: "150,00 zł",
        time: "1g",
        personId: [4],
      },
    ],
  },
];
