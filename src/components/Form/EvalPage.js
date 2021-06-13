import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import '../../styles/EvalPage.css'
import ConfirmModal from '../Modal/ConfirmModal'
import MissingModal from '../Modal/MissingModal'
import GoHomeModal from '../Modal/GoHomeModal'
/*
EvalPage component
    - This component receives the following properties:
        * Professor Name
        * Subject
        * Type (either lec or lab)
*/


export default function EvalPage(props){
    const currentProf = props.location.prof

    const [rate, setRate] = useState(null)

    const onValueChange = (event, index) => {
        rate[index] = parseInt(event.target.value)
    }

    const initValues = () => {
        const newArr = new Array(20).fill(-1)
        setRate(newArr)
    }

    useEffect(() => {
        initValues()
    }, [])

    const [showModal, setShowModal] = useState(false) // Confirmation modal for submission
    const [showMissingModal, setShowMissingModal] = useState(false) // Modal when one of the form is not complete
    const [showGoHomeModal, setShowGoHomeModal] = useState(false)

    const [showPart, setShowPart] = useState(1);

    const toggleOne = (e) => {
        e.preventDefault();
        setShowPart(1);
    };

    const toggleTwo = (e) => {
        e.preventDefault();
        setShowPart(2);
    };

    const toggleThree = (e) => {
        e.preventDefault();
        setShowPart(3);
    };

    const toggleFour = (e) => {
        e.preventDefault();
        setShowPart(4);
    };

    if(currentProf == null) {
        return(
            <Redirect to="/home"></Redirect>
        )
    }

    return (
        <div className="pageMainCont">
            <div className="infoHeader">
                <h4>Evaluating</h4>
                <h5 className="currentProf"> {currentProf.name}</h5>  { /*This will be replaced with props.name */}
                <p className="currentSubj"> {currentProf.subject} </p> {/*  This will be replaced with props.subject */}
                
                <div className="instruction">
                    <p className="redText">*&nbsp;</p>
                    <p className="rateP"> Rate your professor/instructor with 5 being the highest and 1 being the lowest</p>
                </div>
            </div>
            
            <div className="bodyCont">
            <div className="outline">
                <button className={showPart===1 ? "buttonLined": "buttonNormal"} onClick={toggleOne}>Part I: Preparedness</button>
                <button className={showPart===2 ? "buttonLined": "buttonNormal"} onClick={toggleTwo}>Part II: Student-Faculty Relationship</button>
                <button className={showPart===3 ? "buttonLined": "buttonNormal"} onClick={toggleThree}>Part III: Time Management</button>
                <button className={showPart===4 ? "buttonLined": "buttonNormal"} onClick={toggleFour}>Part IV: Quality of Requirements</button>
            </div>

            <div className="formCont">
                <center>
                <div className={showPart===1 ? "category":"categoryHide"}>
                    <div className="formCard">
                        <p className="question"> The faculty-in-charge is always ready with their lesson plans. </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="1answer1" onChange={(e) => onValueChange(e, 0)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="1answer1" onChange={(e) => onValueChange(e, 0)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="1answer1"  onChange={(e) => onValueChange(e, 0)}/> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="1answer1" onChange={(e) => onValueChange(e, 0)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="1answer1" onChange={(e) => onValueChange(e, 0)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge always discusses the objectives of every lesson. </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="1answer2" onChange={(e) => onValueChange(e, 1)} /> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="1answer2" onChange={(e) => onValueChange(e, 1)} /> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="1answer2" onChange={(e) => onValueChange(e, 1)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="1answer2" onChange={(e) => onValueChange(e, 1)} /> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="1answer2" onChange={(e) => onValueChange(e, 1)} /> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question">The faculty-in-charge clearly discussed the course curriculum at the beginning of classes.</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="1answer3" onChange={(e) => onValueChange(e, 2)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="1answer3" onChange={(e) => onValueChange(e, 2)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="1answer3" onChange={(e) => onValueChange(e, 2)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="1answer3" onChange={(e) => onValueChange(e, 2)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="1answer3" onChange={(e) => onValueChange(e, 2)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge always provides the course materials and/or handouts for each lesson. </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="1answer4" onChange={(e) => onValueChange(e, 3)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="1answer4" onChange={(e) => onValueChange(e, 3)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="1answer4" onChange={(e) => onValueChange(e, 3)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="1answer4" onChange={(e) => onValueChange(e, 3)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="1answer4" onChange={(e) => onValueChange(e, 3)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge knows what they were discussing.</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="1answer5" onChange={(e) => onValueChange(e, 4)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="1answer5" onChange={(e) => onValueChange(e, 4)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="1answer5" onChange={(e) => onValueChange(e, 4)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="1answer5" onChange={(e) => onValueChange(e, 4)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="1answer5" onChange={(e) => onValueChange(e, 4)}/> 5 </label>
                        </div>
                    </div>
                </div>

                <div className={showPart===2 ? "category":"categoryHide"}>
                    <div className="formCard">
                        <p className="question"> The faculty-in-charge is always available during consultation hours </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="2answer1" onChange={(e) => onValueChange(e, 5)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="2answer1" onChange={(e) => onValueChange(e, 5)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="2answer1" onChange={(e) => onValueChange(e, 5)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="2answer1" onChange={(e) => onValueChange(e, 5)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="2answer1" onChange={(e) => onValueChange(e, 5)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge always acknowledges their students’ skills and abilities</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="2answer2" onChange={(e) => onValueChange(e, 6)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="2answer2" onChange={(e) => onValueChange(e, 6)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="2answer2" onChange={(e) => onValueChange(e, 6)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="2answer2" onChange={(e) => onValueChange(e, 6)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="2answer2" onChange={(e) => onValueChange(e, 6)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge always encourages their students to share their ideas in class</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="2answer3" onChange={(e) => onValueChange(e, 7)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="2answer3" onChange={(e) => onValueChange(e, 7)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="2answer3" onChange={(e) => onValueChange(e, 7)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="2answer3" onChange={(e) => onValueChange(e, 7)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="2answer3" onChange={(e) => onValueChange(e, 7)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge provides appropriate feedback about my outputs and performance</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="2answer4" onChange={(e) => onValueChange(e, 8)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="2answer4" onChange={(e) => onValueChange(e, 8)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="2answer4" onChange={(e) => onValueChange(e, 8)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="2answer4" onChange={(e) => onValueChange(e, 8)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="2answer4" onChange={(e) => onValueChange(e, 8)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge always prioritizes their students’ welfare </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="2answer5" onChange={(e) => onValueChange(e, 9)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="2answer5" onChange={(e) => onValueChange(e, 9)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="2answer5" onChange={(e) => onValueChange(e, 9)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="2answer5" onChange={(e) => onValueChange(e, 9)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="2answer5" onChange={(e) => onValueChange(e, 9)}/> 5 </label>
                        </div>
                    </div>
                </div>

                <div className={showPart===3 ? "category":"categoryHide"}>
                    <div className="formCard">
                        <p className="question"> The faculty-in-charge starts the classes on time. </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="3answer1" onChange={(e) => onValueChange(e, 10)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="3answer1" onChange={(e) => onValueChange(e, 10)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="3answer1" onChange={(e) => onValueChange(e, 10)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="3answer1" onChange={(e) => onValueChange(e, 10)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="3answer1" onChange={(e) => onValueChange(e, 10)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge ends the classes on time</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="3answer2" onChange={(e) => onValueChange(e, 11)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="3answer2" onChange={(e) => onValueChange(e, 11)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="3answer2" onChange={(e) => onValueChange(e, 11)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="3answer2" onChange={(e) => onValueChange(e, 11)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="3answer2" onChange={(e) => onValueChange(e, 11)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge responds to the students’ queries on time </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="3answer3" onChange={(e) => onValueChange(e, 12)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="3answer3" onChange={(e) => onValueChange(e, 12)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="3answer3" onChange={(e) => onValueChange(e, 12)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="3answer3" onChange={(e) => onValueChange(e, 12)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="3answer3" onChange={(e) => onValueChange(e, 12)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge uses the time effectively and meaningfully</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="3answer4" onChange={(e) => onValueChange(e, 13)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="3answer4" onChange={(e) => onValueChange(e, 13)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="3answer4" onChange={(e) => onValueChange(e, 13)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="3answer4" onChange={(e) => onValueChange(e, 13)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="3answer4" onChange={(e) => onValueChange(e, 13)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The faculty-in-charge does not use the time for personal interests </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="3answer5" onChange={(e) => onValueChange(e, 14)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="3answer5" onChange={(e) => onValueChange(e, 14)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="3answer5" onChange={(e) => onValueChange(e, 14)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="3answer5" onChange={(e) => onValueChange(e, 14)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="3answer5" onChange={(e) => onValueChange(e, 14)}/> 5 </label>
                        </div>
                    </div>
                </div>
            
                <div className={showPart===4 ? "category":"categoryHide"}>
                    <div className="formCard">
                        <p className="question"> Instructions are organized and easy to understand. </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="4answer1" onChange={(e) => onValueChange(e, 15)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="4answer1" onChange={(e) => onValueChange(e, 15)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="4answer1" onChange={(e) => onValueChange(e, 15)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="4answer1" onChange={(e) => onValueChange(e, 15)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="4answer1" onChange={(e) => onValueChange(e, 15)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The goal of each requirement is clearly discussed </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="4answer2" onChange={(e) => onValueChange(e, 16)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="4answer2" onChange={(e) => onValueChange(e, 16)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="4answer2" onChange={(e) => onValueChange(e, 16)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="4answer2" onChange={(e) => onValueChange(e, 16)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="4answer2" onChange={(e) => onValueChange(e, 16)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The requirements are relevant and useful </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="4answer3" onChange={(e) => onValueChange(e, 17)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="4answer3" onChange={(e) => onValueChange(e, 17)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="4answer3" onChange={(e) => onValueChange(e, 17)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="4answer3" onChange={(e) => onValueChange(e, 17)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="4answer3" onChange={(e) => onValueChange(e, 17)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The deadlines of the requirements are just</p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="4answer4" onChange={(e) => onValueChange(e, 18)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="4answer4" onChange={(e) => onValueChange(e, 18)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="4answer4" onChange={(e) => onValueChange(e, 18)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="4answer4" onChange={(e) => onValueChange(e, 18)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="4answer4" onChange={(e) => onValueChange(e, 18)}/> 5 </label>
                        </div>
                    </div>

                    <div className="formCard">
                        <p className="question"> The grading system is appropriate </p>
                        <div className="answers">
                            <label className="answer"> <input type="radio" value="1" name="4answer5" onChange={(e) => onValueChange(e, 19)}/> 1 </label>
                            <label className="answer"> <input type="radio" value="2" name="4answer5" onChange={(e) => onValueChange(e, 19)}/> 2 </label>
                            <label className="answer"> <input type="radio" value="3" name="4answer5" onChange={(e) => onValueChange(e, 19)} /> 3 </label>
                            <label className="answer"> <input type="radio" value="4" name="4answer5" onChange={(e) => onValueChange(e, 19)}/> 4 </label>
                            <label className="answer"> <input type="radio" value="5" name="4answer5" onChange={(e) => onValueChange(e, 19)}/> 5 </label>
                        </div>
                    </div>
                </div>
            </center>
                <button className="goHomeBtn" onClick={() => {
                    setShowGoHomeModal(true)
                }}>
                Back To Home 
                </button>

                <button className="submitBtn" onClick={() => {
                    console.log(rate)
                    if(rate.includes(-1)) {
                        console.log("There is a radio button left unchecked")
                        setShowMissingModal(true)
                    } else {
                        setShowModal(true)
                    }
                }}>
                Submit 
                </button>


            </div>
            <ConfirmModal onClose={()=> setShowModal(false)} show={showModal} id={currentProf.id} type={currentProf.type}></ConfirmModal>
            <MissingModal onClose={()=>setShowMissingModal(false)} show={showMissingModal} />
            <GoHomeModal onClose={()=>setShowGoHomeModal(false)} show={showGoHomeModal}/>
        </div>
        </div>
    )
}