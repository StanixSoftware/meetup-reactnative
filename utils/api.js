export const fetchMeetups = () => 
    fetch('http://localhost:5000/api/meetups')
        .then(res => res.json())

