export const usePressReleaseData = (lang) => {
  const content = {
    ru: {
      TITLE: "Жанна Байдашева приняла участие в первом заседании Совета женщин СВМДА и международной конференции по женскому предпринимательству в Баку",
      DATE: "14 апреля 2026 года | Баку, Азербайджан",
      LEAD: "14 апреля 2026 года в Баку в рамках деятельности Совещания по взаимодействию и мерам доверия в Азии (СВМДА) прошли два значимых события: учредительное заседание Совета женщин СВМДА и международная конференция «Развитие женского предпринимательства и совершенствование законодательства». Казахстан на обоих мероприятиях представляла Жанна Байдашева — член Национальной комиссии по делам женщин и семейно-демографической политики при Президенте РК, основатель Global Businesswomen Council (GBWC).",
      BLOCK1_TITLE: "БЛОК 1 — Совет женщин СВМДА",
      BLOCK1_TEXT: [
        "Первое заседание Совета женщин СВМДА открыли председатель Совета Бахар Мурадова и Генеральный секретарь организации Кайрат Сарыбай. В своих приветственных словах они подчеркнули, что создание нового органа является важным шагом в укреплении диалога и продвижении повестки гендерного равенства в Азии.",
        "С видеообращением к участникам выступила заместитель Генерального секретаря ООН, исполнительный директор структуры «ООН-Женщины» Сима Бахус, отметив ключевую роль экономического расширения прав женщин для устойчивого развития и социальной стабильности.",
        "Жанна Байдашева в своём выступлении назвала запуск Совета женщин СВМДА важным шагом в развитии международного диалога по вопросам расширения возможностей женщин, поддержки их лидерства и формирования устойчивых и инклюзивных экономик.",
        "По итогам заседания были приняты Рекомендации Совета женщин СВМДА — документ, направленный на расширение участия женщин в цифровой трансформации, предпринимательстве и климатической повестке, а также на укрепление регионального сотрудничества."
      ],
      BLOCK2_TITLE: "БЛОК 2 — Международная конференция",
      BLOCK2_TEXT: [
        "В рамках параллельного мероприятия СВМДА состоялась международная конференция «Развитие женского предпринимательства и совершенствование законодательства», собравшая представителей более десяти стран, в том числе Турции, Узбекистана, Пакистана и Монголии.",
        "В ходе первой панельной сессии участники обсудили применение искусственного интеллекта и цифровизации в малом и среднем бизнесе, механизмы государственной поддержки, льготное финансирование и грантовые программы для женщин-предпринимателей.",
        "Вторая панельная сессия была посвящена женскому лидерству в сфере экологической устойчивости: участники отметили возрастающую роль женщин в продвижении «зелёной» повестки и формировании долгосрочных стратегий развития.",
        "Жанна Байдашева в своём выступлении подчеркнула, что международные платформы диалога между государством, бизнесом и экспертным сообществом способствуют выработке эффективных решений по расширению экономических возможностей женщин и укреплению межстранового партнёрства в сфере инноваций."
      ],
      BACK_TO_HOME: "Вернуться на главную"
    },
    en: {
      TITLE: "Zhanna Baidasheva Participated in the Inaugural Meeting of the CICA Women's Council and an International Conference on Women's Entrepreneurship in Baku",
      DATE: "April 14, 2026 | Baku, Azerbaijan",
      LEAD: "On April 14, 2026, two significant events took place in Baku as part of the activities of the Conference on Interaction and Confidence Building Measures in Asia (CICA): the inaugural meeting of the CICA Women's Council and the international conference \"Development of Women's Entrepreneurship and Improvement of Legislation.\" Kazakhstan was represented at both events by Zhanna Baidasheva — a member of the National Commission for Women's Affairs and Family and Demographic Policy under the President of the Republic of Kazakhstan and founder of the Global Businesswomen Council (GBWC).",
      BLOCK1_TITLE: "BLOCK 1 — CICA Women's Council",
      BLOCK1_TEXT: [
        "The first meeting of the CICA Women's Council was opened by Council Chair Bahar Muradova and the Secretary General of the organization, Kairat Sarybay. In their welcoming remarks, they emphasized that the creation of this new body is a vital step in strengthening dialogue and advancing the gender equality agenda in Asia.",
        "Sima Bahous, UN Under-Secretary-General and Executive Director of UN Women, addressed the participants via video message, highlighting the key role of women's economic empowerment for sustainable development and social stability.",
        "In her speech, Zhanna Baidasheva described the launch of the CICA Women's Council as an important milestone in the development of international dialogue on women's empowerment, leadership support, and the formation of sustainable and inclusive economies.",
        "Following the meeting, the CICA Women's Council Recommendations were adopted — a document aimed at expanding women's participation in digital transformation, entrepreneurship, and the climate agenda, as well as strengthening regional cooperation."
      ],
      BLOCK2_TITLE: "BLOCK 2 — International Conference",
      BLOCK2_TEXT: [
        "As part of a parallel CICA event, an international conference titled \"Development of Women's Entrepreneurship and Improvement of Legislation\" was held, bringing together representatives from over ten countries, including Turkey, Uzbekistan, Pakistan, and Mongolia.",
        "During the first panel session, participants discussed the application of artificial intelligence and digitalization in small and medium-sized businesses, government support mechanisms, preferential financing, and grant programs for women entrepreneurs.",
        "The second panel session was dedicated to women's leadership in ecological sustainability: participants noted the increasing role of women in promoting the \"green\" agenda and shaping long-term development strategies.",
        "In her address, Zhanna Baidasheva emphasized that international platforms for dialogue between the state, business, and the expert community contribute to developing effective solutions for expanding women's economic opportunities and strengthening cross-country partnerships in innovation."
      ],
      BACK_TO_HOME: "Back to Home"
    }
  };
  return content[lang] || content.en;
};
