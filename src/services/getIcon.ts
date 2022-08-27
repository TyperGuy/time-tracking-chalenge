export function getImage (title:string) :string {
  switch(title){
    case "Work":
      return "./icon-work.svg"
    case "Play" :
      return "./icon-play.svg"
    case "Study":
      return "./icon-study.svg"
    case "Exercise" :
      return "./icon-exercise.svg"   
    case "Social" :
      return "./icon-social.svg"
    default : 
      return "./icon-self-care.svg"
  }

}