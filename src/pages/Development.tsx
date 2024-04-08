import DevelopUser from "../images/develop-user-create.png"
import DevelopProject from "../images/develop-project-create.png"
const CDevelopment = ()=>{
    return <>
        <h1>開發使用</h1>
        <h3>版本</h3>
        <ul>
            <li>Nodejs: 18.18.0</li>
            <li>React: ^18</li>
            <li>NextJS: 14.1.4</li>
        </ul>
        <h3>套件說明</h3>
        <ul>
            <li>
                <a href="https://openrouteservice.org/services/">openrouteservice</a>
                <br/>
                <p>
                    窮人的規畫路徑開源SASS<br/>
                    單一帳號申請一天可以問2000次<br/>
                    可用於規畫路徑，查詢景點
                </p>
            </li>
            <li>
                <a href="https://www.openstreetmap.org/#map=8/23.611/120.768">OSM</a>
                <br/>
                <p>
                    窮人的規畫路徑開源SASS<br/>
                    漂亮的地圖，又有漂亮的路名<br/>
                </p>
            </li>
            <li>
                <a href="https://www.mongodb.com/atlas/database">mongodb atlas database</a>
                <br/>
                <p>
                    512M 的免費儲存資料庫<br/>
                </p>
            </li>
        </ul>
        <h3>使用方式</h3>
        <ol>
            <li>
                先去 google 創一個帳號 (本帳號為 tokyotraval.202404@gmail.com)
            </li>
            <li>
                使用這個信箱去 openrouteservice , mongo atlas 創立帳號
            </li>
            <li>
                申請 line develop Loing user, 設定 NextAuth 回傳 callback
                <span>, <a href="https://next-auth.js.org/providers/line">ref1</a></span>
                <span>, <a href="https://blog.wildsky.cc/posts/line-nextauth-problem">ref2</a></span>
            </li>
            <li>
                在 mongo atlas 建立這個網頁會使用到的人
                <span>, <a href="https://next-auth.js.org/providers/line">ref1</a></span>
                <span>, <a href="https://blog.wildsky.cc/posts/line-nextauth-problem">ref2</a></span>
                <br/>
                <img src={DevelopUser} alt=""/>
            </li>
            <li>
                設定本次要出去玩的專案 <br/>
                <img src={DevelopProject} alt=""/>
            </li>
            <li>
                ( option ) 在 mongo atlas 加入一些 index <br/>
            </li>
            <li>
                服務上架所需參數
                <pre>
                    MONGO_PASSWORD= 
                    NEXTAUTH_SECRET= 
                    LINE_CLIENT_ID= 
                    LINE_CLIENT_SECRET= 
                    APIKEY= //openrouteservice 
                </pre>
            </li>
        </ol>
    </>
}

export default CDevelopment