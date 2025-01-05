import MenuList from "./menuList";
import './styles.css'


export default function TreeView({menus}){
    console.log(menus,"fuck me baby");
    return(
        <div className="tree-view-container">
            <MenuList list = {menus}/>
        </div>
    )
}