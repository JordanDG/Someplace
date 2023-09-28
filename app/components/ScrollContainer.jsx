// Components //
import Tab from "./Tab";

export default function ScrollContainer() {
  return (
    <div className="Scroll_Container">
      <Tab Tab_Title="Title" Tab_Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu viverra tellus tortor aliquam sapien. Cras volutpat lectus libero, at dictum purus gravida et."/>
      <Tab Tab_Title="Title" Tab_Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu viverra tellus tortor aliquam sapien." Tab_Button={true} Tab_Button_Text="Click"/>
      <Tab Tab_Title="Title" Tab_Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu viverra tellus tortor aliquam sapien. Cras volutpat lectus libero, at dictum purus gravida et."/>
      <Tab Tab_Title="Title" Tab_Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu viverra tellus tortor aliquam sapien." Tab_Button={true} Tab_Button_Text="Click"/>
    </div>
  )
}