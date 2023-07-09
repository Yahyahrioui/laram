const data = [
  {
    chapter: "1. POLITIQUE DE SECURITE DES SYSTEMES D'INFORMATION",
    objectives: [
      {
        name: "Objectif 1",
        content:
          "Objectif 1 : Apporter à la sécurité des systèmes d'information (SI) une orientation et un soutien de la part de la direction de l'entité ou de l'IIV, conformément aux exigences métier et aux lois, règlements, directives et référentiels en vigueur.",
        roles: [
          {
            id: "64a6ed0e920478971f24368e",
            role_name: "POL-RISQUE",
          },
          {
            id: "64a6ed1b920478971f243690",
            role_name: "POL-FORMEL",
          },
          {
            id: "64a6ed81920478971f243695",
            role_name: "POL-PAS",
          },
          {
            id: "64a6ed98920478971f243697",
            role_name: "POL-TDB",
          },
        ],
      },
    ],
  },
  {
    chapter: "2. ORGANISATION DE LA SECURITE DES SYSTEMES D'INFORMATION",
    objectives: [
      {
        name: "Objectif 2",
        content:
          "Objectif 2 : Établir un cadre de gestion pour engager, puis vérifier la mise en œuvre et le fonctionnement de la sécurité du SI au sein de l'entité ou de l'IIV.",
        roles: [
          {
            id: "64a6eda4920478971f243699",
            role_name: "ORG-INTER-GOUV",
          },
          {
            id: "64a6edb4920478971f24369b",
            role_name: "ORG-INTER-RSSI",
          },
          {
            id: "64a6edbe920478971f24369d",
            role_name: "ORG-INTER-RESP",
          },
        ],
      },
      {
        name: "Objectif 3",
        content:
          "Objectif 3 : Assurer la sécurité du système d'information de l'entité ou de l'IIV en cas d'adoption du télétravail.",
        roles: [
          {
            id: "64a6edc9920478971f24369f",
            role_name: "ORG-TELETRAV-SEC",
          },
        ],
      },
    ],
  },
  {
    chapter: "3. SECURITE DES RESSOURCES HUMAINES",
    objectives: [
      {
        name: "Objectif 4",
        content:
          "Objectif 4 : S'assurer que le personnel et les contractuels comprennent leurs responsabilités et q'ils sont compétents pour remplir les fonctions que l'entité ou l'IIV envisage de leur confier.",
        roles: [
          {
            id: "64a6edd3920478971f2436a1",
            role_name: "RH-AVT-PERSON",
          },
          {
            id: "64a6ede7920478971f2436a3",
            role_name: "RH-AVT-COND",
          },
        ],
      },
      {
        name: "Objectif 5",
        content:
          "Objectif 5 : S'assurer que les employés et les contractuels sont conscients de leurs responsabilités en matière de sécurité des SI et q'ils assument ces responsabilités.",
        roles: [
          {
            id: "64a6edf7920478971f2436a5",
            role_name: "RH-APRES-FORM",
          },
        ],
      },
      {
        name: "Objectif 6",
        content:
          "Objectif 6 : Protéger les intérêts de l'entité ou de l'IIV dans le cadre du processus de modification, de rupture ou de terme d'un contrat de travail.",
        roles: [
          {
            id: "64a6edfb920478971f2436a7",
            role_name: "RH-FIN-GEST",
          },
        ],
      },
    ],
  },
  {
    chapter: "4. GESTION DES ACTIFS INFORMATIONNELS",
    objectives: [
      {
        name: "Objectif 7",
        content:
          "Objectif 7 : Identifier les actifs informationnels de l'entité ou de l'IIV et définir les responsabilités appropriées en matière de protection.",
        roles: [
          {
            id: "64a6ee09920478971f2436a9",
            role_name: "ACTIF-RESP-INV",
          },
          {
            id: "64a6ee13920478971f2436ab",
            role_name: "ACTIF-RESP-PROP",
          },
          {
            id: "64a6ee20920478971f2436ad",
            role_name: "ACTIF-RESP-CHARTE",
          },
          {
            id: "64a6ee2d920478971f2436af",
            role_name: "ACTIF-RESP-CARTO",
          },
        ],
      },
      {
        name: "Objectif 8",
        content:
          "Objectif 8 : S'assurer que les actifs informationnels bénéficient d'un niveau de protection approprié conforme à leur importance pour l'entité ou pour l'IIV.",
        roles: [
          {
            id: "64a6ee38920478971f2436b1",
            role_name: "ACTIF-CLASSIF-INFO",
          },
          {
            id: "64a6ee41920478971f2436b3",
            role_name: "ACTIF-CLASSIF-MES",
          },
          {
            id: "64a6ee49920478971f2436b5",
            role_name: "ACTIF-CLASSIF-EXAM",
          },
        ],
      },
      {
        name: "Objectif 9",
        content:
          "Objectif 9 : Empêcher la divulgation, la modification, le retrait ou la destruction non autorisé(e) de l'information de l'entité ou de l'IIV stockée sur des supports et assurer la sécurité de l'utilisation des appareils mobiles.",
        roles: [
          {
            id: "64a6ee53920478971f2436b7",
            role_name: "ACTIF-SUP-AMOV",
          },
          {
            id: "64a6ee5c920478971f2436b9",
            role_name: "ACTIF-SUP-MOBIL",
          },
          {
            id: "64a6ee65920478971f2436bb",
            role_name: "ACTIF-SUP-NOMAD",
          },
          {
            id: "64a6ee6f920478971f2436bd",
            role_name: "ACTIF-SUP-REB",
          },
        ],
      },
    ],
  },
  {
    chapter: "5. CONTROLE D'ACCES",
    objectives: [
      {
        name: "Objectif 10",
        content:
          "Objectif 10 : Limiter l'accès à l'information et aux moyens de traitement de l'information.",
        roles: [
          {
            id: "64a6ee80920478971f2436c1",
            role_name: "ACC-EXIG-POL",
          },
        ],
      },
      {
        name: "Objectif 11",
        content:
          "Objectif 11 : Maîtriser l'accès utilisateur par le biais d'autorisations et empêcher les accès non autorisés aux systèmes et services d'information.",
        roles: [
          {
            id: "64a6ee9c920478971f2436c5",
            role_name: "ACC-UTILIS-ENREGIS / DESINSCRI",
          },
          {
            id: "64a6eead920478971f2436c7",
            role_name: "ACC-UTILIS-IDF / AUTH",
          },
          {
            id: "64a6eeb9920478971f2436c9",
            role_name: "ACC-UTILIS-HABILIT",
          },
          {
            id: "64a6eec3920478971f2436cb",
            role_name: "ACC-UTILIS-GENERIQ",
          },
          {
            id: "64a6eece920478971f2436cd",
            role_name: "ACC-UTILIS-REVUE",
          },
        ],
      },
      {
        name: "Objectif 12",
        content:
          "Objectif 12 : Empêcher les accès non autorisés aux systèmes et aux applications.",
        roles: [
          {
            id: "64a6eedb920478971f2436cf",
            role_name: "ACC-SYS / APP-ACC",
          },
          {
            id: "64a6eee7920478971f2436d1",
            role_name: "ACC-SYS / APP-PRIVIL",
          },
          {
            id: "64a6eef4920478971f2436d3",
            role_name: "ACC-SYS / APP-MDP",
          },
        ],
      },
    ],
  },
  {
    chapter: "6. CRYPTOGRAPHIE",
    objectives: [
      {
        name: "Objectif 13",
        content:
          "Objectif 13 : Garantir l'utilisation correcte et efficace de la cryptographie en vue de protéger la confidentialité, l'authenticité et l'intégrité de l'information.",
        roles: [
          {
            id: "64a6ef01920478971f2436d5",
            role_name: "CRYPTO-MES-POL",
          },
          {
            id: "64a6ef09920478971f2436d7",
            role_name: "CRYPTO-MES-GESTCLE",
          },
        ],
      },
    ],
  },
  {
    chapter: "7. SECURITE PHYSIQUE ET ENVIRONNEMENTALE",
    objectives: [
      {
        name: "Objectif 14",
        content:
          "Objectif 14 : Empêcher tout accès physique non autorisé, tout dommage ou intrusion portant sur l'information et les moyens de traitement de l'information de l'entité ou de l'IIV.",
        roles: [
          {
            id: "64a70777c06610bcab3bac68",
            role_name: "PHYS-ZONE-DECOUP",
          },
          {
            id: "64a6ef27920478971f2436db",
            role_name: "PHYS-ZONE-PROC",
          },
          {
            id: "64a6ef33920478971f2436dd",
            role_name: "PHYS-ZONE-DISPO",
          },
          {
            id: "64a6ef3a920478971f2436df",
            role_name: "PHYS-ZONE-VIDEOPRT",
          },
          {
            id: "64a6ef42920478971f2436e1",
            role_name: "PHYS-ZONE-INCEN",
          },
          {
            id: "64a6ef50920478971f2436e3",
            role_name: "PHYS-ZONE-EAU ",
          },
        ],
      },
      {
        name: "Objectif 15",
        content:
          "Objectif 15 : Empêcher la perte, l'endommagement, le vol ou la compromission des actifs informationnels et l'interruption des activités de l'entité ou de l'IIV.",
        roles: [
          {
            id: "64a6ef60920478971f2436e7",
            role_name: "PHYS-MAT-CABL",
          },
          {
            id: "64a6ef65920478971f2436e9",
            role_name: "PHYS-MAT-OND",
          },
          {
            id: "64a6ef6d920478971f2436eb",
            role_name: "PHYS-MAT-ELECTROG",
          },
          {
            id: "64a6ef74920478971f2436ed",
            role_name: "PHYS-MAT-CLIM",
          },
          {
            id: "64a6ef7d920478971f2436ef",
            role_name: "PHYS-MAT-EQUIP",
          },
          {
            id: "64a6ef86920478971f2436f1",
            role_name: "PHYS-MAT-HORSLOC",
          },
        ],
      },
    ],
  },
  {
    chapter: "8. SECURITE LIEE A L'EXPLOITATION",
    objectives: [
      {
        name: "Objectif 16",
        content:
          "Objectif 16 : S'assurer de l'exploitation correcte et sécurisée des moyens de traitement de l'information.",
        roles: [
          {
            id: "64a6ef8f920478971f2436f3",
            role_name: "EXP-PROC-CHANG",
          },
          {
            id: "64a6ef98920478971f2436f5",
            role_name: "EXP-PROC-CAP",
          },
          {
            id: "64a6ef9f920478971f2436f7",
            role_name: "EXP-PROC-ENVIR",
          },
        ],
      },
      {
        name: "Objectif 17",
        content:
          "Objectif 17 : Garantir que l'information et les moyens de traitement de l'information sont protégés contre les logiciels malveillants.",
        roles: [
          {
            id: "64a6efa8920478971f2436f9",
            role_name: "EXP-PROTEC-MALVEIL",
          },
        ],
      },
      {
        name: "Objectif 18",
        content: "Objectif 18: Se protéger de la perte de données.",
        roles: [
          {
            id: "64a6efaf920478971f2436fb",
            role_name: "EXP-SAUV-PROC",
          },
          {
            id: "64a6efb6920478971f2436fd",
            role_name: "EXP-SAUV-RESTAUR",
          },
          {
            id: "64a6efbe920478971f2436ff",
            role_name: "EXP-SAUV-SEC",
          },
        ],
      },
      {
        name: "Objectif 19",
        content:
          "Objectif 19 : Enregistrer les événements et générer des preuves.",
        roles: [
          {
            id: "64a6efc9920478971f243701",
            role_name: "EXP-JOURN / SURV-JOURNAL",
          },
          {
            id: "64a6efd9920478971f243703",
            role_name: "EXP-JOURN / SURV-PRIVIL",
          },
          {
            id: "64a6efe7920478971f243705",
            role_name: "EXP-JOURN / SURV-MAINT",
          },
          {
            id: "64a6f03d920478971f24370b",
            role_name: "EXP-JOURN / SURV SYNCHRON",
          },
          {
            id: "64a6f048920478971f24370d",
            role_name: "EXP-JOURN / SURV-DIST",
          },
          {
            id: "64a6f055920478971f24370f",
            role_name: "EXP-JOURN / SURV - CENTR",
          },
        ],
      },
      {
        name: "Objectif 20",
        content:
          "Objectif 20: Garantir l'intégrité des systèmes en exploitation et empêcher toute exploitation des vulnérabilités techniques.",
        roles: [
          {
            id: "64a6f05e920478971f243711",
            role_name: "EXP-SYS-CONFIG",
          },
          {
            id: "64a6f066920478971f243713",
            role_name: "EXP-SYS-DURC",
          },
          {
            id: "64a6f06e920478971f243715",
            role_name: "EXP-VULN-INSTALL",
          },
          {
            id: "64a6f076920478971f243717",
            role_name: "EXP-VULN-GEST",
          },
          {
            id: "64a6f07f920478971f243719",
            role_name: "EXP-VULN-CORRECT",
          },
        ],
      },
      {
        name: "Objectif 21",
        content:
          "Objectif 21 : Réduire au minimum l'incidence des activités d'audit sur les systèmes en exploitation.",
        roles: [
          {
            id: "64a6f087920478971f24371b",
            role_name: "EXP-AUDIT-MES",
          },
        ],
      },
    ],
  },
  {
    chapter: "9. SECURITE DES COMMUNICATIONS",
    objectives: [
      {
        name: "Objectif 22",
        content:
          "Objectif 22 : Garantir la protection des informations sur les réseaux et des moyens de traitement de l'information sur lesquels elle s'appuie.",
        roles: [
          {
            id: "64a6f094920478971f24371d",
            role_name: "COM-MANAG-CLOISON",
          },
          {
            id: "64a6f09c920478971f24371f",
            role_name: "COM-MANAG-FILTRAGE",
          },
          {
            id: "64a6f0aa920478971f243721",
            role_name: "COM-MANAG-SYSAUT",
          },
          {
            id: "64a6f0bc920478971f243723",
            role_name: "COM-MANAG-DISTANT",
          },
          {
            id: "64a6f0c8920478971f243725",
            role_name: "COM-MANAG-TUNEL",
          },
          {
            id: "64a6f0d0920478971f243727",
            role_name: "COM-MANAG-RSF",
          },
        ],
      },
      {
        name: "Objectif 23",
        content:
          "Objectif 23 : Maintenir la sécurité de l'information transférée au sein de l'entité ou de l'IIV et vers l'extérieur.",
        roles: [
          {
            id: "64a6f0da920478971f243729",
            role_name: "COM-TRANS-FICHIER",
          },
          {
            id: "64a6f0e2920478971f24372b",
            role_name: "COM-TRANS-MESS",
          },
          {
            id: "64a6f0ef920478971f24372d",
            role_name: "COM-TRANS-FILTR",
          },
        ],
      },
    ],
  },
  {
    chapter:
      "10. ACQUISITION, DEVELOPPEMENT ET MAINTENANCE DES SYSTEMES D'INFORMATION",
    objectives: [
      {
        name: "Objectif 24",
        content:
          "Objectif 24 : Veiller à ce que la sécurité fasse partie intégrante des SI tout au long de leur cycle de vie.",
        roles: [
          {
            id: "64a6f0fb920478971f24372f",
            role_name: "DEV-EXIG-PROJET",
          },
          {
            id: "64a6f110920478971f243731",
            role_name: "DEV-EXIG-TRANSAC",
          },
        ],
      },
      {
        name: "Objectif 25",
        content:
          "Objectif 25: S'assurer que la sécurité de l'information est mise en œuvre dans le cadre du cycle de développement des SI conformément aux référentiels et guides en vigueur.",
        roles: [
          {
            id: "64a6f118920478971f243733",
            role_name: "DEV-PROC-POL",
          },
          {
            id: "64a6f121920478971f243735",
            role_name: "DEV-PROC-CHANG",
          },
          {
            id: "64a6f12a920478971f243737",
            role_name: "DEV-PROC-ENVIR",
          },
          {
            id: "64a6f132920478971f243739",
            role_name: "DEV-PROC-TEST",
          },
          {
            id: "64a6f139920478971f24373b",
            role_name: "DEV-PROC-CODE",
          },
          {
            id: "64a6f143920478971f24373d",
            role_name: "DEV-PROC-DONNEE",
          },
        ],
      },
    ],
  },
  {
    chapter: "11. RELATIONS AVEC LES FOURNISSEURS",
    objectives: [
      {
        name: "Objectif 26",
        content:
          "Objectif 26 : Garantir la protection des actifs de l'entité ou de l'IIV accessibles aux fournisseurs.",
        roles: [
          {
            id: "64a6f14d920478971f24373f",
            role_name: "FOURNIS-REL-RISQ",
          },
          {
            id: "64a6f154920478971f243741",
            role_name: "FOURNIS-REL-POL",
          },
          {
            id: "64a6f15e920478971f243743",
            role_name: "FOURNIS-REL-EXIG",
          },
        ],
      },
      {
        name: "Objectif 27",
        content:
          "Objectif 27 : Maintenir un niveau convenu de sécurité de l'information et de prestation de services, conformément aux accords conclus avec les fournisseurs.",
        roles: [
          {
            id: "64a6f168920478971f243745",
            role_name: "FOURNIS-GEST-SURVEIL",
          },
        ],
      },
    ],
  },
  {
    chapter: "12. GESTION DES INCIDENTS DE CYBERSECURITE",
    objectives: [
      {
        name: "Objectif 28",
        content:
          "Objectif 28 : Garantir une méthode cohérente et efficace de détection et de traitement des incidents de cybersécurité, incluant la communication des événements et des failles liés à la sécurité.",
        roles: [
          {
            id: "64a6f170920478971f243747",
            role_name: "INCID-GEST-PROC",
          },
          {
            id: "64a6f177920478971f243749",
            role_name: "INCID-GEST-CAT",
          },
          {
            id: "64a6f17d920478971f24374b",
            role_name: "INCID-GEST-SIGNAL",
          },
          {
            id: "64a6f184920478971f24374d",
            role_name: "INCID-GEST-QUALIF",
          },
          {
            id: "64a6f18d920478971f24374f",
            role_name: "INCID-GEST-REPONSE",
          },
          {
            id: "64a6f197920478971f243751",
            role_name: "INCID-GEST-ALERT",
          },
          {
            id: "64a6f1a3920478971f243753",
            role_name: "INCID-GEST-REP",
          },
          {
            id: "64a6f1ac920478971f243755",
            role_name: "INCID-GEST-PREUV",
          },
        ],
      },
    ],
  },
  {
    chapter: "13. GESTION DE LA CONTINUITE DE L'ACTIVITE",
    objectives: [
      {
        name: "Objectif 29",
        content:
          "Objectif 29 : Neutraliser les interruptions des activités de l'entité ou de l'IIV, protéger les processus métier cruciaux des effets causés par les défaillances des systèmes d'information ou par des sinistres et garantir une reprise de ces processus dans les meilleurs délais.",
        roles: [
          {
            id: "64a6f1b8920478971f243757",
            role_name: "CONTINU-BIA",
          },
          {
            id: "64a6f1c0920478971f243759",
            role_name: "CONTINU-ACT",
          },
          {
            id: "64a6f1c6920478971f24375b",
            role_name: "CONTINU-PLAN",
          },
          {
            id: "64a6f1cd920478971f24375d",
            role_name: "CONTINU-EXERCICE",
          },
        ],
      },
    ],
  },
  {
    chapter: "14. CONFORMITE",
    objectives: [
      {
        name: "Objectif 30",
        content:
          "Objectif 30 : Éviter toute violation des obligations légales, statutaires, réglementaires ou contractuelles relatives à la sécurité des SI.",
        roles: [
          {
            id: "64a6f1d5920478971f24375f",
            role_name: "CONF-OBLIG-IDF",
          },
          {
            id: "64a6f1dd920478971f243761",
            role_name: "CONF-OBLIG-CYBERSEC",
          },
          {
            id: "64a6f1e6920478971f243763",
            role_name: "CONF-OBLIG-INTELLECT",
          },
          {
            id: "64a6f200920478971f243765",
            role_name: "CONF-OBLIG-PERSO",
          },
          {
            id: "64a6f207920478971f243767",
            role_name: "CONF-OBLIG-CRYPTO",
          },
        ],
      },
      {
        name: "Objectif 31",
        content:
          "Objectif 31 : Garantir que la sécurité des SI est mise en œuvre et appliquée conformément aux politiques et procédures organisationnelles.",
        roles: [
          {
            id: "64a6f211920478971f243769",
            role_name: "CONF-REVU-SSI",
          },
        ],
      },
    ],
  },
];

export default data;