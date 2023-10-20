function alpha(ch) {
  i = 0;
  test = true;
  while (test == true && i < ch.length) {
    if (
      (ch[i] >= "A" && ch[i] <= "Z") ||
      (ch[i] >= "a" && ch[i] <= "z") ||
      ch[i] == " "
    ) {
      i++;
    } else {
      test = false;
    }
  }
  return test;
}

function verif() {
  np = document.getElementById("np").value;
  ne = document.getElementById("ne").value;
  de = document.getElementById("de").value;
  ds = document.getElementById("ds").value;
  dn = document.getElementById("dn").value;
  mail = document.getElementById("mail").value;
  phone = document.getElementById("phone").value;

  g1 = document.getElementById("g1").checked;
  g2 = document.getElementById("g2").checked;

  if (np == "") {
    alert("inserer votre nom");
    return false;
  }

  if (alpha(np) == false) {
    alert("nom et prenom doit etre alphabitique");
    return false;
  }

  if (ne < 0 || ne > 5) {
    alert("le nombre d'enfants maximal est 5");
    return false;
  }

  if (dn == "") {
    alert("donner votre date de naissance");
    return false;
  }

  if (g1 == false && g2 == false) {
    alert("selectionner votre genre");
    return false;
  }

  if ((String(phone).length < 8 && isNaN(phone)) || phone == "") {
    alert("donner votre numero de telephone");
    return false;
  }

  function findmail(b, ch) {
    a = 0;
    for (let i = 0; i < ch.length; i++) {
      if (ch[i] == b) {
        a++;
      }
    }
    return a == 1;
  }

  m = mail.indexOf("@");
  ch1 = mail.substring(0, m);
  ch2 = mail.substring(m + 1, mail.length - 1);
  if (
    m == 0 ||
    m == mail.length - 1 ||
    ch2.indexOf(".") == -1 ||
    findmail("@", mail) == false
  ) {
    alert("adresse Email invalid ");
    return false;
  }

  de = new Date(de);
  d = new Date();
  if (de.getFullYear() < d.getFullYear()) {
    alert("date d'entrer invalide");
    return false;
  } else if (de.getMonth() + 1 < d.getMonth() + 1) {
    alert("moin de date d'entrer invalide");
    return false;
  } else if (de.getDay() < d.getDay()) {
    alert("le jour de la date d'entrer invalid");
    return false;
  }

  ds = document.getElementById("ds").value;
  ds = new Date(ds);
  n = new Date();
  if (ds.getFullYear() < n.getFullYear()) {
    alert("anneé de la date de sortie invalid");
    return false;
  } else if (ds.getMonth() + 1 < n.getMonth() + 1) {
    alert("moin de la date de sortie invalid");
    return false;
  } else if (ds.getDay() < n.getDay()) {
    alert("le jour de la date de sortie invalid");
    return false;
  }
  if (de == "") {
    alert("donner la date d'entreé");
  }
  if (ds == "") {
    alert("donner la date de sortie");
  }
}

//  if (tel.length == 0) {
//    alert("saisir votre numero");
//    return false;
//  }
//  if (Number(tel) != 8) {
//    alert("votre numero invalide");
//    return false;
//  }
  