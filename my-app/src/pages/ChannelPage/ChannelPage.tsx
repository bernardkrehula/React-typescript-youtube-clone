import './ChannelPage.css'

const ChannelPage = () => {

    return(
        <div className="channel-page">
            <img className='banner' src="https://yt3.googleusercontent.com/5KWiriZZ_KEoEdSMFTJKj2M6vR_XSiRZeQ-ix0cvG3TGZuGoi8sfAjrSiZAP0GzXBkmF8ZGytw=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>
            <div className="channel-logo">
                <img src="https://yt3.googleusercontent.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s900-c-k-c0x00ffffff-no-rj"/>
                <div className='channel-content'>
                    <h2>Ozbiljne Teme</h2>
                    <div className='channel-data'>
                        <h3>@Ozbiljne Teme</h3>
                        <h4>• 581 tis. pretplatnika</h4>
                        <h4>• 338 videozapisa</h4>
                    </div>
                    <h4 className='channel-paragraph'>Istorija, geografija i kritike društva na zabavan način!</h4>
                </div>
            </div>
        </div>
    )
}

export default ChannelPage;