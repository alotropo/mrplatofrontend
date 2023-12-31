export interface PredicateRule {
  id: string;
  name: string;
  method: string;
}

export interface InferenceRule {
  id: string;
  name: string;
  method: string;
}

export interface EquivalenceRule {
  id: string;
  name: string;
  method: string;
}

export const Rules = {
  predicate: [
    {
      id: "1000",
      name: "generalização universal",
      method: "p(a) = ∀xp(x)",
    },
    {
      id: "1001",
      name: "Generalização Existencial:",
      method: "p(a) ⇒ ∃xp(x) ",
    },
    {
      id: "1002",
      name: "Particulação Universal",
      method: "∀xp(x) ⇒ p(a) ",
    },
    {
      id: "1003",
      name: "Particularização Existencia",
      method: "∃xp(x) ⇒ p(a) ",
    },
    {
      id: "1004",
      name: "De Morgan Universal:",
      method: " -∀xp(x) ⇒ x~p(x) ",
    },
    {
      id: "1005",
      name: "De Morgan Universal:",
      method: "∃x-p(x) ⇒ ~xp(x)",
    },
    {
      id: "1006",
      name: "De Morgan Existencial:",
      method: "~∃xp(x) ⇒ ∀x~p(x)",
    },
    {
      id: "1007",
      name: "De Morgan Existencial:",
      method: "∀x~~p(x) ⇒ ~∃xp(x)",
    },
  ] as PredicateRule[],
  inference: [
    {
      id: "1008",
      name: "Ad. Hipótese",
      method: "p ⇒ p",
    },
    {
      id: "1009",
      name: "Rem. Hipótese",
      method: "p ⇒ p → q",
    },
    {
      id: "1010",
      name: "Red. Absurdo",
      method: "p ⇒ ∼p",
    },
    {
      id: "1011",
      name: "Absorção",
      method: "p → q ⇒ p → (p → q)",
    },
    {
      id: "1012",
      name: "Adição_1",
      method: "p ⇒ p ∨ q",
    },
    {
      id: "1013",
      name: "Adição_2",
      method: "p ⇒ q ∨ p",
    },
    {
      id: "1014",
      name: "Conjunção_1",
      method: "p, q ⇒ p ∧ q",
    },
    {
      id: "1015",
      name: "Conjunção_2",
      method: "p, q ⇒ q ∧ p",
    },
    {
      id: "1016",
      name: "Dil. constr.",
      method: "p → q, r → s, p ∨ r ⇒ q ∨ s",
    },
    {
      id: "1017",
      name: "Dil. destr.",
      method: "p → q, r → s, ∼q ∨ ∼s ⇒ ∼p ∨ ∼r",
    },
    {
      id: "1018",
      name: "Modus ponens",
      method: "p → q, p ⇒ q",
    },
    {
      id: "1019",
      name: "Modus tollens",
      method: "p → q, ∼q ⇒ ∼p",
    },
    {
      id: "1020",
      name: "Sil. disj._1",
      method: "p ∨ q, ∼p ⇒ q",
    },
    {
      id: "1021",
      name: "Sil. disj._2",
      method: "p ∨ q, ∼q ⇒ p",
    },
    {
      id: "1022",
      name: "Sil. hipot",
      method: "p → q, q → r ⇒ p → r",
    },
    {
      id: "1023",
      name: "Simplificação_1",
      method: "p ∧ q ⇒ p",
    },
    {
      id: "1024",
      name: "Simplificação_2",
      method: "p ∧ q ⇒ q",
    },
  ] as InferenceRule[],
  equivalence: [
    {
      id: "1025",
      name: "Absorção_cd",
      method: "p → (p ∧ q) ⇔ p → q",
    },
    {
      id: "1026",
      name: "Absorção_cd",
      method: "p → q ⇔ p → (p ∧ q)",
    },
    {
      id: "1027",
      name: "Absorção_c",
      method: "p ∧ (p ∨ q) ⇔ p",
    },
    {
      id: "1028",
      name: "Absorção_d",
      method: "p ∨ (p ∧ q) ⇔ p",
    },
    {
      id: "1029",
      name: "Associação_c",
      method: "p ∧ (q ∧ r) ⇔ (p ∧ q) ∧ r",
    },
    {
      id: "1030",
      name: "Associação_c",
      method: "(p ∧ q) ∧ r ⇔ p ∧ (q ∧ r)",
    },
    {
      id: "1031",
      name: "Associação_d",
      method: "p ∨ (q ∨ r) ⇔ (p ∨ q) ∨ r",
    },
    {
      id: "1032",
      name: "Associação_d",
      method: "(p ∨ q) ∨ r ⇔ p ∨ (q ∨ r)",
    },
    {
      id: "1033",
      name: "Bicondicional_1",
      method: "p ↔ q ⇔ (p → q) ∧ (q → p)",
    },
    {
      id: "1034",
      name: "Bicondicional_1",
      method: "(p → q) ∧ (q → p) ⇔ p ↔ q",
    },
    {
      id: "1035",
      name: "Bicondicional_2",
      method: "p ↔ q ⇔ (∼p ∨ q) ∧ (∼q ∨ p)",
    },
    {
      id: "1036",
      name: "Bicondicional_2",
      method: "(∼p ∨ q) ∧ (∼q ∨ p) ⇔ p ↔ q",
    },
    {
      id: "1037",
      name: "Bicondicional_3",
      method: "p ↔ q ⇔ (p ∧ q) ∨ (∼p ∧ ∼q)",
    },
    {
      id: "1038",
      name: "Bicondicional_3",
      method: "(p ∧ q) ∨ (∼p ∧ ∼q) ⇔ p ↔ q",
    },
    {
      id: "1039",
      name: "Clavius",
      method: "p ⇔ ∼p → p",
    },
    {
      id: "1040",
      name: "Clavius",
      method: "∼p → p ⇔ p",
    },
    {
      id: "1041",
      name: "Comutação_c",
      method: "p ∧ q ⇔ q ∧ p",
    },
    {
      id: "1042",
      name: "Comutação_d",
      method: "p ∨ q ⇔ q ∨ p",
    },
    {
      id: "1043",
      name: "Complemento_1",
      method: "p ∨ ∼p ⇔ ⊤",
    },
    {
      id: "1044",
      name: "Complemento_1",
      method: "⊤ ⇔ p ∨ ∼p",
    },
    {
      id: "1045",
      name: "Complemento_2",
      method: "p ∧ ∼p ⇔ ⊥",
    },
    {
      id: "1046",
      name: "Complemento_2",
      method: "⊥ ⇔ p ∧ ∼p",
    },
    {
      id: "1047",
      name: "Condicional",
      method: "p → q ⇔ ∼p ∨ q",
    },
    {
      id: "1048",
      name: "Condicional",
      method: "∼p ∨ q ⇔ p → q",
    },
    {
      id: "1049",
      name: "Contrapositiva",
      method: "p → q ⇔ ∼q → ∼p",
    },
    {
      id: "1050",
      name: "Contrapositiva",
      method: "∼q → ∼p ⇔ p → q",
    },
    {
      id: "1051",
      name: "Morgan_c",
      method: "∼(p ∧ q) ⇔ ∼p ∨ ∼q",
    },
    {
      id: "1052",
      name: "Morgan_c",
      method: "∼p ∨ ∼q ⇔ ∼(p ∧ q)",
    },
    {
      id: "1053",
      name: "Morgan_d",
      method: "∼(p ∨ q) ⇔ ∼p ∧ ∼q",
    },
    {
      id: "1054",
      name: "Morgan_d",
      method: "∼p ∧ ∼q ⇔ ∼(p ∨ q)",
    },
    {
      id: "1055",
      name: "Distr._c",
      method: "p ∧ (q ∨ r) ⇔ (p ∧ q) ∨ (p ∧ r)",
    },
    {
      id: "1056",
      name: "Distr._c",
      method: "(p ∧ q) ∨ (p ∧ r) ⇔ p ∧ (q ∨ r)",
    },
    {
      id: "1057",
      name: "Distr._c2",
      method: "(p ∧ q) ∨ (r ∧ s) ⇔ (p ∨ (r ∧ s)) ∧ (q ∨ (r ∧ s))",
    },
    {
      id: "1058",
      name: "Distr._c2",
      method: "(p ∨ (r ∧ s)) ∧ (q ∨ (r ∧ s)) ⇔ (p ∧ q) ∨ (r ∧ s)",
    },
    {
      id: "1059",
      name: "Distr._d",
      method: "p ∨ (q ∧ r) ⇔ (p ∨ q) ∧ (p ∨ r)",
    },
    {
      id: "1060",
      name: "Distr._d",
      method: "(p ∨ q) ∧ (p ∨ r) ⇔ p ∨ (q ∧ r)",
    },
    {
      id: "1061",
      name: "Distr._d2",
      method: "(p ∨ q) ∧ (r ∨ s) ⇔ (p ∧ (r ∨ s)) ∨ (q ∧ (r ∨ s))",
    },
    {
      id: "1062",
      name: "Distr._d2",
      method: "(p ∧ (r ∨ s)) ∨ (q ∧ (r ∨ s)) ⇔ (p ∨ q) ∧ (r ∨ s)",
    },
    {
      id: "1063",
      name: "Distr._cc",
      method: "p → (q ∧ r) ⇔ (p → q) ∧ (p → r)",
    },
    {
      id: "1064",
      name: "Distr._cc",
      method: "(p → q) ∧ (p → r) ⇔ p → (q ∧ r)",
    },
    {
      id: "1065",
      name: "Distr._dc",
      method: "p → (q ∨ r) ⇔ (p → q) ∨ (p → r)",
    },
    {
      id: "1066",
      name: "Distr._dc",
      method: "(p → q) ∨ (p → r) ⇔ p → (q ∨ r)",
    },
    {
      id: "1067",
      name: "Dupla negação",
      method: "∼∼p ⇔ p",
    },
    {
      id: "1068",
      name: "Dupla negação",
      method: "p ⇔ ∼∼p",
    },
    {
      id: "1069",
      name: "Exportação-importação",
      method: "(p ∧ q) → r ⇔ p → (q → r)",
    },
    {
      id: "1070",
      name: "Exportação-importação",
      method: "p → (q → r) ⇔ (p ∧ q) → r",
    },
    {
      id: "1071",
      name: "Idempotência_c",
      method: "p ∧ p ⇔ p",
    },
    {
      id: "1072",
      name: "Idempotência_c",
      method: "p ⇔ p ∧ p",
    },
    {
      id: "1073",
      name: "Idempotência_d",
      method: "p ∨ p ⇔ p",
    },
    {
      id: "1074",
      name: "Idempotência_d",
      method: "p ⇔ p ∨ p",
    },
    {
      id: "1075",
      name: "Identidade_cc",
      method: "p ∧ ⊥ ⇔ ⊥",
    },
    {
      id: "1076",
      name: "Identidade_cc",
      method: "⊥ ⇔ p ∧ ⊥",
    },
    {
      id: "1077",
      name: "Identidade_ct",
      method: "p ∧ ⊤ ⇔ p",
    },
    {
      id: "1078",
      name: "Identidade_ct",
      method: "p ⇔ p ∧ ⊤",
    },
    {
      id: "1079",
      name: "Identidade_dc",
      method: "p ∨ ⊥ ⇔ p",
    },
    {
      id: "1080",
      name: "Identidade_dc",
      method: "p ⇔ p ∨ ⊥",
    },
    {
      id: "1081",
      name: "Identidade_dt",
      method: "p ∨ ⊤ ⇔ ⊤",
    },
    {
      id: "1082",
      name: "Identidade_dt",
      method: "⊤ ⇔ p ∨ ⊤",
    },
    {
      id: "1083",
      name: "Neg. condicional",
      method: "p ∨ ⊤ ⇔ ⊤",
    },
    {
      id: "1084",
      name: "Neg. condicional",
      method: "⊤ ⇔ p ∨ ⊤",
    },
    {
      id: "1085",
      name: "Neg. condicional",
      method: "∼(p → q) ⇔ p ∧ ∼q",
    },
    {
      id: "1086",
      name: "Neg. condicional",
      method: "p ∧ ∼q ⇔ ∼(p → q)",
    },
    {
      id: "1087",
      name: "Troca premissas",
      method: "p → (q → r) ⇔ q → (p → r)",
    },
    {
      id: "1088",
      name: "Troca premissas",
      method: "q → (p → r) ⇔ p → (q → r)",
    },
  ] as EquivalenceRule[],
};