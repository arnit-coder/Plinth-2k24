import React from "react";
import "./accomodation.css";
import { useNavigate } from "react-router-dom";

function Accomodation() {
const navigate = useNavigate()
const navigateComp = () =>{
    navigate("/competitions")
}
    return (
        <div className="acx">
            <h1>ACCOMODATION</h1>
            <p>Plinth, a tech-driven event, offers accommodation passes and Pronite Passes to blend technology with an enjoyable atmosphere.
                The event aims to attract a large crowd and provides secure, comfortable accommodations. The organizers also offer a diverse cafeteria with various cuisines.
                Accommodation charges are INR 999 per candidate for 3 days (19th Jan 7 AM - 21th Jan 10 AM) and INR 400 for a single day, with a maximum of 3 nights allowed.
                Food is not included, but guests can purchase meals at subsidized rates.</p>
            <p className="p1">Timings.</p>
            <p><ul><li>Check-in: 7:00 AM to 10:00 PM on your check-in date</li><br></br>
                <li>Check-out: Anytime on or before your check-out date</li></ul></p>
            <p className="p1">Instructions.</p>
            <p><ul><li>All guests carrying electronic items of any kind will have to declare them at the LNMIIT Jaipur main gate through a ‘Gate Pass’. The belongings will also be checked on the way out of LNMIIT Jaipur along with the ‘Gate Pass’, failing to do so will result in the belongings being impounded.</li>
                <li>All guests will be provided with mattresses and a blanket. Plinth will not provide a mattress cover or pillows and subsequently, are encouraged to arrange them independently (if required).</li>
                <li>Any commodities issued to the guests would have to be returned in sound condition to the organizers during check-out.</li>
                <li>Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their electronic/physical receipts of accommodation would be heavily fined and disqualified.</li>
                <li>Entry will be only through the 'Main Gate' of LNMIIT Jaipur. All other gates will be closed for entry.</li>
                <li>All guests are required to carry their valid government photo id proofs at all times. In addition, the student participants are also required to carry their valid College photo id card. Any guest failing to produce their id card will not be permitted inside the campus during Plinth 2024.</li>
                <li>Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus and items deemed unsafe, will be prohibited  . The decision of the Security and Plinth team will be final in any dispute.</li>
                <li>No outside vehicles will be allowed into the campus during the Plinth 2024.</li>
                <li>All the guests are required to maintain the decorum and cleanliness of the campus and follow the rules of the campus.</li>
                <li>Plinth 2024 and LNMIIT will not be responsible for any mishaps that occur throughout the duration of stay for Plinth 2024.</li>
            </ul></p>
            <p className="p1">Cancellation Policy.</p>
            <p>There shall be no refunds for cancellation once the registration process has been completed.
                <br></br>Hence, careful review of the schedule is appreciated.
            </p>
            <p></p>
        {/*chk */}
        <div style={{marginTop:"10%",textAlign:"center"}}>
        <input type="checkbox" name="option-1" id="option-1" /> <label for="option-1">I hereby agree to abide by the terms and conditions as provided.</label>
    </div>
    
    <div style={{marginTop:"1%",textAlign:"center"}} className="button-63">
        <input className="xx" type="submit" value="Submit" onClick={navigateComp}/> 
    </div>
        </div>

        
    );
}

export default Accomodation;