import { Link, LinkProps, Outlet, useMatch, useResolvedPath } from "react-router-dom"
import styles from "../App.module.css"
const CNav = ()=>{
    return <>
    <div className={`${styles["container"]}`}>
        <div className={`${styles["left"]}`}>
            <CCustomLink to="/">Home</CCustomLink>
            <CCustomLink to="/usage">Usage</CCustomLink>
        </div>
        <div className={`${styles["right"]}`}>
            <Outlet />
        </div>
    </div>
    </>
}
const CCustomLink = ({ children, to, ...props }: LinkProps)=>{
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
            className={`${styles["link"]} ${match && styles["active"]}`}
            to={to}
            {...props}
        >
          {children}
        </Link>
      </div>
    );
}
export default CNav