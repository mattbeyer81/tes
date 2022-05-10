import { useState } from "react"


const UniversityCard = ({university, closeModal}) => {
    const {name, web_pages, country} = university;
    const [writeReview, setWriteReview] = useState(false);

    const handleReview = () => {
        setWriteReview(!writeReview);
    }

    return (
        <div className="university-card">
            <span className="close-button" onClick={() => closeModal()}>X</span>
            <p>
                <b>{name}</b>
            </p>
            <p>Country: {country}</p>
            <p>Website: {web_pages}</p>
            {!writeReview &&
            <button onClick={() => handleReview()}>Write a review</button>}
            {writeReview && 
            <div>
                <textarea type="text" placeholder="Write a review..." className="write-review"/>
                <div className="review-buttons">
                    <button className="cancel-button" onClick={() => handleReview()}>Cancel</button>
                    <button>Submit</button>
                </div>
            </div>
            }
        </div>
    )
}

export default UniversityCard