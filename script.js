function ENT(page) {
	if (page == 'CAS EP')  {window.location.href=('https://teleservices.ac-lille.fr/login/ct_logon_vk.jsp?CT_ORIG_URL=%2Fsso%2FSSO%3FSPEntityID%3Durn%3Afi%3Aent%3Alille-hdf-ts%3A1.0%26TARGET%3Dhttps%3A%2F%2Fwww.enthdf.fr%2F&ct_orig_uri=%2Fsso%2FSSO%3FSPEntityID%3Durn%3Afi%3Aent%3Alille-hdf-ts%3A1.0%26TARGET%3Dhttps%3A%2F%2Fwww.enthdf.fr%2F')}
	else if (page == 'CAS PROF') {window.location.href=('https://eduline.ac-lille.fr/eduline_profil/anonyme/logon.html')}
}

function navig(page){
	if (page == 'Accueil') {window.location.href=('Accueil.html')}
}

function vide(element){
	if (element <= 0 || element >= 20){
		return false
	} else {
		return true
	}
}

function calcul(){
	notet_cc = 0;
	surt_cc = 0;
	notet_et = 0;
	surt_et = 0;
	LVA = parseFloat(document.getElementById('LVA').value);
	LVB = parseFloat(document.getElementById('LVB').value);
	HG = parseFloat(document.getElementById('HG').value);
	ES = parseFloat(document.getElementById('ES').value);
	EPS = parseFloat(document.getElementById('EPS').value);
	SP0 = parseFloat(document.getElementById('SP0').value);
	B = parseFloat(document.getElementById('B').value);
	note_cc = [LVA, LVB, HG, ES, EPS, SP0, B];
	name_cc = ["Langue Vivante A Anglais", "Langue Vivante B Espagnol/Allemand", "Histoire-Géographie", "Enseignement Scientifique", "Education Physique et Sportive", "Enseignement de spécialité suivi uniquement en première", "Bulletins scolaire de première et de terminale"]
	sur_cc = [5, 5, 5, 5, 5, 5, 10]
	for (let i = 0; i <7; i = i+1) {
		ele = note_cc[i];
		if (0 <= ele && ele <= 20) {
			notele = ele * sur_cc[i];
			surele = 20 * sur_cc[i];
			notet_cc += notele;
			surt_cc += surele;
		} else if (vide(ele) == false) {
			message = "La note entré en "
			message += name_cc[i]
			message += " n'est pas entre 0 et 20, elle a donc pas été comptabilisé."
			alert(message)
		}
		alert(notet_cc + "  " + surt_cc)
	}
	PH = parseFloat(document.getElementById('PH').value);
	GO = parseFloat(document.getElementById('GO').value);
	SP1 = parseFloat(document.getElementById('SP1').value);
	SP2 = parseFloat(document.getElementById('SP2').value);
	FR = parseFloat(document.getElementById('FR').value);
	note_et = [PH, GO, SP1, SP2, FR]
	sur_et = [8, 10, 16, 16, 10]
	for (let i = 0; i <5; i = i+1) {
		ele = note_et[i];
		if (0 <= ele && ele <= 20) {
			notele = ele * sur_et[i];
			surele = 20 * sur_et[i];
			notet_et += notele;
			surt_et += surele;
		} else if (vide(ele) == false) {
			message = "La note entré en "
			message += name_cc[i]
			message += " n'est pas entre 0 et 20, elle a donc pas été comptabilisé."
			alert(message)
		}
	}
	moyenne = notet_cc + notet_et
	moyenne /= (surt_cc + surt_et)
	moyenne *= 20
	alert("Votre moyenne au BAC est de " + moyenne + "/20. ")
}
