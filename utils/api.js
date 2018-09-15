export const fetchMeetups = () => 
    fetch('https://c1dc75a0.ngrok.io/api/meetups')
        .then(res => res.json())

