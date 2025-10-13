
const Channel = () => {

    return(
        <div className='channel-icon'>
            <img src={high.url}/>
            <div className='channel-icon-content'>
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

export default Channel;