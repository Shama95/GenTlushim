import React from 'react';
import { Container } from 'semantic-ui-react';

const FormAuth = () => {
    return (
            <Container>
                <form class="ui form">
                    <div class="two fields">
                        <div class="field">
                            <label>שם פרטי</label>
                            <input type="text" name="first-name" placeholder="First Name"/>
                        </div>

                        <div class="field">
                            <label>שם משפחה</label>
                            <input type="text" name="last-name" placeholder="Last Name"/>
                        </div>
                    </div>

                    <div>
                        <label>צוות מיועד</label>
                        <select class="ui fluid dropdown">
                            <option value="otzma">חוקת עוצמ"ה</option>
                            <option value="keva">חוקת קבע</option>
                            <option value="midgamim">מדגמים</option>
                        </select>
                    </div>

                    <button class="ui button" type="submit">שלח בקשה</button>
                    <button class="ui button" type="submit">האם המשתמש קיים?</button>

                </form>
            </Container>
        );
};

export default FormAuth;

