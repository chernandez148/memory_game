window.onload = function () {
  const section = document.querySelector("section");

  //We Generate The Object
  const getData = () => [
    { imgSrc: "./img/2014_Forest_Hill_Drive.png", name: "j cole" },
    { imgSrc: "./img/Finding_Forever.png", name: "common" },
    { imgSrc: "./img/Free.png", name: "6lack" },
    { imgSrc: "./img/Good_Kid_Bad_City.png", name: "kendrick lamar" },
    { imgSrc: "./img/Malibu.png", name: "anderson paak" },
    {
      imgSrc: "./img/The_Miseducation_Of_Lauryn_Hill.png",
      name: "lauryn hill",
    },
    { imgSrc: "./img/The_Never_Story.png", name: "jid" },
    { imgSrc: "./img/Metaphorical_Music.png", name: "nujabes" },
    { imgSrc: "./img/2014_Forest_Hill_Drive.png", name: "j cole" },
    { imgSrc: "./img/Finding_Forever.png", name: "common" },
    { imgSrc: "./img/Free.png", name: "6lack" },
    { imgSrc: "./img/Good_Kid_Bad_City.png", name: "kendrick lamar" },
    { imgSrc: "./img/Malibu.png", name: "anderson paak" },
    {
      imgSrc: "./img/The_Miseducation_Of_Lauryn_Hill.png",
      name: "lauryn hill",
    },
    { imgSrc: "./img/The_Never_Story.png", name: "jid" },
    { imgSrc: "./img/Metaphorical_Music.png", name: "nujabes" },
  ];

  //Randomize
  const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  };

  //Card Generator Function
  const cardGenerator = () => {
    const cardData = randomize();
    //Generate HTML
    cardData.forEach((item) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList = "card";
      face.classList = "face";
      back.classList = "back";
      //Attach The Info To THe Card
      face.src = item.imgSrc;
      //Attch The Cards To The Section
      section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
      });
    });
  };

  cardGenerator();
};
