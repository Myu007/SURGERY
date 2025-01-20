const questions = [
  {
    question: 'Who was the founder of antiseptics in surgery?',
    answers: [
      {text: 'I.F. Bush', correct: false},
      {text: 'D. Lister', correct: true},
      {text: 'A.V. Sechenov', correct: false},
      {text: 'N.I. Pirogov', correct: false},
      {text: 'J.N. Korvisar', correct: false},
    ],
  },
  {
    question: 'Who proved the circular rotation of blood in the body during the Renaissance?',
    answers: [
      {text: 'Pare A.', correct: false},
      {text: 'Galen', correct: false},
      {text: 'Vesalius A.', correct: false},
      {text: 'Garvey V.', correct: true},
      {text: 'Ibn Sina', correct: false},
    ],
  },
  {
    question: 'Who was the founder of microbiology?',
    answers: [
      {text: 'Jenner', correct: false},
      {text: 'Ibn Sina', correct: false},
      {text: 'Hippocrates', correct: false},
      {text: 'D. Lister', correct: false},
      {text: 'L. Pasteur', correct: true},
    ],
  },
  {
    question: 'Who discovered the filtering virus?',
    answers: [
      {text: 'J.N. Korvisar', correct: false},
      {text: 'G. Helmholtz', correct: false},
      {text: 'I.F. Bush', correct: false},
      {text: 'A.V. Sechenov', correct: false},
      {text: 'Ivanovsky', correct: true},
    ],
  },
  {
    question: 'Thanks to whom did a new stage in the development of the anatomical direction in medicine begin - the creation of the doctrine of tissues?',
    answers: [
      {text: 'K. Bisha', correct: true},
      {text: 'J.N. Korvisar', correct: false},
      {text: 'I.F. Bush', correct: false},
      {text: 'K. Rokitansky', correct: false},
      {text: 'R. Virchow', correct: false},
    ],
  },
  {
    question: 'Who of the above was a pediatrician of the second half of the XIX century?',
    answers: [
      {text: 'Botkin S.P.', correct: false},
      {text: 'Ivanovsky', correct: false},
      {text: 'Sechenov A.V.', correct: false},
      {text: 'Sklifosovsky N.V.', correct: false},
      {text: 'Filatov N.F.', correct: true},
    ],
  },
  {
    question: 'Choose an ancient civilization in which surgery had the highest level of developmet:',
    answers: [
      {text: 'Ancient India', correct: true},
      {text: 'Ancient Greece', correct: false},
      {text: 'Ancient Rome', correct: false},
      {text: 'Ancient China', correct: false},
      {text: 'Ancient Egypt', correct: false},
    ],
  },
  {
    question: 'Choose a famous doctor of Ancient Greece:',
    answers: [
      {text: 'Avicenna', correct: false},
      {text: 'Galen', correct: false},
      {text: 'Garvey', correct: false},
      {text: 'Sushruta', correct: false},
      {text: 'Hippocrates', correct: true},
    ],
  },
  {
    question: 'Asepsis is a set of measures:',
    answers: [
      {text: 'to disinfect instruments', correct: false},
      {text: 'to combat infection in the wound', correct: false},
      {text: 'to disinfect the rooms', correct: false},
      {text: 'to sterilize instruments', correct: false},
      {text: 'to prevent infection from entering the wound', correct: true},
    ],
  },
  {
    question: 'Who was the founder of asepsis?',
    answers: [
      {text: 'Lister', correct: false},
      {text: 'Pasteur', correct: false},
      {text: 'Bergman', correct: true},
      {text: 'Bush', correct: false},
      {text: 'Dyakonov', correct: false},
    ],
  },
  {
    question: 'What is the sterilization?',
    answers: [
      {text: 'destruction of all microorganisms, including spore-forming ones', correct: true},
      {text: 'destruction of opportunistic microorganisms on instruments after their use', correct: false},
      {text: 'mechanical removal of microorganisms from the surgace of medical devices', correct: false},
      {text: 'a set of measures to prevent microbes from entering the wound', correct: false},
      {text: 'destruction of pathogenic microbes', correct: false},
    ],
  },
  {
    question: 'Which method is a physical sterilization?',
    answers: [
      {text: 'autoclaving', correct: true},
      {text: 'immersion in a 6% hydrogen peroxide solution', correct: false},
      {text: 'immersion in an iodine solution', correct: false},
      {text: 'immersion in a 70% ethyl acohol solution', correct: false},
      {text: 'exposure to formalin vapors', correct: false},
    ],
  },
  {
    question: 'What is the optimal methodd of preoperative hand treatment in terms of time and efficiency?',
    answers: [
      {text: 'pervomur', correct: true},
      {text: 'according to Furbringer', correct: false},
      {text: 'according to Alfeld', correct: false},
      {text: 'according to Lister', correct: false},
      {text: 'according to Spasokukotsky-Kochergin', correct: false},
    ],
  },
  {
    question: 'What is usesd to control the quality of preoperative hand treatment?',
    answers: [
      {text: 'thermal indicators', correct: false},
      {text: 'phenolphthalein test', correct: false},
      {text: 'bacteriological control', correct: true},
      {text: 'Mikulich\'s method', correct: false},
      {text: 'amidopyrine test', correct: false},
    ],
  },
  {
    question: 'Which solution of ammonia is used to wash hands according to Spasokukotsky-Kochergin?',
    answers: [
      {text: '2%', correct: false},
      {text: '1.50%', correct: false},
      {text: '0.50%', correct: true},
      {text: '1%', correct: false},
      {text: '3%', correct: false},
    ],
  },
  {
    question: 'How long is the general cleaning in the operating unit carried out?',
    answers: [
      {text: '1 time in a day', correct: false},
      {text: '1 time in a week', correct: true},
      {text: '1 time in 10 days', correct: false},
      {text: '1 time in 2 weeks', correct: false},
      {text: '1 time in a month', correct: false},
    ],
  },
  {
    question: 'How many hours does the sterility of the open bix remain?',
    answers: [
      {text: '8 hours', correct: false},
      {text: '10 hours', correct: false},
      {text: '6 hours', correct: true},
      {text: '12 hours', correct: false},
      {text: '24 hours', correct: false},
    ],
  },
  {
    question: 'The storage period of a closed sterile bix without a filter is no more than:',
    answers: [
      {text: '6 hours', correct: false},
      {text: '3 days', correct: true},
      {text: '1 day', correct: false},
      {text: '20 days', correct: false},
      {text: '2 days', correct: false},
    ],
  },
  {
    question: 'When packing the bix by type, they put in it:',
    answers: [
      {text: 'necessary for preparing the operating nurse for the operation', correct: false},
      {text: 'only one type of material', correct: true},
      {text: 'everything necessary for a certain operation', correct: false},
      {text: 'necessary for the surgeon', correct: false},
      {text: 'necessary during the working day of the dressing room', correct: false},
    ],
  },
  {
    question: 'Anesthetic and respiratory equipment is disinfected with a solution of:',
    answers: [
      {text: '96% ethyl alcohol - 20 min', correct: false},
      {text: '1% chloramine - 60 min', correct: false},
      {text: '96% ethyl alcohol - 10 min', correct: false},
      {text: '10% formaldehyde - 10 min', correct: false},
      {text: '3% hydrogen peroxide - 60 min', correct: true},
    ],
  },
  {
    question: 'Antiseptic is a method of prevention of:',
    answers: [
      {text: 'exogenous infection', correct: false},
      {text: 'endogenous infection', correct: false},
      {text: 'air and contact infection', correct: false},
      {text: 'endogenous and exogenous infection', correct: true},
      {text: 'implantation and contact infection', correct: false},
    ],
  },
  {
    question: 'J. Lister used as an antiseptic a solution of:',
    answers: [
      {text: 'carboxylic acid', correct: true},
      {text: 'acetic acid', correct: false},
      {text: 'formic acid', correct: false},
      {text: 'salicylic acid', correct: false},
      {text: 'boric acid', correct: false},
    ],
  },
  {
    question: 'One of the following measures can be attributed to mechanical antiseptics:',
    answers: [
      {text: 'performing surgical wound treatment', correct: true},
      {text: 'draining the wound with a two-light tube', correct: false},
      {text: 'vacuuming the wound', correct: false},
      {text: 'using ultrasonic cavitation', correct: false},
      {text: 'washing the wound with a solution of hydrogen peroxide', correct: false},
    ],
  },
  {
    question: 'The requirements for chemical antiseptics do NOT include:',
    answers: [
      {text: 'no mutagenic effect', correct: false},
      {text: 'the absence of the affect of inactivation by body tissues', correct: false},
      {text: 'maximum efficiency in minimum concentration', correct: false},
      {text: 'selectivity of action on microorganisms', correct: true},
      {text: 'no harmful effects on tissues', correct: false},
    ],
  },
  {
    question: 'Dry-burning sterilization is intended for:',
    answers: [
      {text: 'suture materila', correct: false},
      {text: 'all metal tools', correct: true},
      {text: 'optic material', correct: false},
      {text: 'cotton pads', correct: false},
      {text: 'dressing material', correct: false},
    ],
  },
  {
    question: 'What types of external influences is the HIV virus resistant to?',
    answers: [
      {text: 'chemical solutions', correct: false},
      {text: 'disinfectants', correct: false},
      {text: 'low temperatures', correct: false},
      {text: 'high temperatures', correct: false},
      {text: 'ultraviolet irradiation', correct: true},
    ],
  },
  {
    question: 'To control the temperature in air sterilizer is used:',
    answers: [
      {text: 'salicylic acid', correct: false},
      {text: 'nicotinamide', correct: false},
      {text: 'benzoic acid', correct: false},
      {text: 'saccharose', correct: true},
      {text: 'succinic acid', correct: false},
    ],
  },
  {
    question: 'Violation of the asepsis during injection can lead to:',
    answers: [
      {text: 'air embolism', correct: false},
      {text: 'lipodystrophy', correct: false},
      {text: 'nothing', correct: false},
      {text: 'abscess', correct: true},
      {text: 'allergic reaction', correct: false},
    ],
  },
  {
    question: 'The current cleaning in the operating room is carried out:',
    answers: [
      {text: 'at the end of the working day', correct: false},
      {text: 'twice a day', correct: false},
      {text: 'before the operation', correct: false},
      {text: 'during thw hole working day', correct: true},
      {text: 'once a day', correct: false},
    ],
  },
  {
    question: 'The amount of bleach for the preparation of a 10% solution:',
    answers: [
      {text: '1 kg of bleach per 5 liters of water', correct: false},
      {text: '100 g of bleach per 5 liters of water', correct: false},
      {text: '1 kg of bleach per 9 liters of water', correct: true},
      {text: '100 g of bleach per 9.9 liters of water', correct: false},
      {text: '100 g of bleach per 10 liters of water', correct: false},
    ],
  },
  {
    question: 'A single-use system after infusion therapy is necessary to:',
    answers: [
      {text: 'rinse with running water', correct: false},
      {text: 'throw it away immediately', correct: false},
      {text: 'throw to waste basket', correct: false},
      {text: 'cut, soak in a desalination solution', correct: true},
      {text: 'hand over to the head nurse', correct: false},
    ],
  },
  {
    question: 'Skin treatment in case of contact with HIV-infected material is carried out:',
    answers: [
      {text: '70 degrees of alcohol', correct: true},
      {text: '6% hydrogen peroxide solution', correct: false},
      {text: 'betadin solution', correct: false},
      {text: '3% hydrogen peroxide solution', correct: false},
      {text: '96 degrees of alcohol', correct: false},
    ],
  },
  {
    question: 'Which one of the following is a soft bandage?',
    answers: [
      {text: 'Kramer\'s tire', correct: false},
      {text: 'Illizarov\'s apparatus', correct: false},
      {text: 'nan', correct: false},
      {text: 'Kerchief bandage', correct: true},
      {text: 'plaster cast', correct: false},
    ],
  },
  {
    question: 'One of the rules for applying a bandage to a limb is:',
    answers: [
      {text: 'to apply a bandage from the proximal to the peripheral', correct: false},
      {text: 'to apply a bandage to clothing', correct: false},
      {text: 'to fix a bandage in the wound area', correct: false},
      {text: 'to apply a bandage to an unbent limb', correct: false},
      {text: 'to apply a bandage from the periphery to the trunk', correct: true},
    ],
  },
  {
    question: 'The most complete definition of the term desmurgy or bandage is:',
    answers: [
      {text: 'a set of tools used to keep the damaged part of the body (most often limbs) in the required position', correct: false},
      {text: 'a complex of long-term effects on the pathological focus', correct: true},
      {text: 'a set of tools used to secure the dressing', correct: false},
      {text: 'a set of tools used to ensure long-term', correct: false},
      {text: 'a set of tools used to create pressure on a part of the body in order to stop venous bleeding', correct: false},
    ],
  },
  {
    question: 'Which bandage is advisable to impose to fix the dressing material in the nasal area?',
    answers: [
      {text: 'circular bandage', correct: false},
      {text: '8 shaped bandage', correct: false},
      {text: 'sling bandage', correct: true},
      {text: 'cap bandage', correct: false},
      {text: 'T shaped bandage', correct: false},
    ],
  },
  {
    question: 'Any bandage begins with application of:',
    answers: [
      {text: 'creeping bandage', correct: false},
      {text: '8shaped bandage', correct: false},
      {text: 'circular bandage', correct: true},
      {text: 'cruciform bandage', correct: false},
      {text: 'spiral bandage', correct: false},
    ],
  },
  {
    question: 'When applying a spiral bandage:',
    answers: [
      {text: 'the bandage rounds do not touch each other', correct: false},
      {text: 'the bandage rounds completely overlap each other', correct: false},
      {text: 'the bandage rounds overlap', correct: false},
      {text: 'do not twist the bandage', correct: false},
      {text: 'each subsequent round overlaps the previous one by 2/3', correct: true},
    ],
  },
  {
    question: 'It is advisable to apply a bandage to the knee joint:',
    answers: [
      {text: 'spiral', correct: false},
      {text: 'creeping', correct: false},
      {text: 'returning', correct: false},
      {text: 'turtle', correct: true},
      {text: 'spike', correct: false},
    ],
  },
  {
    question: 'If the bones of the shin are fractured, the tire should be the length of the fingers:',
    answers: [
      {text: 'to the lumbar region', correct: false},
      {text: 'to the knee joint', correct: false},
      {text: 'to the upper third of the thigh', correct: true},
      {text: 'to the scapula', correct: false},
      {text: 'to the middle third of the shin', correct: false},
    ],
  },
  {
    question: 'If the bones of the forearm are fractured, the tire should be the length of the fingers:',
    answers: [
      {text: 'up to the upper third of the forearm', correct: false},
      {text: 'up to the elbow joint', correct: false},
      {text: 'up to the upper third of the shoulder', correct: true},
      {text: 'up to the acromion', correct: false},
      {text: 'all answers are wrong', correct: false},
    ],
  },
  {
    question: 'In case of wounds to the scalp, it is better to use:',
    answers: [
      {text: 'circular', correct: false},
      {text: 'sling shaped', correct: false},
      {text: 'cruciform bandage', correct: false},
      {text: 'cap', correct: true},
      {text: 'bridle', correct: false},
    ],
  },
  {
    question: 'In case of damage to the elbow joint, a bandage is applied:',
    answers: [
      {text: 'turtle-shaped', correct: true},
      {text: 'returning', correct: false},
      {text: 'spiral', correct: false},
      {text: 'cruciform', correct: false},
      {text: 'spike-shaped', correct: false},
    ],
  },
  {
    question: 'In case of a fracture of the collarbone, you should apply:',
    answers: [
      {text: 'a Dezo bandage', correct: true},
      {text: 'a cruciform bandage on the chest', correct: false},
      {text: 'a spiral bandage on the chest', correct: false},
      {text: 'a spike-shaped bandage on the shoulder joint area', correct: false},
      {text: 'a Trench collar', correct: false},
    ],
  },
  {
    question: 'Bleeding, in which blood accumulates in the body cavity, is called:',
    answers: [
      {text: 'abdominal', correct: false},
      {text: 'venous', correct: false},
      {text: 'external', correct: false},
      {text: 'local', correct: false},
      {text: 'internal', correct: true},
    ],
  },
  {
    question: 'Give the most complete correct answer: BLEEDING is an outporing of blood to:',
    answers: [
      {text: 'the external environment', correct: false},
      {text: 'in the body tissue', correct: false},
      {text: 'in the body cavity', correct: false},
      {text: 'into the tissues, body cavities or the external environment', correct: true},
      {text: 'into the xternal environment and body cavities', correct: false},
    ],
  },
  {
    question: 'Give the most complete correct answer: THE DANGER OF BLEEDING LIES IN THE DEVELOPMENT OF:',
    answers: [
      {text: 'anemia, leukocytosis, acidosis', correct: false},
      {text: 'collapse, organ dysfunction, asphyxia', correct: false},
      {text: 'shock, anemia, leukopenia', correct: false},
      {text: 'shock, collapse, tru aneurysm', correct: false},
      {text: 'shock, collapse, anemia, compression of vital organs', correct: true},
    ],
  },
  {
    question: 'How is TEMPORARY hemostasis carried out?',
    answers: [
      {text: 'pressure bandage, tourniquit, finger pressure', correct: true},
      {text: 'prosthetics of the vessel', correct: false},
      {text: 'diathermocoagulation', correct: false},
      {text: 'by applying a vascular suture', correct: false},
      {text: 'ligation of the vessel in the wound', correct: false},
    ],
  },
  {
    question: 'What is the cause of early secondary bleeding?',
    answers: [
      {text: 'senile age of patients', correct: false},
      {text: 'arrosion of the vessel', correct: false},
      {text: 'ligature slipping of the vessel', correct: true},
      {text: 'melting of blood clots with pus', correct: false},
      {text: 'release of adrenaline', correct: false},
    ],
  },
  {
    question: 'The outflow of dark blood from a purulent wound during dressing is:',
    answers: [
      {text: 'early secondary venous bleeding', correct: true},
      {text: 'later secondary arterial bleeding', correct: false},
      {text: 'later secondary venous bleeding', correct: false},
      {text: 'early secondary arterial bleeding', correct: false},
      {text: 'primary arterial bleeding', correct: false},
    ],
  },
  {
    question: 'Local signs of the intrapleural bleeding includes:',
    answers: [
      {text: 'visible narrowing of the intercostal spaces', correct: false},
      {text: 'bronchial respiration during auscultation', correct: false},
      {text: 'attenuation of respiratory noises during auscultation', correct: true},
      {text: 'dry and wet wheezing during auscultation', correct: false},
      {text: 'tympanitis in the lower chest', correct: false},
    ],
  },
  {
    question: 'At what stage of ectopic pregnancy does internal bleeding occur?',
    answers: [
      {text: '2 weeks', correct: false},
      {text: '5 weeks', correct: false},
      {text: '6 weeks', correct: false},
      {text: '8 weeks', correct: true},
      {text: '3 weeks', correct: false},
    ],
  },
  {
    question: 'The place of compression of the subclavian artery is located in the area of:',
    answers: [
      {text: 'abdomen', correct: false},
      {text: 'armpit', correct: false},
      {text: 'chest', correct: false},
      {text: 'neck', correct: false},
      {text: 'groin', correct: true},
    ],
  },
  {
    question: 'The methods of temporary bleeding arrest include:',
    answers: [
      {text: 'wound tamponade', correct: true},
      {text: 'diathermocoagulation', correct: false},
      {text: 'hemostatic sutures on the wound', correct: false},
      {text: 'arterial vessel embolization', correct: false},
      {text: 'vessel ligation', correct: false},
    ],
  },
  {
    question: 'In case of bleeding, the axillary artery should be pressed against:',
    answers: [
      {text: 'the horizontal branch of the pubic bone', correct: false},
      {text: 'the transverse process of the 6th cervical vertebra', correct: false},
      {text: 'the inner surface of the humerus', correct: true},
      {text: 'the 1st rib outside of the attachment point of the sternoclavicular-nipple muscle to the collarbone', correct: false},
      {text: 'the head of the humerus', correct: false},
    ],
  },
  {
    question: 'The biological methods of stopping bleeding include:',
    answers: [
      {text: 'applying a tourniquet to a limb', correct: false},
      {text: 'clamping a vessel', correct: false},
      {text: 'vascular suture to an arterial vessel', correct: false},
      {text: 'tamponade of a wound with an omentum', correct: true},
      {text: 'ligation of a vessel in a wound', correct: false},
    ],
  },
  {
    question: 'Staff donors are donors who:',
    answers: [
      {text: 'immunized donors with a certain antigen', correct: false},
      {text: 'systematically participate in donation for several years', correct: true},
      {text: 'donate blood when there is a need for an institution', correct: false},
      {text: 'donate blood regularly', correct: false},
      {text: 'have a rare blood type', correct: false},
    ],
  },
  {
    question: 'Blood preparations include:',
    answers: [
      {text: 'thrombo mass', correct: false},
      {text: 'erythro mass', correct: false},
      {text: 'prothrombin complex', correct: true},
      {text: 'leuco mass', correct: false},
      {text: 'plasma', correct: false},
    ],
  },
  {
    question: 'The regulators of the water-salt balance include:',
    answers: [
      {text: 'hemodesis', correct: false},
      {text: 'Ringer\'s solution', correct: true},
      {text: 'rheopolyglucin', correct: false},
      {text: 'lipofundin', correct: false},
      {text: 'gelatinol', correct: false},
    ],
  },
  {
    question: 'Hemotransfusion reactions include:',
    answers: [
      {text: 'septic shock', correct: false},
      {text: 'homologous blood syndrome', correct: false},
      {text: 'hemotransfusion shock', correct: false},
      {text: 'thromboembolism', correct: false},
      {text: 'fever', correct: true},
    ],
  },
  {
    question: 'Hemotransfusion complications of a technical nature include:',
    answers: [
      {text: 'allergic', correct: false},
      {text: 'acute dilation of the heart', correct: true},
      {text: 'citrate intoxication', correct: false},
      {text: 'massive transfusion syndrome', correct: false},
      {text: 'antigenic', correct: false},
    ],
  },
  {
    question: 'Hemodilution is:',
    answers: [
      {text: 'a method of direct blood transfusion', correct: false},
      {text: 'autohemotransfusion', correct: false},
      {text: 'autoplasmotransfusion', correct: false},
      {text: 'a method of blood dilution', correct: true},
      {text: 'a method of exchange blood transfusion', correct: false},
    ],
  },
  {
    question: 'What is the name of the antigen-antibody reaction in determining the blood Rh-factor?',
    answers: [
      {text: 'isoagglutination', correct: true},
      {text: 'panagglutination', correct: false},
      {text: 'pseuodagglutination', correct: false},
      {text: 'heteroagglutination', correct: false},
      {text: 'hemagglutination', correct: false},
    ],
  },
  {
    question: 'What is the necessary temperature regime (in degrees Celsius) when determining the blood type according to the ABO system?',
    answers: [
      {text: '46-48', correct: false},
      {text: '(12-14)', correct: false},
      {text: '15-25', correct: true},
      {text: '26-38', correct: false},
      {text: '(5-8)', correct: false},
    ],
  },
  {
    question: 'When determining the blood type, the drop of blood should be less a drop of coliclone:',
    answers: [
      {text: 'five to ten times', correct: true},
      {text: 'three times', correct: false},
      {text: 'five times', correct: false},
      {text: 'twenty times', correct: false},
      {text: 'ten times', correct: false},
    ],
  },
  {
    question: 'Blood sampling to determine compatibility according to the ABO system and the Rh factor is performed from:',
    answers: [
      {text: 'a finger on a slide', correct: false},
      {text: 'finger on a slide with the addition of sodium citrate', correct: false},
      {text: 'veins in a test tube with isotonic sodium chloride solution', correct: false},
      {text: 'veins in a dry test tube', correct: true},
      {text: 'veins in melanger', correct: false},
    ],
  },
  {
    question: 'When preparing patients for hemotransfusion, it is necessary to:',
    answers: [
      {text: 'collect an obstetric history', correct: false},
      {text: 'do all of the above', correct: true},
      {text: 'do a general urine test', correct: false},
      {text: 'do a general blood test', correct: false},
      {text: 'collect a blood transfusion history', correct: false},
    ],
  },
  {
    question: 'What do they do with a bottle that has been released after transfusion of blood and its components?',
    answers: [
      {text: 'leave 10-15 ml of blood in a bottle and store for 2 days', correct: true},
      {text: 'they wash it and take it to the laboratory', correct: false},
      {text: 'leave 10-15 ml of blood in a bottle and store for 30 days', correct: false},
      {text: 'leave 10-15 ml of blood in a bottle and store until the patient is discharged', correct: false},
      {text: 'they throw it away', correct: false},
    ],
  },
  {
    question: 'Drugs that promote blood clotting are called:',
    answers: [
      {text: 'none of the above', correct: false},
      {text: 'anticoagulants', correct: false},
      {text: 'oxidants', correct: false},
      {text: 'antioxidants', correct: false},
      {text: 'coagulants', correct: true},
    ],
  },
  {
    question: 'Blood enzyme elements that promote blood clotting:',
    answers: [
      {text: 'red blood cells', correct: false},
      {text: 'basophils', correct: false},
      {text: 'globulins', correct: false},
      {text: 'white blood cells', correct: false},
      {text: 'platelets', correct: true},
    ],
  },
  {
    question: 'Direct-acting hemostatics include:',
    answers: [
      {text: 'vikasol', correct: false},
      {text: 'nicoumalone', correct: false},
      {text: 'tinzaparin sodium', correct: false},
      {text: 'heparin', correct: false},
      {text: 'calcium chloride', correct: true},
    ],
  },
  {
    question: 'Non-direct action hemostatics include:',
    answers: [
      {text: 'vitamin K', correct: false},
      {text: 'all listed', correct: true},
      {text: 'phytomenadione', correct: false},
      {text: 'vikasol', correct: false},
      {text: 'rutin', correct: false},
    ],
  },
  {
    question: 'Anticoagulants of non-direct action include:',
    answers: [
      {text: 'dicumarin', correct: true},
      {text: 'vikasol', correct: false},
      {text: 'trypsin', correct: false},
      {text: 'fibrinolysin', correct: false},
      {text: 'heparin', correct: false},
    ],
  },
  {
    question: 'In what concentration is thrombin administered intravenously?',
    answers: [
      {text: '30%', correct: false},
      {text: '10%', correct: true},
      {text: '40%', correct: false},
      {text: '50%', correct: false},
      {text: '20%', correct: false},
    ],
  },
  {
    question: 'The temperature regime for determining the blood type:',
    answers: [
      {text: '15-25C', correct: true},
      {text: '12-14C', correct: false},
      {text: '10-12C', correct: false},
      {text: '5-8C', correct: false},
      {text: '25-30C', correct: false},
    ],
  },
  {
    question: 'The result of the agglutination reaction in determining the blood group according to standard serums is determined by:',
    answers: [
      {text: '1 min', correct: false},
      {text: '5 min', correct: false},
      {text: '10 min', correct: false},
      {text: '3 min', correct: true},
      {text: '2 min', correct: false},
    ],
  },
  {
    question: 'To stabilize donated blood, use:',
    answers: [
      {text: 'albumin', correct: false},
      {text: 'isotonic solution', correct: false},
      {text: 'glycerin', correct: false},
      {text: 'glucose', correct: false},
      {text: '2.6% sodium citrate solution', correct: true},
    ],
  },
  {
    question: 'During blood transfusion, the patient\'s condition worsened, the pain appeared in the lower back and behind the sternum. This indicates:',
    answers: [
      {text: 'allergic reaction', correct: false},
      {text: 'hemorrhagic shock', correct: false},
      {text: 'blood transfusion shock', correct: true},
      {text: 'citrate shock', correct: false},
      {text: 'pyrogenic reaction', correct: false},
    ],
  },
  {
    question: 'Features of intravenous administration of protein hydralizates:',
    answers: [
      {text: 'they are injected droply 50-60 per minute', correct: false},
      {text: 'they are injected droply 20-30 per minute', correct: false},
      {text: 'they are injected in a jet', correct: false},
      {text: 'no biological sample is required', correct: true},
      {text: 'a biological sample is required', correct: false},
    ],
  },
  {
    question: 'In case of hemorrhagic shock, first of all, the patient should be transfused:',
    answers: [
      {text: 'whole blood', correct: false},
      {text: 'polyglucine', correct: false},
      {text: 'erythrocyte mass', correct: false},
      {text: 'platelet mass', correct: true},
      {text: 'plasma', correct: false},
    ],
  },
  {
    question: 'Operations related to bloodless are:',
    answers: [
      {text: 'lymph node biopsy', correct: false},
      {text: 'dislocation reduction, bone fragments reposition', correct: true},
      {text: 'laparotomy, thoracotomy', correct: false},
      {text: 'endoscopic cholecystectomy', correct: false},
      {text: 'trial laparotomy', correct: false},
    ],
  },
  {
    question: 'An operational technique is:',
    answers: [
      {text: 'operative reception', correct: false},
      {text: 'removal of the affected organ', correct: true},
      {text: 'suturing the skin', correct: false},
      {text: 'Filonchikov-Grossich skin treatment', correct: false},
      {text: 'skin dissection', correct: false},
    ],
  },
  {
    question: 'Endoscopic surgeries are:',
    answers: [
      {text: 'operations performed with a microscope', correct: false},
      {text: 'operations performed using endoscopic devices', correct: true},
      {text: 'operations after which endoscopic control is required', correct: false},
      {text: 'operations performed laparoscopically', correct: false},
      {text: 'operations performed under X-ray control', correct: false},
    ],
  },
  {
    question: 'Endovascular surgery is:',
    answers: [
      {text: 'intravascular operations performed under X-ray control', correct: true},
      {text: 'operations after which endoscopic control is required', correct: false},
      {text: 'operations performed on the main vessels', correct: false},
      {text: 'operations performed using endoscopic devices', correct: false},
      {text: 'operations performed with a microscope', correct: false},
    ],
  },
  {
    question: 'Requirements for surgical access are:',
    answers: [
      {text: 'minimal injjuries', correct: true},
      {text: 'large injuries', correct: false},
      {text: 'access should provide a wide exposure of the pathological focus', correct: false},
      {text: 'the distance from the surface of the body to the exposed organ should be minimal', correct: false},
      {text: 'the length of the skin incision should not exceed 20 cm', correct: false},
    ],
  },
  {
    question: 'Diagnostic operations include:',
    answers: [
      {text: 'appendectomy', correct: false},
      {text: 'herniation', correct: false},
      {text: 'lymph node biopsy', correct: true},
      {text: 'autopsy of the panaritium', correct: false},
      {text: 'correction of dislocation of the shoulder', correct: false},
    ],
  },
  {
    question: 'Operations are distinguished by urgency:',
    answers: [
      {text: 'diagnostic, non-urgent, one-stage', correct: false},
      {text: 'radical, planned, palliative', correct: false},
      {text: 'emergency, urgent, planned', correct: true},
      {text: 'planned, emergency, multi-stage', correct: false},
      {text: 'emergency, urgent, palliative', correct: false},
    ],
  },
  {
    question: 'Operational access includes the following stages of the operation:',
    answers: [
      {text: 'suturing the skin', correct: false},
      {text: 'removal of the affected organ', correct: false},
      {text: 'Filonchikov-Grossich skin treatment', correct: false},
      {text: 'surgery, stopping bleeding', correct: false},
      {text: 'skin dissection', correct: true},
    ],
  },
  {
    question: 'Emergency surgery is indicated when:',
    answers: [
      {text: 'trophic ulcer', correct: false},
      {text: 'varicose veins of the lower extremities', correct: false},
      {text: 'perforated stomach ulcer', correct: true},
      {text: 'liver cancer', correct: false},
      {text: 'lipoma', correct: false},
    ],
  },
  {
    question: 'Prevention of thromboembolic complications after surgery includes:',
    answers: [
      {text: 'bandaging of the lower extremities with an elastic bandage', correct: false},
      {text: 'getting up early', correct: false},
      {text: 'the use of anticoagulants', correct: false},
      {text: 'all of the above', correct: true},
      {text: 'the use of disaggregants', correct: false},
    ],
  },
  {
    question: 'Additional complaints of the patient are caused by:',
    answers: [
      {text: 'complications of the underlying disease', correct: false},
      {text: 'underlying disease', correct: false},
      {text: 'increased pain syndrome', correct: false},
      {text: 'concomitant pathology', correct: true},
      {text: 'change in the patient\'s state of health', correct: false},
    ],
  },
  {
    question: 'The patient\'s complaint of pain in dislocation of the shoulder is:',
    answers: [
      {text: 'main', correct: true},
      {text: 'basic', correct: false},
      {text: 'secondary', correct: false},
      {text: 'primary', correct: false},
      {text: 'additional', correct: false},
    ],
  },
  {
    question: 'The examination of the patient begins with:',
    answers: [
      {text: 'clarification of complaints', correct: true},
      {text: 'clarification of the history of the disease', correct: false},
      {text: 'objective research', correct: false},
      {text: 'an external examination', correct: false},
      {text: 'life history', correct: false},
    ],
  },
  {
    question: 'Data from previous additional research methods  are described in the medical history section:',
    answers: [
      {text: 'general objective research', correct: false},
      {text: 'life history', correct: false},
      {text: 'results of additional research methods', correct: false},
      {text: 'general information about the patient', correct: false},
      {text: 'the history of the development of the disease', correct: true},
    ],
  },
  {
    question: 'An increase in body temperature in acute appendicitis is complaint:',
    answers: [
      {text: 'additional', correct: false},
      {text: 'basic', correct: false},
      {text: 'general', correct: false},
      {text: 'main', correct: false},
      {text: 'secondary', correct: true},
    ],
  },
  {
    question: 'The allergic history is reflected in the section of medical history:',
    answers: [
      {text: 'general objective examination', correct: false},
      {text: 'additional examination', correct: false},
      {text: 'complaints', correct: false},
      {text: 'life history', correct: true},
      {text: 'history of the disease', correct: false},
    ],
  },
  {
    question: 'How should the insurance history be described in the medical history?',
    answers: [
      {text: 'specify the annual insurance deductions from wages', correct: false},
      {text: 'indicate the total insurance premium of the patient for the entire time', correct: false},
      {text: 'indicate the place of work and the presence (absence) of the disability sheet on hand', correct: true},
      {text: 'specify the amount of the maximum insurance payment', correct: false},
      {text: 'list the insurance companies in which the patient was insured', correct: false},
    ],
  },
  {
    question: 'Description of the local status of a patient with acute appendicitis implies:',
    answers: [
      {text: 'a description of the specific symptoms of acute appendicits', correct: false},
      {text: 'a description of the development of the disease in chronological order', correct: false},
      {text: 'a detailed description of the patient\'s complaints', correct: false},
      {text: 'a detailed description of the results of an objective examination of the entire digestive system', correct: true},
      {text: 'a detailed description of the results of additional research', correct: false},
    ],
  },
  {
    question: 'The clinical diagnosis in emergency patients should be formulated:',
    answers: [
      {text: 'within the next 6 hours', correct: false},
      {text: 'within 12 hours', correct: false},
      {text: 'during the first day', correct: true},
      {text: 'after 3 days', correct: false},
      {text: 'immediately upon admission', correct: false},
    ],
  },
  {
    question: 'Information about the reason for the patient\'s current hospitalization described in the medical history section:',
    answers: [
      {text: 'history of the development of the present disease', correct: true},
      {text: 'complaints', correct: false},
      {text: 'local status', correct: false},
      {text: 'results of additional examination', correct: false},
      {text: 'life history', correct: false},
    ],
  },
  {
    question: 'Who was the founder of the creation of the phagocytic theory of immunity?',
    answers: [
      {text: 'Mechnikov I.I.', correct: true},
      {text: 'Pasteur L.', correct: false},
      {text: 'Lister D.', correct: false},
      {text: 'Ibn Sina', correct: false},
      {text: 'Koch R.', correct: false},
    ],
  },
  {
    question: 'Who firstly introduced the principle of treating safely, quickly and pleasantly?',
    answers: [
      {text: 'Garvey', correct: false},
      {text: 'Hippocrates', correct: false},
      {text: 'Galen', correct: false},
      {text: 'Asclepiades', correct: true},
      {text: 'Avicenna', correct: false},
    ],
  },
  {
    question: 'Who was the founnder of antiseptics?',
    answers: [
      {text: 'I. Zemmelweis', correct: false},
      {text: 'N.I.Pirogov', correct: false},
      {text: 'D. Lister', correct: true},
      {text: 'Hippocrates', correct: false},
      {text: 'Paracelsus', correct: false},
    ],
  },
  {
    question: 'Who was the founder of asepsis?',
    answers: [
      {text: 'Hippocrates', correct: false},
      {text: 'Ambru az Pare', correct: true},
      {text: 'Paracelsus', correct: false},
      {text: 'J. Deni', correct: false},
      {text: 'E. Bergman', correct: false},
    ],
  },
  {
    question: 'Choose which of the operations was the most ancient in the history of mankind?',
    answers: [
      {text: 'cesarean section', correct: true},
      {text: 'lobotomy', correct: false},
      {text: 'heart transplant', correct: false},
      {text: 'amputation', correct: false},
      {text: 'appendectomy', correct: false},
    ],
  },
  {
    question: 'How were called people who carried out mummification in Ancient Egypt?',
    answers: [
      {text: 'canopachia', correct: false},
      {text: 'nurse', correct: false},
      {text: 'surgeon', correct: false},
      {text: 'the priests', correct: false},
      {text: 'tarikhevts', correct: true},
    ],
  },
  {
    question: 'Choose which sources do not relate to the study of the history of healing in Ancient Greece:',
    answers: [
      {text: 'Odyssey', correct: false},
      {text: 'the Hippocratic Collection', correct: false},
      {text: 'Prognostics', correct: false},
      {text: 'the works of Martial', correct: true},
      {text: 'Epidemics', correct: false},
    ],
  },
  {
    question: 'Choose the work of Hippocrates, in which describes the causes of the disease primarily in the human environment:',
    answers: [
      {text: 'Epidemics', correct: false},
      {text: 'Odyssey', correct: false},
      {text: 'A treatise On air, water and places', correct: true},
      {text: 'Prognostics', correct: false},
      {text: 'the works of Martial', correct: false},
    ],
  },
  {
    question: 'What is asepsis?',
    answers: [
      {text: 'a method of preventing wound infection by preliminary destruction of microbes', correct: true},
      {text: 'a method of surgery', correct: false},
      {text: 'thermal effects on animal organisms', correct: false},
      {text: 'a set of techniques for mechanical action', correct: false},
      {text: 'a method of anesthesia', correct: false},
    ],
  },
  {
    question: 'Which one is inccorect answer for the statement Asepsis is achieved by?',
    answers: [
      {text: 'treatment of the source of infection', correct: true},
      {text: 'disinfection', correct: false},
      {text: 'carrying out special sanitary organizational measures', correct: false},
      {text: 'carrying out hygienic measures', correct: false},
      {text: 'sterilization', correct: false},
    ],
  },
  {
    question: 'All participants in the operation unit must be in:',
    answers: [
      {text: 'it does not matter', correct: false},
      {text: 'sterile clothes and a mask', correct: true},
      {text: 'a mask', correct: false},
      {text: 'clean clothes', correct: false},
      {text: 'sterile clothes', correct: false},
    ],
  },
  {
    question: 'Which mode is used to sterilize surgical underwear?',
    answers: [
      {text: '180C - 60 min', correct: false},
      {text: '160C - 180 min', correct: false},
      {text: '120C - 1.1 atm - 45 min', correct: false},
      {text: '180C - 90 min', correct: false},
      {text: '132C - 2.0 atm - 20 min', correct: true},
    ],
  },
  {
    question: 'Which mode is used to sterilize rubber items and plastics?',
    answers: [
      {text: '180C - 60 min', correct: false},
      {text: '132C - 2.0 atm - 20 min', correct: false},
      {text: '160C - 180 min', correct: false},
      {text: '120C - 1.1 atm - 45 min', correct: true},
      {text: '180C - 90 min', correct: false},
    ],
  },
  {
    question: 'What is the time of chemical sterilization of instruments in a 6% solution of hydrogen peroxide at room temperature?',
    answers: [
      {text: '1 hour', correct: false},
      {text: '40 min', correct: false},
      {text: '2 hours', correct: false},
      {text: '6 hours', correct: true},
      {text: '3 hours', correct: false},
    ],
  },
  {
    question: 'The endogenous pathway of infection into the wound is',
    answers: [
      {text: 'airborne', correct: false},
      {text: 'hemogenic', correct: false},
      {text: 'lymphogenic', correct: true},
      {text: 'air-dust', correct: false},
      {text: 'contact', correct: false},
    ],
  },
  {
    question: 'How often are air sowings produced in the operation unit?',
    answers: [
      {text: '1 time per month', correct: true},
      {text: '1 time in 2 months', correct: false},
      {text: '1 time in 3 months', correct: false},
      {text: '4 times a month', correct: false},
      {text: '1 time per week', correct: false},
    ],
  },
  {
    question: 'Which sterilization mode should be for the endoscopic equipment?',
    answers: [
      {text: 'in a 6% solution of hydrogen peroxide 360 min', correct: true},
      {text: 'in a 3% chloramine solution for 30 min', correct: false},
      {text: 'in a 10% solution of hydrogen peroxide for 60 min', correct: false},
      {text: 'in 70% alcohol for 10 min', correct: false},
      {text: 'in a 6% solution of hydrogen peroxide 180 min', correct: false},
    ],
  },
  {
    question: 'What is the duration of disinfection by boiling in distilled water?',
    answers: [
      {text: '60 min', correct: false},
      {text: '30 min', correct: true},
      {text: '45 min', correct: false},
      {text: '25 min', correct: false},
      {text: '15 min', correct: false},
    ],
  },
  {
    question: 'The duration of hand treatment with 0,5% ammonia solution in each of the 2 basins according to the Spasokukotsky-Kochergin method is:',
    answers: [
      {text: '5 min', correct: false},
      {text: '10 min', correct: false},
      {text: '2 min', correct: false},
      {text: '3 min', correct: true},
      {text: '4 min', correct: false},
    ],
  },
  {
    question: 'How many minutes are the tools immersed in a cleaning solution during pre-sterilization treatment?',
    answers: [
      {text: '10 min', correct: false},
      {text: '60 min', correct: false},
      {text: '45 min', correct: false},
      {text: '15 min', correct: true},
      {text: '5 min', correct: false},
    ],
  },
  {
    question: 'The concept of antiseptics was introduced into medicine by:',
    answers: [
      {text: 'J. Pringle', correct: true},
      {text: 'K. Schimmelbush', correct: false},
      {text: 'N.I.Pirogov', correct: false},
      {text: 'E. Bergmann', correct: false},
      {text: 'I.V. Buyalsky', correct: false},
    ],
  },
  {
    question: 'The drainage function of the bandage was studied in detail by:',
    answers: [
      {text: 'R. Trendelenburg', correct: false},
      {text: 'M.V. Sklifosovsky', correct: false},
      {text: 'V. Tsege-Manteuffel', correct: false},
      {text: 'K. Schimmelbusch', correct: false},
      {text: 'M.Ya. Preobrazhensky', correct: true},
    ],
  },
  {
    question: 'The primary surgical treatment of the wound includes:',
    answers: [
      {text: 'cleansing of the wound surface and evacuation of exudate', correct: false},
      {text: 'excision of non-viable tissues only', correct: false},
      {text: 'only suturing the wound', correct: false},
      {text: 'dissection of the wound, removal of foreign bodies, excision of the edges and bottom, hemostasis, drainage', correct: true},
      {text: 'opening and puncture of ulcers', correct: false},
    ],
  },
  {
    question: 'The antiseptic effect of proteolytic enzyme preparations on the wound is based on the process:',
    answers: [
      {text: 'stimulation of local immunity', correct: false},
      {text: 'improvement of rheological properties of blood', correct: false},
      {text: 'enhancement of exudation', correct: false},
      {text: 'lysis of necrotic tissues', correct: true},
      {text: 'stimulation of repair', correct: false},
    ],
  },
  {
    question: 'What kind of solution is used for cold sterilization of dental mirrors?',
    answers: [
      {text: '45% ethyl alcohol', correct: false},
      {text: '6% hydrogen peroxide solution', correct: true},
      {text: '0.5% chloramine solution', correct: false},
      {text: '1% hydrogen peroxide solution', correct: false},
      {text: '75% methyl alcohol', correct: false},
    ],
  },
  {
    question: 'The complete destruction of microbes, spores and viruses is called:',
    answers: [
      {text: 'antiseptics', correct: false},
      {text: 'disinsection', correct: false},
      {text: 'deratization', correct: false},
      {text: 'sterilization', correct: true},
      {text: 'disinfection', correct: false},
    ],
  },
  {
    question: 'What does the pre-sterilization treatment provide?',
    answers: [
      {text: 'removal of spores from the surface', correct: false},
      {text: 'removal of protein, fatty impurities and medications from the surface', correct: true},
      {text: 'removal of protein from the surface', correct: false},
      {text: 'removal of fatty impurities from the surface', correct: false},
      {text: 'removal of vegetative forms of microorganisms from the surface', correct: false},
    ],
  },
  {
    question: 'Instruments are sterilized in a glassperlene sterilizer with:',
    answers: [
      {text: 'chemical indicators', correct: false},
      {text: 'heated sterile beads', correct: true},
      {text: 'hot steam', correct: false},
      {text: 'dry heat', correct: false},
      {text: 'irradiation', correct: false},
    ],
  },
  {
    question: 'Which materials are processed in a glassperlene sterilizer?',
    answers: [
      {text: 'suture material', correct: false},
      {text: 'trays', correct: false},
      {text: 'tips', correct: false},
      {text: 'cotton swabs', correct: false},
      {text: 'endodontic tools', correct: true},
    ],
  },
  {
    question: 'Duration pre-sterilization treatment, the tools are immersed in a cleaning solution for:',
    answers: [
      {text: '5 min', correct: false},
      {text: '30 min', correct: false},
      {text: '15 min', correct: true},
      {text: '60 min', correct: false},
      {text: '45 min', correct: false},
    ],
  },
  {
    question: 'When carrying out chemical disinfection, the disinfectant must cover the intruments over:',
    answers: [
      {text: 'the instruments must be completely in solution', correct: false},
      {text: 'at least 2 cm', correct: false},
      {text: 'at least 1 cm', correct: true},
      {text: 'at the top', correct: false},
      {text: '0.5 cm', correct: false},
    ],
  },
  {
    question: 'The current control of steam sterilization is carried out using:',
    answers: [
      {text: 'vacuum-test', correct: false},
      {text: 'sowing indicator for sterility of samples of sterilized items', correct: false},
      {text: 'control and measuring devices and chemical indicators', correct: true},
      {text: 'biological indicators', correct: false},
      {text: 'physical indicators', correct: false},
    ],
  },
  {
    question: 'Any bandage begins with the application of:',
    answers: [
      {text: 'spiral bandage', correct: false},
      {text: 'circular bandage', correct: true},
      {text: '8-shaped bandage', correct: false},
      {text: 'cruciform bandage', correct: false},
      {text: 'creeping bandage', correct: false},
    ],
  },
  {
    question: 'What type of bandage should be used for the wound in the parietal area?',
    answers: [
      {text: 'turtle bandage', correct: false},
      {text: 'cruciform bandage', correct: false},
      {text: 'T-shaped bandage', correct: false},
      {text: 'spiral bandage', correct: false},
      {text: 'sling bandage', correct: true},
    ],
  },
  {
    question: 'The converging turtle bandage on the elbow joint begins with the application:',
    answers: [
      {text: 'of the circular bandage above the joint', correct: false},
      {text: 'of the circular bandage through the joint', correct: false},
      {text: 'of the cruciform bandage on the joint area', correct: false},
      {text: 'of the circular bandage below the joint', correct: true},
      {text: 'of the spiral bandage on the forearm', correct: false},
    ],
  },
  {
    question: 'When applying a circular bandage:',
    answers: [
      {text: 'each subsequent round overlaps the previous one by 2/3', correct: false},
      {text: 'the bandage rounds go in a spiral manner without touching each other', correct: false},
      {text: 'the rounds of the bandage go in an oblique direction', correct: false},
      {text: 'each subsequent round completely overlaps the previous one', correct: true},
      {text: 'the bandage rounds intersect with each other', correct: false},
    ],
  },
  {
    question: 'The sealing of the chest wound is created by a bandage:',
    answers: [
      {text: 'occlusive', correct: true},
      {text: 'glue', correct: false},
      {text: 'Kerchief', correct: false},
      {text: 'gypsum', correct: false},
      {text: 'cotton swab bandage', correct: false},
    ],
  },
  {
    question: 'A special tire for transport immobilization of the collarbone is a tire:',
    answers: [
      {text: 'Kuzminsky', correct: true},
      {text: 'Kramer', correct: false},
      {text: 'Bogdanova', correct: false},
      {text: 'Elansky', correct: false},
      {text: 'Dieterich', correct: false},
    ],
  },
  {
    question: 'In case of the fracture of the scapula, the immobilization is enough with:',
    answers: [
      {text: 'Dieterich\'s tire', correct: false},
      {text: 'sticky patch', correct: false},
      {text: 'laying on the shield', correct: false},
      {text: 'Elansky\'s tire', correct: false},
      {text: 'Kerchief bandage', correct: true},
    ],
  },
  {
    question: 'If one eye is damaged, it is superimposed:',
    answers: [
      {text: 'turtle bandage', correct: false},
      {text: 'monocular bandage', correct: true},
      {text: 'binocular bandage', correct: false},
      {text: 'bridle bandage', correct: false},
      {text: 'cap bandage', correct: false},
    ],
  },
  {
    question: 'If there is damage in the area of the shoulder joint, a bandage is applied:',
    answers: [
      {text: 'turtle', correct: false},
      {text: 'spikelike', correct: true},
      {text: 'Dezo', correct: false},
      {text: 'spiral bandage', correct: false},
      {text: '8-shaped', correct: false},
    ],
  },
  {
    question: 'In case of extensive chest injuries, a bandage is applied:',
    answers: [
      {text: 'Dezo', correct: false},
      {text: 'spiral', correct: true},
      {text: 'spike like', correct: false},
      {text: 'cruciform', correct: false},
      {text: 'occlusal', correct: false},
    ],
  },
  {
    question: 'For hanging the upper limb most often is used a bandage:',
    answers: [
      {text: 'returning', correct: false},
      {text: 'T-shaped', correct: false},
      {text: 'Kerchief', correct: true},
      {text: 'spiral', correct: false},
      {text: 'spike', correct: false},
    ],
  },
  {
    question: 'After the dislocation of the shoulder is corrected, you can apply:',
    answers: [
      {text: 'Dezo bandage', correct: false},
      {text: 'Velpo bandage', correct: true},
      {text: 'turtle bandage', correct: false},
      {text: 'spike-shaped bandage on the shoulder joint area', correct: false},
      {text: '8-shaped bandage', correct: false},
    ],
  },
  {
    question: 'If the blood has a bright red color and beats from the wound in a pulsating stream, then the bleeding is called:',
    answers: [
      {text: 'parenchymal', correct: false},
      {text: 'venous', correct: false},
      {text: 'capillary', correct: false},
      {text: 'arterial', correct: true},
      {text: 'abdominal', correct: false},
    ],
  },
  {
    question: 'What is the cause of bleeding?',
    answers: [
      {text: 'vascular injury, neutrophic processes', correct: true},
      {text: 'sepsis', correct: false},
      {text: 'scurvy', correct: false},
      {text: 'violation of the permeability of the vascular wall', correct: false},
      {text: 'damage to the vascular wall as a result of injury', correct: false},
    ],
  },
  {
    question: 'What are the MAIN groups of all methods of stopping bleeding?',
    answers: [
      {text: 'temporary, final', correct: true},
      {text: 'reliable, unreliable', correct: false},
      {text: 'physical, chemical', correct: false},
      {text: 'pre-medical, medical', correct: false},
      {text: 'mechanical, biological', correct: false},
    ],
  },
  {
    question: 'Hematuria is blood in:',
    answers: [
      {text: 'inside the abdominal cavity', correct: false},
      {text: 'from nose', correct: false},
      {text: 'urine', correct: true},
      {text: 'vomit', correct: false},
      {text: 'from lungs', correct: false},
    ],
  },
  {
    question: 'What are the common symptoms of bleeding?',
    answers: [
      {text: 'pallor of the skin', correct: true},
      {text: 'leukopenia', correct: false},
      {text: 'rare pulse', correct: false},
      {text: 'increased blood pressure', correct: false},
      {text: 'high body temperature', correct: false},
    ],
  },
  {
    question: 'What Is the cause of late secondary bleeding?',
    answers: [
      {text: 'vascular spasm ', correct: false},
      {text: 'thrombus ejection from a blood vessel', correct: false},
      {text: 'vascular paresis', correct: false},
      {text: 'ligature slipping from a vessel', correct: false},
      {text: 'purulent melting of a blood clot', correct: true},
    ],
  },
  {
    question: 'What is the timing of late secondary bleeding?',
    answers: [
      {text: '3-5 days', correct: false},
      {text: 'later than 7 days', correct: true},
      {text: '5-7 days', correct: false},
      {text: 'no earlier than 14 days', correct: false},
      {text: '1-3 days', correct: false},
    ],
  },
  {
    question: 'What kind of bleeding causes blood to be excreted with vomit?',
    answers: [
      {text: 'gastric', correct: true},
      {text: 'arterial', correct: false},
      {text: 'urinary', correct: false},
      {text: 'pulmonary', correct: false},
      {text: 'venous', correct: false},
    ],
  },
  {
    question: 'What is the purpose of the first aid for bleeding at the accident?',
    answers: [
      {text: 'anesthesia', correct: false},
      {text: 'surgery', correct: false},
      {text: 'psychological support of the victim', correct: false},
      {text: 'ambulance call', correct: false},
      {text: 'temporary blood stop', correct: true},
    ],
  },
  {
    question: 'The maximum duration of applying the tourniquet is:',
    answers: [
      {text: '60 min', correct: false},
      {text: '120 min', correct: false},
      {text: '30 min', correct: false},
      {text: '180 min', correct: false},
      {text: '90 min', correct: true},
    ],
  },
  {
    question: 'The physical methods of stopping bleeding include:',
    answers: [
      {text: 'vessel ligation throughout', correct: false},
      {text: 'cryodestruction', correct: true},
      {text: 'laser irradiation of blood', correct: false},
      {text: 'ultrasound scanning of the spleen', correct: false},
      {text: 'vessel bypass', correct: false},
    ],
  },
  {
    question: 'Thrombin as a mean to stop bleeding is used:',
    answers: [
      {text: 'for embolization of vessel', correct: false},
      {text: 'intraarterially', correct: false},
      {text: 'intraperitoneally', correct: false},
      {text: 'intravenously', correct: false},
      {text: 'locally', correct: true},
    ],
  },
  {
    question: 'The donors of reserve are donors who:',
    answers: [
      {text: 'donate blood regularly', correct: false},
      {text: 'have a rare blood type', correct: false},
      {text: 'immunized with a certain antigen donors', correct: false},
      {text: 'donate blood when there is a need for an institution', correct: true},
      {text: 'systematically involved in donation for several years', correct: false},
    ],
  },
  {
    question: 'The storage period of blood when using glugicir is:',
    answers: [
      {text: '3 days', correct: false},
      {text: '35 days', correct: false},
      {text: '21 days', correct: true},
      {text: '8-10 days', correct: false},
      {text: '5 days', correct: false},
    ],
  },
  {
    question: 'Antishock drugs include:',
    answers: [
      {text: 'polyamine', correct: false},
      {text: 'hemodesis', correct: false},
      {text: 'Ringer\'s solution', correct: true},
      {text: 'polyglucin', correct: false},
      {text: 'casein hydrolysate', correct: false},
    ],
  },
  {
    question: 'Detoxification drugs include:',
    answers: [
      {text: 'polyglucin', correct: false},
      {text: 'aminosol', correct: false},
      {text: 'Ringer\'s solution', correct: false},
      {text: 'polydez', correct: true},
      {text: 'voluven', correct: false},
    ],
  },
  {
    question: 'What is ablood type?',
    answers: [
      {text: 'whey proteins', correct: false},
      {text: 'a set of acquired antibodies', correct: false},
      {text: 'a set of immune antibodies', correct: false},
      {text: 'a set of erythrocyte antigens', correct: true},
      {text: 'a set of leukocyte antigens', correct: false},
    ],
  },
  {
    question: 'What is the significance of antigens and antibodies of the ABO system in blood transfusion practice?',
    answers: [
      {text: 'all of the above is true', correct: false},
      {text: 'they are not of fundamental importance', correct: false},
      {text: 'characterize the state of the body', correct: false},
      {text: 'allow you to determine the required volume of blood transfusion', correct: false},
      {text: 'determine the compatibility of transfused blood', correct: true},
    ],
  },
  {
    question: 'On the first day after a properly performed hemotransfusion, the following complication occurs more often:',
    answers: [
      {text: 'pyrogenic reactions', correct: true},
      {text: 'thromboembolism', correct: false},
      {text: 'acute dilation of the heart', correct: false},
      {text: 'acute cerebrovascular', correct: false},
      {text: 'acute renal failure', correct: false},
    ],
  },
  {
    question: 'The blood type during the transfusion:',
    answers: [
      {text: 'it is not checked, there is enough data in the medical history', correct: false},
      {text: 'it is not checked, there is enough data in the passport', correct: false},
      {text: 'checked before each blood transfusion', correct: true},
      {text: 'it is not checked, there is enough anamnesis data', correct: false},
      {text: 'checked before the first blood transfusion', correct: false},
    ],
  },
  {
    question: 'Hemotransfusion and obstetric anamnesis before the blood transfusion can:',
    answers: [
      {text: 'determine the Rh affiliation and blood type of the patient', correct: false},
      {text: 'prevent possible hemotransfusion complications', correct: true},
      {text: 'identify hereditary diseases', correct: false},
      {text: 'urgently pick up onated blood', correct: false},
      {text: 'make a medical history', correct: false},
    ],
  },
  {
    question: 'How long can blood taken to determine the Rh factor be stored at a temperature of +4, +8C?',
    answers: [
      {text: '2-3 days', correct: true},
      {text: '5-6 days', correct: false},
      {text: 'up to 1 day', correct: false},
      {text: '10-12 hours', correct: false},
      {text: '2-3 hours', correct: false},
    ],
  },
  {
    question: 'How long after hemotransfusion is it necessary to carry out dynamic monitoring of the patient?',
    answers: [
      {text: '1 hour', correct: false},
      {text: '2hrs', correct: false},
      {text: 'the patient does not need to be monitored', correct: false},
      {text: '3 hours', correct: true},
      {text: '4 hrs', correct: false},
    ],
  },
  {
    question: 'What complications can occur on the first day after technically correct hemotransfusion?',
    answers: [
      {text: 'acute enlargement of the heart', correct: false},
      {text: 'acute renal failure', correct: false},
      {text: 'pyrogenic reactions', correct: true},
      {text: 'thromboembolism', correct: false},
      {text: 'acute cerebrovascular accident', correct: false},
    ],
  },
  {
    question: 'What concentration is medical gelatin administered intravenously?',
    answers: [
      {text: '30%', correct: false},
      {text: '40%', correct: false},
      {text: '50%', correct: false},
      {text: '10%', correct: true},
      {text: '20%', correct: false},
    ],
  },
  {
    question: 'At what concentration is thrombin administered intravenously?',
    answers: [
      {text: '1%', correct: false},
      {text: '10%', correct: false},
      {text: '0.25%', correct: false},
      {text: '5%', correct: false},
      {text: 'intravenously is not administered', correct: true},
    ],
  },
  {
    question: 'Which drug (anticoagulant) binds calcium ions and forms difficult to dissociate salts?',
    answers: [
      {text: 'sodium citrate', correct: true},
      {text: 'vitamin K', correct: false},
      {text: 'calcium chloride', correct: false},
      {text: 'phenylin', correct: false},
      {text: 'sinkumar', correct: false},
    ],
  },
  {
    question: 'How long does heaprin take effect after injection?',
    answers: [
      {text: 'immediately after injection', correct: true},
      {text: 'after 3-4 hours', correct: false},
      {text: 'after 1-2 hours', correct: false},
      {text: 'after 8 hours', correct: false},
      {text: 'after 5-6 hours', correct: false},
    ],
  },
  {
    question: 'After what time does dicumarin begin to act after injection?',
    answers: [
      {text: 'after 3-4 hours', correct: false},
      {text: 'after 5-6 hours', correct: false},
      {text: 'after 3-5 days', correct: true},
      {text: 'after 8 hours', correct: false},
      {text: 'after 1-2 days', correct: false},
    ],
  },
  {
    question: 'What is the duration of action of heparin?',
    answers: [
      {text: '10-24 hours', correct: false},
      {text: '2-3 days', correct: false},
      {text: '7-10 hours', correct: false},
      {text: '2-6 hours', correct: true},
      {text: '10-15 minutes', correct: false},
    ],
  },
  {
    question: 'Blood in (III) groups can be injected to individuals:',
    answers: [
      {text: 'only with blood type III', correct: false},
      {text: 'only with blood type II', correct: false},
      {text: 'only with blood groups III and IV', correct: false},
      {text: 'with blood groups II and III', correct: true},
      {text: 'with any blood type', correct: false},
    ],
  },
  {
    question: 'The group of hemodynamic blood substitutes includes:',
    answers: [
      {text: 'protein', correct: false},
      {text: 'polydesis', correct: true},
      {text: 'albumin', correct: false},
      {text: 'globulin', correct: false},
      {text: 'polyglucine', correct: false},
    ],
  },
  {
    question: 'To conduct a biological test, enter:',
    answers: [
      {text: 'three times 25 ml of blood', correct: true},
      {text: 'three times 10 ml of blood with an interval of 3 minutes, watching the patient', correct: false},
      {text: '25 ml of blood once and monitor the patient\'s condition for 5 minutes', correct: false},
      {text: '25 ml of blood, monitor the patient\'s condition for 5 minutes', correct: false},
      {text: 'two times 10 ml of blood with an interval of 3 minutes, watching the patient', correct: false},
    ],
  },
  {
    question: 'After the blood transfusion, the nurse monitors:',
    answers: [
      {text: 'diuresis and temperature', correct: false},
      {text: 'pulse and blood pressure', correct: false},
      {text: 'arterial blood pressure', correct: false},
      {text: 'pulse and temperature', correct: false},
      {text: 'pulse, blood pressure, diuresis and temperature', correct: true},
    ],
  },
  {
    question: 'The blood component with the most pronounced hemostatic effect is:',
    answers: [
      {text: 'erythrocyte suspension', correct: true},
      {text: 'platelet mass', correct: false},
      {text: 'erythrocyte mass', correct: false},
      {text: 'leukocyte mass', correct: false},
      {text: 'plasma', correct: false},
    ],
  },
  {
    question: 'Donated blood is stored in the refrigerator at a temperature of:',
    answers: [
      {text: '0-2C', correct: false},
      {text: '(-5C)', correct: false},
      {text: '4-6C', correct: true},
      {text: '7-10C', correct: false},
      {text: '(-2C)', correct: false},
    ],
  },
  {
    question: 'Special operations include:',
    answers: [
      {text: 'radical', correct: false},
      {text: 'simultaneous', correct: false},
      {text: 'diagnostic ', correct: false},
      {text: 'neurosurgical', correct: false},
      {text: 'endoscopic', correct: true},
    ],
  },
  {
    question: 'A surgical operation is called:',
    answers: [
      {text: 'separation of the integumentary tissues to remove the pathological focus', correct: false},
      {text: 'mechanical effects on organs and tissues performed for the purpose of treatment and diagnosis', correct: true},
      {text: 'operations performed using endoscopic devices', correct: false},
      {text: 'a set of measures providing for prompt access and prompt reception', correct: false},
      {text: 'treatment of the patient by detecting a pathological lesion and removing it', correct: false},
    ],
  },
  {
    question: 'Emergency surgery is not performed:',
    answers: [
      {text: 'with compression of the brain', correct: false},
      {text: 'with peritonitis', correct: false},
      {text: 'with a strained pneumothorax', correct: false},
      {text: 'with arterial bleeding', correct: false},
      {text: 'in case of malignant tumors', correct: true},
    ],
  },
  {
    question: 'One of the stages of the preoperative period is:',
    answers: [
      {text: 'preventive stage', correct: false},
      {text: 'diagnostic stage', correct: true},
      {text: 'preclinical stage', correct: false},
      {text: 'treatment stage', correct: false},
      {text: 'rehabilitation stage', correct: false},
    ],
  },
  {
    question: 'Diseases requiring emergency surgery are:',
    answers: [
      {text: 'stomach cancer, shoulder lipoma', correct: false},
      {text: 'malignant brain tumor', correct: false},
      {text: 'pinched inguinal hernia, perforated stomach ulcer', correct: true},
      {text: 'furuncle', correct: false},
      {text: 'hydrothorax', correct: false},
    ],
  },
  {
    question: 'Manipulation that can be attributed to therapeutic operations:',
    answers: [
      {text: 'trial laparotomy', correct: false},
      {text: 'gastroscopy', correct: false},
      {text: 'correction of shoulder dislocation', correct: true},
      {text: 'finger examination of the rectum', correct: false},
      {text: 'laryngoscopy', correct: false},
    ],
  },
  {
    question: 'Manipulation that can be attributed to diagnostic operations:',
    answers: [
      {text: 'laryngoscopy', correct: false},
      {text: 'correction of shoulder dislocation', correct: false},
      {text: 'finger examination of the rectum', correct: false},
      {text: 'trial laparotomy', correct: true},
      {text: 'appendectomy', correct: false},
    ],
  },
  {
    question: 'Surgery for vital signs is performed with:',
    answers: [
      {text: 'obliterating endarteritis', correct: false},
      {text: 'varicose veins of the lower extremities', correct: false},
      {text: 'malignant tumor', correct: false},
      {text: 'ongoing bleeding', correct: true},
      {text: 'a benign tumor', correct: false},
    ],
  },
  {
    question: 'Preoperative measures that reduce the risk of infection of the surgical wound are:',
    answers: [
      {text: 'cleansing of the gastrointestinal tract', correct: false},
      {text: 'all of the above', correct: true},
      {text: 'shaving the skin', correct: false},
      {text: 'bath', correct: false},
      {text: 'antibiotic therapy', correct: false},
    ],
  },
  {
    question: 'Specify an event aimed at PREVENTING pulmonary complications after surgery:',
    answers: [
      {text: 'inhalation of nitrous oxide', correct: false},
      {text: 'gastric lavage', correct: false},
      {text: 'breathing exercises', correct: true},
      {text: 'administration of iron preparations', correct: false},
      {text: 'cold on the stomach', correct: false},
    ],
  },
  {
    question: 'Information about previous illnesses and injuries is described in the medical history section:',
    answers: [
      {text: 'complaints', correct: false},
      {text: 'additional examination', correct: false},
      {text: 'history of the disease development', correct: false},
      {text: 'life history', correct: true},
      {text: 'examination of the place of the disease', correct: false},
    ],
  },
  {
    question: 'Information about heredity should be reflected in the medical history section:',
    answers: [
      {text: 'life history', correct: true},
      {text: 'results of additional examination', correct: false},
      {text: 'local status', correct: false},
      {text: 'complaints', correct: false},
      {text: 'history of the development of the present disease', correct: false},
    ],
  },
  {
    question: 'Physical examination methods do not include:',
    answers: [
      {text: 'percussion', correct: false},
      {text: 'endoscopy', correct: true},
      {text: 'auscultoafriction', correct: false},
      {text: 'palpation', correct: false},
      {text: 'auscultation', correct: false},
    ],
  },
  {
    question: 'Additional examination methods include:',
    answers: [
      {text: 'percussion', correct: false},
      {text: 'determination of the apical shock', correct: false},
      {text: 'auscultation', correct: false},
      {text: 'palpation', correct: false},
      {text: 'CT scan', correct: true},
    ],
  },
  {
    question: 'An invasive examination method implies:',
    answers: [
      {text: 'the method associated with the risk of infection of the doctor as a result of his contact with the patient', correct: false},
      {text: 'a method in which the integrity of the integumentary tissues is violated and, accordingly, there is a possibility of complications in the form of bleeding, surgical infection, damage to internal organs', correct: true},
      {text: 'a method that is safe for both the patient and the doctor', correct: false},
      {text: 'a method that is safe for the patient', correct: false},
      {text: 'the method associated with the risk of the doctor receiving any harm as a result of contact with the patient', correct: false},
    ],
  },
  {
    question: 'The main difference between a surgical medical history and therapeutic in:',
    answers: [
      {text: 'setting the time of the onset of the disease to the minute', correct: false},
      {text: 'a shorter and more specific statement of complaints', correct: false},
      {text: 'a more detailed description of the musculoskeletal system', correct: false},
      {text: 'the presence of the section - local status', correct: true},
      {text: 'mandatory entry into the medical history of information about previously performed surgical interventions to the patient', correct: false},
    ],
  },
  {
    question: 'The sequence of examination of the patient os as follows:',
    answers: [
      {text: 'nan', correct: false},
      {text: 'examination, palpation, percussion, auscultation', correct: true},
      {text: 'palpation, examination, percussion, auscultation', correct: false},
      {text: 'auscultation, percussion, palpation, examination', correct: false},
      {text: 'examination, percussion, palpation, auscultation', correct: false},
    ],
  },
  {
    question: 'Indications for surgery should be described in the section medical history:',
    answers: [
      {text: 'local objective examination', correct: false},
      {text: 'complaints', correct: false},
      {text: 'peroperative epicrisis', correct: true},
      {text: 'general objective examination', correct: false},
      {text: 'protocol of surgery', correct: false},
    ],
  },
  {
    question: 'List the information to describe the operation in the medical history:',
    answers: [
      {text: 'description of the removed macropreparation', correct: false},
      {text: 'information about the amount of suture and other consumables used', correct: false},
      {text: 'the degree of participation of each surgeon in the operation', correct: false},
      {text: 'description of the pathological changes detected during the operation, description of the course of the operation, its completion', correct: true},
      {text: 'access used, cut length', correct: false},
    ],
  },
  {
    question: 'Preparation of the intestine in the preoperative period provides for the appointment of:',
    answers: [
      {text: 'a slag-free diet', correct: false},
      {text: 'expectorant drugs', correct: false},
      {text: 'probe power supply', correct: false},
      {text: 'cleansing enemas', correct: true},
      {text: 'cold on the stomach', correct: false},
    ],
  },
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', ()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

backButton.addEventListener('click', ()=>{
  if (currentQuestionIndex < questions.length) {
    handleBackButton();
  } else {
    startQuiz();
  }
});
startQuiz();
