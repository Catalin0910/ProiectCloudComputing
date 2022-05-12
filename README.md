Documentatie proiect Cloud Computing


Aplicatie pentru cautarea cartilor dorite
Nume: Cebuc Gabriel-Catalin
Grupa: 1117


Link acces aplicatie: https://catalin0910.github.io/
Link acces video: https://youtu.be/CLv9YCn7vMo
Link GitHub: https://github.com/Catalin0910/catalin0910.github.io
1.	Introducere

Aplicatia pe care am dezvoltat-o dispune de un sistem de logare cu ajutorul google OAuth2 si foloseste api-ul google book pentru a cauta toate cartile pe care noi le dorim.

2.	Probabil majoritatea am incercat sa cautam la un moment dat o carte pe google si sa ne apara cu totul si cu totul alte recomandari decat cele pe care noi le dorim, de aceea aplicatia pe care am dezvoltat-o cauta toate cartile disponibile pe google pentru tine. De exemplu, daca vrei sa cauti o carte pentru Java, dar nu stii ce carte ai vrea sa citesti, aplicatia iti va returna toate cartile pe care aceasta le-a gasit, iar tu poti alege ce carte doresti sa citesti.

3.	Descriere API

a)	Api-ul pentru google OAuth2, asa cum ii spune si numele ne permite sa ne conectam la aplicatie folosind contul de Gmail.

 
Figura 1 – Conectare la aplicatie Folosind Google OAuth2


b)	Api-ul google book te ajuta sa folosesti Google Books in site-ul/aplicatia pe care ai realizat-o. Acest api te lasa sa folosesti majoritatea functionalitatilor si interactiunilor pe care le faci pe site-ul Google Books.
 
Figura 2 – Utilizare API Google Book

4.	Flux de date
Primul pas pe care il avem de facut atunci cand intram in aplicatie este acela sa ne logam, dar am creat optiunea si de a nu te loga pentru a accesa pagina principala.
 
Figura 3 – Cod pagina Login
Dupa cum se observa in figura, avem cele doua butoane care ne permit sa ne logam sau nu si un ClientID. Acest Client ID este primit dupa ce aplicatia noastra a fost incarcata pe google developer platform. Daca acest pas nu ar fi efectuat nu am avea posibilitatea de a utiliza api-ul pentru google OAuth2.
Pentru Api-ul google book am realizat un get pentru a prelua toate cartile de pe Google.
 
Figura 4 – Utilizare API Google Book
5.	Capturi ecran
 
Figura 5 – HomePage


 
Figura 6 – Main Page
 
Figura 7 – Cautare carte
 
Figura 8 – Mai multe informatii despre carte
 
Figura 9 – Dupa apasarea butonului “Info Link”
 
Figura 10 – Dupa apasarea butonului “Preview Link”


