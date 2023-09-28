export default function Tab({Tab_Title, Tab_Text, Tab_Button, Tab_Button_Text}) {
  return (
    <div className="Scroll_Tab">
        <h1>{Tab_Title}</h1>
        <p>{Tab_Text}</p>
        {
            (Tab_Button) && <button>{Tab_Button_Text}</button>
        }
    </div>
  )
}