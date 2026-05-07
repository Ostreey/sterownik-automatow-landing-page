export type Locale = "pl" | "en";

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "pl";
}

const translations = {
  pl: {
    nav: {
      features: "Funkcje",
      products: "Produkty",
      pricing: "Cennik",
      faq: "FAQ",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      title: "Sterownik do odkurzacza myjni bezdotykowej",
      subtitle:
        "Uniwersalny sterownik elektroniczny do odkurzaczy jedno- i dwustanowiskowych. Przyjmuje monety i karty, konfiguracja z wyswietlacza lub przez WiFi.",
      cta: "Zamow sterownik",
      ctaSecondary: "Zobacz specyfikacje",
    },
    features: {
      title: "Kluczowe funkcje",
      subtitle: "Wszystko czego potrzebujesz w jednym sterowniku",
      payment: {
        title: "3 wejscia platnosci",
        description:
          "2x wrzutnik monet (Comestero RM5, EMP 800) + terminal kartowy Nayax. Standardowa kostka 10-pin.",
      },
      relay: {
        title: "2 wyjscia przekaznikowe",
        description:
          "Max 230V, 6A na kanal. Obsluga odkurzaczy 1- i 2-stanowiskowych. Do 4 wyjsc na zamowienie.",
      },
      wifi: {
        title: "WiFi + zdalna konfiguracja",
        description:
          "Wbudowany webserver do zdalnej konfiguracji. OTA firmware updates. Nie musisz jechac na myjnie zeby zmienic ustawienia.",
      },
      display: {
        title: "Wyswietlacz TFT",
        description:
          "Konfiguracja z pozycji urzadzenia. Niezalezne czasy per wyjscie, statystyki platnosci, tryby pracy.",
      },
      buttons: {
        title: "Tryb przyciskow",
        description:
          "Klient wrzuca monete i wybiera stanowisko przyciskiem. Idealne dla odkurzaczy dwustanowiskowych.",
      },
      stats: {
        title: "Statystyki platnosci",
        description:
          "Podglad zarobkow z monet i kart oddzielnie. Reset statystyk. Pelna kontrola nad przychodami.",
      },
    },
    products: {
      title: "Nasze produkty",
      subtitle: "Sterownik i akcesoria do odkurzaczy na myjniach",
      controller: {
        title: "Sterownik do odkurzaczy",
        description:
          "Glowny produkt — steruje platnosciami i uruchamia odkurzacze. Wersja 1-2 stanowiskowa (4 na zamowienie).",
      },
      displayLed: {
        title: "Wyswietlacz impulsow LED",
        description:
          "Duze czerwone cyfry 7-segmentowe (5x7 cm). Modbus RTU, zasilanie 24V z sterownika. Plytka 13x8 cm.",
      },
      displayLcd: {
        title: "Wyswietlacz impulsow LCD",
        description:
          "Kolorowy ekran z impulsami, pogoda, zegarem i dniem tygodnia. Modbus RTU, zasilanie 24V.",
      },
    },
    pricing: {
      title: "Cennik",
      subtitle: "Przejrzyste ceny bez ukrytych kosztow",
      contact: "Zamow teraz",
      customNote: "Potrzebujesz wersji 4-stanowiskowej lub niestandardowej konfiguracji? Skontaktuj sie z nami.",
    },
    faq: {
      title: "Najczesciej zadawane pytania",
      items: [
        {
          q: "Czy sterownik pasuje do mojego odkurzacza?",
          a: "Tak — sterownik jest uniwersalny. Steruje przekaznikami 230V/6A, wiec podlaczysz go do kazdego odkurzacza na myjni bezdotykowej.",
        },
        {
          q: "Jakie wrzutniki monet sa kompatybilne?",
          a: "Kazdy wrzutnik z wyjsciem impulsowym na standardowej kostce 10-pinowej. Potwierdzamy kompatybilnosc z Comestero RM5 Evolution i EMP 800.",
        },
        {
          q: "Czy moge podlaczyc terminal Nayax?",
          a: "Tak — sterownik ma dedykowane wejscie na terminal kartowy z wyjsciem impulsowym. Nayax to najczesciej stosowany terminal na myjniach.",
        },
        {
          q: "Czy dostane instrukcje podlaczenia?",
          a: "Tak — do kazdego sterownika dolaczamy szczegolowa instrukcje podlaczenia krok po kroku. Mozesz tez skontaktowac sie z nami telefonicznie.",
        },
        {
          q: "Jak skonfigurowac czasy pracy?",
          a: "Z pozycji wyswietlacza TFT — wchodzisz w menu Czas i ustawiasz niezaleznie dla kazdego wyjscia. Mozesz tez konfigurowac zdalnie przez WiFi.",
        },
        {
          q: "Czy sterownik obsluguje 4 stanowiska?",
          a: "Standardowo obsluguje 1-2 stanowiska. Wersja 4-stanowiskowa dostepna na zamowienie — skontaktuj sie z nami.",
        },
      ],
    },
    contact: {
      title: "Zamow lub zapytaj",
      subtitle: "Napisz do nas lub zadzwon — odpowiadamy szybko",
      name: "Imie i nazwisko",
      email: "Email",
      phone: "Telefon (opcjonalnie)",
      message: "Wiadomosc",
      send: "Wyslij wiadomosc",
      success: "Wiadomosc wyslana! Odezwiemy sie wkrotce.",
      error: "Blad wysylania. Sprobuj ponownie lub zadzwon.",
      orCall: "lub zadzwon / napisz na WhatsApp",
    },
    footer: {
      description:
        "Sterowniki elektroniczne do odkurzaczy na myjniach bezdotykowych. Sprawdzone na dziesieciach urzadzen.",
      links: "Przydatne linki",
      contactTitle: "Kontakt",
    },
    blog: {
      title: "Blog",
      subtitle: "Poradniki, instrukcje i wiedza o myjniach bezdotykowych",
      readMore: "Czytaj dalej",
      backToBlog: "Powrot do bloga",
      publishedOn: "Opublikowano",
    },
  },
  en: {
    nav: {
      features: "Features",
      products: "Products",
      pricing: "Pricing",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Vacuum Controller for Self-Service Car Washes",
      subtitle:
        "Universal electronic controller for single and dual-station vacuum cleaners. Accepts coins and cards, configurable via display or WiFi.",
      cta: "Order controller",
      ctaSecondary: "See specifications",
    },
    features: {
      title: "Key Features",
      subtitle: "Everything you need in one controller",
      payment: {
        title: "3 payment inputs",
        description:
          "2x coin acceptor (Comestero RM5, EMP 800) + Nayax card terminal. Standard 10-pin connector.",
      },
      relay: {
        title: "2 relay outputs",
        description:
          "Max 230V, 6A per channel. Supports 1 and 2-station vacuums. Up to 4 outputs on request.",
      },
      wifi: {
        title: "WiFi + remote configuration",
        description:
          "Built-in web server for remote configuration. OTA firmware updates. No need to visit the car wash to change settings.",
      },
      display: {
        title: "TFT display",
        description:
          "On-device configuration. Independent timers per output, payment statistics, operating modes.",
      },
      buttons: {
        title: "Button mode",
        description:
          "Customer inserts coin and selects station with a button. Ideal for dual-station vacuums.",
      },
      stats: {
        title: "Payment statistics",
        description:
          "Separate coin and card earnings overview. Statistics reset. Full revenue control.",
      },
    },
    products: {
      title: "Our Products",
      subtitle: "Controller and accessories for car wash vacuums",
      controller: {
        title: "Vacuum Controller",
        description:
          "Main product — manages payments and activates vacuum cleaners. 1-2 station version (4 on request).",
      },
      displayLed: {
        title: "LED Pulse Display",
        description:
          "Large red 7-segment digits (5x7 cm). Modbus RTU, 24V powered from controller. PCB 13x8 cm.",
      },
      displayLcd: {
        title: "LCD Pulse Display",
        description:
          "Color screen showing pulses, weather, clock, and day of week. Modbus RTU, 24V power.",
      },
    },
    pricing: {
      title: "Pricing",
      subtitle: "Transparent prices with no hidden costs",
      contact: "Order now",
      customNote: "Need a 4-station version or custom configuration? Contact us.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Will the controller work with my vacuum?",
          a: "Yes — the controller is universal. It controls 230V/6A relays, so it connects to any self-service car wash vacuum.",
        },
        {
          q: "Which coin acceptors are compatible?",
          a: "Any coin acceptor with pulse output on a standard 10-pin connector. Confirmed compatible with Comestero RM5 Evolution and EMP 800.",
        },
        {
          q: "Can I connect a Nayax terminal?",
          a: "Yes — the controller has a dedicated input for card terminals with pulse output. Nayax is the most common terminal at car washes.",
        },
        {
          q: "Will I get installation instructions?",
          a: "Yes — every controller comes with detailed step-by-step installation instructions. You can also reach us by phone.",
        },
        {
          q: "How do I configure operating times?",
          a: "Via the TFT display — enter the Time menu and set independently for each output. You can also configure remotely via WiFi.",
        },
        {
          q: "Does the controller support 4 stations?",
          a: "Standard version supports 1-2 stations. 4-station version available on request — contact us.",
        },
      ],
    },
    contact: {
      title: "Order or ask a question",
      subtitle: "Write to us or call — we respond quickly",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      message: "Message",
      send: "Send message",
      success: "Message sent! We will get back to you soon.",
      error: "Sending failed. Try again or call us.",
      orCall: "or call / WhatsApp",
    },
    footer: {
      description:
        "Electronic controllers for vacuum cleaners at self-service car washes. Proven on dozens of devices.",
      links: "Useful Links",
      contactTitle: "Contact",
    },
    blog: {
      title: "Blog",
      subtitle: "Guides, instructions, and knowledge about self-service car washes",
      readMore: "Read more",
      backToBlog: "Back to blog",
      publishedOn: "Published on",
    },
  },
} as const;

export type Translations = (typeof translations)["pl"] | (typeof translations)["en"];

export function getTranslations(locale: Locale) {
  return translations[locale];
}
