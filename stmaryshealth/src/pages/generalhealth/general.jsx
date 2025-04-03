import Accordion from 'react-bootstrap/Accordion';
import './general.css';
function general() {
    return (
        <div>
            <div id='gen'>
                <h1>General health</h1>
                <p>Common illnesses are frequent health problems, 
                    ranging from short infections like colds to long-term 
                    conditions like allergies or diabetes, 
                    affecting many people and impacting daily life.</p>
            </div>
            <br />
            <h3>list of common colds</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Common Cold</Accordion.Header>
                    <Accordion.Body>
                        <span id='h'>Description</span> <br />A viral infection of the upper respiratory tract,
                        causing symptoms like a runny nose, sore throat,
                        cough, and congestion.
                        <br />
                        <span id='h'>Advice</span>
                        <br />
                        <ul>
                            <li>Rest: Get plenty of sleep to
                                help your body fight the virus.</li>
                            <li>Hydration: Drink plenty of fluids,
                                such as water, clear broths, and herbal tea.</li>
                            <li>Symptom relief: Over-the-counter pain relievers can help reduce fever
                                and aches. Saline nasal drops or sprays
                                can relieve congestion.</li>
                            <li>Avoid close contact with others
                                to prevent spreading the virus.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Influenza (Flu)</Accordion.Header>
                    <Accordion.Body>
                        <span id='h'>Description</span>
                        <br />
                        A contagious respiratory illness caused by influenza
                        viruses. Symptoms are similar to a cold but
                        often more severe, including fever, chills, body
                        aches, and fatigue. <br />
                        <span id='h'>Advice</span>
                        <ul>
                            <li>Rest: Similar to a cold, rest is crucial.</li>
                            <li>Hydration: Drink plenty of fluids.</li>
                            <li>Antiviral medication: In some cases, a doctor may
                                prescribe antiviral medication to shorten the
                                duration of the illness.</li>
                            <li>See a doctor: If symptoms are severe or persist,
                                seek medical attention.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Allergies</Accordion.Header>
                    <Accordion.Body>
                        <span id='h'>Description</span>
                        <br />
                        An immune system response to foreign substances (allergens)
                        such as pollen, pet dander, or dust mites.
                        Symptoms can include sneezing, runny nose, itchy eyes,
                        and skin rashes. <br />
                        <span id='h'>Advice</span>
                        <ul>
                            <li>Identify and avoid allergens: If possible,
                                determine what triggers your allergies and avoid exposure.</li>
                            <li>Over-the-counter antihistamines: These can help relieve allergy symptoms.</li>
                            <li>Nasal corticosteroids:
                                Nasal sprays can reduce inflammation in the nasal passages.</li>
                            <li>Consult with a doctor,
                                especially an allergist, for proper
                                testing, and treatment.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Headaches</Accordion.Header>
                    <Accordion.Body>
                        <span id='h'>Description</span>
                        <br />
                        Pain in the head that can range from mild to severe.
                        There are many types of headaches,
                        including tension headaches, migraines,
                        and cluster headaches. <br />
                        <span id='h'>Advice</span>
                        <ul>
                            <li>Over-the-counter pain relievers: Such as ibuprofen or acetaminophen,
                                can help relieve mild headaches.</li>
                            <li>Rest: In a quiet, dark room.</li>
                            <li>Hydration: Dehydration can trigger headaches,
                                so drink plenty of water.</li>
                            <li>If headaches are severe, frequent, or accompanied by other symptoms,
                                see a doctor.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Gastroenteritis (Stomach Flu)</Accordion.Header>
                    <Accordion.Body>
                        <span id='h'>Description</span>
                        <br />
                        Inflammation of the stomach and intestines,
                        often caused by a viral or bacterial infection.
                        Symptoms include nausea, vomiting,
                        diarrhea, and abdominal cramps. <br />
                        <span id='h'>Advice</span>
                        <ul>
                            <li>Hydration: Drink plenty of clear fluids,
                                such as water, clear broths,
                                or electrolyte solutions, to prevent
                                dehydration.</li>
                            <li>Rest: Allow your stomach to settle.</li>
                            <li>Bland diet: When you start to feel better,
                                eat bland foods, such as crackers or toast.</li>
                            <li>If symptoms are severe or persist,
                                or if you experience signs of dehydration,
                                seek medical attention.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default general;