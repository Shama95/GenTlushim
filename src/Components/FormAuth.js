import React from 'react';
import { Container } from 'semantic-ui-react';
import logo from '../Assets/shahar.jpg'

const FormAuth = props => {
    return (
        <div>
                <h2 className="ui right header " style={{textAlign: 'right'}}>
                    <div className="content">
                        {props.name}
                        <div className="sub header">{props.personalNumber}</div>
                    </div>
                    <img src={logo} style={{marginLeft:"10px"}}/>

                </h2>
           
            <br/>
            <Container>
                <form className="ui form" style={{borderRadius:"10px" , border:"solid grey", borderSpacing:"100px",
                                                    borderCollapse: "separate"}}>
                    <div className="two fields">
                        <div className="field">
                            <label>שם פרטי</label>
                            <input type="text" name="first-name" placeholder="First Name"/>
                        </div>

                        <div className="field">
                            <label>שם משפחה</label>
                            <input type="text" name="last-name" placeholder="Last Name"/>
                        </div>
                    </div>

                    <div>
                        <label>צוות מיועד</label>
                        <select className="ui fluid dropdown">
                            <option value="otzma">חוקת עוצמ"ה</option>
                            <option value="keva">חוקת קבע</option>
                            <option value="midgamim">מדגמים</option>
                            <option value="midgamim">צוות שכר</option>

                        </select>
                    </div>

                    <button className="ui button" type="submit">שלח בקשה</button>
                    <button className="ui button" type="submit">האם המשתמש קיים?</button>

                </form>
            </Container>
            </div>

        );
};

export default FormAuth;

