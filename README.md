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

 ![image](https://user-images.githubusercontent.com/61156868/168161976-8b3d4cb0-19ef-47af-83b0-5e68475a805a.png)

Figura 1 – Conectare la aplicatie Folosind Google OAuth2


b)	Api-ul google book te ajuta sa folosesti Google Books in site-ul/aplicatia pe care ai realizat-o. Acest api te lasa sa folosesti majoritatea functionalitatilor si interactiunilor pe care le faci pe site-ul Google Books.
 ![image](https://user-images.githubusercontent.com/61156868/168162030-15179dae-5e5c-4b7a-87ec-5cc1a6077953.png)

Figura 2 – Utilizare API Google Book

4.	Flux de date
Primul pas pe care il avem de facut atunci cand intram in aplicatie este acela sa ne logam, dar am creat optiunea si de a nu te loga pentru a accesa pagina principala.
 ![image](https://user-images.githubusercontent.com/61156868/168162057-c11e0342-75c4-4fc0-9d93-383aacf217d6.png)

Figura 3 – Cod pagina Login
Dupa cum se observa in figura, avem cele doua butoane care ne permit sa ne logam sau nu si un ClientID. Acest Client ID este primit dupa ce aplicatia noastra a fost incarcata pe google developer platform. Daca acest pas nu ar fi efectuat nu am avea posibilitatea de a utiliza api-ul pentru google OAuth2.
Pentru Api-ul google book am realizat un get pentru a prelua toate cartile de pe Google.
 ![image](https://user-images.githubusercontent.com/61156868/168162073-4112ba47-a81a-4e0f-aeb2-ea955ea62842.png)

Figura 4 – Utilizare API Google Book
5.	Capturi ecran
 ![image](https://user-images.githubusercontent.com/61156868/168162084-1b09cb93-83dd-4126-aa13-204a19dd8fa9.png)

Figura 5 – HomePage

![image](https://user-images.githubusercontent.com/61156868/168162094-27a5a610-29ba-47bc-9b09-a10a5314164a.png)

 
Figura 6 – Main Page
 ![image](https://user-images.githubusercontent.com/61156868/168162115-e8cd4160-24aa-4396-b252-4221bdf17250.png)

Figura 7 – Cautare carte
 ![image](https://user-images.githubusercontent.com/61156868/168162136-3154b506-289b-4e08-add6-0c609c5125b1.png)

Figura 8 – Mai multe informatii despre carte
 ![image](https://user-images.githubusercontent.com/61156868/168162145-f12b3af3-5ee7-48eb-a76d-06177c4c67a0.png)

Figura 9 – Dupa apasarea butonului “Info Link”
 ![image](https://user-images.githubusercontent.com/61156868/168162153-fdc440e1-4e55-4d5a-b42f-6a1734fec645.png)

Figura 10 – Dupa apasarea butonului “Preview Link”


