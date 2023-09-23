const questionsMock = [
  {
    "level": 1,
    "question": "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    "answers": [
      {
        "id": 1,
        "prefix": "A",
        "text": "1850s"
      },
      {
        "id": 2,
        "prefix": "B",
        "correct": true,
        "text": "1880s"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "1930s"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "text": "Report"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "Record"
      },
      {
        "id": 3,
        "prefix": "C",
        "correct": true,
        "text": "Field",
      },
      {
        "id": 4,
        "prefix": "D",
        "text": "File"
      }
    ],
    "money": "$1,000",
    "correctAnswersIDs": [3]
  },
  {
    "level": 3,
    "question": "'OS' computer abbreviation usually means?",
    "answers": [
      {
        "id": 1,
        "prefix": "A",
        "text": "Order of Significance"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "Open Software"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "Optical Sensor"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "correct": true,
        "text": "1900s"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "1850s"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "1860s"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "text": "Image file"
      },
      {
        "id": 2,
        "prefix": "B",
        "correct": true,
        "text": "Animation/movie file"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "Audio file"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "text": "1950s"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "1960s"
      },
      {
        "id": 3,
        "prefix": "C",
        "correct": true,
        "text": "1970s"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "text": "Sound"
      },
      {
        "id": 2,
        "prefix": "B",
        "correct": true,
        "text": "Remote control"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "Color balance"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "correct": true,
        "text": "Flash"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "Flange"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "Fury"
      },
      {
        "id": 4,
        "prefix": "D",
        "text": "FRAM"
      }
    ],
    "money": "$64,000",
    "correctAnswersIDs": [1]
  },
  {
    "level": 9,
    "question": "What is the Celsius equivalent of 77 degrees Fahrenheit?",
    "answers": [
      {
        "id": 1,
        "prefix": "A",
        "text": "15"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "20"
      },
      {
        "id": 3,
        "prefix": "C",
        "correct": true,
        "text": "25"
      },
      {
        "id": 4,
        "prefix": "D",
        "text": "30"
      }
    ],
    "money": "$125,000",
    "correctAnswersIDs": [3]
  },
  {
    "level": 10,
    "question": "Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?",
    "answers": [
      {
        "id": 1,
        "prefix": "A",
        "correct": true,
        "text": "Alan Turing"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "Jeff Bezos"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "George Boole"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "text": "Dennis Ritchie & Ken Thompson"
      },
      {
        "id": 2,
        "prefix": "B",
        "correct": true,
        "text": "David Filo & Jerry Yang"
      },
      {
        "id": 3,
        "prefix": "C",
        "text": "Vint Cerf & Robert Kahn"
      },
      {
        "id": 4,
        "prefix": "D",
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
        "prefix": "A",
        "text": "Choke"
      },
      {
        "id": 2,
        "prefix": "B",
        "text": "Inductor"
      },
      {
        "id": 3,
        "prefix": "C",
        "correct": true,
        "text": "Resistor"
      },
      {
        "id": 4,
        "prefix": "D",
        "text": "Capacitor"
      }
    ],
    "money": "$1,000,000",
    "correctAnswersIDs": [3]
  }
];

export default questionsMock;