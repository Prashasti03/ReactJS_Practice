import './Cards.css'

function Cards(props){    // here props is an object
    // here props is an object
    // imgsrc, title, channel, and vlink are keys/properties of props object
    // value of these keys will come from the user through App.jsx as parameters
    // user don't know that Cards.jsx exist, they see it as an element, just like we see <img> as an html tag, and don't know how it works internally
    // NOTE - key values here should be same as parameter names given in App.jsx, otherwise program will not work
    // here we are retriving the key values (entered by user in App.jsx) using standard object value retriving syntax, i.e., objName.keyName, e.g. props.imgsrc
    // this Card we are exporting to App.jsx, there the actual values stored by user will replace these value calling syntax
    // from there the App component will get exported to main.jsx
    // from there it go to index.html, and from there, it will be displayed on browser
    // final flow - Card.jsx -> App.jsx -> main.jsx -> index.html -> displayed on browser 
    // e.g. of how data will get stored in props object⬇️

    // var props={
    //     imgsrc: 'Smart Way to Get a Job.png',
    //     vlivk: 'https://youtu.be/IFwdOawuu6E?si=78hdl7IhRUNZwocw',
    //     channel: 'ITVedant',
    //     title: 'Smart Way to Get a Job'
    // }

    return(
        <>
            <div className='card'>
                <img src={props.imgsrc} height='150px' width='300px'></img>
                <h5>{props.title}</h5>
                <h6>{props.channel}</h6>
                <a href={props.vlink}><button className='btn'>Link</button></a>
            </div>
        </>
    )
}

export default Cards;