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
      title: "Wymień sterownik w starym odkurzaczu — w 30 minut, bez wymiany całego urządzenia",
      subtitle:
        "Uniwersalny sterownik do samoobsługowych odkurzaczy na monety i karty. Pasuje do każdego odkurzacza na myjni, stacji paliw, parkingu.",
      cta: "Zamów — od 550 zł",
      ctaSecondary: "Zadzwoń: +48 605 048 487",
      trust1: "Sprawdzony na dziesiątkach urządzeń",
      trust2: "24 miesiące gwarancji",
      trust3: "Wysyłka w 48h",
    },
    features: {
      title: "Kluczowe funkcje",
      subtitle: "Wszystko czego potrzebujesz w jednym sterowniku",
      payment: {
        title: "3 wejścia płatności",
        description:
          "2x wrzutnik monet (Comestero RM5, EMP 800) + terminal kartowy Nayax. Przy każdej transakcji sterownik wysyła impuls do kasy fiskalnej Novitus — spełniasz wymóg przepisów bez dodatkowej elektroniki.",
      },
      relay: {
        title: "2 wyjścia przekaźnikowe",
        description:
          "Max 230V, 6A na kanał. Obsługa odkurzaczy 1- i 2-stanowiskowych. Do 4 wyjść na zamówienie.",
      },
      wifi: {
        title: "WiFi + zdalna konfiguracja",
        description:
          "Wbudowany webserver do zdalnej konfiguracji. OTA firmware updates. Nie musisz jechać na myjnię żeby zmienić ustawienia.",
      },
      display: {
        title: "Wyświetlacz TFT",
        description:
          "Konfiguracja z pozycji urządzenia. Niezależne czasy per wyjście, statystyki płatności, tryby pracy.",
      },
      buttons: {
        title: "Tryb przycisków",
        description:
          "Klient wrzuca monetę i wybiera stanowisko przyciskiem. Idealne dla odkurzaczy dwustanowiskowych.",
      },
      stats: {
        title: "Statystyki płatności",
        description:
          "Podgląd zarobków z monet i kart oddzielnie. Reset statystyk. Pełna kontrola nad przychodami.",
      },
    },
    products: {
      title: "Nasze produkty",
      subtitle: "Sterownik i akcesoria do odkurzaczy na myjniach",
      controller: {
        title: "Sterownik do odkurzaczy",
        description:
          "Główny produkt — steruje płatnościami i uruchamia odkurzacze. Wersja 1-2 stanowiskowa (4 na zamówienie).",
      },
      displayLed: {
        title: "Wyświetlacz impulsów LED",
        description:
          "Duże czerwone cyfry 7-segmentowe (5x7 cm). Modbus RTU, zasilanie 24V z sterownika. Płytka 13x8 cm.",
      },
      displayLcd: {
        title: "Wyświetlacz impulsów LCD",
        description:
          "Kolorowy ekran z impulsami, pogodą, zegarem i dniem tygodnia. Modbus RTU, zasilanie 24V.",
      },
    },
    pricing: {
      title: "Cennik",
      subtitle: "Przejrzyste ceny bez ukrytych kosztów",
      contact: "Zamów teraz",
      customNote: "Potrzebujesz wersji 4-stanowiskowej lub niestandardowej konfiguracji? Skontaktuj się z nami.",
    },
    faq: {
      title: "Najczęściej zadawane pytania",
      items: [
        {
          q: "Czy sterownik pasuje do mojego odkurzacza?",
          a: "Tak — sterownik jest uniwersalny. Steruje przekaźnikami 230V/6A, więc podłączysz go do każdego odkurzacza na myjni bezdotykowej.",
        },
        {
          q: "Jakie wrzutniki monet są kompatybilne?",
          a: "Każdy wrzutnik z wyjściem impulsowym na standardowej kostce 10-pinowej. Potwierdzamy kompatybilność z Comestero RM5 Evolution i EMP 800.",
        },
        {
          q: "Czy mogę podłączyć terminal Nayax?",
          a: "Tak — sterownik ma dedykowane wejście na terminal kartowy z wyjściem impulsowym. Nayax to najczęściej stosowany terminal na myjniach.",
        },
        {
          q: "Czy dostanę instrukcję podłączenia?",
          a: "Tak — do każdego sterownika dołączamy szczegółową instrukcję podłączenia krok po kroku. Możesz też skontaktować się z nami telefonicznie.",
        },
        {
          q: "Jak skonfigurować czasy pracy?",
          a: "Z pozycji wyświetlacza TFT — wchodzisz w menu Czas i ustawiasz niezależnie dla każdego wyjścia. Możesz też konfigurować zdalnie przez WiFi.",
        },
        {
          q: "Czy sterownik obsługuje 4 stanowiska?",
          a: "Standardowo obsługuje 1-2 stanowiska. Wersja 4-stanowiskowa dostępna na zamówienie — skontaktuj się z nami.",
        },
        {
          q: "Czy sterownik współpracuje z kasą fiskalną Novitus?",
          a: "Tak — sterownik obsługuje kasę fiskalną Novitus, wymaganą przepisami na myjniach bezdotykowych. Integracja działa obok wrzutnika monet i terminala Nayax.",
        },
      ],
    },
    contact: {
      title: "Zamów lub zapytaj",
      subtitle: "Napisz do nas lub zadzwoń — odpowiadamy szybko",
      name: "Imię i nazwisko",
      email: "Email",
      phone: "Telefon (opcjonalnie)",
      message: "Wiadomość",
      send: "Wyślij wiadomość",
      success: "Wiadomość wysłana! Odezwiemy się wkrótce.",
      error: "Błąd wysyłania. Spróbuj ponownie lub zadzwoń.",
      orCall: "lub zadzwoń / napisz na WhatsApp",
    },
    footer: {
      description:
        "Sterowniki elektroniczne do odkurzaczy na myjniach bezdotykowych. Sprawdzone na dziesiątkach urządzeń.",
      links: "Przydatne linki",
      contactTitle: "Kontakt",
    },
    blog: {
      title: "Blog",
      subtitle: "Poradniki, instrukcje i wiedza o myjniach bezdotykowych",
      readMore: "Czytaj dalej",
      backToBlog: "Powrót do bloga",
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
      cta: "Order — from 550 PLN",
      ctaSecondary: "Call: +48 605 048 487",
      trust1: "Proven on dozens of devices",
      trust2: "24-month warranty",
      trust3: "Shipping within 48h",
    },
    features: {
      title: "Key Features",
      subtitle: "Everything you need in one controller",
      payment: {
        title: "3 payment inputs",
        description:
          "2x coin acceptor (Comestero RM5, EMP 800) + Nayax card terminal. On each transaction, the controller sends a pulse to the Novitus fiscal printer — meets Polish fiscal regulations without extra electronics.",
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
        {
          q: "Does the controller work with a Novitus fiscal printer?",
          a: "Yes — the controller supports the Novitus fiscal printer, required by Polish regulations at self-service car washes. It works alongside the coin acceptor and Nayax terminal.",
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
