import headerStyles from "./header.module.css";

export default function header(){
    return(
        <div>
     <header className={` ${headerStyles.header} text-center`}> This is the best header Ever! </header>
        </div>
    )
}