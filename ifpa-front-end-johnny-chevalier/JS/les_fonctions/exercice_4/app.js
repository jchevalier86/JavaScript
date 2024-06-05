function codeNucleaire() {
    const confirmation = confirm("Avez vous les droits pour accéder aux codes nucléaires ? Soyez honnête s’il vous plait, cela peut être dangereux.");
    if (confirmation === true) {
        alert("Le code est abcd1234")
    } else {
        alert("vous n'avez pas les droits !!")
    }
}

codeNucleaire();