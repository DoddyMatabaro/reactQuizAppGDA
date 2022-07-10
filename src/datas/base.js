class Libelle {
  constructor(titre, reponse, reponses) {
    this.titre = titre;
    this.reponse = reponse;
    this.reponses = reponses;
  }
}
  export const base = [ //questions base
      new Libelle("Quel est le type d'un fichier javascript ?",2,[".j",".jsx", ".js",".ts"]),
      new Libelle("La syntaxe correcte pour créer un objet vide en Js est :",0, ["let monObjet = {}", "let monObjet = []", "let monObjet = ()", "let monObjet = null"]),
      new Libelle("Ces mots permettent d'initialiser une variable, sauf :",2, ["var", "const", "function", "let"]),
      new Libelle("La bonne syntaxe pour écrire un commentaire sur ligne est :",0, ["// comment", "+ comment", "/* comment */", "# comment"]),
      // new Libelle("En le passant à la fonction isNaN, nous obtenons true :",2, ["300", "-2", "'3'", "0"]),
      // new Libelle("Vanilla JavaScript est :",3, ["Un framework javascript","Une librairie javascript", "Une marque de crême", "Du pur javascript"]),
      // new Libelle("Pour écrire sur la console Javacript on utilise :",0, ["console.log()", "console.write()", "console.print()", "alert()"]),
      // new Libelle("En JavaScript, les expressions regulières sont encadrées par :",2, ["'", "#", "/", "."]),
      // new Libelle("La balise qui permet d'inserer du code javascript est :",2, ["js", "script", "javascript", "link"]),
      // new Libelle("Pour executer JavaScript sur un serveur nous avons besion de :",2, ["ReactNative", "ReactJS", "NodeJs", "Composer"]),
      // new Libelle("Une variable non declarée aura pour valeur :",3, ["null", 0, "Object", "undefined"]),
      // new Libelle("Pour faire réference à un script js extene en html :",1, ["<script href='mon_script.js'>", "<script src='mon_script.js'>", "<link src='mon_script.js'>", "<rel link='mon_script.js'>"]),
      // new Libelle("Pour executer alert() chaque 5s, on écrira :",1, ["setInterval(alert, 5000)", "setTimeout(alert, 5)", "setInterval(alert, 5)", "forTime(alert, 5000)"]),
      // new Libelle("Le nom correct d'une variable est :",1, ["ma_variable", "ma variable", "ma-variable", "mavariable()"]),
      // new Libelle("L'object JavaScript qui gére le DOM est  :",3, ["HTMLElement", "DOM", "Node", "document"])
];