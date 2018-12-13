export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:"Black Panter"},
            {id:2,name:"Avengers"},
            {id:3, name:"Pacific Rim"}
        ]
    }
}

export function artistList(){
    let data = {results:[
        {id:1,name:"Jimi hendrix"},
        {id:2,name:"Avengers"},
        {id:3, name:"Pacific Rim"}
    ]}
    return{
        type:'ARTIST_LIST',
        payload:data
    }
}