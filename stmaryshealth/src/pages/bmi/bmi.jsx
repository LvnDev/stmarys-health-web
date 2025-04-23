import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { InputNumber } from 'antd';
import './bmi.css';

function bmi() {
    const [weight, setWeight] = useState(""); // weight
    const [height, setHeight] = useState(""); // height
    const [bmi, setBmi] = useState(null); //calculate weight * height2
    const [cat, setCat] = useState(""); //under, normal, over weight


    const CalculateBMI = () => {
        if (!height || !weight) return;

        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2)); // puts it in to 2 decimals

        if (bmiValue < 18.5) setCat("Underweight");
        else if (bmiValue < 24.9) setCat("Normal Weight");
        else if (bmiValue < 29.9) setCat("Overweight");
        else setCat("Obese");

    }
    return (
        <div id="bmi-main">
            <h1>BMI calculator</h1>
            <hr />
            <div id="bmi-secondary">
                <p>The Body Mass Index (BMI)
                    is a calculation that uses a person's
                    height and weight to estimate body fat.
                    While it's commonly used,
                    it has significant limitations:</p>
                <ul>
                    <li>It doesn't account for muscle mass.
                        Athletes with high muscle mass may
                        be classified as "overweight" or
                        "obese" despite having very little
                        body fat.
                    </li>

                    <li>It's not accurate for everyone:
                        BMI was developed using data
                        from primarily white, European
                        males, and may not be accurate
                        for people of different ethnicities
                        or age groups.
                    </li>
                </ul>
                <div id='bmic'>
                    <form>
                        <input
                            type="number"
                            placeholder="Height (cm)"
                            min={152}
                            max={213}
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        /> &nbsp; &nbsp;
                        <input
                            type="number"
                            placeholder="Weight (kg)"
                            value={weight}
                            min={20}
                            max={200}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        &nbsp; &nbsp;
                        <Button
                            variant="outline-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                CalculateBMI();
                            }}
                        >
                            Submit
                        </Button>

                        <br />
                        {bmi && (
                            <div className="mt-4 text-center">
                                <p className="text-xl">Your BMI is: <strong>{bmi}</strong></p>
                                <p className="text-lg">Category: <strong>{cat}</strong></p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default bmi;