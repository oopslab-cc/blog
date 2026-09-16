// Adapted from GitHub's official Atom One Light and One Dark syntax themes.
// Low-contrast colors are adjusted while preserving their source hue.

const scopes = {
  comment: ["comment", "punctuation.definition.comment", "string.comment"],
  keyword: ["keyword", "storage.type", "storage.modifier"],
  operator: ["keyword.operator"],
  function: [
    "entity.name.function",
    "support.function",
    "meta.require",
    "keyword.other.special-method",
  ],
  type: [
    "entity.name.type",
    "entity.name.class",
    "support.class",
    "support.type",
  ],
  constant: ["constant", "constant.numeric", "constant.variable"],
  escape: [
    "constant.character.escape",
    "constant.other.color",
    "constant.other.symbol",
    "string.regexp",
  ],
  variable: ["variable", "meta.definition.variable"],
  parameter: ["variable.parameter"],
  string: ["string"],
  tag: ["entity.name.tag"],
  attribute: ["entity.other.attribute-name"],
  punctuation: [
    "punctuation.definition.parameters",
    "punctuation.definition.array",
    "punctuation.definition.separator",
    "punctuation.section.method",
    "punctuation.section.class",
    "meta.separator",
  ],
};

const rules = (color) => [
  {
    scope: scopes.comment,
    settings: { foreground: color.comment, fontStyle: "italic" },
  },
  { scope: scopes.keyword, settings: { foreground: color.purple } },
  { scope: scopes.operator, settings: { foreground: color.foreground } },
  { scope: scopes.function, settings: { foreground: color.blue } },
  { scope: scopes.type, settings: { foreground: color.yellow } },
  { scope: scopes.constant, settings: { foreground: color.orange } },
  { scope: scopes.escape, settings: { foreground: color.cyan } },
  { scope: scopes.variable, settings: { foreground: color.red } },
  { scope: scopes.parameter, settings: { foreground: color.foreground } },
  { scope: scopes.string, settings: { foreground: color.green } },
  { scope: scopes.tag, settings: { foreground: color.red } },
  { scope: scopes.attribute, settings: { foreground: color.orange } },
  { scope: scopes.punctuation, settings: { foreground: color.foreground } },
  {
    scope: [
      "punctuation.definition.heading",
      "punctuation.definition.identity",
    ],
    settings: { foreground: color.blue },
  },
  {
    scope: ["markup.bold", "punctuation.definition.bold"],
    settings: { foreground: color.orange, fontStyle: "bold" },
  },
  {
    scope: ["markup.italic", "punctuation.definition.italic"],
    settings: { foreground: color.purple, fontStyle: "italic" },
  },
  {
    scope: ["markup.heading", "markup.deleted"],
    settings: { foreground: color.red },
  },
  {
    scope: ["markup.inserted", "markup.raw"],
    settings: { foreground: color.green },
  },
  { scope: "markup.changed", settings: { foreground: color.purple } },
  { scope: "markup.link", settings: { foreground: color.cyan } },
  { scope: "markup.quote", settings: { foreground: color.orange } },
  { scope: "invalid", settings: { foreground: color.red } },
];

const light = {
  background: "#FFFDF8",
  foreground: "#383A42",
  comment: "#727379",
  cyan: "#027BAF",
  blue: "#366DE6",
  purple: "#A626A4",
  green: "#328432",
  red: "#CF4237",
  orange: "#986801",
  yellow: "#9B6901",
};

const dark = {
  background: "#1C1B1A",
  foreground: "#ABB2BF",
  comment: "#8F97A5",
  cyan: "#56B6C2",
  blue: "#61AFEF",
  purple: "#C678DD",
  green: "#98C379",
  red: "#E7737B",
  orange: "#D19A66",
  yellow: "#E5C07B",
};

const theme = (name, type, color) => ({
  name,
  type,
  colors: {
    "editor.background": color.background,
    "editor.foreground": color.foreground,
  },
  settings: rules(color),
});

export const atomOneLight = theme("oopslab Atom One Light", "light", light);
export const atomOneDark = theme("oopslab Atom One Dark", "dark", dark);
