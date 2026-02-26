import { personsData } from "./personsData";

function PersonDetails(){

    const calculateAge = (dob) =>{
        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDifference = today.getMonth() - birthDate.getMonth();

        // if birthday hasn't occured yet
        if(
            monthDifference < 0 || (monthDifference === 0 && today.getDate()< birthDate.getDate())
        ){
            age--;
        }

        return age;
    }
    return(
        <div>
            <h2>Person Details</h2>

            {personsData.map((person, index) => (
                <div key={index} style={{ marginBottom:'10px'}}>
                    <p><strong>Name:</strong> {person.name}</p>
                    <p><strong>Date of Birth:</strong> {person.dateOfBirth}</p>
                    <p><strong>Age:</strong> {calculateAge(person.dateOfBirth)} years</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default PersonDetails;