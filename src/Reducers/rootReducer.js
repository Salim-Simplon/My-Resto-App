const initState = {
  foods: [
    {
      id: "1",
      name: "PETITE FAIM",
      compo: "PITAS TOASTÉES, LA PLANCHE DE PITAS, SOUPE OU GASPACHO DU MOMENT, Mozzarella Di Buffala",
      photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/05/carte-Pita-che%CC%80vre-noix.jpg",
      prix: "23.000"
    },
    {
      id: "2",
      name: "LA VIE EST BELLE EN SALADE",
      compo: "VITAMINÉ DÉTOX, CAESAR AU PARADIS, BURRATA D’ENFER, MAMA CHEF SALADE",
      photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/05/carte-Mama-salade-crevettes.jpg",
      prix: "27.000"
    },
    {
      id: "3",
      name: "SUPER BOWL ÉNERGIE",
      compo: "VITAMINÉ DÉTOX, Sashimi de saumon frais, Falafel de courgette, DELUXE Mer Rouge",
      photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/05/carte-Super-bowl-falafel.jpg",
      prix: "26.500"
    },
    {
      id: "4",
      name: "TOAST Y TOAST A !",
      compo: "GOODY WOODY, BANQUISE SAUVAGE, BROOKLYN AVENUE, MAMA CHICKEN CARRY, BANQUISE SAUVAGE",
      photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/05/carte-Goody-woody.jpg",
      prix: "31.000"
    },
    {
      id: "5",
      name: "STREET PARADIS",
      compo: "FALAFEL EN FÊTE, FISH & CHIPS, BURGGIE’S ® Comme un burger, VEGAN BURGER",
      photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/05/carte-Fish-_-chips.jpg",
      prix: "28.000"
    },
    {
        id: "6",
        name: "MOJITOS",
        compo: "MOJITO FRUIT",
        photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/05/carte-item-01.jpg",
        prix: "5.500"
      },
      {
        id: "7",
        name: "COCKTAILS",
        compo: "fraise, coco, mangue ou passion framboise",
        photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/06/carte-PDF_09092019-_20.jpg",
        prix: "4.000"
      },
      {
        id: "8",
        name: "PLAISIRS PARADIS",
        compo: "Prosecco Martini, ananas, citron vert, litchi, fruit de la passion",
        photo: "https://www.leparadisdufruit.fr/wp-content/uploads/2020/06/carte-PDF_09092019-_8.jpg",
        prix: "6.000"
      },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
