import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const THE__WORD = "lemon";

  // ? *************** Buttons ***************

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultsPanel, setResultsPanel] = useState({
    isResultOpen: false,
    verdict: "",
  });

  // ? *************** WordGrid ***************

  var initialGrid = Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => "")
  );

  const [wordGrid, setWordGrid] = useState(initialGrid);
  const [letterPosition, setLetterPosition] = useState({ x: 0, y: -1 });
  const [letter, setLetter] = useState({ char: false, index: -2 });
  const [word, setWord] = useState("");
  const [error, setError] = useState({ isError: false, errorMessage: "" });
  const [results, setResults] = useState([]);

  const [isWordValid, setIsWordValid] = useState(false);

  // ? *************** DataFetching ***************

  // ******** Buttons' Functions *************

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openHelp = () => {
    setIsHelpOpen(true);
  };
  const closeHelp = () => {
    setIsHelpOpen(false);
  };

  const openStats = () => {
    setIsStatsOpen(true);
  };
  const closeStats = () => {
    setIsStatsOpen(false);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };
  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const closeResults = () => {
    setResultsPanel({ ...resultsPanel, isResultOpen: false });
  };

  useEffect(() => {
    if (
      isHelpOpen ||
      isSettingsOpen ||
      isStatsOpen ||
      resultsPanel.isResultOpen
    )
      setIsModalOpen(true);
    else setIsModalOpen(false);
  }, [isHelpOpen, isSettingsOpen, isStatsOpen, resultsPanel.isResultOpen]);

  // **************** WordGrid Functions ***************

  const enterLetter = (letter) => {
    setTimeout(() => {
      setLetter({ ...letter, char: letter });
    }, 100);
  };

  const deleteLetter = () => {
    setTimeout(() => {
      setLetter({ ...letter, char: "" });
    }, 100);
  };

  const enterWord = () => {
    if (word.length !== 5) {
      setError({ isError: true, errorMessage: "Not enough letters!" });
    } else if (!isWordValid)
      setError({ isError: true, errorMessage: "Not a valid Word!" });
    else {
      guessWord();
      if (THE__WORD.toLowerCase() === word.toLowerCase())
        setResultsPanel({ isResultOpen: true, verdict: "winner" });
      setWord("unword");
      setLetterPosition((pos) => {
        return pos.x <= 5 ? { x: pos.x + 1, y: -1 } : pos;
      });
    }
  };

  const checkWord = () => {
    console.log("word in chekc word: ", word);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios
      .get(url)
      .then((response) => {
        console.log("data:", response.data);
        setIsWordValid(true);
      })
      .catch((error) => {
        console.log("errorFetching", error);
        setIsWordValid(false);
      });
  };

  useEffect(() => {
    if (word.length === 5) checkWord();
  }, [word]);

  const guessWord = () => {
    let remainingLetters = THE__WORD.split("");
    let nonExistantLetters = [];
    let misplacedLetters = [];
    let correctLetters = [];
    word
      .toLowerCase()
      .split("")
      .forEach((letter, index) => {
        if (remainingLetters.includes(letter)) {
          if (remainingLetters.indexOf(letter) === index) {
            correctLetters.push({ letter, index, color: "green" });
          } else {
            misplacedLetters.push({ letter, index, color: "yellow" });
          }
          remainingLetters[remainingLetters.indexOf(letter)] = 1;
        } else nonExistantLetters.push({ letter, index, color: "grey" });
      });

    setResults([
      ...results,
      [correctLetters, misplacedLetters, nonExistantLetters],
    ]);
  };

  const insertCharacter = () => {
    const { x, y } = letterPosition;
    let tempMatrice = wordGrid;
    tempMatrice[x][y] = letter.char;
    setWordGrid([...tempMatrice]);
  };

  useEffect(() => {
    (function updatePosition() {
      const { y } = letterPosition;
      if (letter.char && y <= 3) {
        setLetterPosition((pos) => {
          return { ...pos, y: pos.y + 1 };
        });
      }

      if (!letter.char && y >= 0) {
        insertCharacter();
        setLetterPosition((pos) => {
          return { ...pos, y: pos.y - 1 };
        });
      }
    })();
  }, [letter]);

  useEffect(() => {
    const { x, y } = letterPosition;
    if (letter.char && y >= 0 && x <= 5) insertCharacter();
    if (x !== 6) setWord(wordGrid[x].join(""));
    else setResultsPanel({ isResultOpen: true, verdict: "loser" });
  }, [letterPosition]);

  return (
    <AppContext.Provider
      value={{
        openMenu,
        closeMenu,
        closeHelp,
        openHelp,
        openSettings,
        closeSettings,
        openStats,
        closeStats,
        isMenuOpen,
        isHelpOpen,
        isStatsOpen,
        isSettingsOpen,
        isModalOpen,
        wordGrid,
        enterLetter,
        enterWord,
        deleteLetter,
        ...error,
        setError,
        results,
        resultsPanel,
        closeResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
