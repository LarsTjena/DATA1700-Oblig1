


let billettregister=[];

function visBillettRegister(){
    let ut = "<table><tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>"+
        "<th>Antall billetter</th><th>Film</th></tr>";
    for (let b of billettregister){
        ut+="<tr>";
        ut+="<td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td>"+
            "<td>"+b.epost+"</td><td>"+b.antall+"</td><td>"+b.film+"</td>";
        ut+="</tr>";
    }
    document.getElementById("billettregister").innerHTML=ut;
}

function slett(){
    let ut =""
    billettregister = [];
    document.getElementById("billettregister").innerHTML=ut;
}

function sjekkAntall() {
    let antall = document.getElementById("antall").value;
    let antallMelding = document.getElementById("antallMelding");
    if (antall === "") {
        antallMelding.innerHTML="Vennligst oppgi et antall";
        return false;
    }
    else {
        antallMelding.innerHTML = "";
        return true;
    }
}
function sjekkFornavn() {
    let fornavn = document.getElementById("fornavn").value;
    let fornavnMelding = document.getElementById("fornavnMelding");
    if (fornavn === "") {
        fornavnMelding.innerHTML="Feltet fornavn kan ikke stå tomt";
        return false;
    }
    else {
        fornavnMelding.innerHTML = "";
        return true;
    }
}
function sjekkEtternavn() {
    let etternavn = document.getElementById("etternavn").value;
    let etternavnMelding = document.getElementById("etternavnMelding");
    if (etternavn === "") {
        etternavnMelding.innerHTML="Feltet etternavn kan ikke stå tomt";
        return false;
    }
    else {
        etternavnMelding.innerHTML = "";
        return true;
    }
}
function sjekkTelefonnr() {
    let telefonnr = document.getElementById("telefonnr").value;
    let telefonnrMelding = document.getElementById("telefonnrMelding");
    if (telefonnr === "") {
        telefonnrMelding.innerHTML="Feltet for telefonnummer kan ikke stå tomt";
        return false;
    }
    else {
        telefonnrMelding.innerHTML = "";
        return true;
    }
}
function sjekkEpost() {
    let epost = document.getElementById("epost").value;
    let epostMelding = document.getElementById("epostMelding");
    if (epost === "") {
        epostMelding.innerHTML="Feltet epost kan ikke stå tomt";
        return false;
    }
    else {
        epostMelding.innerHTML = "";
        return true;
    }
}

function kjop(){

    const testFornavn= sjekkFornavn();
    const testEtternavn = sjekkEtternavn();
    const testTelefonnr = sjekkTelefonnr();
    const testEpost = sjekkEpost();
    const testAntall = sjekkAntall();

    if (testFornavn && testEtternavn && testTelefonnr && testEpost && testAntall) {
        const fornavn = document.getElementById("fornavn").value;
        const etternavn = document.getElementById("etternavn").value;
        const telefonnr = document.getElementById("telefonnr").value;
        const epost = document.getElementById("epost").value;
        const antall = document.getElementById("antall").value;
        const film = document.getElementById("film").value;


        const billettkjop = {
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
            antall: antall,
            film: film
        }
        billettregister.push(billettkjop);
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("film").value="";
        visBillettRegister()
    }
}