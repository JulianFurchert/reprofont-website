const defaultState = [
  {name: 'null', className: "repro-Null", id:0, activeLetter:"A", activeLetterIndex:0, letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]},
  {name: '100', className: "repro-100", id:1, activeLetter:"A", activeLetterIndex:0, letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]},
  {name: '200', className: "repro-200", id:2, activeLetter:"A", activeLetterIndex:0, letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]},
  {name: '300', className: "repro-300", id:3, activeLetter:"A", activeLetterIndex:0, letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]},
  {name: '400', className: "repro-400", id:4, activeLetter:"A", activeLetterIndex:0, letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]},
  {name: '500', className: "repro-500", id:4, activeLetter:"A", activeLetterIndex:0, letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]},
  {name: '600', className: "repro-600", id:4, activeLetter:"A", activeLetterIndex:0, letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]},
]

export default function(state = defaultState, action) {
  switch (action.type) {
    case "LETTER_SELECTED":
      return state.map((fontstyle, index)=>{
        if(index === action.index){
          return Object.assign({}, fontstyle, {
            activeLetterIndex: action.letterIndex,
            activeLetter: state[index].letters[action.letterIndex]
          })
        }
        return fontstyle
      });
    default:
      return state;
  }
}
