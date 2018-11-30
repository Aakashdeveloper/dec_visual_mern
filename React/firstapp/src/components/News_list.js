import React from 'react';

const NewsList = (props) => {
    console.log(props)

    const printNews = props.sendNews.map((data) => {
        return(
            <div key={data.id}>
                <h2>{data.title}</h2>
                <h3>{data.feed}</h3>
            </div>
        )
    })

    return(
        <div>
            {printNews}
        </div>
    )
}

export default NewsList;