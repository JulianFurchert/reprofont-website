import { lettersDefault , lettersExtended} from '../fonts/reproLetters';

const defaultState = [
  {name: 'Null', className: "repro-Null", id:0, activeLetter:"A", activeLetterIndex:0, letters: lettersDefault },
  {name: '100', className: "repro-100", id:1, activeLetter:"A", activeLetterIndex:0, letters: lettersDefault },
  {name: '200', className: "repro-200", id:2, activeLetter:"A", activeLetterIndex:0, letters: lettersExtended },
  {name: '300', className: "repro-300", id:3, activeLetter:"A", activeLetterIndex:0, letters: lettersExtended },
  {name: '400', className: "repro-400", id:4, activeLetter:"A", activeLetterIndex:0, letters: lettersExtended },
  {name: '500', className: "repro-500", id:5, activeLetter:"A", activeLetterIndex:0, letters: lettersDefault },
  {name: '600', className: "repro-600", id:6, activeLetter:"A", activeLetterIndex:0, letters: lettersDefault },
]

export default function(state = defaultState, action) {
  switch (action.type) {
    case "LETTER_SELECTED":
      return state.map((fontstyle, index)=>{
        if(index === action.index){
          return Object.assign({}, fontstyle, {
            activeLetterIndex: action.letterIndex,
            activeLetter: state[index].letters[action.letterIndex].letter
          })
        }
        return fontstyle
      });
    default:
      return state;
  }
}
