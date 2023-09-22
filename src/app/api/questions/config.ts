const questionsMock = [
  {
    "level": 1,
    "question": "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    "answers": [
      {
        "id": 1,
        "text": "1850s"
      },
      {
        "id": 2,
        "correct": true,
        "text": "1880s"
      },
      {
        "id": 3,
        "text": "1930s"
      },
      {
        "id": 4,
        "text": "1950s"
      }
    ],
    "money": "$500",
    "correctAnswersIDs": [2]
  },
  {
    "level": 2,
    "question": "What is part of a database that holds only one type of information?",
    "answers": [
      {
        "id": 1,
        "text": "Report"
      },
      {
        "id": 2,
        "text": "Record"
      },
      {
        "id": 3,
        "correct": true,
        "text": "Field",
      },
      {
        "id": 4,
        "text": "File"
      }
    ],
    "money": "$1,000",
    "correctAnswersIDs": [3]
  },
  {
    "level": 3,
    "question": "'OS' computer abbreviation usually means ?",
    "answers": [
      {
        "id": 1,
        "text": "Order of Significance"
      },
      {
        "id": 2,
        "text": "Open Software"
      },
      {
        "id": 3,
        "text": "Optical Sensor"
      },
      {
        "id": 4,
        "correct": true,
        "text": "Operating System"
      }
    ],
    "money": "$2,000",
    "correctAnswersIDs": [4]
  },
  {
    "level": 4,
    "question": "In which decade with the first transatlantic radio broadcast occur?",
    "answers": [
      {
        "id": 1,
        "correct": true,
        "text": "1900s"
      },
      {
        "id": 2,
        "text": "1850s"
      },
      {
        "id": 3,
        "text": "1860s"
      },
      {
        "id": 4,
        "text": "1870s"
      }
    ],
    "money": "$4,000",
    "correctAnswersIDs": [1]
  },
  {
    "level": 5,
    "question": "'.MOV' extension refers usually to what kind of file?",
    "answers": [
      {
        "id": 1,
        "text": "Image file"
      },
      {
        "id": 2,
        "correct": true,
        "text": "Animation/movie file"
      },
      {
        "id": 3,
        "text": "Audio file"
      },
      {
        "id": 4,
        "text": "MS Office document"
      }
    ],
    "money": "$8,000",
    "correctAnswersIDs": [2]
  },
  {
    "level": 6,
    "question": "In which decade was the SPICE simulator introduced?",
    "answers": [
      {
        "id": 1,
        "text": "1950s"
      },
      {
        "id": 2,
        "text": "1960s"
      },
      {
        "id": 3,
        "correct": true,
        "text": "1970s"
      },
      {
        "id": 4,
        "text": "1980s"
      }
    ],
    "money": "$16,000",
    "correctAnswersIDs": [3]
  },
  {
    "level": 7,
    "question": "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
    "answers": [
      {
        "id": 1,
        "text": "Sound"
      },
      {
        "id": 2,
        "correct": true,
        "text": "Remote control"
      },
      {
        "id": 3,
        "text": "Color balance"
      },
      {
        "id": 4,
        "text": "High voltage"
      }
    ],
    "money": "$32,000",
    "correctAnswersIDs": [2]
  },
  {
    "level": 8,
    "question": "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    "answers": [
      {
        "id": 1,
        "correct": true,
        "text": "Flash"
      },
      {
        "id": 2,
        "text": "Flange"
      },
      {
        "id": 3,
        "text": "Fury"
      },
      {
        "id": 4,
        "text": "FRAM"
      }
    ],
    "money": "$64,000",
    "correctAnswersIDs": [1]
  },
  {
    "level": 9,
    "question": "The purpose of choke in tube light is ?",
    "answers": [
      {
        "id": 1,
        "text": "To decrease the current"
      },
      {
        "id": 2,
        "text": "To increase the current"
      },
      {
        "id": 3,
        "text": "To decrease the voltage momentarily"
      },
      {
        "id": 4,
        "correct": true,
        "text": "To increase the voltage momentarily"
      }
    ],
    "money": "$125,000",
    "correctAnswersIDs": [4]
  },
  {
    "level": 10,
    "question": "Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?",
    "answers": [
      {
        "id": 1,
        "correct": true,
        "text": "Alan Turing"
      },
      {
        "id": 2,
        "text": "Jeff Bezos"
      },
      {
        "id": 3,
        "text": "George Boole"
      },
      {
        "id": 4,
        "text": "Charles Babbage"
      }
    ],
    "money": "$250,000",
    "correctAnswersIDs": [1]
  },
  {
    "level": 11,
    "question": "Who developed Yahoo?",
    "answers": [
      {
        "id": 1,
        "text": "Dennis Ritchie & Ken Thompson"
      },
      {
        "id": 2,
        "correct": true,
        "text": "David Filo & Jerry Yang"
      },
      {
        "id": 3,
        "text": "Vint Cerf & Robert Kahn"
      },
      {
        "id": 4,
        "text": "Steve Case & Jeff Bezos"
      }
    ],
    "money": "$500,000",
    "correctAnswersIDs": [2]
  },
  {
    "level": 12,
    "question": "Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
    "answers": [
      {
        "id": 1,
        "text": "Choke"
      },
      {
        "id": 2,
        "text": "Inductor"
      },
      {
        "id": 3,
        "correct": true,
        "text": "Resistor"
      },
      {
        "id": 4,
        "text": "Capacitor"
      }
    ],
    "money": "$1,000,000",
    "correctAnswersIDs": [3]
  }
];

export default questionsMock;