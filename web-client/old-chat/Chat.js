import { useRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import UsersList from './usersList';

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function Chat(user) {
  const users = [{name:'Yossi',age:"13"},{name:'Noam',age:"13"}];

  return (
    <div className="theme">
      <div className="chat container center rounded border border-3 border-dark container">
        <div className="row">
          <div className="col">
            -user-
          </div>
          <div className="col">
            contact
          </div>
        </div>
        <div className="row">
          <div className="col-3 rounded border border-1 border-dark bg-light vh-100">
            <UsersList users={users}/>
          </div>
          <div className="col-9">
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;


class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  render () {
    return (
<<<<<<< HEAD:web-client/src/chat/Chat.js

        <div className="messages rounded border border-1 border-dark position-relative scrolled"> 
=======
        <div>
          <div className="chat-screen text-dark container rounded border border-1 border-dark position-relative">
            jkdsjllcjzlxjc  sakldddddddddddddddddddddd
            alsdkaaaaaaaaaaaaaa
          </div>
        <div>
          <SendBox/>
>>>>>>> 7dccbca9c946f1aacf8c0a7fd67a50318b0806fc:web-client/src/old-chat/Chat.js
        </div>
    )
  }
}

function SendBox() {
  return (
    <div class>
      אוגוסטן קושי נולד ב־21 באוגוסט 1789 בפריז. קיבל את חינוכו מאביו, לואי פרנסואה קושי (1760–1848), שהחזיק במספר משרות ציבוריות והיה ידיד של המתמטיקאים ז'וזף-לואי לגראנז' ופייר-סימון לפלס. אוגוסטן קושי נרשם בשנת 1802 לאקול סנטראל די פנתאון (École Centrale du Panthéon) ומשם המשיך לאקול פוליטקניק ב־1805. ב־1807 עבר ללמוד באקול דה פון א שוסה (École des Ponts et Chaussées), שם הוכשר בתור מהנדס. ב־1810 הוא עזב את פריז לשרבור, אך חזר ב־1813 בגלל בעיות בריאות.

עם חזרתו לפריז בשנת 1813, שכנעו אותו לגראנז' ולפלס לנטוש את ההנדסה ולהקדיש את עצמו ללימודי המתמטיקה. הוא הצטרף שוב ל"פוליטכני" (מוסד להשכלה גבוהה), שאותו עזב ב־1830 בעקבות הכתרתו של לואי פיליפ. אחרי תקופה קצרה בפריבורג שבשווייץ נוצרה עבור קושי ב־1831 קתדרה לפיזיקה מתמטית באוניברסיטת טורינו שבאיטליה.

ב־1833 הזמין המלך הצרפתי לשעבר, שארל העשירי, את קושי להיות מורה פרטי לנכדו, הדוכס מבורדו, דבר שנתן לקושי הזדמנות לטייל ולקבל משוב חיובי על עבודותיו המתמטיות. ב־1838 חזר קושי לפריז, אך סירב לקבל פרופסורה בקולז' דה פראנס, בגלל נוסח השבועה שהיה תנאי לתפקיד.

קושי התנגד להפרדת דת ומדינה במערכת החינוך הצרפתית. הוא סייע לכנסייה הקתולית להקים להקים ענף חינוך עצמאי, לאחר שאיבדה את השליטה במערכת החינוך הציבורית. הוא סייע בהכשרת מורים לאקול נורמל אקלזיאסטיק (צר'), בית ספר בפריז המנוהל על ידי ישועים, ולקח חלק בהקמת המכון הקתולי בפריז (אנ'). פעילויות אלו לא הפכו את קושי לפופולרי בקרב עמיתיו, שתמכו באידיאלים של הנאורות של המהפכה הצרפתית. כאשר התפנה קתדרה למתמטיקה בקולז' דה פראנס ב-1843, קושי הגיש בקשה, אך קיבל רק 3 קולות מתוך 45.

ב־1848, אחרי שהשבועה הושעתה במוסדות ההשכלה הגבוהה של צרפת, הסכים קושי לקבל משרת הוראה באקול פוליטקניק ואחרי שהוחזרה השבועה ב־1851 קיבל קושי פטור ממנה.

לקושי היו שני אחים, אלכסנדר לורן קושי (1792-1857), נשיא בית המשפט לערעורים ואחר כך שופט, והאח השני, אז'ן פרנסואה קושי (1802–1877), פובליציסט ומתמטיקאי זוטר.
      <div className="send-box row rounded border border-1 border-dark">
          <div className="col-1">
            <i className="bi bi-paperclip"></i>
          </div>
          <div className="col-10">
            <input placeholder="New messages here..."></input>
          </div>
          <div className="col-1">
            <button className="btn btn-primary" type="button">Send</button>
          </div>
      </div>
    </div>
  )
}