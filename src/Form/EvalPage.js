import React, {useState} from 'react'
import './EvalPage.css'

/*
EvalPage component
    - This component receives the following properties:
        * Professor Name
        * Subject
        * Type (either lec or lab)
*/

const EvalPage = (props) => {

    const [rate, setRate] = useState({
        item1: -1,
        item2: -1,
        item3: -1
    })

    return (
        <>
            <div className="infoHeader">
                <h1> Currently Evaluating:</h1>
                <h2> Prof. name </h2>  { /*This will be replaced with props.name */}
                <h2> Subject </h2> {/*  This will be replaced with props.subject */}
                <p className="rateP"> Rate your professor/instructor with 5 being the highest and 1 being the lowest</p>
            </div>

            <div className="category">
                <h1 className="category-heading"> Part I: Preparedness</h1>
                <div className="formCard">
                    <p className="question"> The faculty-in-charge is always ready with their lesson plans. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="1answer1"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="1answer1"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="1answer1" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="1answer1"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="1answer1"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge always discusses the objectives of every lesson. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="1answer2"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="1answer2"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="1answer2" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="1answer2"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="1answer2"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question">The faculty-in-charge clearly discussed the course curriculum at the beginning of classes.</p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="1answer3"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="1answer3"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="1answer3" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="1answer3"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="1answer3"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge always provides the course materials and/or handouts for each lesson. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="1answer4"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="1answer4"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="1answer4" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="1answer4"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="1answer4"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge knows what they were discussing.</p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="1answer5"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="1answer5"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="1answer5" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="1answer5"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="1answer5"/> 5 </label>
                    </div>
                </div>
            </div>

            <div className="category">
                <h1 className="category-heading"> Part II: Student-Faculty Relationship</h1>
                <div className="formCard">
                    <p className="question"> The faculty-in-charge is always available during consultation hours </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="2answer1"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="2answer1"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="2answer1" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="2answer1"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="2answer1"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge always acknowledges their students’ skills and abilities.</p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="2answer2"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="2answer2"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="2answer2" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="2answer2"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="2answer2"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge always encourages their students to share their ideas in class. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="2answer3"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="2answer3"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="2answer3" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="2answer3"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="2answer3"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge provides appropriate feedback about my outputs and performance.</p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="2answer4"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="2answer4"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="2answer4" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="2answer4"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="2answer4"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge always prioritizes their students’ welfare. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="2answer5"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="2answer5"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="2answer5" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="2answer5"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="2answer5"/> 5 </label>
                    </div>
                </div>
            </div>

            <div className="category">
                <h1 className="category-heading"> Part III: Time Management</h1>
                <div className="formCard">
                    <p className="question"> The faculty-in-charge starts the classes on time. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="3answer1"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="3answer1"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="3answer1" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="3answer1"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="3answer1"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge ends the classes on time.</p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="3answer2"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="3answer2"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="3answer2" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="3answer2"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="3answer2"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge responds to the students’ queries on time. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="3answer3"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="3answer3"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="3answer3" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="3answer3"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="3answer3"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge uses the time effectively and meaningfully.</p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="3answer4"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="3answer4"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="3answer4" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="3answer4"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="3answer4"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The faculty-in-charge does not use the time for personal interests </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="3answer5"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="3answer5"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="3answer5" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="3answer5"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="3answer5"/> 5 </label>
                    </div>
                </div>
            </div>

            <div className="category">
                <h1 className="category-heading"> Part IV: Quality of Requirements</h1>
                <div className="formCard">
                    <p className="question"> Instructions are organized and easy to understand. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="4answer1"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="4answer1"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="4answer1" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="4answer1"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="4answer1"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The goal of each requirement is clearly discussed. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="4answer2"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="4answer2"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="4answer2" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="4answer2"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="4answer2"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The requirements are relevant and useful. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="4answer3"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="4answer3"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="4answer3" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="4answer3"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="4answer3"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The deadlines of the requirements are just.</p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="4answer4"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="4answer4"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="4answer4" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="4answer4"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="4answer4"/> 5 </label>
                    </div>
                </div>

                <div className="formCard">
                    <p className="question"> The grading system is appropriate. </p>
                    <div className="answers">
                        <label className="answer"> <input type="radio" value="1" name="4answer5"/> 1 </label>
                        <label className="answer"> <input type="radio" value="2" name="4answer5"/> 2 </label>
                        <label className="answer"> <input type="radio" value="3" name="4answer5" /> 3 </label>
                        <label className="answer"> <input type="radio" value="4" name="4answer5"/> 4 </label>
                        <label className="answer"> <input type="radio" value="5" name="4answer5"/> 5 </label>
                    </div>
                </div>
            </div>

            <button className="submitBtn"> Submit </button>
        </>
    )
}

export default EvalPage;